import { useState } from "react";
import { Check, Copy } from "lucide-react";

// CopyButton copies `text` to the clipboard on click and briefly flips to a check.
// navigator.clipboard works in the webview under the click's user gesture; a
// failure is swallowed (nothing to copy to).
export function CopyButton({
  text,
  className,
  label,
}: {
  text: string;
  className?: string;
  label?: string;
}) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      /* clipboard unavailable */
    }
  };
  return (
    <button
      className={`copybtn ${className ?? ""}`}
      onClick={copy}
      title="Copy"
      aria-label="Copy"
      type="button"
    >
      {copied ? <Check size={13} /> : <Copy size={13} />}
      {label && <span className="copybtn__label">{copied ? "Copied" : label}</span>}
    </button>
  );
}
