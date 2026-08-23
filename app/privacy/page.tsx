import Link from "next/link";

export const metadata = {
  title: "سياسة الخصوصية | بوصلة+",
  description: "كيف تجمع بوصلة+ بياناتك وتستخدمها وتحميها",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-sand px-6 py-16" dir="rtl">
      <div className="mx-auto max-w-3xl text-right">
        <Link href="/" className="font-display text-lg font-extrabold text-ink">
          بوصلة<span className="text-brass">+</span>
        </Link>

        <h1 className="mt-8 font-display text-3xl font-bold text-ink">
          سياسة الخصوصية
        </h1>
        <p className="mt-2 text-sm text-ink/50">
          آخر تحديث: {new Date().toLocaleDateString("ar-DZ", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="mt-10 space-y-8 leading-relaxed text-ink/80">
          <section>
            <h2 className="font-display text-xl font-bold text-ink">١. البيانات التي نجمعها</h2>
            <p className="mt-3">
              عند إنشاء حساب على بوصلة+، نجمع اسمك وبريدك الإلكتروني. عند
              إجرائك لاختبار اكتشاف الكفاءات، نحفظ نتائجك (النسب المئوية لكل
              محور، ومحور القوة، ومحور التطوير) إذا كنت مسجّل الدخول. لا نجمع
              أي بيانات صحية أو مالية أو حساسة أخرى.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-ink">٢. كيف نستخدم بياناتك</h2>
            <p className="mt-3">
              نستخدم بياناتك حصريًا لتقديم الخدمة: عرض نتيجتك المحفوظة في
              لوحة تحكمك، وتخصيص توصيات الدورات والأدوار المهنية بناءً على
              نتائجك. لا نبيع بياناتك ولا نشاركها مع أي طرف ثالث لأغراض
              تسويقية.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-ink">٣. أين تُخزَّن بياناتك</h2>
            <p className="mt-3">
              تُخزَّن بياناتك عبر خدمة Supabase، مع تشفير أثناء النقل
              (TLS) وضوابط وصول تمنع أي حساب آخر من رؤية بياناتك (Row Level
              Security). طلبات التواصل من الشركات تُرسل عبر خدمة بريد
              خارجية (Web3Forms) دون تخزين دائم لها في قاعدتنا.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-ink">٤. حقوقك</h2>
            <p className="mt-3">
              يحق لك في أي وقت طلب الاطلاع على بياناتك المحفوظة، أو تصحيحها،
              أو حذفها بالكامل من حسابك. للقيام بذلك، راسلنا عبر{" "}
              <Link href="/companies" className="text-brass-dark underline">
                نموذج التواصل
              </Link>{" "}
              وسنستجيب خلال مدة معقولة.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-ink">٥. ملفات تعريف الارتباط (Cookies)</h2>
            <p className="mt-3">
              نستخدم فقط ملفات تعريف ارتباط ضرورية لتشغيل تسجيل الدخول
              والجلسة (عبر Supabase Auth). لا نستخدم أدوات تتبع إعلاني أو
              تحليلات طرف ثالث حاليًا.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-ink">٦. الإطار القانوني</h2>
            <p className="mt-3">
              تسعى بوصلة+ للعمل وفق مبادئ حماية المعطيات ذات الطابع الشخصي
              المعمول بها في الجزائر. هذه الصفحة توضيح عام لممارساتنا وليست
              استشارة قانونية، وقد تُحدَّث بما يتوافق مع أي تطورات تشريعية.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-ink">٧. التواصل</h2>
            <p className="mt-3">
              لأي استفسار بخصوص خصوصيتك، يمكنك التواصل معنا عبر{" "}
              <Link href="/companies" className="text-brass-dark underline">
                نموذج التواصل
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
              }
