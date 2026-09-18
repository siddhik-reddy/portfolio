import { useEffect, useRef, useState } from "react";

const LINES = [
  { prompt: "$ whoami", output: "siddhik reddy" },
  { prompt: "$ role", output: "full stack developer" },
  { prompt: "$ stack", output: "react · node · rest apis" },
];

const STATUS_LINE = "open to work";

export default function TerminalIntro() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState("typing-prompt");
  const [showStatus, setShowStatus] = useState(false);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion.current) {
      setLineIndex(LINES.length);
      setShowStatus(true);
    }
  }, []);

  useEffect(() => {
    if (reducedMotion.current) return;
    if (showStatus) return;

    const current = LINES[lineIndex];

    if (!current) {
      const t = setTimeout(() => setShowStatus(true), 400);
      return () => clearTimeout(t);
    }

    if (phase === "typing-prompt") {
      if (charIndex < current.prompt.length) {
        const t = setTimeout(() => setCharIndex((c) => c + 1), 45);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => {
        setPhase("typing-output");
        setCharIndex(0);
      }, 260);
      return () => clearTimeout(t);
    }

    if (phase === "typing-output") {
      if (charIndex < current.output.length) {
        const t = setTimeout(() => setCharIndex((c) => c + 1), 30);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => {
        setPhase("typing-prompt");
        setCharIndex(0);
        setLineIndex((i) => i + 1);
      }, 500);
      return () => clearTimeout(t);
    }
  }, [lineIndex, charIndex, phase, showStatus]);

  const renderLine = (line, i) => {
    const isPast = i < lineIndex;
    const isCurrent = i === lineIndex;

    if (isPast) {
      return (
        <div key={i} className="term-line">
          <span className="term-prompt">{line.prompt}</span>
          <span className="term-output">{line.output}</span>
        </div>
      );
    }

    if (isCurrent) {
      const promptText =
        phase === "typing-prompt"
          ? line.prompt.slice(0, charIndex)
          : line.prompt;
      const outputText =
        phase === "typing-output" ? line.output.slice(0, charIndex) : "";

      return (
        <div key={i} className="term-line">
          <span className="term-prompt">{promptText}</span>
          {outputText && (
            <span className="term-output">{outputText}</span>
          )}
          <span className="term-cursor" aria-hidden="true" />
        </div>
      );
    }

    return null;
  };

  return (
    <div className="terminal" aria-label="Developer introduction terminal">
      <div className="terminal-bar">
        <span className="terminal-dot" />
        <span className="terminal-dot" />
        <span className="terminal-dot" />
        <span className="terminal-title">intro.sh</span>
      </div>

      <div className="terminal-body">
        {LINES.map((line, i) => renderLine(line, i))}

        {showStatus && (
          <div className="term-line term-status">
            <span className="term-prompt">$ status</span>
            <span className="term-status-row">
              <span className="status-dot" aria-hidden="true" />
              <span className="term-output">{STATUS_LINE}</span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
