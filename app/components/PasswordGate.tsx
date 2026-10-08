"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "alice_lover_auth";
const PASSWORD = "qwe123";

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const [authed, setAuthed] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY) === "true") {
      setAuthed(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === PASSWORD) {
      localStorage.setItem(STORAGE_KEY, "true");
      setAuthed(true);
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
    <div className="flex h-screen items-center justify-center bg-[#f3f3f2] dark:bg-[#272824]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-4 rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800"
      >
        <h1 className="text-lg font-medium text-gray-800 dark:text-gray-50">
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
          className="rounded border border-gray-300 px-4 py-2 text-gray-800 focus:border-grass-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-50"
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
