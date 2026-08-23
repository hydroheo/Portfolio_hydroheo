'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function ResumePage() {
  useEffect(() => {
    document.title = 'Resume_Le Dinh Hung';
  }, []);

  const handlePrint = () => {
    document.title = 'Resume_Le Dinh Hung';
    window.print();
  };

  return (
    <div
      className="min-h-screen bg-[#cbd5e1] text-slate-800 antialiased pb-12 print:p-0 print:m-0 print:bg-white"
      style={{ fontFamily: "Calibri, 'Segoe UI', Arial, sans-serif" }}
    >

      {/* 1. TOP ACTION BAR (HIDDEN IN PRINT) */}
      <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-800 px-6 py-3 print:hidden">
        <div className="max-w-[210mm] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded border border-sky-500/40 bg-sky-950/60 text-sky-400 flex items-center justify-center font-bold text-xs shadow-[0_0_10px_rgba(56,189,248,0.25)]">
              DH
            </div>
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">LE DINH HUNG</div>
              <div className="text-[10px] text-slate-400 font-mono">Resume</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 text-xs">
            <Link
              href="/"
              className="px-3.5 py-1.5 rounded bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 transition"
            >
              ← Back to Portfolio
            </Link>

            <a
              href="/Resume.pdf"
              download="Resume_Le Dinh Hung.pdf"
              className="px-4 py-1.5 rounded bg-sky-600 hover:bg-sky-500 text-white font-semibold transition shadow-[0_0_12px_rgba(56,189,248,0.35)] flex items-center gap-1"
            >
              Download CV
            </a>

            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold transition"
            >
              Print / Save PDF
            </button>
          </div>
        </div>
      </header>

      {/* 2. 1-PAGE A4 RESUME CONTAINER */}
      <main className="cv-sheet max-w-[210mm] mx-auto my-6 bg-white shadow-2xl overflow-hidden print:m-0 print:shadow-none print:w-full">

        {/* HEADER SECTION */}
        <div className="bg-[#09111e] text-white px-7 py-4 border-b-2 border-sky-500">
          <div className="text-[10px] text-sky-400 uppercase tracking-wider font-semibold">
            NETWORK ENGINEERING · SYSTEM ADMIN
          </div>
          <h1 className="text-2xl font-bold uppercase tracking-tight mt-0.5 text-white">
            LE DINH HUNG
          </h1>
          <div className="mt-1">
            <span className="inline-block px-2.5 py-0.5 text-[9.5px] text-sky-400 bg-sky-950/80 border border-sky-500/40 rounded font-medium">
              ● OPEN TO INTERN / FRESHER
            </span>
          </div>
        </div>

        {/* 2-COLUMN BODY LAYOUT */}
        <table className="w-full border-collapse m-0 p-0">
          <tbody>
            <tr className="align-top">

              {/* LEFT COLUMN (35%) */}
              <td className="w-[35%] p-5 border-r border-slate-200 align-top space-y-3.5">

                {/* Personal Information */}
                <div className="space-y-2">
                  <h2 className="text-[12px] font-bold tracking-wider text-sky-700 uppercase border-b border-sky-500/30 pb-0.5">
                    PERSONAL INFO
                  </h2>
                  <div className="space-y-2 text-[11.5px] pt-1">
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase font-bold">EMAIL</span>
                      <span className="font-semibold text-slate-900 break-all">dinhhungle96@gmail.com</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase font-bold">PHONE</span>
                      <span className="font-semibold text-slate-900">0767160324</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase font-bold">LOCATION</span>
                      <span className="font-semibold text-slate-900">Ho Chi Minh City, Vietnam</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase font-bold">GITHUB</span>
                      <span className="font-semibold text-sky-700">github.com/hydroheo</span>
                    </div>
                  </div>
                </div>

                {/* Skills Section */}
                <div className="space-y-2">
                  <h2 className="text-[12px] font-bold tracking-wider text-sky-700 uppercase border-b border-sky-500/30 pb-0.5">
                    SKILLS
                  </h2>
                  <div className="text-[11.5px] space-y-3 pt-2">
                    <div>
                      <div className="font-bold text-slate-900">Networking</div>
                      <div className="text-slate-600">OSPF, VLAN (802.1Q), STP/RSTP, VRRP/HSRP, Static Routing, TCP/IP</div>
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Security</div>
                      <div className="text-slate-600">pfSense, MikroTik, IPsec VPN, WireGuard, NAT/PAT, ACLs, FreeRADIUS</div>
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Cloud</div>
                      <div className="text-slate-600">AWS (EC2, S3, CloudFront), Docker, Nginx, Linux (Ubuntu)</div>
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Simulation</div>
                      <div className="text-slate-600">Cisco Packet Tracer, ns-3, Network Modeling, Traffic Analysis</div>
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Tools</div>
                      <div className="text-slate-600">Wireshark, Git, Bash, Python</div>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div className="space-y-2 pt-1">
                  <h2 className="text-[12px] font-bold tracking-wider text-sky-700 uppercase border-b border-sky-500/30 pb-0.5">
                    EDUCATION
                  </h2>
                  <div className="text-[10.5px] space-y-0.5 pt-1">
                    <div className="font-bold text-slate-900">HUFLIT University</div>
                    <div className="text-slate-700 font-medium">Bachelor of Cybersecurity</div>
                    <div className="text-slate-500 text-[9.5px]">Sep 2023 — Present</div>
                    <div className="text-sky-700 font-bold text-[10.5px] pt-0.5">Undergraduate</div>
                  </div>
                </div>

                {/* Soft Skills */}
                <div className="space-y-2 pt-1">
                  <h2 className="text-[12px] font-bold tracking-wider text-sky-700 uppercase border-b border-sky-500/30 pb-0.5">
                    SOFT SKILLS
                  </h2>
                  <div className="text-[10.5px] text-slate-600 space-y-0.5 pt-1">
                    <div>• Teamwork & Collaboration</div>
                    <div>• Problem Solving & Analytical Mindset</div>
                    <div>• Fast Learner & Technology Adaptability</div>
                  </div>
                </div>

              </td>

              {/* RIGHT COLUMN (65%) */}
              <td className="w-[65%] p-5 align-top space-y-3">

                {/* PROFESSIONAL SUMMARY */}
                <div className="space-y-2">
                  <h2 className="text-[12px] font-bold tracking-wider text-sky-700 uppercase border-b border-sky-500/30 pb-0.5">
                    PROFESSIONAL SUMMARY
                  </h2>
                  <p className="text-[12px] leading-[1.7] text-slate-700 text-justify pt-1">
                    Cybersecurity student at HUFLIT with a solid foundation in network infrastructure, routing &amp; switching, and access control systems developed through intensive academic projects and hands-on lab deployments. Experienced in architecting centralized AAA environments (FreeRADIUS, MySQL), containerized services (Docker, Nginx), and cloud edge storage (AWS EC2, S3, CloudFront). Self-driven, proactive in troubleshooting, and seeking an Intern/Fresher position in Network Engineering, System Administration, or Security Operations to contribute and grow in a production environment.
                  </p>
                </div>

                {/* Featured Projects */}
                <div className="space-y-2.5 pt-0.5">
                  <h2 className="text-[12px] font-bold tracking-wider text-sky-700 uppercase border-b border-sky-500/30 pb-0.5">
                    PROJECTS
                  </h2>

                  {/* RADIUS SERVER WITH MARKETING PROJECT */}
                  <div className="p-2.5 rounded border border-slate-200 bg-slate-50/70 space-y-3 print:bg-transparent">
                    <div className="flex flex-col gap-0.5">
                      <div className="flex justify-between items-center">
                        <span className="text-[9.5px] text-slate-400 font-bold uppercase tracking-widest font-mono">
                          Project 1
                        </span>
                        <span className="bg-[#f0f9ff] text-[#0369a1] px-1.5 py-0.5 rounded text-[9px] font-bold tracking-wide print:border print:border-[#bae6fd]">
                          Completed
                        </span>
                      </div>
                      <h3 className="text-[14px] font-bold text-slate-900">
                        RADIUS Server with WiFi Marketing &amp; Captive Portal
                      </h3>
                    </div>

                    <ul className="space-y-2 text-[10px] text-slate-600">
                      <li className="relative pl-3">
                        <span className="absolute left-0 top-0 text-slate-400 font-bold">•</span>
                        <span className="font-semibold text-slate-900">Centralized AAA Architecture:</span>{' '}
                        Deployed FreeRADIUS backend with MySQL/MariaDB for unified authentication, user group management, and policy control across network access points.
                      </li>
                      <li className="relative pl-3">
                        <span className="absolute left-0 top-0 text-slate-400 font-bold">•</span>
                        <span className="font-semibold text-slate-900">WiFi Marketing &amp; Captive Portal:</span>{' '}
                        Designed interactive captive portal landing page displaying promotional banners and collecting user logins before granting internet access.
                      </li>
                      <li className="relative pl-3">
                        <span className="absolute left-0 top-0 text-slate-400 font-bold">•</span>
                        <span className="font-semibold text-slate-900">Bandwidth &amp; Access Control:</span>{' '}
                        Implemented QoS bandwidth limits (download/upload speed), session timeouts, and voucher-based access via RADIUS reply attributes.
                      </li>
                      <li className="relative pl-3">
                        <span className="absolute left-0 top-0 text-slate-400 font-bold">•</span>
                        <span className="font-semibold text-slate-900">Network Security &amp; Accounting:</span>{' '}
                        Enforced VLAN segmentation between guest marketing and corporate subnets; logged real-time accounting data for audit trails.
                      </li>
                    </ul>

                    <div className="flex flex-wrap gap-1 pt-1.5 border-t border-slate-200/80">
                      {[
                        "FreeRADIUS",
                        "WiFi Marketing",
                        "Captive Portal",
                        "MySQL",
                        "MikroTik / pfSense",
                        "VLAN",
                        "QoS",
                        "Linux"
                      ].map((t, i) => (
                        <span key={i} className="text-[10px] bg-white border border-slate-200 px-1.5 py-0.2 rounded text-slate-600">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="pt-0.5 text-[10px]">
                      <span className="font-bold text-slate-900">Watch demo: </span>
                      <a
                        href="https://youtu.be/dlkRJqw1n94"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sky-700 font-semibold hover:text-sky-800 hover:underline transition"
                      >
                        https://youtu.be/dlkRJqw1n94
                      </a>
                    </div>
                  </div>

                  {/* PROJECT 02 */}
                  <div className="p-2.5 rounded border border-slate-200 bg-slate-50/70 space-y-3 print:bg-transparent mt-4">
                    <div className="flex flex-col gap-0.5">
                      <div className="flex justify-between items-center">
                        <span className="text-[9.5px] text-slate-400 font-bold uppercase tracking-widest font-mono">
                          Project 2
                        </span>
                        <span className="bg-[#f0f9ff] text-[#0369a1] px-1.5 py-0.5 rounded text-[9px] font-bold tracking-wide print:border print:border-[#bae6fd]">
                          Completed
                        </span>
                      </div>
                      <h3 className="text-[14px] font-bold text-slate-900">
                        Secure Cloud Photo Sharing Website
                      </h3>
                    </div>

                    <div className="text-[11.5px] text-slate-600 leading-[1.7] text-justify mt-1 space-y-2">
                      <p>
                        Developed a ReactJS Single Page Application (SPA) integrated with a FastAPI backend via Nginx Reverse Proxy. Managed the JWT authentication lifecycle in the browser, securely attaching Access Tokens to Authorization headers to protect user resources.
                      </p>
                      <p>
                        Integrated AWS CloudFront RSA-2048 Signed URLs (60s TTL) for secure, ephemeral image rendering from private S3 buckets. Containerized the frontend using Docker &amp; Nginx, configured internal bridge networks, and assisted in AWS EC2 deployment.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1 pt-1.5 border-t border-slate-200/80">
                      {[
                        "ReactJS",
                        "Docker",
                        "Nginx",
                        "AWS CloudFront",
                        "JWT",
                        "RESTful API"
                      ].map((t, i) => (
                        <span key={i} className="text-[10px] bg-white border border-slate-200 px-1.5 py-0.2 rounded text-slate-600">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="pt-0.5 text-[10px]">
                      <span className="font-bold text-slate-900">Watch demo: </span>
                      <a
                        href="https://youtu.be/XVCio4Ciaeo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sky-700 font-semibold hover:text-sky-800 hover:underline transition"
                      >
                        https://youtu.be/XVCio4Ciaeo
                      </a>
                    </div>
                  </div>

                </div>



              </td>

            </tr>
          </tbody>
        </table>

      </main>

      {/* 3. PRINT ENGINE CONFIGURATION */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @media print {
          * {
            font-variant-ligatures: none !important;
            -webkit-font-variant-ligatures: none !important;
            font-family: Calibri, 'Segoe UI', Arial, sans-serif !important;
            text-rendering: geometricPrecision !important;
            letter-spacing: normal !important;
          }
          @page {
            size: A4 portrait;
            margin: 0 !important;
          }
          html, body {
            margin: 0 !important;
            padding: 0 !important;
            background: #ffffff !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          header {
            display: none !important;
          }
          .cv-sheet {
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            box-shadow: none !important;
            border: none !important;
            page-break-after: avoid !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          table, tr, td, div {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
        }
      `}} />

    </div>
  );
}