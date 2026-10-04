import { useCallback, useEffect, useRef, useState } from "react";
import data from "../grid/data.json";
import Icon from "../ui/Icon";
import { useActiveSection } from "../ui/hooks";
import "./header.css";

export const NAV_ITEMS = [
  { id: "sobre", label: "Sobre" },
  { id: "habilidades", label: "Habilidades" },
  { id: "trajetoria", label: "Trajetória" },
  { id: "projetos", label: "Projetos" },
];

const SPY_IDS = ["inicio", ...NAV_ITEMS.map((item) => item.id), "contato"];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(SPY_IDS);
  const toggleRef = useRef(null);

  const close = useCallback(() => setOpen(false), []);

  // Fundo sólido do header só depois de rolar um pouco.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Menu mobile: trava a rolagem, fecha com Esc e ao voltar para desktop.
  useEffect(() => {
    if (!open) return undefined;
    document.body.classList.add("is-menu-open");
    const onKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        if (toggleRef.current) toggleRef.current.focus();
      }
    };
    const desktop = window.matchMedia ? window.matchMedia("(min-width: 900px)") : null;
    const onDesktop = () => desktop && desktop.matches && setOpen(false);
    document.addEventListener("keydown", onKey);
    if (desktop && desktop.addEventListener) desktop.addEventListener("change", onDesktop);
    return () => {
      document.body.classList.remove("is-menu-open");
      document.removeEventListener("keydown", onKey);
      if (desktop && desktop.removeEventListener) desktop.removeEventListener("change", onDesktop);
    };
  }, [open]);

  return (
    <header className={`site-header${scrolled || open ? " is-solid" : ""}`}>
      <div className="container site-header__inner">
        <a className="brand" href="#inicio" onClick={close} aria-label={`${data.nome} ${data.sobrenome}, voltar ao início`}>
          <span className="brand__first">{data.nome}</span>
          <span className="brand__last">{data.sobrenome}</span>
        </a>

        <button
          ref={toggleRef}
          type="button"
          className="icon-btn site-header__toggle"
          aria-expanded={open}
          aria-controls="menu-principal"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>

        <nav
          id="menu-principal"
          className="site-nav"
          data-open={open}
          aria-label="Principal"
        >
          <ul className="site-nav__list">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  className="site-nav__link"
                  href={`#${item.id}`}
                  aria-current={active === item.id ? "location" : undefined}
                  onClick={close}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            className="btn btn--primary btn--sm site-nav__cta"
            href="#contato"
            aria-current={active === "contato" ? "location" : undefined}
            onClick={close}
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}
