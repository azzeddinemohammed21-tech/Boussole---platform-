"use client";

import { useState } from "react";
import Link from "next/link";
import { questions, categories, likertOptions } from "@/data/assessment-questions";
import { strengthAdvice, growthAdvice } from "@/data/assessment-advice";
import { matchingProfiles } from "@/data/matching-recommendations";
import { academyResources } from "@/data/academy-resources";
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
        <Link href="/" className="font-display text-lg font-extrabold text-ink">
          بوصلة<span className="text-brass">+</span>
        </Link>

        <h1 className="mt-8 font-display text-3xl font-bold text-ink">
          تقرير اكتشاف الكفاءات
        </h1>
        <p className="mt-2 text-sm text-ink/60">
          هذا التقرير أداة توجيه ذاتي مبنية على إجاباتك، وليس تشخيصًا علميًا
          دقيقًا. استخدمه كنقطة انطلاق للتفكير، لا كحكم نهائي على قدراتك.
        </p>

        <div className="mt-10 space-y-5">
          {sorted.map((r) => (
            <div key={r.categoryId}>
              <div className="mb-1 flex items-center justify-between text-sm">
                <span className="text-ink">{nameOf(r.categoryId)}</span>
                <span className="text-brass-dark">{r.percentage}%</span>
              </div>
              <div className="h-3 w-full overflow-hidden rounded-full bg-ink/10">
                <div
                  className="h-full rounded-full bg-brass"
                  style={{ width: `${r.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-ink/10 bg-white/60 p-6">
          <h2 className="font-display text-xl font-bold text-ink">أبرز نقاط قوتك</h2>
          {strengths.map((s) => (
            <div key={s.categoryId} className="mt-4">
              <h3 className="font-semibold text-brass-dark">{nameOf(s.categoryId)}</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink/70">
                {strengthAdvice[s.categoryId]}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-ink/10 bg-white/60 p-6">
          <h2 className="font-display text-xl font-bold text-ink">مجال للتطوير</h2>
          <div className="mt-4">
            <h3 className="font-semibold text-brass-dark">{nameOf(growthArea.categoryId)}</h3>
            <p className="mt-1 text-sm leading-relaxed text-ink/70">
              {growthAdvice[growthArea.categoryId]}
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-ink/10 bg-white/60 p-6">
          <h2 className="font-display text-xl font-bold text-ink">الفرص المطابقة لملفك</h2>
          <p className="mt-1 text-sm text-ink/60">
            أدوار ومهارات تتناسب مع أبرز نقاط قوتك، كنقطة انطلاق للبحث والتطوير — وليست وظائف أو دورات فعلية معروضة.
          </p>
          {strengths.map((s) => {
            const profile = matchingProfiles[s.categoryId];
            return (
              <div key={s.categoryId} className="mt-6">
                <h3 className="font-semibold text-brass-dark">{nameOf(s.categoryId)}</h3>
                <div className="mt-3">
                  <p className="text-xs font-semibold text-ink/50">أنواع أدوار مناسبة</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {profile.roles.map((role) => (
                      <span
                        key={role}
                        className="rounded-full bg-indigo/10 px-3 py-1 text-xs text-ink"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-xs font-semibold text-ink/50">مهارات يُنصح بتطويرها</p>
                  <ul className="mt-2 space-y-1 text-sm text-ink/70">
                    {profile.skills.map((skill) => (
                      <li key={skill}>• {skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 rounded-2xl border border-ink/10 bg-white/60 p-6">
          <h2 className="font-display text-xl font-bold text-ink">دورات مقترحة لك</h2>
          <p className="mt-1 text-sm text-ink/60">
            روابط بحث حية بمنصات تعليمية موثوقة، لتطوير محور "{nameOf(growthArea.categoryId)}" تحديدًا.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {academyResources[growthArea.categoryId].map((res) => (
              <a
                key={res.url}
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-brass px-4 py-2 text-xs font-semibold text-brass-dark transition hover:bg-brass hover:text-ink"
              >
                {res.platform} — {res.label}
              </a>
            ))}
          </div>
        </div>

        <button
          onClick={restart}
          className="mt-10 rounded-full border border-brass px-6 py-3 text-sm font-semibold text-brass-dark transition hover:bg-brass hover:text-ink"
        >
          إعادة الاختبار
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-16 text-right" dir="rtl">
      <Link href="/" className="font-display text-lg font-extrabold text-ink">
        بوصلة<span className="text-brass">+</span>
      </Link>

      <div className="mt-8 mb-8">
        <div className="mb-2 flex justify-between text-xs text-ink/60">
          <span>السؤال {step + 1} من {questions.length}</span>
          <span>{progress}%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-ink/10">
          <div
            className="h-full rounded-full bg-brass transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <h2 className="font-display text-xl font-semibold text-ink leading-relaxed">
        {current.text}
      </h2>

      <div className="mt-8 space-y-3">
        {likertOptions.map((opt) => {
          const selected = answers[current.id] === opt.value;
          return (
            <button
              key={opt.value}
              onClick={() => selectAnswer(opt.value)}
              className={`w-full rounded-full border px-5 py-3 text-right text-sm transition-colors ${
                selected
                  ? "border-brass bg-brass/10 text-ink"
                  : "border-ink/15 text-ink/70 hover:border-brass/50"
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
          className="rounded-full px-5 py-2 text-sm text-ink/60 disabled:opacity-30"
        >
          السابق
        </button>
        <button
          onClick={goNext}
          disabled={!isAnswered}
          className="rounded-full bg-indigo px-6 py-2 text-sm font-semibold text-sand transition hover:bg-indigo-light disabled:opacity-30"
        >
          {step === questions.length - 1 ? "عرض النتيجة" : "التالي"}
        </button>
      </div>
    </div>
  );
        }
