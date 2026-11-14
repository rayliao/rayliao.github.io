import { useState, useSyncExternalStore, type SubmitEvent, type ReactNode } from "react";

const STORAGE_KEY = "alice_lover_auth";
const PASSWORD = "qwe123";

const subscribe = () => () => {};
const getStoredAuth = () => localStorage.getItem(STORAGE_KEY) === "true";
const getServerAuth = () => false;

export default function PasswordGate({ children }: { children: ReactNode }) {
  const storedAuth = useSyncExternalStore(subscribe, getStoredAuth, getServerAuth);
  const [justAuthed, setJustAuthed] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const authed = storedAuth || justAuthed;

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    if (input === PASSWORD) {
      localStorage.setItem(STORAGE_KEY, "true");
      setJustAuthed(true);
      setError(false);
    } else {
      setError(true);
      setInput("");
    }
  };

  if (authed) {
    return <>{children}</>;
  }

  return (
    <div className="flex h-screen items-center justify-center bg-[#fafafa] dark:bg-[#1d1f21]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-4 rounded-lg border border-dotted border-gray-400/60 p-8 dark:border-gray-400/50"
      >
        <h1 className="text-lg font-medium text-gray-800 dark:text-[#c9cacc]">
          此页面需要密码
        </h1>
        <input
          type="password"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setError(false);
          }}
          placeholder="输入密码"
          className="rounded-lg border border-dotted border-gray-400/60 bg-transparent px-4 py-2 text-gray-800 focus:border-grass-500 focus:outline-none dark:border-gray-400/50 dark:text-[#c9cacc]"
          autoFocus
        />
        {error && <p className="text-sm text-red-500">密码错误</p>}
        <button
          type="submit"
          className="rounded bg-grass-600 px-6 py-2 text-white transition-colors hover:bg-grass-700"
        >
          确认
        </button>
      </form>
    </div>
  );
}