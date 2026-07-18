"use client";

import { useForm, ValidationError } from "@formspree/react";

// Javni Formspree ID (bezbedno je da stoji u kodu — to je endpoint, ne tajni ključ).
const FORMSPREE_ID = "meeygokv";

export default function ContactForm() {
  const [state, handleSubmit] = useForm(FORMSPREE_ID);

  if (state.succeeded) {
    return (
      <div className="rounded-2xl border border-accent/30 bg-accent/10 p-6 text-foreground">
        <p className="font-medium">Hvala na poruci! 🌿</p>
        <p className="mt-1 text-sm text-muted">
          Javićemo vam se u najkraćem mogućem roku.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-foreground">
          Ime
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-foreground outline-none focus:border-accent"
        />
        <ValidationError
          field="name"
          errors={state.errors}
          className="mt-1 text-sm text-red-600 dark:text-red-400"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-foreground">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-foreground outline-none focus:border-accent"
        />
        <ValidationError
          field="email"
          errors={state.errors}
          className="mt-1 text-sm text-red-600 dark:text-red-400"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-foreground">
          Poruka
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-foreground outline-none focus:border-accent"
        />
        <ValidationError
          field="message"
          errors={state.errors}
          className="mt-1 text-sm text-red-600 dark:text-red-400"
        />
      </div>

      {/* Greška na nivou cele forme (npr. mrežni problem) */}
      <ValidationError
        errors={state.errors}
        className="text-sm text-red-600 dark:text-red-400"
      />

      <button
        type="submit"
        disabled={state.submitting}
        className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover disabled:opacity-60"
      >
        {state.submitting ? "Slanje..." : "Pošalji poruku"}
      </button>
    </form>
  );
}
