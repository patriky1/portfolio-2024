import data from "./data.json";
import SkillRing from "./SkillRing";
import RightContact, { SocialLinks } from "./contact";
import ProjectsCarousel from "../carousel/projectCarousel";
import projectImages from "../carousel/assets";
import { useInView } from "../ui/hooks";
import Icon from "../ui/Icon";
import qrcode from "../imagens/qrcode.png";
import "./grid.css";

const HERO_PHONES = ["img5", "img4", "img8"];

function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="hero__blade" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="hero__role">{data.cargo}</p>
          <h1 id="hero-title" className="hero__name">
            <span className="hero__line">{data.nome}</span>
            <span className="hero__line hero__line--offset">{data.sobrenome}</span>
          </h1>
          <p className="hero__lead">{data.chamada}</p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#projetos">
              Ver projetos
            </a>
            <a className="btn btn--ghost" href="#contato">
              Entrar em contato
            </a>
          </div>
          <SocialLinks className="hero__social" />
        </div>

        <div className="hero__showcase" aria-hidden="true">
          {HERO_PHONES.map((id, index) => {
            const image = projectImages[id];
            return (
              <img
                key={id}
                className={`hero__phone hero__phone--${index + 1}`}
                src={image.sm}
                srcSet={`${image.sm} ${image.smW}w, ${image.lg} ${image.lgW}w`}
                sizes="(min-width: 900px) 260px, 34vw"
                width={image.width}
                height={image.height}
                alt=""
                decoding="async"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function About() {
  const paragraphs = data.sobre.split("\n\n");
  return (
    <section id="sobre" className="section" aria-labelledby="sobre-title">
      <div className="container about">
        <div className="about__aside">
          <h2 id="sobre-title" className="section__title">
            {data.about}
          </h2>
          <figure className="about__qr">
            <img
              src={qrcode}
              alt="QR code que abre o perfil de Patriky Brito no LinkedIn"
              width="504"
              height="582"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <a
            className="btn btn--ghost about__linkedin"
            href={data.contato.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="linkedin" />
            Ver perfil no LinkedIn
          </a>
        </div>
        <div className="about__text">
          {paragraphs.map((text, index) => (
            <p key={index} className={index === 0 ? "about__first" : undefined}>
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const [ref, inView] = useInView({ threshold: 0.3 });
  return (
    <section
      id="habilidades"
      className="section section--raised"
      aria-labelledby="habilidades-title"
    >
      <div className="container">
        <header className="section__head">
          <h2 id="habilidades-title" className="section__title">
            Habilidades profissionais
          </h2>
        </header>
        <ul ref={ref} className="skills">
          {data.habilidades.map((skill, index) => (
            <SkillRing
              key={skill.label}
              label={skill.label}
              value={skill.value}
              index={index}
              active={inView}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

function LanguageMeter({ idioma, nivel, max = 5 }) {
  return (
    <li className="language">
      <span className="language__name">{idioma}</span>
      <span className="language__dots" role="img" aria-label={`Nível ${nivel} de ${max}`}>
        {Array.from({ length: max }, (_, i) => (
          <span key={i} className={`language__dot${i < nivel ? " is-on" : ""}`} />
        ))}
      </span>
    </li>
  );
}

function Timeline({ items, titleKey }) {
  return (
    <ul className="timeline">
      {items.map((item) => (
        <li key={item[titleKey]} className="timeline__item">
          <h4 className="timeline__title">{item[titleKey]}</h4>
          {item.local ? <p className="timeline__meta">{item.local}</p> : null}
        </li>
      ))}
    </ul>
  );
}

function Journey() {
  return (
    <section id="trajetoria" className="section" aria-labelledby="trajetoria-title">
      <div className="container">
        <header className="section__head">
          <h2 id="trajetoria-title" className="section__title">
            Trajetória
          </h2>
        </header>
        <div className="journey">
          <div className="journey__block">
            <h3 className="journey__title">Experiência profissional</h3>
            <Timeline items={data.experiencia} titleKey="cargo" />
          </div>
          <div className="journey__block">
            <h3 className="journey__title">Formação acadêmica</h3>
            <Timeline items={data.formacao} titleKey="curso" />
          </div>
          <div className="journey__block journey__block--languages">
            <h3 className="journey__title">Idiomas</h3>
            <ul className="languages">
              {data.idiomas.map((item) => (
                <LanguageMeter key={item.idioma} {...item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section
      id="projetos"
      className="section section--raised"
      aria-labelledby="projetos-title"
    >
      <div className="container">
        <header className="section__head">
          <h2 id="projetos-title" className="section__title">
            Projetos
          </h2>
        </header>
        <ProjectsCarousel />
      </div>
    </section>
  );
}

/** Conteúdo principal da página (mantém o nome/export do componente original). */
export default function App() {
  return (
    <>
      <RightContact />
      <Hero />
      <About />
      <Skills />
      <Journey />
      <Projects />
    </>
  );
}
