import { useEffect } from "react";
import Grid from "./componentes/grid/grid";
import Header from "./componentes/layout/Header";
import Footer from "./componentes/layout/Footer";

import "./App.css";

function App() {
  // Links diretos para seções (ex.: /#projetos): o navegador tenta rolar antes
  // do React montar a página, então refazemos a rolagem após a montagem.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return undefined;
    const frame = window.requestAnimationFrame(() => {
      const target = document.getElementById(id);
      if (target) target.scrollIntoView();
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <Grid />
      </main>
      <Footer />
    </>
  );
}

export default App;
