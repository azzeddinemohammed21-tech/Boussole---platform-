"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import type { User } from "@supabase/supabase-js";
import { categories } from "@/data/assessment-questions";
import { CategoryId } from "@/types/assessment";

interface SavedResult {
  scores: Record<string, number>;
  top_strength: CategoryId;
  growth_area: CategoryId;
  updated_at: string;
}

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [savedResult, setSavedResult] = useState<SavedResult | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData.user) {
        router.push("/login");
        return;
      }
      setUser(userData.user);

      const { data: resultData } = await supabase
        .from("assessment_results")
        .select("scores, top_strength, growth_area, updated_at")
        .eq("user_id", userData.user.id)
        .maybeSingle();

      if (resultData) setSavedResult(resultData as SavedResult);
      setLoading(false);
    }
    load();
  }, [router]);

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/");
  }

  function nameOf(id: CategoryId) {
    return categories.find((c) => c.id === id)?.name ?? id;
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-sand text-ink/60">
        جارٍ التحميل...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-sand">
      <header className="flex items-center justify-between border-b border-ink/10 px-6 py-5">
        <Link href="/" className="font-display text-lg font-extrabold text-ink">
          بوصلة<span className="text-brass">+</span>
        </Link>
        <button
          onClick={handleLogout}
          className="text-sm font-medium text-ink/70 hover:text-ink"
        >
          تسجيل الخروج
        </button>
      </header>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="font-display text-2xl font-bold text-ink">
          أهلًا، {user?.user_metadata?.full_name || user?.email}
        </h1>

        {savedResult ? (
          <div className="mt-8 rounded-2xl border border-ink/10 bg-white/60 p-8">
            <h2 className="font-display text-lg font-bold text-ink">
              آخر نتيجة اختبار كفاءات لك
            </h2>
            <p className="mt-1 text-xs text-ink/50">
              آخر تحديث: {new Date(savedResult.updated_at).toLocaleDateString("ar-DZ")}
            </p>

            <div className="mt-6 space-y-3">
              {Object.entries(savedResult.scores)
                .sort(([, a], [, b]) => b - a)
                .map(([catId, pct]) => (
                  <div key={catId}>
                    <div className="mb-1 flex justify-between text-sm">
                      <span className="text-ink">{nameOf(catId as CategoryId)}</span>
                      <span className="text-brass-dark">{pct}%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-ink/10">
                      <div
                        className="h-full rounded-full bg-brass"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                ))}
            </div>

            <Link
              href="/assessment"
              className="mt-6 inline-block rounded-full border border-brass px-6 py-2.5 text-sm font-semibold text-brass-dark transition hover:bg-brass hover:text-ink"
            >
              إعادة الاختبار
            </Link>
          </div>
        ) : (
          <div className="mt-8 rounded-2xl border border-brass/30 bg-brass/10 p-8">
            <h2 className="font-display text-lg font-bold text-ink">
              ابدأ اختبار اكتشاف الكفاءات
            </h2>
            <p className="mt-2 text-sm text-ink/70">
              لم تُجرِ الاختبار بعد. نتائجه هي أساس كل توصية تظهر لك في المنصة.
            </p>
            <Link
              href="/assessment"
              className="mt-5 inline-block rounded-full bg-indigo px-6 py-2.5 text-sm font-semibold text-sand transition hover:bg-indigo-light"
            >
              ابدأ الآن
            </Link>
          </div>
        )}

        <div className="mt-6 rounded-2xl border border-ink/10 bg-white/60 p-8">
          <h2 className="font-display text-lg font-bold text-ink">
            مكتبة بوصلة+
          </h2>
          <p className="mt-2 text-sm text-ink/70">
            اطّلع على إصداراتنا في إدارة الكفاءات البشرية والتطوير المؤسسي.
          </p>
          <Link
            href="/books"
            className="mt-5 inline-block rounded-full border border-brass px-6 py-2.5 text-sm font-semibold text-brass-dark transition hover:bg-brass hover:text-ink"
          >
            تصفّح الكتب
          </Link>
        </div>
      </section>
    </main>
  );
                                   }
