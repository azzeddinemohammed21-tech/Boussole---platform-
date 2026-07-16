import Link from "next/link";

const pillars = [
  {
    title: "اختبارات اكتشاف الكفاءات",
    desc: "أدوات تشخيصية مبنية على منهجية بوصلة+ لتحديد نقاط القوة ومسارات النمو.",
    mark: "١",
  },
  {
    title: "محرك المطابقة الذكي",
    desc: "يربط ملفك الكفائي بالفرص والدورات الأنسب لمرحلتك الحالية.",
    mark: "٢",
  },
  {
    title: "أكاديمية بوصلة+",
    desc: "دورات وشهادات مبنية على فجوات الكفاءة المكتشفة فعليًا، لا عناوين عامة.",
    mark: "٣",
  },
  {
    title: "الشركات والفرص",
    desc: "مساحة للمؤسسات للوصول إلى كفاءات موثّقة بدل السير الذاتية وحدها.",
    mark: "٤",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-sand text-ink">
      {/* الرأس */}
      <header className="border-b border-ink/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <span className="font-display text-xl font-extrabold tracking-tight">
            بوصلة<span className="text-brass">+</span>
          </span>
          <nav className="hidden gap-8 text-sm text-ink/70 md:flex">
            <a href="#pillars" className="hover:text-ink">المنصة</a>
            <a href="#academy" className="hover:text-ink">الأكاديمية</a>
            <a href="#companies" className="hover:text-ink">الشركات</a>
          <Link href="/books" className="hover:text-ink">الكتب</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm font-medium text-ink/80 hover:text-ink"
            >
              تسجيل الدخول
            </Link>
            <Link
              href="/signup"
              className="rounded-full bg-indigo px-5 py-2 text-sm font-semibold text-sand transition hover:bg-indigo-light"
            >
              ابدأ الآن
            </Link>
          </div>
        </div>
      </header>

      {/* البطل — إبرة البوصلة كعنصر توقيع */}
      <section className="relative overflow-hidden bg-indigo bg-compass-lines px-6 py-24 text-sand">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-medium tracking-wide text-brass-light">
              منهجية بوصلة+ لإدارة الكفاءات البشرية
            </p>
            <h1 className="font-display text-4xl font-extrabold leading-tight md:text-5xl">
              اكتشف اتجاهك المهني
              <br />
              قبل أن تختار وجهتك
            </h1>
            <p className="mt-6 max-w-md text-lg text-sand/80">
              بوصلة+ تحوّل نقاط قوتك الحقيقية إلى مسار واضح: اختبار، تشخيص،
              تدريب، ثم فرصة — بلا تخمين.
            </p>
            <div className="mt-8 flex gap-4">
              <Link
                href="/assessment"
                className="rounded-full bg-brass px-7 py-3 font-semibold text-ink transition hover:bg-brass-light"
              >
                ابدأ اختبار الكفاءات
              </Link>
              <a
                href="#pillars"
                className="rounded-full border border-sand/30 px-7 py-3 font-semibold text-sand transition hover:bg-sand/10"
              >
                تعرّف على المنصة
              </a>
            </div>
          </div>

          {/* إبرة البوصلة */}
          <div className="relative mx-auto flex h-72 w-72 items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-sand/20" />
            <div className="absolute inset-8 rounded-full border border-sand/10" />
            <div className="needle relative h-56 w-56 rotate-45">
              <div className="absolute right-1/2 top-1/2 h-28 w-1.5 -translate-y-full translate-x-1/2 rounded-full bg-brass" />
              <div className="absolute right-1/2 top-1/2 h-28 w-1.5 translate-x-1/2 rounded-full bg-sand/40" />
            </div>
            <div className="absolute h-3 w-3 rounded-full bg-sand" />
          </div>
        </div>
      </section>

      {/* الركائز */}
      <section id="pillars" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="font-display text-3xl font-bold">كيف تعمل المنصة</h2>
        <p className="mt-3 max-w-2xl text-ink/70">
          أربع محطات مترابطة، كل واحدة تُغذي التي تليها بمعطيات حقيقية عنك.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {pillars.map((p) => (
            <div
              key={p.mark}
              className="rounded-2xl border border-ink/10 bg-white/60 p-8 transition hover:border-brass/50"
            >
              <span className="font-display text-3xl font-extrabold text-brass">
                {p.mark}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold">
                {p.title}
              </h3>
              <p className="mt-2 text-ink/70">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* الأكاديمية */}
      <section id="academy" className="bg-indigo px-6 py-24 text-sand">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-bold">أكاديمية بوصلة+</h2>
          <p className="mt-3 max-w-2xl text-sand/70">
            دورات وشهادات مبنية على نتائج اختبار الكفاءات الخاص بك، وليست
            قائمة عامة يختارها الجميع.
          </p>
        </div>
      </section>

      {/* الشركات */}
      <section id="companies" className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-2xl bg-brass/10 p-10 md:p-14">
          <h2 className="font-display text-2xl font-bold md:text-3xl">
            هل تبحث عن كفاءات موثّقة لمؤسستك؟
          </h2>
          <p className="mt-3 max-w-xl text-ink/70">
            صفحة الشركات تتيح لك الوصول المباشر لملفات كفائية مبنية على
            اختبارات حقيقية، لا سير ذاتية مجردة.
          </p>
          <Link
            href="/signup"
            className="mt-6 inline-block rounded-full bg-indigo px-7 py-3 font-semibold text-sand transition hover:bg-indigo-light"
          >
            انضم كشركة
          </Link>
        </div>
      </section>

      <footer className="border-t border-ink/10 px-6 py-10 text-center text-sm text-ink/60">
        © {new Date().getFullYear()} بوصلة+. جميع الحقوق محفوظة.
      </footer>
    </main>
  );
}
