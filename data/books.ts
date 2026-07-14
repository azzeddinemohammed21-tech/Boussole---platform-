import { Book } from "@/types/book";

export const books: Book[] = [
  {
    id: "bousla-plus",
    title: "بوصلة+",
    subtitle: "دليل عملي لإدارة الكفاءات البشرية",
    author: "عز الدين محمد",
    coverImage: "/books/5cf8518f-9f20-485c-ad07-74a56ae0addf.png",
    description:
      "كتاب متكامل من اثني عشر فصلاً يقدّم منهجية عملية لاكتشاف الكفاءات وتطويرها وتوجيهها، مع أدوات تحليلية مبتكرة لمطابقة الفرص المهنية بالقدرات الفردية.",
    pages: 0,
    year: 2026,
    downloadUrl: "/books/bousla-plus.pdf",
    isNew: true,
  },
  {
    id: "nabda-wahida",
    title: "نبضة واحدة",
    subtitle: "نظرية التزامن البنيوي في الإدارة",
    author: "عز الدين محمد",
    coverImage: "/books/nabda-cover.jpg",
    description:
      "إطار تفسيري وتطبيقي في الإدارة الحديثة، يطرح مفهوم التزامن البنيوي كأداة لفهم وتحليل الأداء المؤسسي، مع ملاحق وحالات مضادة وأداة تشخيص ذاتي.",
    pages: 0,
    year: 2025,
    downloadUrl: "/books/nabda-wahida.pdf",
  },
];
