"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import type { User } from "@supabase/supabase-js";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) {
        router.push("/login");
        return;
      }
      setUser(data.user);
      setLoading(false);
    });
  }, [router]);

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/");
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
        <p className="mt-2 text-ink/60">
          هذه لوحتك الشخصية. لم تُكمل اختبار اكتشاف الكفاءات بعد.
        </p>

        <div className="mt-8 rounded-2xl border border-brass/30 bg-brass/10 p-8">
          <h2 className="font-display text-lg font-bold text-ink">
            ابدأ اختبار اكتشاف الكفاءات
          </h2>
          <p className="mt-2 text-sm text-ink/70">
            نتائج هذا الاختبار هي أساس كل توصية تظهر لك في المنصة.
          </p>
          <button className="mt-5 rounded-full bg-indigo px-6 py-2.5 text-sm font-semibold text-sand transition hover:bg-indigo-light">
            ابدأ الآن (قيد التطوير — المرحلة القادمة)
          </button>
        </div>
      </section>
    </main>
  );
}
