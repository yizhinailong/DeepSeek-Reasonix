import logo from "../assets/logo.svg";

// Welcome is the empty-state landing: brand, a one-liner, the input affordances
// (/ commands, @ files, Enter), and a few clickable example prompts that send
// immediately so a first turn is one click away.

const EXAMPLES = [
  "Explain this codebase's architecture",
  "Summarize the recent git changes",
  "Where is the agent run loop, and what does it do?",
];

export function Welcome({ onPrompt }: { onPrompt: (text: string) => void }) {
  return (
    <div className="welcome">
      <img src={logo} className="welcome__logo" alt="Reasonix" />
      <div className="welcome__title">Reasonix</div>
      <div className="welcome__tag">A coding agent — describe a task or ask anything.</div>

      <div className="welcome__hints">
        <span>
          <kbd>/</kbd> commands
        </span>
        <span>
          <kbd>@</kbd> reference files
        </span>
        <span>
          <kbd>⏎</kbd> send
        </span>
      </div>

      <div className="welcome__examples">
        {EXAMPLES.map((ex) => (
          <button key={ex} className="welcome__ex" onClick={() => onPrompt(ex)}>
            {ex}
          </button>
        ))}
      </div>
    </div>
  );
}
