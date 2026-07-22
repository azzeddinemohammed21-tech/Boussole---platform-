"use client";

import { useState } from "react";
import Link from "next/link";
import { bciDimensions, getBCILevel } from "@/data/bci-dimensions";

type Scores = Record<string, number>;

function initialScores(): Scores {
  const s: Scores = {};
  bciDimensions.forEach((d) => (s[d.id] = 5));
  return s;
}

export default function BCICalculator() {
  const [scores, setScores] = useState<Scores>(initialScores());
  const [showResult, setShowResult] = useState(false);

  function updateScore(id: string, value: number) {
    setScores((prev) => ({ ...prev, [id]: value }));
  }

  const bciTotal = bciDimensions.reduce((sum, d) => {
    return sum + (scores[d.id] / 10) * d.weight;
  }, 0);

  const level = getBCILevel(bciTotal);

  if (showResult) {
    const sortedDims = [...bciDimensions].sort(
      (a, b) => scores[b.id] - scores[a.id]
    );

    return (
      <div className="mx-auto max-w-2xl px-6 py-16 text-right" dir="rtl">
        <Link href="/" className="font-display text-lg font-extrabold text-ink">
          بوصلة<span className="text-brass">+</span>
        </Link>

        <h1 className="mt-8 font-display text-3xl font-bold text-ink">
          نتيجة مؤشر الكفاءة (BCI)
        </h1>
        <p className="mt-2 text-sm text-ink/60">
          هذا المؤشر أداة توجيه ذاتي مبنية على تقييمك الشخصي، وليس اختبارًا
          معياريًا موثّقًا علميًا.
        </p>

        <div className="mt-10 rounded-2xl border border-brass/30 bg-brass/10 p-8 text-center">
          <p className="text-sm text-ink/60">مؤشر الكفاءة الإجمالي</p>
          <p className="mt-2 font-display text-5xl font-extrabold text-ink">
            {bciTotal.toFixed(1)}
            <span className="text-2xl text-ink/50"> / 100</span>
          </p>
          <p className="mt-3 font-display text-xl font-bold text-brass-dark">
            {level.label}
          </p>
          <p className="mt-2 text-sm text-ink/70">{level.desc}</p>
        </div>

        <div className="mt-10 space-y-4">
          {sortedDims.map((d) => (
            <div key={d.id}>
              <div className="mb-1 flex items-center justify-between text-sm">
                <span className="text-ink">{d.name}</span>
                <span className="text-brass-dark">{scores[d.id]} / 10</span>
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-ink/10">
                <div
                  className="h-full rounded-full bg-brass"
                  style={{ width: `${(scores[d.id] / 10) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => setShowResult(false)}
          className="mt-10 rounded-full border border-brass px-6 py-3 text-sm font-semibold text-brass-dark transition hover:bg-brass hover:text-ink"
        >
          تعديل التقييم
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-16 text-right" dir="rtl">
      <Link href="/" className="font-display text-lg font-extrabold text-ink">
        بوصلة<span className="text-brass">+</span>
      </Link>

      <h1 className="mt-8 font-display text-3xl font-bold text-ink">
        حاسبة مؤشر الكفاءة (BCI)
      </h1>
      <p className="mt-2 text-sm text-ink/60">
        قيّم نفسك على كل بُعد من 0 إلى 10 بناءً على إدراكك الحالي، ثم احصل
        على مؤشرك الإجمالي.
      </p>

      <div className="mt-10 space-y-8">
        {bciDimensions.map((d) => (
          <div key={d.id}>
            <div className="flex items-center justify-between">
              <label className="font-semibold text-ink">{d.name}</label>
              <span className="text-sm text-brass-dark">{scores[d.id]}</span>
            </div>
            <p className="mt-1 text-xs text-ink/60">{d.desc}</p>
            <input
              type="range"
              min={0}
              max={10}
              step={0.5}
              value={scores[d.id]}
              onChange={(e) => updateScore(d.id, Number(e.target.value))}
              className="mt-3 w-full accent-brass"
            />
          </div>
        ))}
      </div>

      <button
        onClick={() => setShowResult(true)}
        className="mt-10 rounded-full bg-indigo px-7 py-3 text-sm font-semibold text-sand transition hover:bg-indigo-light"
      >
        احسب مؤشر الكفاءة
      </button>
    </div>
  );
        }
