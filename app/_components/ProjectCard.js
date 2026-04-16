import Image from "next/image";
import {
  CodeBracketIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

export default function ProjectCard({ project }) {
  return (
    <div className="group bg-white rounded-[2.5rem] border border-slate-100 p-4 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500">
      {/* صورة المشروع */}
      <div className="relative h-64 w-full rounded-4xl overflow-hidden bg-slate-100">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* الطبقة التي تظهر عند التحليق */}
        <div className="absolute inset-0 bg-[#1e293b]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
          <a
            href={project.github}
            target="_blank"
            className="p-3 bg-white rounded-full hover:bg-[#2ecc91] hover:text-white transition-colors"
          >
            <CodeBracketIcon className="h-6 w-6" />
          </a>
          <a
            href={project.link}
            target="_blank"
            className="p-3 bg-white rounded-full hover:bg-[#2ecc91] hover:text-white transition-colors"
          >
            <ArrowTopRightOnSquareIcon className="h-6 w-6" />
          </a>
        </div>
      </div>

      {/* تفاصيل المشروع */}
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start ">
          <h3 className="text-2xl font-black text-[#1e293b] group-hover:text-[#2ecc91] transition-colors">
            {project.title}
          </h3>
        </div>

        <p className="text-slate-500 font-medium leading-relaxed ">
          {project.description}
        </p>

        {/* التقنيات المستخدمة */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-slate-50 text-slate-400 text-xs font-bold rounded-lg border border-slate-100"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
