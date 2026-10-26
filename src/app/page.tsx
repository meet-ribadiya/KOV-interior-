import Image from "next/image";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  Check,
  CircleDot,
  Compass,
  MoveRight,
  Sparkles,
} from "lucide-react";
import ContactForm from "@/components/contact-form";
import Reveal from "@/components/reveal";
import SiteNav from "@/components/site-nav";

const services = [
  {
    number: "01",
    title: "Interior architecture",
    text: "A calm, functional foundation for each room — planning, proportions, circulation and the details that make daily life easier.",
    tags: ["Layouts", "Lighting", "Built-ins"],
  },
  {
    number: "02",
    title: "Complete interiors",
    text: "A cohesive interior direction, carried from concept through furniture, finishes, custom pieces and final styling.",
    tags: ["Materials", "Furniture", "Styling"],
  },
  {
    number: "03",
    title: "Turnkey execution",
    text: "One considered design language, carefully coordinated with trades and makers so the finished space matches the original intention.",
    tags: ["Documentation", "Site coordination", "Finishing"],
  },
];

const process = [
  [
    "01",
    "Listen",
    "We start with your routine, your priorities and the feeling you want to return to each day.",
  ],
  [
    "02",
    "Shape",
    "Plans, references and material directions give the project a practical, shared point of view.",
  ],
  [
    "03",
    "Refine",
    "Every surface, fitting and custom element is resolved until the whole space feels coherent.",
  ],
  [
    "04",
    "Bring it to life",
    "Clear drawings and careful coordination carry the design through the final details.",
  ],
];

const faqs = [
  [
    "When should we begin talking?",
    "The earlier the better. Starting before construction or renovation helps us make the most of the architecture, services and natural light.",
  ],
  [
    "Can KOV help with one room?",
    "Yes. A focused room can benefit from the same care as a larger home, especially where planning, storage, lighting or a strong material direction are needed.",
  ],
  [
    "What happens after an enquiry?",
    "We begin with a short conversation about your space, priorities and timing. From there, the right scope and next step can be outlined clearly.",
  ],
];

