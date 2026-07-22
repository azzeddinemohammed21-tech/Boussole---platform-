import BCICalculator from "@/components/BCICalculator";

export const metadata = {
  title: "حاسبة مؤشر الكفاءة (BCI) | بوصلة+",
  description: "قيّم كفاءتك عبر ثمانية أبعاد واحصل على مؤشرك الإجمالي",
};

export default function BCIPage() {
  return (
    <main className="min-h-screen bg-sand">
      <BCICalculator />
    </main>
  );
}
