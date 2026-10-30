
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

type Status = "idle" | "sending" | "sent" | "error";

export default function CompaniesPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    company: "",
    name: "",
    email: "",
    need: "التعرف على المنصة",
    message: "",
  });

  function updateField(
    field: keyof typeof form,
    value: string
  ) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    if (!accessKey) {
      setStatus("error");
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `طلب مؤسسة جديد — ${form.company}`,
          from_name: "Boussole+",
          company: form.company,
          name: form.name,
          email: form.email,
          need: form.need,
          message: form.message,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error("تعذر إرسال الطلب");
      }

      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <main
      className="min-h-screen bg-sand px-5 py-10 md:px-8 md:py-16"
      dir="rtl"
    >
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="font-display text-xl font-extrabold text-ink"
        >
          بوصلة<span className="text-brass">+</span>
        </Link>

        <section className="mt-10 rounded-3xl border border-ink/10 bg-white/60 p-6 md:p-10">
          <p className="text-sm font-semibold text-indigo">
            فضاء المؤسسات والشركات
          </p>

          <h1 className="mt-3 font-display text-3xl font-bold leading-relaxed text-ink md:text-4xl">
            ما الكفاءات التي تحتاجها مؤسستك؟
          </h1>

          <p className="mt-4 leading-8 text-ink/70">
            نعمل على تطوير بوصلة+ لتقريب الكفاءات من الفرص،
            ومساعدة الأفراد والمؤسسات على التعبير عن احتياجاتهم
            بصورة أوضح. نبدأ بفهم احتياجات المؤسسات قبل بناء
            خدمات المطابقة والتعاون.
          </p>

          <div className="mt-6 rounded-2xl border border-ink/10 bg-sand p-4">
            <h2 className="font-bold text-ink">
              ماذا يمكنك أن تفعل الآن؟
            </h2>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-ink/75">
              <li>• التعريف بمؤسستك واحتياجاتها.</li>
              <li>• توضيح نوع الكفاءات أو المهارات المطلوبة.</li>
              <li>• إبداء الاهتمام بالمشاركة في تطوير المنصة.</li>
            </ul>
          </div>

          {status === "sent" ? (
            <div
              className="mt-8 rounded-2xl border border-green-700/20 bg-green-50 p-5"
              role="status"
            >
              <h2 className="font-bold text-green-800">
                تم إرسال طلبك
              </h2>
              <p className="mt-2 text-sm leading-7 text-green-900">
                وصل طلبك عبر نموذج التواصل. هذا لا يعني أن خدمة
                التوظيف أو مطابقة الكفاءات أصبحت متاحة بالفعل.
              </p>
              <button
                type="button"
                onClick={() => {
                  setForm({
                    company: "",
                    name: "",
                    email: "",
                    need: "التعرف على المنصة",
                    message: "",
                  });
                  setStatus("idle");
                }}
                className="mt-4 text-sm font-semibold text-green-800 underline"
              >
                إرسال طلب آخر
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-sm font-semibold text-ink"
                >
                  اسم المؤسسة
                </label>
                <input
                  id="company"
                  required
                  maxLength={150}
                  value={form.company}
                  onChange={(e) => updateField("company", e.target.value)}
                  className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-indigo"
                  placeholder="اسم الشركة أو المؤسسة"
                />
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-ink"
                >
                  اسم الشخص المسؤول عن التواصل
                </label>
                <input
                  id="name"
                  required
                  maxLength={150}
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-indigo"
                  placeholder="الاسم الكامل"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-ink"
                >
                  البريد الإلكتروني
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  maxLength={254}
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-indigo"
                  placeholder="name@example.com"
                  dir="ltr"
                />
              </div>

              <div>
                <label
                  htmlFor="need"
                  className="mb-2 block text-sm font-semibold text-ink"
                >
                  ما اهتمام مؤسستك؟
                </label>
                <select
                  id="need"
                  required
                  value={form.need}
                  onChange={(e) => updateField("need", e.target.value)}
                  className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-indigo"
                >
                  <option>التعرف على المنصة</option>
                  <option>تحديد احتياجات الكفاءات</option>
                  <option>المشاركة في تجربة أولية</option>
                  <option>اقتراح شراكة</option>
                  <option>أخرى</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-ink"
                >
                  تفاصيل إضافية
                </label>
                <textarea
                  id="message"
                  required
                  minLength={10}
                  maxLength={3000}
                  rows={5}
                  value={form.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm leading-7 text-ink outline-none focus:border-indigo"
                  placeholder="اشرح احتياج مؤسستك أو اقتراحك..."
                />
              </div>

              {status === "error" && (
                <p className="text-sm leading-7 text-red-700" role="alert">
                  تعذر إرسال الطلب. تحقق من إعداد مفتاح خدمة
                  Web3Forms واتصال الإنترنت، ثم حاول مجددًا.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-full bg-indigo px-6 py-3.5 text-sm font-bold text-sand transition hover:bg-indigo-light disabled:cursor-not-allowed disabled:opacity-50"
              >
                {status === "sending"
                  ? "جارٍ إرسال الطلب..."
                  : "إرسال اهتمام المؤسسة"}
              </button>

              <p className="text-xs leading-6 text-ink/60">
                يُستخدم هذا النموذج لجمع الاهتمامات والاحتياجات
                الأولية. لا يُعد إعلان توظيف أو ضمانًا للحصول على
                مرشحين أو خدمة مطابقة جاهزة.
              </p>
            </form>
          )}
        </section>

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-sm font-semibold text-indigo underline"
          >
            العودة إلى الصفحة الرئيسية
          </Link>
        </div>
      </div>
    </main>
  );
}
