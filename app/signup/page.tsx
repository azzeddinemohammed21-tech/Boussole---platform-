"use client";

import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";

export default function SignupPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: fullName } },
    });
    setLoading(false);
    if (error) {
  console.log("SIGNUP ERROR:", error.message, error);
  setError(error.message);
  return;
    }
setDone(true);
  }
      return (
    <main className="flex min-h-screen items-center justify-center bg-sand px-6">
      <div className="w-full max-w-md rounded-2xl border border-ink/10 bg-white p-10 shadow-sm">
        <Link href="/" className="font-display text-lg font-extrabold">
          بوصلة<span className="text-brass">+</span>
        </Link>
        <h1 className="mt-6 font-display text-2xl font-bold">إنشاء حساب</h1>
        <p className="mt-1 text-sm text-ink/60">
          خطوتك الأولى نحو اكتشاف اتجاهك المهني الحقيقي.
        </p>

        {done ? (
          <div className="mt-8 rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">
            تم إرسال رابط التأكيد إلى بريدك الإلكتروني. افتحه لإتمام التسجيل.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label className="mb-1 block text-sm font-medium">
                الاسم الكامل
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full rounded-lg border border-ink/15 px-4 py-2.5 outline-none focus:border-brass focus:ring-2 focus:ring-brass/30"
                placeholder="الاسم واللقب"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-ink/15 px-4 py-2.5 outline-none focus:border-brass focus:ring-2 focus:ring-brass/30"
                placeholder="name@example.com"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">
                كلمة المرور
              </label>
              <input
                type="password"
                required
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-ink/15 px-4 py-2.5 outline-none focus:border-brass focus:ring-2 focus:ring-brass/30"
                placeholder="٨ أحرف على الأقل"
              />
            </div>

            {error && (
              <p className="rounded-lg bg-red-50 px-4 py-2 text-sm text-red-600">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-brass px-6 py-3 font-semibold text-ink transition hover:bg-brass-light disabled:opacity-60"
            >
              {loading ? "جارٍ الإنشاء..." : "إنشاء الحساب"}
            </button>
          </form>
        )}

        <p className="mt-6 text-center text-sm text-ink/60">
          لديك حساب بالفعل؟{" "}
          <Link href="/login" className="font-medium text-brass-dark">
            سجّل الدخول
          </Link>
        </p>
      </div>
    </main>
  );
}
