import data from "./data.json";
import Icon from "../ui/Icon";
import "./contact.css";

const { contato } = data;

export const SOCIAL_LINKS = [
  { id: "email", label: "E-mail", href: `mailto:${contato.email}`, icon: "mail" },
  { id: "linkedin", label: "LinkedIn", href: contato.linkedin, icon: "linkedin" },
  { id: "instagram", label: "Instagram", href: contato.instagram, icon: "instagram" },
  { id: "github", label: "GitHub", href: contato.github, icon: "github" },
];

/** Lista de redes sociais reutilizada no hero, na barra lateral e no rodapé. */
export function SocialLinks({ className = "", label = "Redes sociais" }) {
  return (
    <ul className={`social ${className}`.trim()} aria-label={label}>
      {SOCIAL_LINKS.map((link) => {
        const external = link.href.startsWith("http");
        return (
          <li key={link.id}>
            <a
              className="icon-btn social__link"
              href={link.href}
              aria-label={link.label}
              title={link.label}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <Icon name={link.icon} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

/** Barra lateral fixa "Contato" (telas grandes), herdada do layout original. */
export default function RightContact() {
  return (
    <aside className="contact-rail" aria-label="Contato rápido">
      <span className="contact-rail__label">Contato</span>
      <span className="contact-rail__line" aria-hidden="true" />
      <SocialLinks className="social--vertical" label="Contato rápido" />
    </aside>
  );
}
