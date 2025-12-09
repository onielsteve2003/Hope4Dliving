"use client";

import { FormEvent, useState } from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Unable to submit form");
      }

      setStatus("success");
      setFeedback("Thank you! Your message is on its way to the Hope4DLiving team.");
      setForm(initialState);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setFeedback("Something went wrong. Please try again or reach out directly via phone.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="text-sm font-semibold text-slate-900" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          value={form.name}
          onChange={(event) => setForm({ ...form, name: event.target.value })}
          className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm shadow-inner focus:border-brand-500 focus:outline-none"
        />
      </div>
      <div>
        <label className="text-sm font-semibold text-slate-900" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={(event) => setForm({ ...form, email: event.target.value })}
          className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm shadow-inner focus:border-brand-500 focus:outline-none"
        />
      </div>
      <div>
        <label className="text-sm font-semibold text-slate-900" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={form.message}
          onChange={(event) => setForm({ ...form, message: event.target.value })}
          className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm shadow-inner focus:border-brand-500 focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/40 transition hover:bg-brand-700"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending..." : "Send message"}
      </button>
      {feedback && (
        <p
          className={`text-sm ${
            status === "success" ? "text-emerald-600" : "text-rose-600"
          }`}
        >
          {feedback}
        </p>
      )}
    </form>
  );
}
