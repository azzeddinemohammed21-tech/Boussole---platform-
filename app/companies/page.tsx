"use client";

import { useState } from "react";
import Link from "next/link";

type Status = "idle" | "sending" | "sent" | "error";

export default function CompaniesPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    company: "",
    name: "",
    email: "",
    message: "",
  });

  function updateField(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `طلب تواصل شركة جديد — ${form.company}`,
          from_name: "بوصلة+ — طلبات الشركات",
          company: form.company,
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const data = await res.json();
      setStatus(data.success ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <main className="flex min-h-screen items-center justify-center bg-sand px-6" dir="rtl">
        <div className="max-w-md text-center">
          <h1 className="font-display text-2xl font-bold text-ink">
            تم إرسال طلبك بنجاح
          </h1>
          <p className="mt-3 text-ink/70">
            شكرًا لتواصلكم مع بوصلة+. سنعود إليكم قريبًا لمناقشة احتياجات مؤسستكم.
          </p>
          <Link
            href="/"
            className="mt-6 inline-block rounded-full bg-indigo px-6 py-2.5 text-sm font-semibold text-sand transition hover:bg-indigo-light"
          >
            العودة للرئيسية
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-sand px-6 py-16" dir="rtl">
      <div className="mx-auto max-w-2xl text-right">
        <Link href="/" className="font-display text-lg font-extrabold text-ink">
          بوصلة<span className="text-brass">+</span>
        </Link>

        <h1 className="mt-8 font-display text-3xl font-bold text-ink md:text-4xl">
          هل تبحث عن كفاءات موثّقة لمؤسستك؟
        </h1>
        <p className="mt-3 max-w-xl text-ink/70">
          بوصلة+ تتيح لمؤسستكم الوصول إلى ملفات كفائية حقيقية، مبنية على
          اختبارات فعلية لا سير ذاتية مجردة. اترك بياناتك وسنتواصل معك
          لمناقشة احتياجاتكم.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-5">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-ink">
              اسم المؤسسة
            </label>
            <input
              type="text"
              required
              value={form.company}
              onChange={(e) => updateField("company", e.target.value)}
              className="w-full rounded-xl border border-ink/15 bg-white/60 px-4 py-2.5 text-sm text-ink outline-none focus:border-brass"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-ink">
              اسمك الكامل
            </label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => updateField("name", e.target.value)}
              className="w-full rounded-xl border border-ink/15 bg-white/60 px-4 py-2.5 text-sm text-ink outline-none focus:border-brass"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-ink">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => updateField("email", e.target.value)}
              className="w-full rounded-xl border border-ink/15 bg-white/60 px-4 py-2.5 text-sm text-ink outline-none focus:border-brass"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-ink">
              كيف يمكننا مساعدتكم؟
            </label>
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={(e) => updateField("message", e.target.value)}
              className="w-full rounded-xl border border-ink/15 bg-white/60 px-4 py-2.5 text-sm text-ink outline-none focus:border-brass"
            />
          </div>

          {status === "error" && (
            <p className="text-sm text-red-600">
              تعذّر إرسال الطلب، حاول مرة أخرى أو راسلنا مباشرة.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-full bg-indigo px-7 py-3 text-sm font-semibold text-sand transition hover:bg-indigo-light disabled:opacity-50"
          >
            {status === "sending" ? "جارٍ الإرسال..." : "إرسال الطلب"}
          </button>
        </form>
      </div>
    </main>
  );
        }