function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <i />
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <SiteNav />
      </header>

      <section className="hero" id="top">
        <div className="hero-copy-wrap">
          <Reveal className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-dot" /> Interior design studio ·
              Ahmedabad
            </p>
            <h1>
              A home that
              <br />
              moves <em>with you.</em>
            </h1>
            <p className="hero-lede">
              KOV creates personal interiors with clarity, warmth and a deep
              respect for how a space is really lived in.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#contact">
                Start a conversation <ArrowUpRight size={17} />
              </a>
              <a className="text-action" href="#work">
                Explore the work <ArrowDown size={15} />
              </a>
            </div>
          </Reveal>
          <div className="hero-footnote">
            <span>SCROLL TO EXPLORE</span>
            <i />
            <span>01 — 05</span>
          </div>
        </div>
        <div className="hero-media">
          <Image
            src="/images/hero-residence.jpg"
            alt="Contemporary sunlit living room with a warm, natural palette"
            fill
            priority
            sizes="(max-width: 920px) 100vw, 56vw"
            className="cover hero-image"
          />
          <div className="hero-media-shade" />
          <div className="hero-media-caption">
            <span>AN INTERIOR WITH ROOM TO BREATHE</span>
            <span>AHMEDABAD · INDIA</span>
          </div>
          <div className="hero-seal">
            <span>KOV</span>
            <i>
              made for
              <br />
              real life
            </i>
            <b>✦</b>
          </div>
        </div>
      </section>

      <section className="value-bar">
        <span>
          <CircleDot size={14} /> Thoughtful planning
        </span>
        <span>
          <CircleDot size={14} /> Honest materials
        </span>
        <span>
          <CircleDot size={14} /> Detailed execution
        </span>
        <span>
          <CircleDot size={14} /> Spaces that last
        </span>
      </section>

      <section className="studio section-pad" id="studio">
        <SectionLabel number="01">THE KOV POINT OF VIEW</SectionLabel>
        <Reveal className="studio-intro">
          <p className="eyebrow">A more personal way to design</p>
          <h2>
            We design around the moments that make a house feel{" "}
            <em>like yours.</em>
          </h2>
        </Reveal>
        <Reveal className="studio-grid" delay={0.08}>
          <p>
            There is no single KOV look. Each interior begins with what is
            already there: the light at different hours, the architecture, the
            people who will use it, and the character worth keeping.
          </p>
          <p>
            Then we bring order to the choices. The result is an interior with a
            clear point of view, a tactile material language and enough quiet
            for your own life to take centre stage.
          </p>
          <a
            href="#process"
            className="circle-action"
            aria-label="Discover the KOV process"
          >
            <ArrowDownRight size={22} />
          </a>
        </Reveal>
        <div className="studio-principles" aria-label="KOV design principles">
          <span>FUNCTION, FIRST</span>
          <span>LIGHT, ALWAYS</span>
          <span>MATERIALS WITH MEMORY</span>
        </div>
      </section>

      <section className="feature" id="work">
        <div className="feature-copy section-pad">
          <SectionLabel number="02">FEATURED DESIGN STUDY</SectionLabel>
          <Reveal>
            <p className="eyebrow">
              The courtyard residence · visual direction
            </p>
            <h2>
              A softer rhythm
              <br />
              for <em>every day.</em>
            </h2>
            <p className="feature-lede">
              A home imagined as a sequence of pause points: a generous living
              room, a dining space that gathers people, and quiet corners that
              make the day feel less rushed.
            </p>
          </Reveal>
          <Reveal className="feature-specs" delay={0.1}>
            <div>
              <span>SCOPE</span>
              <p>
                Interior architecture
                <br />
                and furnishing direction
              </p>
            </div>
            <div>
              <span>FEELING</span>
              <p>
                Warm, open
                <br />
                and quietly expressive
              </p>
            </div>
            <div>
              <span>PALETTE</span>
              <p>
                Oak, limestone,
                <br />
                linen and soft metal
              </p>
            </div>
          </Reveal>
          <a href="#contact" className="text-action feature-link">
            Create a space like this <MoveRight size={17} />
          </a>
        </div>
        <Reveal className="feature-media" delay={0.1}>
          <Image
            src="/images/courtyard-home.jpg"
            alt="Contemporary interior design study in neutral tones"
            fill
            sizes="(max-width: 920px) 100vw, 52vw"
            className="cover"
          />
          <span className="feature-index">01 / 03</span>
          <span className="feature-vertical">DESIGN STUDY · RESIDENTIAL</span>
        </Reveal>
      </section>

      <section className="materials section-pad">
        <div className="materials-media">
          <Image
            src="/images/material-study.jpg"
            alt="Refined material study for a contemporary interior"
            fill
            sizes="(max-width: 920px) 100vw, 44vw"
            className="cover"
          />
          <div className="materials-media-label">
            THE SENSE OF A ROOM
            <br />
            STARTS AT YOUR FINGERTIPS.
          </div>
        </div>
        <div className="materials-copy">
          <SectionLabel number="03">MATERIALS, WITH MEANING</SectionLabel>
          <Reveal>
            <h2>
              Beauty should feel as good as it <em>looks.</em>
            </h2>
            <p>
              Stone that gathers a soft patina. Timber with grain and warmth. A
              fabric that makes you stay a little longer. We choose materials
              for the way they perform, age and make a room feel.
            </p>
          </Reveal>
          <Reveal className="material-list" delay={0.1}>
            <span>
              <b>01</b> Natural stone
            </span>
            <span>
              <b>02</b> Characterful timber
            </span>
            <span>
              <b>03</b> Hand-finished metal
            </span>
            <span>
              <b>04</b> Textural textiles
            </span>
          </Reveal>
        </div>
      </section>

      <section className="process section-pad" id="process">
        <Reveal className="process-heading">
          <SectionLabel number="04">HOW WE WORK</SectionLabel>
          <h2>
            A clear path from
            <br />
            first thought to <em>final detail.</em>
          </h2>
          <p>
            Design is personal. The process should still feel simple,
            transparent and easy to move through.
          </p>
        </Reveal>
        <div className="process-list">
          {process.map(([number, title, copy], index) => (
            <Reveal className="process-item" delay={index * 0.07} key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <ArrowUpRight size={18} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="services section-pad" id="services">
        <div className="services-heading">
          <SectionLabel number="05">WHAT KOV CAN HELP WITH</SectionLabel>
          <Reveal>
            <h2>
              Everything a considered interior <em>needs.</em>
            </h2>
          </Reveal>
        </div>
        <div className="service-cards">
          {services.map((service, index) => (
            <Reveal
              className="service-card"
              delay={index * 0.08}
              key={service.number}
            >
              <span className="service-number">{service.number}</span>
              <Compass size={22} />
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <ul>
                {service.tags.map((tag) => (
                  <li key={tag}>
                    <Check size={13} />
                    {tag}
                  </li>
                ))}
              </ul>
              <a href="#contact">
                Talk about this service <ArrowUpRight size={15} />
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="notes section-pad">
        <Reveal className="notes-quote">
          <Sparkles size={24} />
          <p>“A good interior gives you the confidence to live in it fully.”</p>
          <span>THE KOV PRINCIPLE</span>
        </Reveal>
        <Reveal className="notes-copy" delay={0.08}>
          <SectionLabel number="06">A BETTER START</SectionLabel>
          <h2>
            Bring us a floor plan, a half-formed idea, or simply a feeling.
          </h2>
          <p>
            You do not need to have every answer before the first conversation.
            A well-shaped brief is something we build together.
          </p>
          <a className="button button-outline" href="#contact">
            Tell us what you’re thinking <ArrowUpRight size={17} />
          </a>
        </Reveal>
      </section>

      <section className="questions section-pad">
        <div>
          <SectionLabel number="07">PROJECT QUESTIONS</SectionLabel>
          <Reveal>
            <h2>
              A few things people ask before <em>we begin.</em>
            </h2>
          </Reveal>
        </div>
        <Reveal className="faq-list" delay={0.05}>
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>
                {question}
                <span>+</span>
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </Reveal>
      </section>

      <section className="contact" id="contact">
        <div className="contact-orbit orbit-one" />
        <div className="contact-orbit orbit-two" />
        <div className="contact-wrap section-pad">
          <SectionLabel number="08">YOUR NEXT CHAPTER</SectionLabel>
          <div className="contact-grid">
            <Reveal className="contact-intro">
              <p className="eyebrow eyebrow-light">
                Let’s start with your space
              </p>
              <h2>
                Make room
                <br />
                for what’s <em>next.</em>
              </h2>
              <p>
                Tell us what you are planning, what is not working today, or
                what you want your home to give back to you. We will begin
                there.
              </p>
              <div className="contact-details">
                <span>AHMEDABAD · GUJARAT</span>
                <span>AVAILABLE FOR RESIDENTIAL, RETAIL &amp; HOSPITALITY</span>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
        <footer className="footer section-pad">
          <div className="footer-top">
            <div>
              <a
                className="brand brand-light"
                href="#top"
                aria-label="Back to top"
              >
                <b>
                  KOV<span>.</span>
                </b>
                <small>INTERIOR</small>
              </a>
              <p>
                Interiors with warmth,
                <br />
                clarity and character.
              </p>
            </div>
            <div className="footer-links">
              <div>
                <span>EXPLORE</span>
                <a href="#studio">The studio</a>
                <a href="#work">Design studies</a>
                <a href="#process">Our process</a>
              </div>
              <div>
                <span>CONNECT</span>
                <a href="#contact">Start a project</a>
                <a href="#services">Services</a>
                <a href="#top">Back to top</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 KOV Interior</span>
            <span>Ahmedabad, India</span>
            <span>Made with care.</span>
          </div>
        </footer>
      </section>
    </main>
  );
}
