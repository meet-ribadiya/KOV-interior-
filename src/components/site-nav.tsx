"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["01", "Studio", "#studio"],
  ["02", "Design studies", "#work"],
  ["03", "The process", "#process"],
  ["04", "Services", "#services"],
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return <>
    <a className="brand" href="#top" aria-label="KOV Interior home" onClick={close}>
      <b>KOV<span>.</span></b><small>INTERIOR</small>
    </a>
    <button className="menu-toggle" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}>
      {open ? <X size={18}/> : <Menu size={19}/>}
    </button>
    {open && <button className="nav-backdrop" type="button" aria-label="Close navigation menu" onClick={close}/>} 
    <nav id="primary-navigation" className={open ? "nav nav-open" : "nav"} aria-label="Main navigation">
      <span className="nav-kicker">KOV Interior · Ahmedabad</span>
      {links.map(([number, label, href]) => <a href={href} onClick={close} key={href}>
        <span className="nav-number">{number}</span><span className="nav-title">{label}</span><ArrowUpRight size={15}/>
      </a>)}
      <a className="nav-cta" href="#contact" onClick={close}>Discuss your space <ArrowUpRight size={16}/></a>
      <p className="nav-location">Spaces with warmth, clarity and character.</p>
    </nav>
  </>;
}
