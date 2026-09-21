import { projects, profile } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-14">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-sm font-semibold tracking-widest text-emerald-600">PORTFOLIO</p>
          <h2 className="mt-1 text-3xl font-bold text-emerald-950">ผลงานจาก GitHub ของผม 🚀</h2>
          <p className="mt-1 text-sm text-emerald-800/70">
            ดึงจาก <a href={profile.github} target="_blank" className="font-semibold underline hover:text-emerald-600">{profile.github}</a> — กดดู Demo / โค้ดได้เลย
          </p>
        </div>
        <a
          href={`${profile.github}?tab=repositories`}
          target="_blank"
          className="rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-semibold text-emerald-700 hover:bg-emerald-200"
        >
          {projects.length} โปรเจกต์เด่น • ดูทั้งหมด 21 repos →
        </a>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.title}
            className={`group flex flex-col rounded-3xl border bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-100 ${
              p.highlight ? "border-emerald-300 ring-1 ring-emerald-200" : "border-emerald-100"
            }`}
          >
            <div className="flex items-start justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-2xl">
                {p.emoji}
              </span>
              {p.highlight && (
                <span className="rounded-full bg-emerald-600 px-2.5 py-1 text-[11px] font-bold text-white">
                  ★ Highlight
                </span>
              )}
            </div>
            <h3 className="mt-4 font-bold text-emerald-950 group-hover:text-emerald-700">
              {p.title}
            </h3>
            <p className="mt-2 flex-1 text-[13px] leading-6 text-emerald-900/70">{p.desc}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-[#f3faf4] border border-emerald-100 px-2.5 py-1 text-[11px] font-medium text-emerald-700"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-5 flex gap-2">
              <a
                href={p.link}
                target="_blank"
                className="flex-1 rounded-xl bg-emerald-600 py-2 text-center text-[13px] font-semibold text-white hover:bg-emerald-700"
              >
                ดู Demo
              </a>
              <a
                href={p.github}
                target="_blank"
                className="flex-1 rounded-xl border border-emerald-200 py-2 text-center text-[13px] font-semibold text-emerald-700 hover:bg-emerald-50"
              >
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
