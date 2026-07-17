import Image from "next/image";
import { Book } from "@/types/book";

export default function BookCard({ book }: { book: Book }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white/60 shadow-sm transition hover:-translate-y-1 hover:border-brass/50">
      {book.isNew && (
        <span className="absolute top-3 right-3 z-10 rounded-full bg-brass px-3 py-1 text-xs font-semibold text-ink">
          جديد
        </span>
      )}

      <div className="relative aspect-[3/4] w-full bg-indigo">
        <Image
          src={book.coverImage}
          alt={`غلاف كتاب ${book.title}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-6 text-right" dir="rtl">
        <h3 className="font-display text-xl font-bold text-ink">{book.title}</h3>
        {book.subtitle && (
          <p className="text-sm text-brass-dark">{book.subtitle}</p>
        )}
        <p className="line-clamp-3 text-sm leading-relaxed text-ink/70">
          {book.description}
        </p>

        <div className="mt-auto flex gap-3 pt-4">
          {book.downloadUrl && (
            <a
              href={book.downloadUrl}
              download
              className="flex-1 rounded-full bg-brass px-4 py-2 text-center text-sm font-semibold text-ink transition hover:bg-brass-light"
            >
              تحميل PDF
            </a>
          )}
          {book.purchaseUrl && (
            <a
              href={book.purchaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-full border border-brass px-4 py-2 text-center text-sm font-semibold text-brass-dark transition hover:bg-brass hover:text-ink"
            >
              اقتناء الكتاب
            </a>
          )}
        </div>
      </div>
    </div>
  );
}              className="flex-1 rounded-lg bg-[#b08d57] px-4 py-2 text-center text-sm font-semibold text-[#0f1a2e] transition-colors hover:bg-[#c9a56d]"
            >
              تحميل PDF
            </a>
          )}
          {book.purchaseUrl && (
            <a
              href={book.purchaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-lg border border-[#b08d57] px-4 py-2 text-center text-sm font-semibold text-[#b08d57] transition-colors hover:bg-[#b08d57] hover:text-[#0f1a2e]"
            >
              اقتناء الكتاب
            </a>
          )}
        </div>
      </div>
    </div>
  );
        }
