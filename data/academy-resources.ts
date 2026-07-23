import { CategoryId } from "@/types/assessment";

export interface LearningResource {
  platform: string;
  label: string;
  url: string;
}

export const academyResources: Record<CategoryId, LearningResource[]> = {
  analytical: [
    { platform: "Coursera", label: "دورات في تحليل الأعمال وحل المشكلات", url: "https://www.coursera.org/search?query=business%20analysis" },
    { platform: "رواق", label: "دورات عربية في التفكير التحليلي", url: "https://www.rwaq.org/courses?utf8=%E2%9C%93&search=%D8%AA%D9%81%D9%83%D9%8A%D8%B1" },
  ],
  communication: [
    { platform: "Coursera", label: "دورات في مهارات التواصل والتأثير", url: "https://www.coursera.org/search?query=communication%20skills" },
    { platform: "إدراك", label: "دورات عربية في التواصل الفعّال", url: "https://www.edraak.org/search/?q=%D8%A7%D9%84%D8%AA%D9%88%D8%A7%D8%B5%D9%84" },
  ],
  leadership: [
    { platform: "Coursera", label: "دورات في القيادة وإدارة الفرق", url: "https://www.coursera.org/search?query=leadership" },
    { platform: "رواق", label: "دورات عربية في القيادة", url: "https://www.rwaq.org/courses?utf8=%E2%9C%93&search=%D9%82%D9%8A%D8%A7%D8%AF%D8%A9" },
  ],
  creativity: [
    { platform: "Coursera", label: "دورات في التفكير التصميمي والابتكار", url: "https://www.coursera.org/search?query=design%20thinking" },
    { platform: "إدراك", label: "دورات عربية في الإبداع والابتكار", url: "https://www.edraak.org/search/?q=%D8%A7%D9%84%D8%A5%D8%A8%D8%AF%D8%A7%D8%B9" },
  ],
  execution: [
    { platform: "Coursera", label: "دورات في إدارة المشاريع والوقت", url: "https://www.coursera.org/search?query=project%20management" },
    { platform: "رواق", label: "دورات عربية في إدارة الوقت والإنتاجية", url: "https://www.rwaq.org/courses?utf8=%E2%9C%93&search=%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9+%D8%A7%D9%84%D9%88%D9%82%D8%AA" },
  ],
  adaptability: [
    { platform: "Coursera", label: "دورات في إدارة التغيير والمرونة", url: "https://www.coursera.org/search?query=change%20management" },
    { platform: "إدراك", label: "دورات عربية في التطوير الذاتي", url: "https://www.edraak.org/search/?q=%D8%A7%D9%84%D8%AA%D8%B7%D9%88%D9%8A%D8%B1+%D8%A7%D9%84%D8%B0%D8%A7%D8%AA%D9%8A" },
  ],
};
