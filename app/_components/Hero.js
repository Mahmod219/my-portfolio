"use client";

import Image from "next/image";
import my_Image from "@/public/my_Image.png";
import linkedin from "@/public/linkedin.png";
import github from "@/public/github.png";
import { Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center bg-[#f8fafc] px-6 py-12 md:py-20 mt-10 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* القسم الأيسر: المحتوى النصي */}
        <div className="order-2 lg:order-1 text-left space-y-8">
          <div className="space-y-5">
            {/* Tag الحالة */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2ecc91]/10 text-[#2ecc91] text-xs font-black uppercase tracking-[0.2em]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2ecc91] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2ecc91]"></span>
              </span>
              Tillgänglig för uppdrag
            </div>

            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-[#1e293b] tracking-tighter leading-[1.1]">
              Hej, jag heter <br />
              <span className="text-[#2ecc91]">Mahmod.</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-xl leading-relaxed">
              Driven och lösningsorienterad{" "}
              <span className="text-black font-bold">
                Fullstack-utvecklare{" "}
              </span>{" "}
              med expertis inom modern webbutveckling. Jag har en bevisad
              förmåga att bygga komplexa applikationer från grunden, med
              särskilt fokus på Next.js 15, TypeScript och AI-drivna funktioner.
              Mitt senaste projekt, en avancerad rekryteringsplattform,
              demonstrerar min skicklighet i att integrera Vector Embeddings och
              Semantic Search för att lösa verkliga affärsproblem. Jag brinner
              för Clean Code, hög prestanda och att skapa intuitiva
              användarupplevelser som levererar faktiskt affärsvärde.
            </p>
          </div>

          {/* الكلمات المفتاحية من السيفي */}
          <div className="flex flex-wrap gap-2">
            {[
              "JavaScript (ES6+)",
              "TypeScript",
              "Next.js",
              "React",
              "Supabase",
              "PostgreSQL",
              "Vector Databases (pgvector)",
              "RESTful APIs RBAC (Role-Based Access Control)",
              "AI Integration",
              "Embeddings",
              "Semantic Search",
              "Tailwind CSS",
              "StyledComponents CSS",
              "Bootstrap CSS",
              "Git/Github",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-slate-600 text-xs font-bold shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* أزرار الأكشن */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-[#1e293b] text-white rounded-2xl font-bold shadow-xl shadow-slate-200 hover:bg-[#0f172a] hover:-translate-y-1 transition-all flex items-center gap-2"
            >
              Visa projekt
            </a>
            <a
              href="mailto:Mahmod219@gmail.com"
              className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold hover:bg-slate-50 hover:-translate-y-1 transition-all flex items-center gap-2 shadow-sm"
            >
              Kontakta mig
            </a>
          </div>

          {/* روابط التواصل (من السيفي) */}
          <div className="flex gap-8 pt-6 items-center border-t border-slate-200 w-fit">
            <a
              href="https://github.com/Mahmod219"
              target="_blank"
              className="text-slate-400 hover:text-[#1e293b] transition-all transform hover:scale-110"
            >
              <Image src={github} width={40} height={40} alt="github" />
            </a>
            <a
              href="https://www.linkedin.com/in/mahmod-alayoubi-210a57270/"
              target="_blank"
              className="text-slate-400 hover:text-[#0077b5] transition-all transform hover:scale-110"
            >
              <Image src={linkedin} width={40} height={40} alt="Linkedin" />
            </a>
            <a
              href="tel:0738719268"
              className="text-slate-400 hover:text-[#2ecc91] transition-all transform hover:scale-110 flex items-center gap-2 font-bold text-sm"
            >
              <Phone size={22} />
              <span className="hidden md:inline text-slate-500">
                073 871 92 68
              </span>
            </a>
          </div>
        </div>

        {/* القسم الأيمن: الصورة بإطار فني */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
          {/* لمسة خلفية ملونة */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-linear-to-br from-[#2ecc91]/10 to-transparent rounded-full blur-3xl -z-10"></div>

          <div className="relative group">
            {/* الإطار الخارجي المتفاعل */}
            <div className="absolute -inset-4 bg-linear-to-tr from-[#2ecc91]/30 via-transparent to-[#1e293b]/10 rounded-[3.5rem] blur-2xl opacity-40 group-hover:opacity-70 transition duration-1000"></div>

            <div className="relative bg-gray-100 p-3 md:p-5 rounded-[3.5rem] shadow-2xl border border-white/40 overflow-hidden transform hover:scale-[1.01] transition-all duration-500">
              <Image
                src={my_Image}
                width={450}
                height={550}
                alt="Mahmod Alayoubi"
                className="rounded-[2.5rem] object-cover filter  contrast-105"
                priority
              />

              {/* Overlay صغير يظهر عند الهوفر */}
              <div className="absolute inset-0 bg-linear-to-t from-[#1e293b]/60 to-transparent  opacity-100 transition-opacity duration-500 flex items-end p-10">
                <p className="text-white font-bold text-lg">
                  Jönköping, Sverige
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
