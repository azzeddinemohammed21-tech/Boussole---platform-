"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setLoading(false);
    if (error) {
      setError("البريد الإلكتروني أو كلمة المرور غير صحيحة.");
      return;
    }
    router.push("/dashboard");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-sand px-6">
      <div className="w-full max-w-md rounded-2xl border border-ink/10 bg-white p-10 shadow-sm">
        <Link href="/" className="font-display text-lg font-extrabold">
          بوصلة<span className="text-brass">+</span>
        </Link>
        <h1 className="mt-6 font-display text-2xl font-bold">تسجيل الدخول</h1>
        <p className="mt-1 text-sm text-ink/60">
          أهلًا بعودتك، تابع مسارك المهني من حيث توقفت.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-ink/15 px-4 py-2.5 outline-none focus:border-brass focus:ring-2 focus:ring-brass/30"
              placeholder="••••••••"
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
            className="w-full rounded-full bg-indigo px-6 py-3 font-semibold text-sand transition hover:bg-indigo-light disabled:opacity-60"
          >
            {loading ? "جارٍ الدخول..." : "دخول"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-ink/60">
          ليس لديك حساب؟{" "}
          <Link href="/signup" className="font-medium text-brass-dark">
            أنشئ حسابًا جديدًا
          </Link>
        </p>
      </div>
    </main>
  );
}
