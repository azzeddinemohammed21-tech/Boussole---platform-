import { BCIDimension, BCILevel } from "@/types/bci";

export const bciDimensions: BCIDimension[] = [
  {
    id: "knowledge",
    name: "المعرفة",
    desc: "العمق النظري والاطلاع المرتبط بمجال العمل أو التخصص",
    weight: 15,
  },
  {
    id: "practicalSkill",
    name: "المهارة العملية",
    desc: "القدرة على تطبيق المعرفة فعليًا في مواقف وأعمال حقيقية",
    weight: 20,
  },
  {
    id: "problemSolving",
    name: "التفكير وحل المشكلات",
    desc: "تحليل المواقف المعقدة والوصول لحلول منطقية وفعالة",
    weight: 15,
  },
  {
    id: "traits",
    name: "السمات الشخصية",
    desc: "خصائص فردية مستقرة تؤثر على أسلوب العمل والتفاعل",
    weight: 10,
  },
  {
    id: "values",
    name: "القيم المهنية",
    desc: "الالتزام بمبادئ النزاهة والمسؤولية والأخلاقيات المهنية",
    weight: 10,
  },
  {
    id: "motivation",
    name: "الدافعية",
    desc: "الحماس الداخلي والاستمرارية في السعي نحو الأهداف",
    weight: 10,
  },
  {
    id: "learningAbility",
    name: "القدرة على التعلم",
    desc: "سرعة اكتساب معارف ومهارات جديدة والتكيف معها",
    weight: 10,
  },
  {
    id: "achievement",
    name: "الإنجاز والتطبيق",
    desc: "القدرة على تحويل الجهد إلى نتائج ملموسة ومكتملة",
    weight: 10,
  },
];

export const bciLevels: BCILevel[] = [
  { min: 0, max: 20, label: "كفاءة كامنة", desc: "الأساسيات موجودة، لكن تحتاج بناءً وتطويرًا مقصودًا لتظهر أثرها." },
  { min: 20, max: 40, label: "كفاءة ناشئة", desc: "بدأت ملامح الكفاءة بالظهور، وتحتاج ممارسة منتظمة لترسيخها." },
  { min: 40, max: 60, label: "كفاءة نامية", desc: "مستوى متوسط قابل للتطور بسرعة مع تركيز على نقاط محددة." },
  { min: 60, max: 80, label: "كفاءة متقدمة", desc: "أداء قوي وموثوق في أغلب الأبعاد، مع مجال للصقل النهائي." },
  { min: 80, max: 100, label: "كفاءة قيادية", desc: "مستوى عالٍ يؤهلك لقيادة الآخرين ونقل الخبرة لهم." },
];

export function getBCILevel(score: number) {
  return (
    bciLevels.find((l) => score >= l.min && score <= l.max) ??
    bciLevels[bciLevels.length - 1]
  );
    }
