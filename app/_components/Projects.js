import ProjectCard from "./ProjectCard";

const myProjects = [
  {
    title: "Rekreyta Job Platform",
    description:
      "En avancerad fullstack-plattform som revolutionerar rekryteringsprocessen genom att integrera AI för automatisk matchning mellan kandidater och arbetsgivare. Plattformen är byggd för att hantera stora mängder data med fokus på snabbhet och säkerhet.",
    image: "/rk.png", // ضع صور مشاريعك في مجلد public
    tags: [
      "javaScript",
      "Next.js",
      "React",
      "Supabase",
      "NextAuth",
      "Server Components",
      "client Components",
      "Tailwind v4",
      "Responsive Design",
      "AI Integration",
      "Page Router",
      "Dashboard & Analytics",
      "Autentisering",
      "Authorization",
      "PostgreSQL",
    ],
    github: "https://github.com/Mahmod219/Rekreyta",
    link: "https://github.com/Mahmod219/Rekreyta",
  },
  {
    title: "The Wild Oasis Website",
    description:
      "En lyxig bokningsplattform för gäster som vill uppleva naturen med stil. Webbplatsen är byggd med Next.js för maximal prestanda och SEO-optimering. Den tillåter användare att utforska exklusiva stugor, hantera sina bokningar och få en sömlös upplevelse tack vare server-side rendering (SSR) och ett användarvänligt gränssnitt.",
    image: "/wow.png",
    tags: [
      "javaScript",
      "React",
      "Next.js",
      "NextAuth",
      "Tailwind CSS",
      "Page Router",
      "Server Components",
      "client Components",
      "Supabase",
      "Autentisering",
      "Authorization",
    ],
    github: "https://github.com/Mahmod219/The-Wild-Oasis-Website",
    link: "https://the-wild-oasis-website-rquu.vercel.app/",
  },
  {
    title: "The Wild Oasis (Admin Management System)",
    description:
      "En intern administrationsapplikation byggd som en högpresterande SPA (Single Page Application). Systemet hanterar hela hotellets verksamhet, från bokningar och gästhantering till stugunderhåll. Genom att använda React Query säkerställs sömlös datahantering och cache-optimering, vilket ger en blixtsnabb användarupplevelse utan onödiga sidomladdningar.",
    image: "/wo.png",
    tags: [
      "javaScript",
      "React",
      "React SPA",
      "Single Page Application",
      "Styled Components",
      "React Query,",
      "Recharts",
      "client Components",
      "Supabase",
      "Autentisering",
      "Authorization",
      "Dashboard & Analytics",
    ],
    github: "https://github.com/Mahmod219/The-Wild-Oasis",
    link: "https://the-wild-oasiss-hotel.netlify.app/login",
  },
  {
    title: "React-_Pizza_menu",
    description:
      "En interaktiv webbapplikation för pizzabeställning som demonstrerar avancerad hantering av globalt tillstånd. Projektet fokuserar på en sömlös användarupplevelse där validering, varukorgslogik och orderhantering sker i realtid.",
    image: "/pizza.png",
    tags: [
      "javaScript",
      "React",
      "Redux Toolkit",
      "Single Page Application",
      "Tailwind CSS",
    ],
    github: "https://github.com/Mahmod219/The-Wild-Oasis",
    link: "https://the-wild-oasiss-hotel.netlify.app/login",
  },
  {
    title: "Lilian Bygg – Företagswebbplats",
    description:
      "En modern och fullt responsiv webbplats utvecklad för ett byggföretag. Projektet fokuserar på att presentera företagets tjänster och tidigare byggprojekt med en ren och förtroendeingivande design som speglar branschens krav på kvalitet.",
    image: "/lb.png",
    tags: ["JavaScript (Vanilla)", "HTML5", "CSS3", "Responsive Design"],
    github: "https://github.com/Mahmod219/Lilian-Bygg-AB",
    link: "https://mahmod219.github.io/Lilian-Bygg-AB/",
  },
  {
    title: "CSS_Dashboard",
    description:
      "En responsiv och modern admin-dashboard byggd med HTML och CSS.",
    image: "/db.png",
    tags: ["HTML5", "CSS3", "Responsive Design"],
    github: "https://github.com/Mahmod219/My-project_CSS_Dashboard",
    link: "https://mahmod219.github.io/My-project_CSS_Dashboard/",
  },
  // يمكنك إضافة المزيد من المشاريع هنا بسهولة
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        {/* عنوان القسم */}
        <div className="mb-16">
          <h2 className="text-[#2ecc91] font-black tracking-[0.3em] uppercase text-sm mb-3">
            Portfolio
          </h2>
          <h3 className="text-4xl md:text-6xl font-black text-[#1e293b] tracking-tighter">
            Utvalda Projekt
          </h3>
          <p className="mt-4 text-slate-500 text-lg font-medium max-w-xl">
            Här är några av de senaste digitala lösningarna jag har skapat.
            Varje projekt är byggt med fokus på kodkvalitet och
            användarvänlighet.
          </p>
        </div>

        {/* شبكة المشاريع */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {myProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
