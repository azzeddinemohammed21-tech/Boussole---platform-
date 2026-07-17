import Link from "next/link";
import { books } from "@/data/books";
import BookCard from "@/components/BookCard";

export const metadata = {
  title: "الكتب | بوصلة+",
  description: "كتب بوصلة+ في إدارة الكفاءات البشرية والتطوير المؤسسي",
};

export default function BooksPage() {
  return (
    <main className="min-h-screen bg-sand px-6 py-16" dir="rtl">
      <div className="mx-auto max-w-5xl text-right">
        <Link href="/" className="font-display text-lg font-extrabold text-ink">
          بوصلة<span className="text-brass">+</span>
        </Link>

        <h1 className="mt-8 font-display text-3xl font-bold text-ink md:text-4xl">
          مكتبة بوصلة+
        </h1>
        <p className="mt-3 max-w-2xl text-ink/70">
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
