import { useEffect, useRef, useState } from "react";
import data from "../grid/data.json";
import { SocialLinks } from "../grid/contact";
import Icon from "../ui/Icon";
import "./footer.css";

const { contato, contador } = data;

/** Copia o e-mail e informa sucesso/erro de forma acessível. */
function CopyEmailButton() {
  const [status, setStatus] = useState("idle"); // idle | success | error
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    clearTimeout(timer.current);
    try {
      if (!navigator.clipboard) throw new Error("clipboard indisponível");
      await navigator.clipboard.writeText(contato.email);
      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
    timer.current = setTimeout(() => setStatus("idle"), 3500);
  };

  return (
    <div className="copy-email">
      <button type="button" className="btn btn--ghost btn--sm" onClick={copy}>
        <Icon name={status === "success" ? "check" : "copy"} />
        {status === "success" ? "E-mail copiado" : "Copiar e-mail"}
      </button>
      <p className="copy-email__status" role="status" aria-live="polite">
        {status === "error" ? (
          <span className="status status--error">
            <Icon name="alert" />
            Não foi possível copiar. Selecione o e-mail acima.
          </span>
        ) : null}
      </p>
    </div>
  );
}

function VisitorCounter() {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <a
      className="visitor-counter"
      href={contador.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      Você é o visitante nº
      <img
        src={contador.imagem}
        alt="contador de acesso grátis"
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
      />
    </a>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contato" className="site-footer" aria-labelledby="contato-title">
      <div className="container">
        <div className="site-footer__main">
          <div className="site-footer__intro">
            <h2 id="contato-title" className="section__title">
              Vamos conversar?
            </h2>
            <p className="site-footer__lead">
              Me envie uma mensagem ou me encontre nas redes.
            </p>
          </div>

          <div className="site-footer__channels">
            <a className="site-footer__email" href={`mailto:${contato.email}`}>
              {contato.email}
            </a>
            <CopyEmailButton />
            <a className="site-footer__phone" href={`tel:${contato.telefoneLink}`}>
              <Icon name="phone" />
              {contato.telefone}
            </a>
            <SocialLinks className="site-footer__social" />
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>
            © {year} {data.nome} {data.sobrenome}
          </p>
          <VisitorCounter />
        </div>
      </div>
    </footer>
  );
}
