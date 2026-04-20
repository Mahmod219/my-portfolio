const experiences = [
  {
    company: "SOFTWAREUTVECKLARE (FULLSTACK) ",
    role: "Projekt & Kompetensutveckling",
    period: "2023 - PÅGÅENDE",
    description:
      "AI-driven Rekryteringsplattform: Utvecklade en skalbarapplikation i Next.js 15 och Supabase med fokus påautomatiserad matchning.AI & Search: Implementerade Vector Embeddings ochSemantic Search för högprecisionsanalys av PDF-dataBackend & Säkerhet: Arkitekterade databasen iPostgreSQL med avancerad RBAC (Role-Based Access Control) Prestanda: Optimerade användarupplevelsen (UX) genom Server Components och Streaming för minimal laddtid Cloud Integration: Hanterade molnbaserad lagring och realtidsnotiser för stora dokumentflöden.",

    isHighlight: true,
  },
  {
    company: "Kabe AB, Jönköping",
    role: "Montör/kvalitetskontroll ",
    period: "2022 - 2025",
    description:
      "Slutförande av invändiga installationsarbeten, inklusive installation av solcellsbelysningsenheter, köksskåp och väggar, med fokus på precision, användning av hållbara material och organiserade kabelanslutningar. Dessutom utförs en eftermonteringsinspektion och kvalitetskontroll av installationen.",
  },
  {
    company: "Electrolux, Ljungby",
    role: "Montör",
    period: "2022",
    description:
      "Ansvarig för montering av tvättmaskinskomponenter med krav på hög effektivitet och kvalitet.",
  },
  {
    company: "Nibe AB, Markaryd",
    role: "Hårdlöddare",
    period: "2021 - 2022",
    description:
      "Specialiserad lödning av kopparrör med silver och koppar för värmesystem.",
  },
  {
    company: "Mobylife Sverige, Ljungby",
    role: "Mobiltekniker",
    period: "2018 - 2021",
    description:
      "Auktoriserad reparation av Samsung-smartphones. Felsökning, byte av komponenter samt ledning av tekniskt team och lagerhantering.",
  },
  {
    company: "Turkcell, Istanbul",
    role: "Mobiltekniker / Teamledare",
    period: "2014 - 2015",
    description:
      "Reparation av smartphones (iPhone, Samsung, HTC) samt ansvar för reservdelsbeställningar och teamledning.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-50 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-[#2ecc91] font-black tracking-[0.3em] uppercase text-sm mb-3">
            Resa
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-[#1e293b] tracking-tighter">
            Arbetslivserfarenhet
          </h3>
        </div>

        <div className="relative border-l-2 border-slate-200 ml-4 md:ml-0 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 group">
              {/* نقطة المخطط الزمني */}
              <div
                className={`absolute -left-2.25 top-1 w-4 h-4 rounded-full border-4 border-slate-50 transition-colors duration-300 ${exp.isHighlight ? "bg-[#2ecc91] scale-125" : "bg-slate-300 group-hover:bg-[#2ecc91]"}`}
              ></div>

              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1 mb-2">
                <div>
                  <h4
                    className={`text-xl font-black tracking-tight ${exp.isHighlight ? "text-[#2ecc91]" : "text-[#1e293b]"}`}
                  >
                    {exp.company}
                  </h4>
                  <p className="text-slate-600 font-bold text-sm uppercase tracking-wide">
                    {exp.role}
                  </p>
                </div>
                <span className="text-xs font-black text-slate-400 bg-slate-100 px-3 py-1 rounded-full h-fit">
                  {exp.period}
                </span>
              </div>

              <p className="text-slate-500 font-medium leading-relaxed max-w-2xl">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
