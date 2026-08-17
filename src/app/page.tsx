"use client";
import { resumeData } from "@/data/resume";

export default function Home() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-zinc-100 py-10 print:bg-white print:p-0">
      {/* Nút bấm Tải PDF (Ẩn khi in) */}
      <div className="mx-auto max-w-[210mm] mb-4 flex justify-end print:hidden">
        <button
          onClick={handlePrint}
          className="rounded bg-zinc-900 px-4 py-2 text-xs font-semibold text-white shadow hover:bg-zinc-800 transition"
        >
          ⬇ Tải PDF / In CV
        </button>
      </div>

      {/* Khung CV chuẩn A4 */}
      <div className="mx-auto w-[210mm] min-h-[297mm] bg-white p-10 text-zinc-800 shadow-lg print:shadow-none print:w-full print:p-6">
        {/* Header */}
        <header className="border-b-2 border-blue-900/10 pb-4">
          <p className="text-[11px] font-bold tracking-widest text-blue-700 uppercase">
            NETWORK SECURITY
          </p>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 mt-1">
            {resumeData.name}
          </h1>
          <p className="text-xs font-semibold text-sky-600 mt-1">
            {resumeData.status}
          </p>
        </header>

        {/* Bố cục 2 Cột */}
        <div className="grid grid-cols-12 gap-8 mt-6">
          {/* Cột trái (4/12) */}
          <aside className="col-span-4 space-y-6">
            {/* Contact */}
            <div>
              <h2 className="text-[11px] font-bold uppercase tracking-wider text-blue-900/60 mb-2">
              Contact
              </h2>
              <div className="text-xs space-y-1 text-zinc-600">
                <p><span className="font-semibold text-zinc-700">Email:</span> {resumeData.contact.email}</p>
                <p><span className="font-semibold text-zinc-700">Phone:</span> {resumeData.contact.phone}</p>
                <p><span className="font-semibold text-zinc-700">Location:</span> {resumeData.contact.location}</p>
                <p><span className="font-semibold text-zinc-700">GitHub:</span> {resumeData.contact.github}</p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-[11px] font-bold uppercase tracking-wider text-blue-900/60 mb-2">
              Skills
              </h2>
              <div className="space-y-3 text-xs">
                <div>
                  <p className="font-bold text-zinc-800">Networking</p>
                  <p className="text-zinc-600 leading-snug">{resumeData.skills.networking.join(", ")}</p>
                </div>
                <div>
                  <p className="font-bold text-zinc-800">System & OS</p>
                  <p className="text-zinc-600 leading-snug">{resumeData.skills.system.join(", ")}</p>
                </div>
                <div>
                  <p className="font-bold text-zinc-800">Tools & Lab</p>
                  <p className="text-zinc-600 leading-snug">{resumeData.skills.tools.join(", ")}</p>
                </div>
                <div>
                  <p className="font-bold text-zinc-800">Scripting</p>
                  <p className="text-zinc-600 leading-snug">{resumeData.skills.automation.join(", ")}</p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-[11px] font-bold uppercase tracking-wider text-blue-900/60 mb-2">
              Education
              </h2>
              <p className="text-xs font-bold text-zinc-800">{resumeData.education.school}</p>
              <p className="text-xs text-zinc-600">{resumeData.education.degree}</p>
              <p className="text-[11px] text-zinc-400">{resumeData.education.period}</p>
              <p className="text-xs font-medium text-zinc-700 mt-1">GPA: {resumeData.education.gpa}</p>
            </div>
          </aside>

          {/* Cột phải (8/12) */}
          <main className="col-span-8 space-y-6">
            {/* Professional Summary */}
            <div>
              <h2 className="text-[11px] font-bold uppercase tracking-wider text-blue-900/60 mb-2">
              Professional Summary
              </h2>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Sinh viên năm cuối ngành CNTT tại HUFLIT, tập trung vào hạ tầng mạng, quản trị hệ thống và kiểm thử bảo mật. Có kinh nghiệm thực hành mô phỏng lưu lượng trên ns-3, triển khai dịch vụ mạng và viết script tự động hóa trên Linux. Mong muốn tìm kiếm cơ hội thực tập vị trí Network / Security Intern.
              </p>  
            </div>

            {/* Selected Projects */}
            <div>
              <h2 className="text-[11px] font-bold uppercase tracking-wider text-blue-900/60 mb-2">
              Projects
              </h2>
              <div className="space-y-4">
                {resumeData.projects.map((proj) => (
                  <div key={proj.id} className="border-l-2 border-blue-600 pl-3 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-bold text-zinc-900">
                        PROJECT {proj.id} · {proj.title}
                      </h3>
                      <span className="text-[10px] font-semibold text-blue-800 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
                        {proj.status}
                      </span>
                    </div>
                    <ul className="text-xs text-zinc-600 list-disc list-inside space-y-0.5 leading-snug">
                      {proj.details.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {proj.techStack.map((tech) => (
                        <span key={tech} className="bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-blue-800 text-[10px] px-2 py-0.5 rounded font-mono border border-slate-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}