import { Category, Question } from "@/types/assessment";

export const categories: Category[] = [
  {
    id: "analytical",
    name: "القدرة التحليلية وحل المشكلات",
    shortDesc: "مهارة تفكيك المشكلات المعقدة واتخاذ قرارات مبنية على معطيات",
  },
  {
    id: "communication",
    name: "التواصل والتأثير",
    shortDesc: "القدرة على إيصال الأفكار وإقناع الآخرين وبناء علاقات فعالة",
  },
  {
    id: "leadership",
    name: "القيادة وإدارة الفريق",
    shortDesc: "توجيه الآخرين، تفويض المهام، وتحمل المسؤولية عن نتائج الفريق",
  },
  {
    id: "creativity",
    name: "الإبداع والابتكار",
    shortDesc: "توليد أفكار جديدة والخروج عن الحلول التقليدية",
  },
  {
    id: "execution",
    name: "التنفيذ والانضباط",
    shortDesc: "الالتزام بالخطط، إدارة الوقت، وإنجاز المهام حتى النهاية",
  },
  {
    id: "adaptability",
    name: "التكيف والمرونة",
    shortDesc: "التعامل مع التغيير وعدم اليقين والتعلم من المواقف الجديدة",
  },
];

export const questions: Question[] = [
  { id: "a1", categoryId: "analytical", text: "عندما تواجهني مشكلة جديدة، أول خطوة أقوم بها غالبًا هي جمع أكبر قدر من المعلومات عنها قبل التفكير في حل." },
  { id: "a2", categoryId: "analytical", text: "أميل لاتخاذ قرارات سريعة بناءً على حدسي دون التحقق من كل التفاصيل.", reverse: true },
  { id: "a3", categoryId: "analytical", text: "في نقاش فيه رأيان متعارضان لكن منطقيان، أحاول فهم أساس كل رأي قبل أن أختار موقفي." },
  { id: "a4", categoryId: "analytical", text: "عندما أرى نتيجة غير متوقعة في عمل ما، أول سؤال يخطر ببالي هو \"لماذا حدث هذا؟\" وليس \"من المسؤول؟\"" },
  { id: "a5", categoryId: "analytical", text: "عندما أشرح قراري لشخص آخر، أستطيع غالبًا تبرير كل خطوة فيه بأسباب واضحة." },

  { id: "c1", categoryId: "communication", text: "عندما أشرح فكرة ولا يفهمها الطرف الآخر من أول مرة، أعيد صياغتها بطريقة مختلفة بدل تكرار نفس الكلام." },
  { id: "c2", categoryId: "communication", text: "أحيانًا أفترض أن الآخرين فهموا قصدي دون أن أتأكد فعليًا.", reverse: true },
  { id: "c3", categoryId: "communication", text: "أستطيع أن ألاحظ من تعابير وجه أو ردة فعل الشخص الذي أمامي إن كان مقتنعًا بكلامي أم لا." },
  { id: "c4", categoryId: "communication", text: "في نقاش حاد، أفضّل غالبًا أن أُثبت أنني على صواب بدل أن أفهم لماذا يرى الطرف الآخر الأمر بشكل مختلف.", reverse: true },
  { id: "c5", categoryId: "communication", text: "عندما أريد إقناع شخص بفكرة، أفكر أولاً فيما يهمه هو قبل أن أطرح حجتي." },

  { id: "l1", categoryId: "leadership", text: "عندما يتعثر مشروع جماعي، أجد نفسي أتحرك لتنظيم الوضع دون أن يُطلب مني ذلك رسميًا." },
  { id: "l2", categoryId: "leadership", text: "أفضّل تنفيذ المهمة بنفسي على تكليف شخص آخر بها حتى لو كان بإمكانه القيام بها.", reverse: true },
  { id: "l3", categoryId: "leadership", text: "عندما يخطئ أحد أعضاء فريقي، ردة فعلي الأولى هي فهم سبب الخطأ قبل الحكم عليه." },
  { id: "l4", categoryId: "leadership", text: "في لحظات الضغط، ألاحظ أن زملائي يلجؤون لي لطلب التوجيه أكثر من غيرهم." },
  { id: "l5", categoryId: "leadership", text: "أشعر بعدم الارتياح عند تحمل مسؤولية قرار قد يؤثر سلبًا على الآخرين.", reverse: true },

  { id: "cr1", categoryId: "creativity", text: "عندما أُعطى مهمة واضحة الخطوات، أجد نفسي أفكر أحيانًا في طريقة بديلة لتنفيذها حتى لو لم يُطلب مني ذلك." },
  { id: "cr2", categoryId: "creativity", text: "أفضل اتباع التعليمات بدقة بدل التجربة بأسلوبي الخاص.", reverse: true },
  { id: "cr3", categoryId: "creativity", text: "تعجبني الأفكار غير التقليدية حتى لو كانت تنطوي على مخاطرة أكبر من الحل المضمون." },
  { id: "cr4", categoryId: "creativity", text: "أجد نفسي أربط بين مواقف أو مجالات لا تبدو مرتبطة للوهلة الأولى." },
  { id: "cr5", categoryId: "creativity", text: "أشعر بالملل من الروتين المتكرر حتى لو كان مريحًا." },

  { id: "e1", categoryId: "execution", text: "عندما أضع لنفسي هدفًا، أحدد خطوات وموعدًا واضحًا لإنجازه غالبًا." },
  { id: "e2", categoryId: "execution", text: "أجد نفسي أؤجل المهام غير الممتعة حتى اللحظة الأخيرة.", reverse: true },
  { id: "e3", categoryId: "execution", text: "حتى لو فقدت الحماس في منتصف مشروع، أكمله لأنني بدأته." },
  { id: "e4", categoryId: "execution", text: "أراجع في نهاية كل أسبوع ما أنجزته فعليًا مقابل ما خططت له." },
  { id: "e5", categoryId: "execution", text: "أحتاج لمن يذكّرني أو يتابعني حتى أنجز المهام في وقتها.", reverse: true },

  { id: "ad1", categoryId: "adaptability", text: "عندما تتغير خطة فجأة، أول ردة فعل عندي هي التفكير بالخيار البديل بدل الانزعاج من التغيير." },
  { id: "ad2", categoryId: "adaptability", text: "أشعر بتوتر واضح عندما تتغير الأمور عن الخطة الأصلية دون سابق إنذار.", reverse: true },
  { id: "ad3", categoryId: "adaptability", text: "في بيئة جديدة (عمل، مدينة، فريق)، أحتاج وقتًا طويلاً قبل أن أشعر بالراحة.", reverse: true },
  { id: "ad4", categoryId: "adaptability", text: "أرى أن أفضل الفرص غالبًا تأتي من مواقف لم أخطط لها." },
  { id: "ad5", categoryId: "adaptability", text: "أفضّل بيئة عمل ثابتة يمكن التنبؤ بها على بيئة متغيرة ومليئة بالمفاجآت.", reverse: true },
];

export const likertOptions = [
  { value: 1, label: "لا أوافق إطلاقًا" },
  { value: 2, label: "لا أوافق" },
  { value: 3, label: "محايد" },
  { value: 4, label: "أوافق" },
  { value: 5, label: "أوافق بشدة" },
];
