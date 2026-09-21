import { experience, projectExperience, education } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 bg-gradient-to-b from-emerald-50/80 to-[#f3faf4]">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold tracking-widest text-emerald-600">EXPERIENCE</p>
            <h2 className="mt-1 text-3xl font-bold text-emerald-950">ประสบการณ์ทำงาน 💼</h2>
            <div className="mt-6 space-y-4">
              {experience.map((e) => (
                <div key={e.title} className="relative rounded-3xl border border-emerald-100 bg-white p-5 pl-6 shadow-sm">
                  <span className="absolute left-0 top-5 h-[calc(100%-2.5rem)] w-1.5 rounded-full bg-gradient-to-b from-emerald-400 to-lime-300" />
                  <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-semibold text-emerald-700">
                    {e.period}
                  </span>
                  <h3 className="mt-2 font-bold text-emerald-950">{e.title}</h3>
                  <p className="text-[13px] font-medium text-emerald-600">{e.org}</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-[13px] leading-6 text-emerald-900/70">
                    {e.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-lime-700">EDUCATION</p>
            <h2 className="mt-1 text-3xl font-bold text-emerald-950">การศึกษา 🎓</h2>
            <div className="mt-6 space-y-4">
              {education.map((e) => (
                <div key={e.school} className="rounded-3xl border border-emerald-100 bg-white p-5 shadow-sm">
                  <span className="inline-block rounded-full bg-lime-100 px-3 py-1 text-[11px] font-semibold text-lime-800">
                    {e.period}
                  </span>
                  <h3 className="mt-2 font-bold text-emerald-950">{e.school}</h3>
                  <p className="text-[13px] font-medium text-emerald-600">{e.place}</p>
                  <p className="mt-1.5 text-[13px] leading-6 text-emerald-900/70">{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-sm font-semibold tracking-widest text-emerald-600">PROJECT EXPERIENCE</p>
          <h2 className="mt-1 text-3xl font-bold text-emerald-950">ประสบการณ์โปรเจกต์ 🚀</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {projectExperience.map((p) => (
              <div key={p.title} className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm transition hover:shadow-md">
                <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-semibold text-emerald-700">
                  {p.period}
                </span>
                <h3 className="mt-2 font-bold text-emerald-950">{p.title}</h3>
                <p className="text-[13px] font-medium text-emerald-600">{p.role}</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-[13px] leading-6 text-emerald-900/70">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
