"use client";

import Image from "next/image";
import styles from "./ReviewCard.module.css";

const reviews = [
  {
    name: "Adarsh Yadav",
    role: "CTO, NovaTech",
    avatar: "/images/review1.jpg",
    rating: 5,
    quote:
      "JJ Communication built our corporate site — performance and responsiveness are top-notch. Support was fast and professional.",
  },
  {
    name: "Naina Rai",
    role: "Product Manager, Cloudify",
    avatar: "/images/review2.jpg",
    rating: 4,
    quote:
      "Great design sense and clean code. They delivered a scalable solution and helped with deployment best practices.",
  },
  {
    name: "Kishan Singh",
    role: "Founder, ByteFarm",
    avatar: "/images/review3.jpg",
    rating: 5,
    quote:
      "Fast turnaround, transparent communication, and excellent post-launch support — highly recommended!",
  },
];

export default function ReviewCard() {
  return (
    <section className="max-w-6xl mx-auto mt-4 px-4 py-12">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">
        What our clients say
      </h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((r, i) => (
          <article
            key={i}
            className={`relative bg-white/80 dark:bg-slate-800/70 backdrop-blur-md border border-slate-200 cursor-pointer dark:border-slate-700 rounded-2xl p-5 shadow-lg hover:shadow-xl hover:scale-110 transition-transform duration-300 ${i === 0 ? styles.cardAccentTopLeft : ""
              } ${i === reviews.length - 1 ? styles.cardAccentBottomRight : ""}`}
          >
            <div className="flex items-start gap-4">
              <Image
                src={r.avatar}
                alt={`${r.name} avatar`}
                width={56}
                height={56}
                className="w-14 h-14 rounded-full object-cover flex-shrink-0"
              />

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{r.name}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {r.role}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <svg
                        key={idx}
                        className={`w-4 h-4 ${
                          idx < r.rating
                            ? "text-yellow-500"
                            : "text-slate-300"
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.496 2.678c-.785.57-1.84-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.417 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.05 2.927z" />
                      </svg>
                    ))}
                  </div>
                </div>

                <p className="mt-4 text-slate-700 dark:text-slate-200 text-sm leading-6">
                  “{r.quote}”
                </p>

                <div className="mt-4 flex items-center gap-3">
                  <button className="text-sm px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition">
                    Read case study
                  </button>
                  <a
                    className="text-sm underline text-sky-600 dark:text-sky-400"
                    href="#"
                    onClick={(e) => e.preventDefault()}
                  >
                    View project
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
