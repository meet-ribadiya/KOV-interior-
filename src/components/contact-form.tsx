"use client";
import { useState, type FormEvent } from "react";
export default function ContactForm() {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true); }
  return <form className="contact-form" onSubmit={submit}>
    <label htmlFor="name">Your name</label><input id="name" name="name" autoComplete="name" placeholder="What should we call you?" required/>
    <label htmlFor="email">Email address</label><input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required/>
    <label htmlFor="project">A little about your project</label><textarea id="project" name="project" rows={2} placeholder="A home, a room, a fresh start…" required/>
    <button type="submit">{sent ? "Thanks — your note is ready" : "Send an enquiry"} <span>↗</span></button>
    <p role="status">{sent ? "This demo form is ready to connect to KOV’s preferred inbox." : "A simple first step. No pressure, just a conversation."}</p>
  </form>;
}