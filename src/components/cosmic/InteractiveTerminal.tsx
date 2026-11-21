"use client";

import React, { useState, useEffect, useRef } from "react";
import { Terminal as TerminalIcon, Play, RotateCcw, Check, Copy } from "lucide-react";
import { profileData } from "@/data/profile";

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

export function InteractiveTerminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandHistory[]>([]);
  const [copied, setCopied] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const defaultPresets = [
    { label: "python skills.py", cmd: "python skills.py" },
    { label: "cat status.json", cmd: "cat status.json" },
    { label: "run cicd_pipeline", cmd: "run cicd_pipeline" },
  ];

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    let outputNode: React.ReactNode = null;

    if (trimmed === "help") {
      outputNode = (
        <div className="text-xs text-slate-300 space-y-1">
          <p className="text-cyan-400 font-semibold">Available commands:</p>
          <p><span className="text-violet-400">python skills.py</span> - Inspect technical competencies</p>
          <p><span className="text-violet-400">cat status.json</span> - View current role &amp; company details</p>
          <p><span className="text-violet-400">run cicd_pipeline</span> - Simulate automated test &amp; deploy suite</p>
          <p><span className="text-violet-400">contact</span> - Display email and communication endpoints</p>
          <p><span className="text-violet-400">whoami</span> - Developer profile summary</p>
          <p><span className="text-violet-400">clear</span> - Clear terminal window</p>
        </div>
      );
    } else if (trimmed === "clear") {
      setHistory([]);
      setInput("");
      return;
    } else if (trimmed === "python skills.py" || trimmed === "skills") {
      outputNode = (
        <div className="text-xs font-mono space-y-1.5 text-slate-300 bg-[#060317] p-2.5 rounded-lg border border-violet-500/20">
          <p className="text-cyan-300 font-semibold">&gt;&gt;&gt; Tech Stack Output:</p>
          <p><span className="text-emerald-400">Core:</span> Python (FastAPI, Django), Golang, Node.js</p>
          <p><span className="text-amber-400">Databases:</span> PostgreSQL, Oracle Database, Redis Caching</p>
          <p><span className="text-purple-400">DevOps &amp; Cloud:</span> GitLab CI/CD, Docker, AWS (EC2/S3), Linux</p>
          <p><span className="text-cyan-400">Architecture:</span> Microservices, SOAP-to-REST, RBAC, Async Workers</p>
        </div>
      );
    } else if (trimmed === "cat status.json" || trimmed === "status") {
      outputNode = (
        <pre className="text-xs font-mono text-emerald-300 bg-[#060317] p-2.5 rounded-lg border border-emerald-500/20 overflow-x-auto">
{`{
  "name": "Rajahariharan K",
  "role": "Assistant Lead – Python Developer",
  "promoted": "February 2026",
  "company": "The SCM Silk Private Limited",
  "location": "Trichy, Tamil Nadu, IN",
  "availability": "Ready for high-impact backend projects"
}`}
        </pre>
      );
    } else if (trimmed === "run cicd_pipeline" || trimmed === "cicd") {
      outputNode = (
        <div className="text-xs font-mono space-y-1 text-slate-300 bg-[#060317] p-2.5 rounded-lg border border-cyan-500/20">
          <p className="text-violet-400">[0.02s] 🚀 Initializing GitLab Runner v16.8...</p>
          <p className="text-cyan-300">[0.45s] ⚡ Running pytest unit &amp; regression tests: 42 passed</p>
          <p className="text-cyan-300">[0.88s] 🔒 Executing SAST security &amp; dependency audit: 0 vulnerabilities</p>
          <p className="text-amber-300">[1.20s] 📦 Building Docker container: rajahariharan/backend:latest</p>
          <p className="text-emerald-400 font-semibold">[1.65s] ✔ Pipeline Passed! Deployed in 1.65s (-70% provisioning time)</p>
        </div>
      );
    } else if (trimmed === "whoami") {
      outputNode = (
        <p className="text-xs text-violet-200">
          Rajahariharan K — Assistant Lead &amp; Python Developer with 3+ years engineering enterprise automation scripts, backend microservices, and database performance tuning.
        </p>
      );
    } else if (trimmed === "contact") {
      outputNode = (
        <div className="text-xs text-slate-300 space-y-1">
          <p>Email: <span className="text-cyan-300 font-mono">{profileData.contact.email}</span></p>
          <p>Phone: <span className="text-cyan-300 font-mono">{profileData.contact.phone}</span></p>
          <p>GitHub: <a href={profileData.contact.github} target="_blank" rel="noopener noreferrer" className="text-violet-400 underline">github.com/Rajahariharan22</a></p>
          <p>LinkedIn: <a href={profileData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-violet-400 underline">linkedin.com/in/rajahariharan-k</a></p>
        </div>
      );
    } else {
      outputNode = (
        <p className="text-xs text-rose-400 font-mono">
          zsh: command not found: {cmdStr}. Type <span className="text-cyan-300 font-semibold">help</span> to list commands.
        </p>
      );
    }

    setHistory((prev) => [...prev, { command: cmdStr, output: outputNode }]);
    setInput("");
  };

  useEffect(() => {
    // Initial welcome banner
    const timer = setTimeout(() => {
      setHistory([
        {
          command: "python -m rajahariharan.init",
          output: (
            <div className="text-xs font-mono text-slate-300 space-y-1">
              <p className="text-emerald-400 font-bold">✔ System Online: Python 3.12.2 / FastAPI / Linux x86_64</p>
              <p className="text-[#a1a1aa]">Type <span className="text-cyan-300 font-semibold">help</span> or click preset buttons below to query live diagnostics.</p>
            </div>
          ),
        },
      ]);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const copyEmail = () => {
    navigator.clipboard.writeText(profileData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-lg rounded-2xl border border-violet-500/30 bg-[#07041a]/90 backdrop-blur-xl shadow-[0_0_35px_rgba(112,66,248,0.25)] overflow-hidden font-mono text-left">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#0e0828] border-b border-violet-500/20">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block shadow-[0_0_6px_#f43f5e]" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block shadow-[0_0_6px_#f59e0b]" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block shadow-[0_0_6px_#10b981]" />
          <div className="flex items-center gap-1.5 ml-2 text-xs text-violet-300/80">
            <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
            <span>rajahariharan@lead-node:~</span>
          </div>
        </div>

        <button
          type="button"
          onClick={copyEmail}
          className="text-[11px] text-violet-300/70 hover:text-white flex items-center gap-1 transition-colors"
          title="Copy email"
        >
          {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
          <span>{copied ? "Copied!" : "copy"}</span>
        </button>
      </div>

      {/* Terminal Output Body */}
      <div className="p-4 max-h-[260px] min-h-[200px] overflow-y-auto space-y-3 text-xs text-slate-200">
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-2 text-cyan-400">
              <span className="text-violet-400">➜</span>
              <span className="text-emerald-400">~</span>
              <span className="text-white font-medium">{item.command}</span>
            </div>
            <div className="pl-4">{item.output}</div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Preset Action Pills */}
      <div className="px-4 py-2 bg-[#09051d] border-t border-violet-500/15 flex flex-wrap gap-1.5 items-center">
        <span className="text-[10px] text-violet-400 font-semibold mr-1">RUN:</span>
        {defaultPresets.map((preset, i) => (
          <button
            key={i}
            type="button"
            onClick={() => handleCommand(preset.cmd)}
            className="text-[11px] px-2.5 py-1 rounded-md bg-[#130a38] hover:bg-violet-600/30 text-cyan-300 border border-violet-500/25 hover:border-cyan-400 transition-all flex items-center gap-1 cursor-pointer"
          >
            <Play className="w-2.5 h-2.5 text-cyan-400" />
            <span>{preset.label}</span>
          </button>
        ))}
        <button
          type="button"
          onClick={() => handleCommand("clear")}
          className="text-[11px] px-2 py-1 rounded-md text-slate-400 hover:text-white hover:bg-white/5 transition-all ml-auto flex items-center gap-1"
          title="Clear screen"
        >
          <RotateCcw className="w-2.5 h-2.5" />
          <span>clear</span>
        </button>
      </div>

      {/* Command Input Field */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCommand(input);
        }}
        className="flex items-center gap-2 px-4 py-2 bg-[#050214] border-t border-violet-500/20"
      >
        <span className="text-emerald-400 font-bold">➜</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="type 'help', 'skills', or 'contact'..."
          className="flex-1 bg-transparent text-white text-xs placeholder:text-violet-400/40 focus:outline-none font-mono"
        />
        <button
          type="submit"
          className="text-[11px] text-cyan-400 hover:text-white px-2 py-0.5 rounded bg-violet-950/60 border border-violet-500/30 transition-colors"
        >
          Enter
        </button>
      </form>
    </div>
  );
}
