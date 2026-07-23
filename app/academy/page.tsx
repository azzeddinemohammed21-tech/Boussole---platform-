import Link from "next/link";
import { categories } from "@/data/assessment-questions";
import { academyResources } from "@/data/academy-resources";

export const metadata = {
  title: "أكاديمية بوصلة+",
  description: "دورات مقترحة لكل محور من محاور الكفاءة الستة",
};

export default function AcademyPage() {
  return (
    <main className="min-h-screen bg-sand px-6 py-16" dir="rtl">
      <div className="mx-auto max-w-4xl text-right">
        <Link href="/" className="font-display text-lg font-extrabold text-ink">
          بوصلة<span className="text-brass">+</span>
        </Link>

        <h1 className="mt-8 font-display text-3xl font-bold text-ink md:text-4xl">
          أكاديمية بوصلة+
        </h1>
        <p className="mt-3 max-w-2xl text-ink/70">
          دورات مقترحة لكل محور كفاءة. إذا أنجزت{" "}
          <Link href="/assessment" className="text-brass-dark underline">
            اختبار اكتشاف الكفاءات
          </Link>
          ، ستجد أعلى الصفحة دورات مخصصة لمجال تطويرك تحديدًا بدل هذي القائمة العامة.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-4xl space-y-6">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="rounded-2xl border border-ink/10 bg-white/60 p-6 text-right"
          >
            <h2 className="font-display text-xl font-bold text-ink">{cat.name}</h2>
            <p className="mt-1 text-sm text-ink/60">{cat.shortDesc}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {academyResources[cat.id].map((res) => (
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
        ))}
      </div>
    </main>
  );
}
