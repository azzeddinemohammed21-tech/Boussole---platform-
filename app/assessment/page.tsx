import AssessmentQuiz from "@/components/AssessmentQuiz";

export const metadata = {
  title: "اختبار اكتشاف الكفاءات | بوصلة+",
  description: "اختبار توجيه ذاتي لاكتشاف نقاط قوتك ومجالات تطويرك المهنية",
};

export default function AssessmentPage() {
  return (
    <main className="min-h-screen bg-[#0a1220]">
      <AssessmentQuiz />
    </main>
  );
}
