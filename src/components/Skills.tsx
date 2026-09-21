import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 bg-white/60 border-y border-emerald-100">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <p className="text-center text-sm font-semibold tracking-widest text-emerald-600">
          MY SKILLS
        </p>
        <h2 className="mt-2 text-center text-3xl font-bold text-emerald-950">
          ทักษะ 🛠️
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-sm text-emerald-800/70">
          ทักษะที่ใช้ทำงานจริง ทั้งสายเทคนิคและการจัดการงาน
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <span className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${group.color}`}>
                {group.category}
              </span>
              <p className="mt-1.5 text-xs text-emerald-700/70">{group.subtitle}</p>
              <div className="mt-4 space-y-4">
                {group.groups.map((g) => (
                  <div key={g.label}>
                    <p className="text-[13px] font-bold text-emerald-950">{g.label}</p>
                    <div className="mt-1.5 flex flex-wrap gap-1.5">
                      {g.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-emerald-100 bg-[#f3faf4] px-3 py-1 text-xs font-medium text-emerald-800"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
