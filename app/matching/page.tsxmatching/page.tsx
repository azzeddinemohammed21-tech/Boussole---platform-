import AssessmentQuiz from "@/components/AssessmentQuiz";

export const metadata = {
  title: "محرك المطابقة الذكي | بوصلة+",
  description: "أجب على اختبار الكفاءات لتحصل على أدوار ومهارات مطابقة لملفك",
};

export default function MatchingPage() {
  return (
    <main className="min-h-screen bg-sand">
      <AssessmentQuiz />
    </main>
  );
}
