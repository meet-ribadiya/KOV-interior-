import Image from "next/image";
import SiteNav from "@/components/site-nav";
import ContactForm from "@/components/contact-form";

const projects = [
  { number: "01", title: "The Courtyard House", meta: "Ahmedabad · Residential", src: "/images/courtyard-home.jpg", alt: "Airy contemporary living room" },
  { number: "02", title: "A quieter kind of home", meta: "Bopal · Residential", src: "/images/quiet-bedroom.jpg", alt: "Calm bedroom with warm natural light" },
  { number: "03", title: "The considered detail", meta: "Prahlad Nagar · Styling", src: "/images/residence-details.jpg", alt: "Warm and tactile home interior" },
];
const services = [
  ["01", "Interior design", "A complete point of view for your home, from the first sketch to the final styling."],
  ["02", "Space planning", "Layouts that make every square foot work beautifully for the way you live."],
  ["03", "Turnkey execution", "One considered process from material selection through on-site coordination."],
];

export default function Home() {
  return <main className="min-h-screen">
    <header className="site-header"><SiteNav/></header>

    <section className="hero" id="top">
      <div className="hero-copy"><p className="eyebrow"><i/> Ahmedabad · India</p><h1>Make room<br/>for <em>living.</em></h1><p className="hero-intro">Interiors that feel like you, only a little more at ease.</p><a className="under-link" href="#work">Explore selected work <span>↓</span></a><div className="hero-index"><span>01 / 04</span><i/><span>Spaces shaped around you</span></div></div>
      <div className="hero-picture"><Image src="/images/hero-residence.jpg" alt="Sunlit contemporary living room in a warm natural palette" fill priority sizes="(max-width: 700px) 100vw, 58vw" className="cover"/><div className="picture-shade"/><div className="hero-caption"><span>THE ART OF COMING HOME</span><span>AHMEDABAD, IN</span></div><div className="hero-stamp">Thoughtfully<br/>considered<br/>for you<span>K</span></div><span className="hero-note">SPACES WITH A SOFTER POINT OF VIEW</span></div>
    </section>
    <div className="ticker"><div className="ticker-track">{Array.from({length: 4}, (_, i) => <span key={i}>DESIGN FOR THE WAY YOU LIVE <i>✳</i> MADE WITH MEANING <i>✳</i></span>)}</div></div>

    <section className="intro pad" id="studio"><div className="label"><span>01</span> THE STUDIO</div><div className="intro-main"><p className="eyebrow">A little more you, in every detail</p><h2>Good design is more than what you see. <em>It’s how a space lets you feel.</em></h2><div className="intro-bottom"><p>At KOV, we shape thoughtful interiors around real lives. Natural materials, honest details, and a clear sense of what matters most to you.</p><a className="circle-link" href="#services" aria-label="Discover our approach">↘</a></div></div><div className="intro-aside"><b>K.</b><p>Considered spaces.<br/>Personal by nature.</p><small>BASED IN AHMEDABAD</small></div></section>

    <section className="work pad" id="work"><div className="section-head"><div><div className="label"><span>02</span> SELECTED SPACES</div><h2>A few ways<br/>to feel <em>at home.</em></h2></div><p>Room to breathe. Places to gather.<br/>Details you notice a little more each day.</p></div><div className="projects">{projects.map((p,i)=><article className={i===1?"project project-tall":"project"} key={p.number}><a className="project-image" href="#contact" aria-label={`Discuss a project like ${p.title}`}><Image src={p.src} alt={p.alt} fill sizes="(max-width: 700px) 100vw, 50vw" className="cover"/><span className="project-no">{p.number}</span><span className="project-arrow">↗</span></a><div className="project-meta"><h3>{p.title}</h3><span>{p.meta}</span></div></article>)}</div><p className="work-note">Visual concepts for demonstration purposes.</p></section>

    <section className="film" aria-label="A glimpse into the feeling of home"><video autoPlay muted loop playsInline preload="metadata" poster="/images/hero-residence.jpg" className="film-video" aria-label="Short film of a contemporary living space"><source src="/videos/interior-film.mp4" type="video/mp4"/></video><div className="film-shade"/><div className="film-content"><small>THE FEELING OF HOME</small><p>Made for slow<br/><em>Sunday mornings.</em></p><a className="under-link" href="#contact">Let’s make it yours <span>↗</span></a></div><span className="film-credit">FILM · PEXELS</span></section>

    <section className="services pad" id="services"><div className="section-head"><div><div className="label"><span>03</span> THE KOV APPROACH</div><h2>From first thought<br/>to <em>final touch.</em></h2></div><p>A clear, collaborative process that keeps your needs at the heart of every decision.</p></div><div className="service-list">{services.map(([no,name,detail])=><article className="service" key={no}><span className="service-no">{no}</span><h3>{name}</h3><p>{detail}</p><span className="service-arrow">↗</span></article>)}</div></section>

    <section className="contact" id="contact"><div className="contact-rings"/><div className="label label-light"><span>04</span> YOUR NEXT CHAPTER</div><div className="contact-body"><div><p className="eyebrow eyebrow-light">Have a space in mind?</p><h2>Let’s make<br/>it <em>feel like you.</em></h2><p className="contact-copy">Tell us a little about what you’re dreaming up. We’ll take it from there, together.</p><p className="contact-place"><i/> Ahmedabad, India</p></div><ContactForm/></div><footer className="footer"><a className="brand brand-light" href="#top" aria-label="Back to top"><b>KOV<span>.</span></b><small>INTERIOR</small></a><span>Thoughtfully made in Ahmedabad.</span><a href="#top">BACK TO TOP ↑</a></footer></section>
  </main>;
}
