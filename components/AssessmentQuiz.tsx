"use client";

import { useState } from "react";
import { questions, categories, likertOptions } from "@/data/assessment-questions";
import { strengthAdvice, growthAdvice } from "@/data/assessment-advice";
import { CategoryId, CategoryResult } from "@/types/assessment";

type Answers = Record<string, number>;

function scoreFor(rawValue: number, reverse?: boolean): number {
  return reverse ? 6 - rawValue : rawValue;
}

function computeResults(answers: Answers): CategoryResult[] {
  return categories.map((cat) => {
    const catQuestions = questions.filter((q) => q.categoryId === cat.id);
    const score = catQuestions.reduce((sum, q) => {
      const raw = answers[q.id] ?? 0;
      return sum + scoreFor(raw, q.reverse);
    }, 0);
    const maxScore = catQuestions.length * 5;
    const percentage = Math.round((score / maxScore) * 100);
    return { categoryId: cat.id, score, maxScore, percentage };
  });
}

export default function AssessmentQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [showResults, setShowResults] = useState(false);

  const current = questions[step];
  const progress = Math.round((step / questions.length) * 100);
  const isAnswered = current ? answers[current.id] !== undefined : false;

  function selectAnswer(value: number) {
    setAnswers((prev) => ({ ...prev, [current.id]: value }));
  }

  function goNext() {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setShowResults(true);
    }
  }

  function goPrev() {
    if (step > 0) setStep(step - 1);
  }

  function restart() {
    setAnswers({});
    setStep(0);
    setShowResults(false);
  }

  if (showResults) {
    const results = computeResults(answers);
    const sorted = [...results].sort((a, b) => b.percentage - a.percentage);
    const strengths = sorted.slice(0, 2);
    const growthArea = sorted[sorted.length - 1];

    const nameOf = (id: CategoryId) =>
      categories.find((c) => c.id === id)?.name ?? id;

    return (
      <div className="mx-auto max-w-2xl px-6 py-16 text-right" dir="rtl">
        <h1 className="text-3xl font-bold text-white">تقرير اكتشاف الكفاءات</h1>
        <p className="mt-2 text-sm text-gray-400">
          هذا التقرير أداة توجيه ذاتي مبنية على إجاباتك، وليس تشخيصًا علميًا
          دقيقًا. استخدمه كنقطة انطلاق للتفكير، لا كحكم نهائي على قدراتك.
        </p>

        <div className="mt-10 space-y-5">
          {sorted.map((r) => (
            <div key={r.categoryId}>
              <div className="mb-1 flex items-center justify-between text-sm">
                <span className="text-white">{nameOf(r.categoryId)}</span>
                <span className="text-[#b08d57]">{r.percentage}%</span>
              </div>
              <div className="h-3 w-full overflow-hidden rounded-full bg-[#1a2744]">
                <div
                  className="h-full rounded-full bg-[#b08d57]"
                  style={{ width: `${r.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-[#1a2744] bg-[#0f1a2e] p-6">
          <h2 className="text-xl font-bold text-white">أبرز نقاط قوتك</h2>
          {strengths.map((s) => (
            <div key={s.categoryId} className="mt-4">
              <h3 className="font-semibold text-[#b08d57]">{nameOf(s.categoryId)}</h3>
              <p className="mt-1 text-sm leading-relaxed text-gray-300">
                {strengthAdvice[s.categoryId]}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-xl border border-[#1a2744] bg-[#0f1a2e] p-6">
          <h2 className="text-xl font-bold text-white">مجال للتطوير</h2>
          <div className="mt-4">
            <h3 className="font-semibold text-[#b08d57]">{nameOf(growthArea.categoryId)}</h3>
            <p className="mt-1 text-sm leading-relaxed text-gray-300">
              {growthAdvice[growthArea.categoryId]}
            </p>
          </div>
        </div>

        <button
          onClick={restart}
          className="mt-10 rounded-lg border border-[#b08d57] px-6 py-3 text-sm font-semibold text-[#b08d57] transition-colors hover:bg-[#b08d57] hover:text-[#0f1a2e]"
        >
          إعادة الاختبار
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-16 text-right" dir="rtl">
      <div className="mb-8">
        <div className="mb-2 flex justify-between text-xs text-gray-400">
          <span>السؤال {step + 1} من {questions.length}</span>
          <span>{progress}%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-[#1a2744]">
          <div
            className="h-full rounded-full bg-[#b08d57] transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <h2 className="text-xl font-semibold text-white leading-relaxed">
        {current.text}
      </h2>

      <div className="mt-8 space-y-3">
        {likertOptions.map((opt) => {
          const selected = answers[current.id] === opt.value;
          return (
            <button
              key={opt.value}
              onClick={() => selectAnswer(opt.value)}
              className={`w-full rounded-lg border px-5 py-3 text-right text-sm transition-colors ${
                selected
                  ? "border-[#b08d57] bg-[#b08d57]/10 text-white"
                  : "border-[#1a2744] text-gray-300 hover:border-[#b08d57]/50"
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>

      <div className="mt-10 flex justify-between">
        <button
          onClick={goPrev}
          disabled={step === 0}
          className="rounded-lg px-5 py-2 text-sm text-gray-400 disabled:opacity-30"
        >
          السابق
        </button>
        <button
          onClick={goNext}
          disabled={!isAnswered}
          className="rounded-lg bg-[#b08d57] px-6 py-2 text-sm font-semibold text-[#0f1a2e] disabled:opacity-30"
        >
          {step === questions.length - 1 ? "عرض النتيجة" : "التالي"}
        </button>
      </div>
    </div>
  );
}
