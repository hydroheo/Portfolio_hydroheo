'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const tools = ['pfSense', 'FreeRADIUS', 'Wireshark', 'ns-3', 'Packet Tracer', 'Linux WSL'];
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const i = loopNum % tools.length;
    const fullText = tools[i];

    let timer: NodeJS.Timeout;

    if (isDeleting) {
      // Deleting character by character
      timer = setTimeout(() => {
        setText(fullText.substring(0, text.length - 1));
        setTypingSpeed(40); // Delete fast
      }, typingSpeed);
    } else {
      // Typing character by character
      timer = setTimeout(() => {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(120); // Type normally
      }, typingSpeed);
    }

    // Logic to switch between deleting and typing
    if (!isDeleting && text === fullText) {
      // Pause when the word is fully typed
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && text === '') {
      // Switch to next word when fully deleted
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(500); // Pause before typing next word
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);
  const handleScrollTo = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    const navbarHeight = 85;
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 500; // Thời gian cuộn 800ms cực êm
    let startTime: number | null = null;

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);

      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  return (
    <div className="min-h-screen bg-[#0b1120] text-slate-200 antialiased font-sans selection:bg-cyan-500 selection:text-slate-950">

      {/* 1. TOP NAVBAR (HOVER PHÁT SÁNG & CUỘN LƯỚT SIÊU MƯỢT) */}
      <header className="sticky top-0 z-40 bg-[#0b1120]/90 backdrop-blur-md border-b border-slate-800/70 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* Logo Brand */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="w-10 h-10 rounded-lg border border-cyan-500/40 bg-cyan-950/40 flex items-center justify-center font-mono text-sm font-bold text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.25)] group-hover:border-cyan-400 transition">
              DH
            </div>
            <div>
              <div className="text-xs font-bold tracking-wider text-white uppercase group-hover:text-cyan-300 transition">
                LE DINH HUNG
              </div>
              <div className="text-[10px] font-mono text-cyan-400/90 tracking-tight flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block animate-pulse shadow-[0_0_6px_#22d3ee]" />
                NETWORK ENGINEERING · SYSTEM ADMIN
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono">
            {[
              { label: 'Projects', id: 'projects' },
              { label: 'Technology Stack', id: 'tech-stack' },
              { label: 'Resume', id: 'resume' },
              { label: 'Journey', id: 'journey' },
              { label: 'Contact', id: 'contact' },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleScrollTo(e, item.id)}
                className="relative py-1 text-slate-400 hover:text-cyan-300 transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(6,182,212,0.8)] after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-cyan-400 after:shadow-[0_0_8px_#22d3ee] after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-xl border border-slate-800 bg-[#111c2e] flex items-center justify-center text-slate-200 hover:border-cyan-400 hover:text-cyan-400 transition cursor-pointer shadow-lg active:scale-90 duration-200"
            aria-label="Toggle Menu"
          >
            <span className="text-xl font-mono leading-none select-none">
              {mobileMenuOpen ? '✕' : '＝'}
            </span>
          </button>
        </div>
      </header>

      {/* 2. DYNAMIC MOBILE MENU (HIỆU ỨNG TRƯỢT DYNAMIC & STAGGERED TỪNG DÒNG) */}
      <div
        className={`fixed inset-0 z-[9999] bg-[#0b1120] flex flex-col md:hidden transition-all duration-500 cubic-bezier(0.16,1,0.3,1) ${mobileMenuOpen
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-8 pointer-events-none'
          }`}
      >
        {/* Top Bar inside Menu */}
        <div className="px-6 py-4 flex items-center justify-between border-b border-slate-800 bg-[#0b1120]">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg border border-cyan-500/40 bg-cyan-950/50 flex items-center justify-center font-mono text-sm font-bold text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.25)]">
              DH
            </div>
            <div>
              <div className="text-xs font-bold tracking-wider text-white uppercase">
                LE DINH HUNG
              </div>
              <div className="text-[10px] font-mono text-cyan-400 tracking-tight">
                NETWORK ENGINEERING · SYSTEM ADMIN
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="w-10 h-10 rounded-xl border border-slate-800 bg-[#111c2e] flex items-center justify-center text-slate-300 hover:text-white hover:border-slate-700 transition cursor-pointer shadow-lg active:scale-90 duration-200"
            aria-label="Close Menu"
          >
            <span className="text-lg font-mono leading-none">✕</span>
          </button>
        </div>

        {/* Danh sách mục Menu với hiệu ứng bay vào so le (Staggered Transition) */}
        <nav className="flex flex-col divide-y divide-slate-800/80 font-mono text-base bg-[#0b1120] flex-1">
          {[
            { label: 'Projects', id: 'projects', num: '01 //', delay: '100ms' },
            { label: 'Technology Stack', id: 'tech-stack', num: '02 //', delay: '150ms' },
            { label: 'Resume', id: 'resume', num: '03 //', delay: '200ms' },
            { label: 'Journey', id: 'journey', num: '04 //', delay: '250ms' },
            { label: 'Contact', id: 'contact', num: '05 //', delay: '300ms' },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleScrollTo(e, item.id)}
              style={{ transitionDelay: mobileMenuOpen ? item.delay : '0ms' }}
              className={`px-6 py-5 text-slate-200 hover:text-cyan-400 hover:bg-[#111c2e]/60 flex items-center justify-between group transition-all duration-300 cursor-pointer ${mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}
            >
              <span className="font-semibold tracking-wide group-hover:translate-x-2 transition-transform duration-200">
                {item.label}
              </span>
              <span className="text-xs text-slate-500 group-hover:text-cyan-400/80 transition-colors">
                {item.num}
              </span>
            </a>
          ))}
        </nav>
      </div>

      {/* 2. HERO SECTION */}
      <main className="max-w-7xl mx-auto px-6 pt-6 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* LEFT COLUMN: HERO CONTENT */}
        <div className="lg:col-span-7 space-y-6">

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 rounded">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
            Open to Internship Opportunities
          </div>

          {/* Subtitle */}
          <div className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
            NETWORK ENGINEERING · SYSTEM ADMIN · IT INFRASTRUCTURE
          </div>

          {/* Large Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-none uppercase">
            LE DINH <br />
            <span className="text-cyan-400 drop-shadow-[0_0_25px_rgba(6,182,212,0.35)]">HUNG</span>
          </h1>

          {/* Role Chips */}
          <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
            <span className="px-3 py-1 rounded bg-[#111c2e] border border-slate-800 text-slate-300">
              Network Engineering Student
            </span>
            <span className="px-3 py-1 rounded bg-[#111c2e] border border-slate-800 text-slate-300">
              System / Network Admin
            </span>
            <span className="px-3 py-1 rounded bg-[#111c2e] border border-slate-800 text-slate-300">
              Open to SOC &amp; Security
            </span>
          </div>

          {/* Bio Description */}
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl">
            I design and deploy enterprise network infrastructures, specializing in centralized AAA authentication, secure captive portals, and firewall routing policies for robust access control.
          </p>

          {/* Cyber Terminal Prompt */}
          <div className="p-3 bg-[#111c2e] border border-slate-800 rounded font-mono text-xs max-w-lg flex items-center gap-2 overflow-hidden whitespace-nowrap">
            <span className="text-cyan-400">hung@sec:~$</span>
            <span className="text-slate-300">working_with</span>
            <span className="text-slate-500">--tool</span>
            <div className="flex items-center min-w-[120px]">
              <span className="text-cyan-300 font-semibold">{text}</span>
              <span className="inline-block w-2.5 h-4 bg-cyan-400 animate-pulse ml-0.5" />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-xs">
            <a
              href="#projects"
              onClick={(e) => handleScrollTo(e, 'projects')}
              className="px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold tracking-wide transition shadow-[0_0_20px_rgba(6,182,212,0.35)] cursor-pointer"
            >
              View Projects
            </a>

            <Link
              href="/resume"
              className="px-6 py-3 rounded bg-[#111c2e] hover:bg-slate-800 border border-slate-700 text-slate-200 transition"
            >
              View Resume
            </Link>

            <a
              href="/Resume.pdf"
              download="CV_LeDinhHung.pdf"
              className="text-slate-400 hover:text-cyan-400 transition flex items-center gap-1 pl-2 font-semibold"
            >
              Download CV ↓
            </a>

            {/* 4. Nút liên kết GitHub */}
            <a
              href="https://github.com/hydroheo"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white transition flex items-center gap-1"
            >
              GitHub ↗
            </a>
          </div>

          {/* Stats Bar (Pure Network Focus) */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-800 max-w-lg">
            <div>
              <div className="text-3xl font-extrabold text-white font-mono">AWS/AAA</div>
              <div className="text-[11px] font-mono text-slate-400 uppercase mt-0.5">Cloud & Auth Systems</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-white font-mono">
                24<span className="text-xs text-slate-500 font-normal">/7</span>
              </div>
              <div className="text-[11px] font-mono text-slate-400 uppercase mt-0.5">Access Control</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-white font-mono">100%</div>
              <div className="text-[11px] font-mono text-slate-400 uppercase mt-0.5">Hands-on Labs</div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: CYBER PROFILE FRAME */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
          <div className="w-full max-w-md bg-[#111c2e] border border-cyan-900/40 rounded-lg p-3 shadow-2xl relative">

            {/* Card Header */}
            <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 px-1 pb-2">
              <span>PROFILE // 001</span>
              <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                ACTIVE
              </span>
            </div>

            {/* Portrait Image Container */}
            <div className="relative aspect-[3/4] w-full rounded overflow-hidden border border-slate-800 bg-[#0b1120] group">
              <img
                src="/avatar.jpg"
                alt="Profile Avatar"
                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition duration-500"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-transparent to-transparent opacity-60" />
            </div>

            {/* Card Footer Tag */}
            <div className="pt-2.5 px-1 text-[10px] font-mono text-slate-500 uppercase tracking-wider">
              HUFLIT • HCMC
            </div>

            {/* Current Focus Overlay Card */}
            <div className="mt-3 bg-[#0b1120] border border-slate-800/80 rounded p-3 text-xs font-mono">
              <div className="text-[10px] text-slate-500 uppercase">CURRENT FOCUS</div>
              <div className="text-slate-200 flex items-center gap-1.5 mt-0.5 font-semibold">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                ENTERPRISE NETWORKING & PERIMETER SECURITY
              </div>
            </div>

          </div>
        </div>

      </main>

      {/* ========================================================================= */}
      {/* 01. FEATURED PROJECTS & NETWORK ARCHITECTURE */}
      {/* ========================================================================= */}
      <section id="projects" className="scroll-mt-24 max-w-7xl mx-auto px-6 py-20 space-y-12 border-t border-slate-900">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#111c2e] border border-slate-800 text-cyan-400">
              01
            </div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
              FEATURED PROJECTS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Infrastructures I have <span className="text-cyan-400">designed, secured</span>, and deployed.
            </h2>
          </div>
          <p className="text-xs text-slate-400 max-w-sm font-mono leading-relaxed">
            Practical work across enterprise routing & switching, firewall policies, captive portals, and centralized AAA authentication.
          </p>
        </div>

        {/* Project Container Card */}
        <div className="rounded-2xl bg-[#111c2e] border border-slate-800 overflow-hidden shadow-2xl">

          {/* Card Top Title */}
          <div className="p-8 border-b border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-mono text-cyan-400 uppercase font-seibold">PROJECT 01</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                RADIUS Server with WiFi Marketing &amp; Captive Portal
              </h3>
              <p className="text-xs text-slate-400">
                Centralized AAA architecture using FreeRADIUS, MySQL, and captive portals for user authentication, bandwidth control, and WiFi marketing.
              </p>
            </div>
            <div className="self-start md:self-center px-4 py-2 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block animate-pulse mr-2" />
              STATUS: <strong className="text-white">Completed / Video Walkthrough</strong>
            </div>
          </div>

          {/* Sơ đồ luồng kiến trúc Mạng (WAN -> Edge -> Routing -> Access -> Simulation) */}
          <div className="p-8 border-b border-slate-800/80 space-y-4">
            <div className="flex justify-between items-center text-[11px] font-mono text-slate-500">
              <span className="text-cyan-400 uppercase font-bold tracking-wider">NETWORK ARCHITECTURE PIPELINE</span>
              <span>Traffic &amp; Routing Data Flow</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
              {[
                { label: "USER ACCESS", value: "Captive Portal" },
                { label: "AUTHENTICATION", value: "RADIUS Server" },
                { label: "DATABASE", value: "MySQL/MariaDB" },
                { label: "ENFORCEMENT", value: "MikroTik / pfSense" },
                { label: "TRAFFIC CONTROL", value: "QoS & VLANs" },
                { label: "LOGGING", value: "Accounting Data" }
              ].map((step, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#0b1120] border border-slate-800 flex flex-col items-center justify-center text-center group hover:border-cyan-500/50 transition">
                  <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider">{step.label}</span>
                  <span className="text-sm font-bold text-white mt-1 group-hover:text-cyan-300 transition">{step.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What I Built Details Grid */}
          <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">

            <div className="lg:col-span-2 space-y-4">
              <div className="text-xs font-mono text-cyan-400 uppercase font-bold tracking-wider">
                WHAT I BUILT &amp; CONFIGURED
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { num: "01", title: "Centralized AAA Architecture", desc: "Deployed FreeRADIUS backend with MySQL/MariaDB for unified authentication, user group management, and policy control across network access points." },
                  { num: "02", title: "WiFi Marketing & Captive Portal", desc: "Designed interactive captive portal landing page displaying promotional banners and collecting user logins before granting internet access." },
                  { num: "03", title: "Bandwidth & Access Control", desc: "Implemented QoS bandwidth limits (download/upload speed), session timeouts, and voucher-based access via RADIUS reply attributes." },
                  { num: "04", title: "Network Security & Accounting", desc: "Enforced VLAN segmentation between guest marketing and corporate subnets; logged real-time accounting data for audit trails." },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#0b1120]/60 border border-slate-800/80 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-slate-500">{item.num}</span>
                      <h4 className="text-sm font-bold text-slate-200">{item.title}</h4>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed pl-5">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Demo & Tools Box */}
            <div className="space-y-6 lg:border-l lg:border-slate-800 lg:pl-8">
              <div className="space-y-2">
                <div className="text-xs font-mono text-cyan-400 uppercase font-bold tracking-wider">WATCH DEMO</div>
                <a
                  href="https://youtu.be/dlkRJqw1n94"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center w-full sm:w-auto gap-2 px-5 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 border border-cyan-500 text-white font-mono text-xs font-semibold transition shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                >
                  ▶ Watch Video Demo ↗
                </a>
              </div>

              <div className="space-y-2.5">
                <div className="text-xs font-mono text-cyan-400 uppercase font-bold tracking-wider">NETWORKING TOOLS</div>
                <div className="flex flex-wrap gap-2">
                  {["FreeRADIUS", "WiFi Marketing", "Captive Portal", "MySQL", "MikroTik / pfSense", "VLAN", "QoS", "Linux"].map((tool, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-[#0b1120] border border-slate-800 text-xs font-mono text-slate-300">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* PROJECT 02 */}
        {/* ========================================================================= */}
        <div className="rounded-2xl bg-[#111c2e] border border-slate-800 overflow-hidden shadow-2xl mt-12">

          {/* Card Top Title */}
          <div className="p-8 border-b border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-mono text-cyan-400 uppercase font-semibold">PROJECT 02</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Secure Cloud Photo Sharing Website
              </h3>
              <p className="text-xs text-slate-400">
                Developed a secure photo sharing SPA utilizing ReactJS, JWT authentication, and CloudFront Signed URLs, fully containerized and deployed on AWS EC2.
              </p>
            </div>
            <div className="self-start md:self-center px-4 py-2 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block animate-pulse mr-2" />
              STATUS: <strong className="text-white">Completed / Video Walkthrough</strong>
            </div>
          </div>

          {/* Architecture Pipeline */}
          <div className="p-8 border-b border-slate-800/80 space-y-4">
            <div className="flex justify-between items-center text-[11px] font-mono text-slate-500">
              <span className="text-cyan-400 uppercase font-bold tracking-wider">ARCHITECTURE PIPELINE</span>
              <span>Data Flow &amp; Security Checkpoints</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
              {[
                { label: "CLIENT REQUEST", value: "React SPA" },
                { label: "REVERSE PROXY", value: "Nginx Gateway" },
                { label: "APPLICATION CORE", value: "FastAPI / Docker" },
                { label: "EDGE CDN", value: "CloudFront OAC" },
                { label: "STORAGE VAULT", value: "Private S3 Bucket" },
                { label: "AUTH & INTEGRITY", value: "RSA-2048 / TTL" }
              ].map((step, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#0b1120] border border-slate-800 flex flex-col items-center justify-center text-center group hover:border-cyan-500/50 transition">
                  <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider">{step.label}</span>
                  <span className="text-sm font-bold text-white mt-1 group-hover:text-cyan-300 transition">{step.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What I Built Details Grid */}
          <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">

            <div className="lg:col-span-2 space-y-4">
              <div className="text-xs font-mono text-cyan-400 uppercase font-bold tracking-wider">
                WHAT I BUILT &amp; CONFIGURED
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { num: "01", title: "Web SPA & API Gateway", desc: "Developed the React UI and established interactions with the FastAPI backend via a secure Nginx Reverse Proxy (:80)." },
                  { num: "02", title: "JWT Auth & Authorization", desc: "Managed JWT Access Token lifecycle in the browser, attaching tokens to Authorization headers to protect user resources." },
                  { num: "03", title: "CloudFront Signed URLs", desc: "Integrated secure image rendering using RSA digitally signed links that self-destruct after a 60-second TTL." },
                  { num: "04", title: "Containerization & Deploy", desc: "Packaged the Frontend using Docker & Nginx, configured bridge networks in Docker Compose, and assisted AWS EC2 deployment." },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#0b1120]/60 border border-slate-800/80 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-slate-500">{item.num}</span>
                      <h4 className="text-sm font-bold text-slate-200">{item.title}</h4>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed pl-5">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Demo & Tools Box */}
            <div className="space-y-6 lg:border-l lg:border-slate-800 lg:pl-8">
              <div className="space-y-2">
                <div className="text-xs font-mono text-cyan-400 uppercase font-bold tracking-wider">PROJECT DEMO</div>
                <a
                  href="https://youtu.be/XVCio4Ciaeo"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center w-full sm:w-auto gap-2 px-5 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 border border-cyan-500 text-white font-mono text-xs font-semibold transition shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                >
                  ▶ Watch Video Demo ↗
                </a>
              </div>

              <div className="space-y-2.5">
                <div className="text-xs font-mono text-cyan-400 uppercase font-bold tracking-wider">CLOUD &amp; SEC TOOLS</div>
                <div className="flex flex-wrap gap-2">
                  {["ReactJS", "Docker", "Nginx", "AWS CloudFront", "JWT", "RESTful API"].map((tool, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-[#0b1120] border border-slate-800 text-xs font-mono text-slate-300">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* ========================================================================= */}
      {/* 02. TECHNOLOGY STACK (NETWORK FOCUS) */}
      {/* ========================================================================= */}
      <section id="tech-stack" className="scroll-mt-24 max-w-7xl mx-auto px-6 py-20 space-y-12 border-t border-slate-900">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#111c2e] border border-slate-800 text-cyan-400">
              02
            </div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
              NETWORK ENGINEERING STACK
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Technology Stack Across <span className="text-cyan-400">My Projects</span>
            </h2>
          </div>
          <p className="text-xs text-slate-400 max-w-sm font-mono leading-relaxed">
            Core protocols, simulation platforms, firewall appliances, and automation scripts used in network projects.
          </p>
        </div>

        {/* 5 Hộp Công nghệ Mạng */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { tag: "NET", title: "Routing & Switching", skills: "OSPF • VLAN (802.1Q) • STP / RSTP • VRRP/HSRP • Static Routing" },
            { tag: "SEC", title: "Firewall & VPN", skills: "pfSense / MikroTik • IPsec VPN • WireGuard • NAT/PAT • ACLs" },
            { tag: "OPS", title: "Simulation & Ops", skills: "Packet Tracer • Wireshark • Zabbix / PRTG • Bash/Python Scripting" },
            { tag: "AAA", title: "Auth & Identity", skills: "FreeRADIUS • Captive Portal • Active Directory • Linux / MySQL" },
            { tag: "CLD", title: "Cloud & DevSecOps", skills: "AWS EC2/S3 • CloudFront OAC • Docker • FastAPI • Nginx" },
          ].map((card, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-[#111c2e] border border-slate-800/80 flex flex-col justify-between space-y-6 hover:border-cyan-500/40 transition group">
              <div className="w-9 h-9 rounded-lg bg-[#0b1120] border border-slate-800 flex items-center justify-center font-mono text-xs font-bold text-cyan-400 group-hover:border-cyan-500/40 transition">
                {card.tag}
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition">{card.title}</h3>
                <p className="text-xs font-mono text-slate-400 leading-relaxed">{card.skills}</p>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ========================================================================= */}
      {/* 03. RESUME PREVIEW (NETWORK FOCUS) */}
      {/* ========================================================================= */}
      <section id="resume" className="scroll-mt-24 max-w-7xl mx-auto px-6 py-20 space-y-12 border-t border-slate-900">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#111c2e] border border-slate-800 text-cyan-400">
                03
              </div>
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                RESUME PREVIEW
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
                Focused on becoming a capable <span className="text-cyan-400">Network &amp; Infrastructure</span> engineer.
              </h2>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
              Cybersecurity student at HUFLIT with hands-on expertise in network architecture, routing &amp; switching, firewall deployment, and enterprise AAA authentication systems.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-xs">
              <Link
                href="/resume"
                className="px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold tracking-wide transition shadow-[0_0_15px_rgba(6,182,212,0.3)]"
              >
                View Full Resume
              </Link>

              <a
                href="/Resume.pdf"
                download="CV_LeDinhHung.pdf"
                className="px-6 py-3.5 rounded-xl bg-[#111c2e] hover:bg-slate-800 border border-slate-700 text-slate-300 transition font-semibold"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-[#111c2e] border border-slate-800 divide-y divide-slate-800/80 shadow-2xl overflow-hidden font-mono">

              <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-slate-900/40 transition">
                <span className="text-[10px] text-slate-500 uppercase tracking-wider w-24">EDUCATION</span>
                <div className="flex-1">
                  <div className="text-sm font-bold text-white">Bachelor of Cybersecurity</div>
                  <div className="text-xs text-slate-400">HUFLIT • Sep 2023 – Present</div>
                </div>
                <span className="text-xs text-cyan-400 font-bold self-start sm:self-center">Undergraduate</span>
              </div>

              <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-slate-900/40 transition">
                <span className="text-[10px] text-slate-500 uppercase tracking-wider w-24">DIRECTION</span>
                <div className="flex-1">
                  <div className="text-sm font-bold text-white">Network Engineering / Administration</div>
                  <div className="text-xs text-slate-400">Intern / Fresher opportunity</div>
                </div>
                <span className="text-xs text-cyan-400 font-bold self-start sm:self-center">HCMC</span>
              </div>

              <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-slate-900/40 transition">
                <span className="text-[10px] text-slate-500 uppercase tracking-wider w-24">CORE WORK</span>
                <div className="flex-1">
                  <div className="text-sm font-bold text-white">Enterprise Network Infrastructure</div>
                  <div className="text-xs text-slate-400">Authentication • Routing • Firewall • Captive Portal</div>
                </div>
                <span className="text-xs text-cyan-400 font-bold self-start sm:self-center">RADIUS</span>
              </div>

              <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-slate-900/40 transition">
                <span className="text-[10px] text-slate-500 uppercase tracking-wider w-24">PLATFORM</span>
                <div className="flex-1">
                  <div className="text-sm font-bold text-white">Server &amp; Database Infrastructure</div>
                  <div className="text-xs text-slate-400">Linux (Ubuntu) • MySQL • FreeRADIUS</div>
                </div>
                <span className="text-xs text-cyan-400 font-bold self-start sm:self-center">Linux Auth</span>
              </div>

            </div>
          </div>

        </div>

      </section>

      {/* ========================================================================= */}
      {/* 04. ENGINEERING JOURNEY (NETWORK FOCUS) */}
      {/* ========================================================================= */}
      <section id="journey" className="scroll-mt-24 max-w-7xl mx-auto px-6 py-20 space-y-12 border-t border-slate-900">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#111c2e] border border-slate-800 text-cyan-400">
              04
            </div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
              ENGINEERING JOURNEY
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              A deliberate path through <span className="text-cyan-400">building.</span>
            </h2>
          </div>
          <p className="text-xs text-slate-400 max-w-sm font-mono leading-relaxed">
            Each year adds another layer: fundamentals, enterprise routing, infrastructure services, and cloud architecture.
          </p>
        </div>

        {/* Timeline Component */}
        <div className="p-8 rounded-2xl bg-[#111c2e] border border-slate-800 space-y-8">
          <div className="grid grid-cols-4 relative">
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-slate-800 -translate-y-1/2 z-0" />
            {["2023", "2024", "2025", "2026"].map((year, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                <span className={`text-xs font-mono font-bold mb-3 ${idx === 3 ? 'text-cyan-400' : 'text-slate-400'}`}>
                  {year}
                </span>
                <div className={`w-3.5 h-3.5 rounded-full border-2 ${idx === 3 ? 'bg-cyan-400 border-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.8)]' : 'bg-slate-950 border-slate-700'}`} />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">FOUNDATION</span>
              <h4 className="text-sm font-bold text-white">Started Cyber Security</h4>
              <p className="text-xs text-slate-400 font-mono">HUFLIT • Networking &amp; systems fundamentals</p>
            </div>
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">ROUTING &amp; SWITCHING</span>
              <h4 className="text-sm font-bold text-white">VLAN &amp; Packet Tracer</h4>
              <p className="text-xs text-slate-400 font-mono">Subnetting • VLANs • Routing • Wireshark</p>
            </div>
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">AAA &amp; INFRASTRUCTURE</span>
              <h4 className="text-sm font-bold text-white">pfSense &amp; FreeRADIUS</h4>
              <p className="text-xs text-slate-400 font-mono">Firewall • AAA Auth • Captive Portal</p>
            </div>
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider font-bold">CURRENT FOCUS</span>
              <h4 className="text-sm font-bold text-white">Cloud Architecture</h4>
              <p className="text-xs text-slate-400 font-mono">AWS CloudFront/S3/EC2 • Docker • Nginx</p>
            </div>
          </div>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* 05. CONTACT & FOOTER (NETWORK FOCUS) */}
      {/* ========================================================================= */}
      <section id="contact" className="scroll-mt-24 max-w-7xl mx-auto px-6 pt-20 pb-16 space-y-16 border-t border-slate-900">

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-3">
            <div className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#111c2e] border border-slate-800 text-cyan-400">
              05
            </div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
              CONTACT
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Let&apos;s Connect
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-lg font-mono leading-relaxed">
              I&apos;m open to Network Engineering Intern, Network Administrator, and System &amp; Network Infrastructure opportunities. I am also highly enthusiastic about exploring roles in SOC (Security Operations Center) and broader cybersecurity domains.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
            <a
              href="mailto:dinhhungle96@gmail.com"
              className="px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold tracking-wide transition shadow-[0_0_15px_rgba(6,182,212,0.3)]"
            >
              Email Me
            </a>
            <a
              href="https://github.com/hydroheo"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-xl bg-[#111c2e] hover:bg-slate-800 border border-slate-800 text-white transition font-semibold"
            >
              GitHub
            </a>
            <a
              href="/Resume.pdf"
              download="CV_LeDinhHung.pdf"
              className="px-6 py-3.5 rounded-xl bg-[#111c2e] hover:bg-slate-800 border border-slate-800 text-slate-300 transition font-semibold"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Footer Bar */}
        <div className="pt-10 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block animate-pulse" />
            AVAILABLE FOR OPPORTUNITIES
          </div>
          <div>
            © 2026 Le Dinh Hung
          </div>
          <div className="text-slate-400">
            dinhhungle96@gmail.com
          </div>
        </div>

      </section>

    </div>
  );
}