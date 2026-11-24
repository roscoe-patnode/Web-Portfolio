import { useEffect, useRef, useState } from "react";
import type { ChangeEvent, KeyboardEvent } from "react";

const TYPE_SPEED_MS = 15;

const PROJECTS = [
  {
    title: "Event Connect",
    description:
    `
      This web application facilitates communication while host events between the Venue Administrator, Venue Staff, and Event Manager. 
      It allows a Venue Administrator to add information about the Venue including available rooms and layouts for any particular room.
      The Venue Administrator can then invite Venue Staff and Event Managers to the Venue. The Event Managers can create an Event which they can also create tickets for the Venue Staff to fulfill.
      The Venue Staff can see the tickets that are related to their Venue and then update the status of the tickets.
      The app was made by a group composed of me and four other students using
      Svelte,
      TypeScript, and a
      PostgreSQL database using Supabase.
      One of my contributions was designing the database to store information about user accounts, venues, events, and tickets.
      I also made the page for the Venue Admin with the functionality previously mentioned.
    `
  },
  {
    title: "CEP (R Package)",
    description:
    `
      The purpose of this R Package is to optize the calculation of the Cause and Effect Probability (CEP) on any given dataframe using Maximum Likelihood Estimation (MLE) by using C++ and CUDA. This package had some previous work done by a group of 5 students and also a group of international students which was then finished by a group of me and about 10 other students. I was tasked with cleaning up the work done by previous teams which included renaming variables and functions as well as deleting unused function and refactoring spurious code. I also helped with the C++ multithreading in order to make the application run faster and then benchmark the amount of speedup. The optimizations made to the C++ resulted in over 70% improvement in the time it takes to get the final calculations.
    `
  }
];

const PROMPT = `Select the project you would like to view (0-${PROJECTS.length - 1}):`;
const MENU = 
  `${PROMPT}\n` +
  PROJECTS.map((p, i) => `  [${i}] ${p.title}`).join("\n") +
  "\n> ";
function Software() {
    const [output, setOutput] = useState(""); // already printed
  const [pending, setPending] = useState(MENU); // waiting to be typed out
  const [input, setInput] = useState(""); // what the user is typing

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const stickToBottom = useRef(true);
  const busy = pending.length > 0;

  // Print one character at a time
  useEffect(() => {
    if (!pending) return;
    const id = setTimeout(() => {
      setOutput((o) => o + pending[0]);
      setPending((p) => p.slice(1));
    }, TYPE_SPEED_MS);
    return () => clearTimeout(id);
  }, [pending]);

  // Keep the newest text in view, unless the user has scrolled up to read
  useEffect(() => {
    const el = scrollRef.current;
    if (el && stickToBottom.current) el.scrollTop = el.scrollHeight;
  }, [output, input]);

  useEffect(() => {
    inputRef.current?.focus({ preventScroll: true });
  }, []);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    stickToBottom.current = el.scrollHeight - el.scrollTop - el.clientHeight < 24;
  };

  const focusInput = () => {
    if (window.getSelection()?.toString()) return; // don't break text selection
    inputRef.current?.focus({ preventScroll: true });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (busy) return; // ignore typing while the terminal is printing
    stickToBottom.current = true;
    setInput(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter" || busy) return;

    const choice = input.trim();
    const project = /^\d+$/.test(choice) ? PROJECTS[Number(choice)] : undefined;

    stickToBottom.current = true;
    setInput("");
    setOutput((o) => o + input + "\n"); // echo the answer instantly
    setPending(
      project
        ? `\n${project.description}\n\n${MENU}`
        : `\nInvalid selection. Enter a number from 0 to ${PROJECTS.length - 1}.\n\n${MENU}`
    );
  };

  return (
    <div
      className="mx-auto bg-main text-white text-lg max-w-2xl h-116 rounded-2xl relative flex flex-col overflow-hidden"
      onClick={focusInput}
    >
      <div className="relative flex justify-center items-center rounded-t-2xl py-1 bg-hover-main text-hover-btnbg font-bold text-lg border-b border-white/10">
        <div className="text-center">User - Bash | Software_Devlopment.cmd</div>
        <div className="absolute flex right-4 my-2 gap-2">
          <span className="size-3 rounded-full bg-red-500" />
          <span className="size-3 rounded-full bg-yellow-400" />
          <span className="size-3 rounded-full bg-green-500" />
        </div>
      </div>
      

      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex-1 mr-1 my-1 min-h-0 overflow-y-auto [scrollbar-width:thin] [scrollbar-color:var(--color-btnbg)_transparent]"
      >
        <pre className="mx-2 py-2 font-termf4 whitespace-pre-wrap break-words">
          {output}
          {input}
          <span
            className={`inline-block h-[1.1em] w-[0.6em] bg-current align-text-bottom ${
              busy ? "" : "animate-blink"
            }`}
          />
        </pre>
      </div>

      {/* Hidden input captures keystrokes; it sits outside the scroll area
          so typing never scrolls the terminal */}
      <input
        ref={inputRef}
        value={input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        maxLength={10}
        autoComplete="off"
        autoCapitalize="off"
        spellCheck={false}
        aria-label="Terminal input"
        className="absolute bottom-0 left-0 h-px w-px opacity-0"
      />
    </div>
  );
}

export default Software;