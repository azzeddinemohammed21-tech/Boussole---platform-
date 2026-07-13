import { books } from "@/data/books";
import BookCard from "@/components/BookCard";

export const metadata = {
  title: "الكتب | بوصلة+",
  description: "كتب بوصلة+ في إدارة الكفاءات البشرية والتطوير المؤسسي",
};

export default function BooksPage() {
  return (
    <main className="min-h-screen bg-[#0a1220] px-6 py-16" dir="rtl">
      <div className="mx-auto max-w-5xl text-right">
        <h1 className="text-3xl font-bold text-white md:text-4xl">
          مكتبة بوصلة+
        </h1>
        <p className="mt-3 max-w-2xl text-gray-400">
          إصداراتنا في إدارة الكفاءات البشرية والتطوير المؤسسي — متاحة
          للتحميل والاطلاع.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </main>
  );
}
