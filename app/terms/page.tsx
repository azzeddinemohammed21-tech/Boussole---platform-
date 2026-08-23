import Link from "next/link";

export const metadata = {
  title: "الشروط والأحكام | بوصلة+",
  description: "شروط استخدام منصة بوصلة+",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-sand px-6 py-16" dir="rtl">
      <div className="mx-auto max-w-3xl text-right">
        <Link href="/" className="font-display text-lg font-extrabold text-ink">
          بوصلة<span className="text-brass">+</span>
        </Link>

        <h1 className="mt-8 font-display text-3xl font-bold text-ink">
          الشروط والأحكام
        </h1>
        <p className="mt-2 text-sm text-ink/50">
          آخر تحديث: {new Date().toLocaleDateString("ar-DZ", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="mt-10 space-y-8 leading-relaxed text-ink/80">
          <section>
            <h2 className="font-display text-xl font-bold text-ink">١. طبيعة الخدمة</h2>
            <p className="mt-3">
              بوصلة+ منصة توجيه ذاتي تساعدك على استكشاف نقاط قوتك ومجالات
              تطويرك المهني عبر أدوات تقييم ذاتي (اختبار اكتشاف الكفاءات،
              حاسبة مؤشر الكفاءة). هذه الأدوات وسيلة للتأمل والتوجيه، وليست
              تشخيصًا نفسيًا أو مهنيًا معتمدًا، ولا تُغني عن استشارة مختص عند
              الحاجة.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-ink">٢. حسابك</h2>
            <p className="mt-3">
              أنت مسؤول عن دقة المعلومات التي تُدخلها عند التسجيل، وعن الحفاظ
              على سرية كلمة مرورك. يحق لنا تعليق أو إغلاق أي حساب يُستخدم
              بطريقة تضر بالمنصة أو بمستخدمين آخرين.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-ink">٣. الدورات والروابط الخارجية</h2>
            <p className="mt-3">
              الروابط المقترحة في قسم الأكاديمية تُوجّهك لمنصات تعليمية
              خارجية (مثل Coursera ورواق وإدراك) لا نملكها ولا نتحكم في
              محتواها أو توفرها. استخدامك لتلك المنصات يخضع لشروطها الخاصة.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-ink">٤. طلبات الشركات</h2>
            <p className="mt-3">
              تقديم طلب تواصل عبر صفحة الشركات لا يُنشئ أي التزام تعاقدي بين
              الطرفين؛ هو خطوة أولى للتواصل ومناقشة الاحتياجات فقط.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-ink">٥. حدود المسؤولية</h2>
            <p className="mt-3">
              نبذل جهدًا معقولًا لضمان دقة المحتوى وتوفر الخدمة، لكننا لا
              نضمن خلوها التام من الأخطاء أو الانقطاع. لا تتحمل بوصلة+
              مسؤولية أي قرار مهني أو شخصي يتخذه المستخدم بناءً فقط على نتائج
              أدوات التقييم الذاتي.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-ink">٦. التعديلات</h2>
            <p className="mt-3">
              قد نُحدّث هذه الشروط من وقت لآخر. استمرارك في استخدام المنصة
              بعد أي تعديل يُعد موافقة ضمنية على الشروط المحدّثة.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-ink">٧. التواصل</h2>
            <p className="mt-3">
              لأي استفسار حول هذه الشروط، تواصل معنا عبر{" "}
              <Link href="/companies" className="text-brass-dark underline">
                نموذج التواصل
              </Link>
              . راجع أيضًا{" "}
              <Link href="/privacy" className="text-brass-dark underline">
                سياسة الخصوصية
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
              }
