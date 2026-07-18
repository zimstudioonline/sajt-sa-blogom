"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [poruka, setPoruka] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setPoruka("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setEmail("");
        setPoruka(
          data.alreadySubscribed
            ? "Već ste prijavljeni — hvala!"
            : "Uspešno ste prijavljeni! 🌿"
        );
      } else {
        setStatus("error");
        setPoruka(data.error ?? "Prijava nije uspela. Pokušajte ponovo.");
      }
    } catch {
      setStatus("error");
      setPoruka("Došlo je do greške u mreži. Pokušajte ponovo.");
    }
  }

  if (status === "success") {
    return (
      <p className="mx-auto max-w-md rounded-full bg-accent/10 px-6 py-4 text-center font-medium text-zinc-900">
        {poruka}
      </p>
    );
  }

  return (
    <div className="mx-auto w-full max-w-md">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Vaš email"
          aria-label="Email adresa"
          className="w-full rounded-full border border-zinc-300 bg-white px-5 py-3 text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-accent"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="shrink-0 rounded-full bg-accent px-6 py-3 font-medium text-white transition-colors hover:bg-accent-hover disabled:opacity-60"
        >
          {status === "submitting" ? "Slanje..." : "Prijavi se"}
        </button>
      </form>

      {status === "error" && (
        <p className="mt-3 text-sm text-red-600">{poruka}</p>
      )}
    </div>
  );
}
