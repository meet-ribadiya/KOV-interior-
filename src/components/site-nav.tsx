"use client";
import { useState } from "react";
export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <>
    <a className="brand" href="#top" aria-label="KOV Interior home" onClick={close}><b>KOV<span>.</span></b><small>INTERIOR</small></a>
    <button className="menu-toggle" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}><i/><i/></button>
    <nav id="primary-navigation" className={open ? "nav nav-open" : "nav"} aria-label="Main navigation">
      <a href="#studio" onClick={close}>Studio</a><a href="#work" onClick={close}>Selected work</a><a href="#services" onClick={close}>What we do</a><a className="nav-cta" href="#contact" onClick={close}>Start a project <span>↗</span></a>
    </nav>
  </>;
}