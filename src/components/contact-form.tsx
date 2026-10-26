"use client";

import { ArrowUpRight } from "lucide-react";
import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return <form className="contact-form" onSubmit={submit}>
    <div className="form-row">
      <label htmlFor="name">Your name<input id="name" name="name" autoComplete="name" placeholder="How should we call you?" required/></label>
      <label htmlFor="email">Email address<input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required/></label>
    </div>
    <div className="form-row">
      <label htmlFor="project-type">I’m planning<select id="project-type" name="project-type" defaultValue=""><option value="" disabled>Choose a project type</option><option>My home</option><option>A workspace</option><option>A retail or hospitality space</option><option>Something else</option></select></label>
      <label htmlFor="timeline">Timeline<input id="timeline" name="timeline" placeholder="For example, starting this summer"/></label>
    </div>
    <label htmlFor="project">Tell us a little about the space<textarea id="project" name="project" rows={3} placeholder="What needs to change? What do you want the space to feel like?" required/></label>
    <button type="submit">{sent ? "Thank you — your note is ready" : "Start the conversation"}<ArrowUpRight size={17}/></button>
    <p role="status">{sent ? "This presentation form can be connected to KOV’s preferred inbox before launch." : "A few details are enough for a first conversation."}</p>
  </form>;
}
