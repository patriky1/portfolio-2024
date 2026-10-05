import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import data from "../grid/data.json";
import projectImages from "./assets";
import Icon from "../ui/Icon";
import { useInView, useMediaQuery, usePrefersReducedMotion } from "../ui/hooks";
import "./carousel.css";

const AUTOPLAY_MS = 4500;
const SWIPE_PX = 40;

const sizesFor = (formato) =>
  formato === "retrato"
    ? "(min-width: 768px) 320px, 50vw"
    : "(min-width: 1280px) 1100px, 92vw";

const srcSetFor = (image) => `${image.sm} ${image.smW}w, ${image.lg} ${image.lgW}w`;

/**
 * Galeria de projetos.
 * Mantém o comportamento do carrossel original (avanço automático e a
 * imagem panorâmica exibida apenas em telas acima de 680px), adicionando
 * miniaturas, legenda, swipe, teclado, pausa e estados de carregamento/erro.
 */
const ProjectsCarousel = () => {
  const isDesktop = useMediaQuery("(min-width: 681px)");
  const reducedMotion = usePrefersReducedMotion();
  const [viewRef, inView] = useInView({ once: false, threshold: 0.35, rootMargin: "0px" });

  const items = useMemo(
    () =>
      data.projetos
        .filter((item) => projectImages[item.id] && (isDesktop || !item.somenteDesktop))
        .map((item) => ({ ...item, image: projectImages[item.id] })),
    [isDesktop]
  );

  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [imageState, setImageState] = useState({}); // { [id]: "loaded" | "error" }
  const [attempt, setAttempt] = useState(0);
  const thumbsRef = useRef(null);
  const pointerStart = useRef(null);

  const count = items.length;
  const current = count ? items[Math.min(index, count - 1)] : null;
  const activeIndex = current ? items.indexOf(current) : 0;
  const status = current ? imageState[current.id] || "loading" : "loading";

  useEffect(() => {
    if (reducedMotion) setPlaying(false);
  }, [reducedMotion]);

  const goTo = useCallback(
    (target) => {
      if (!count) return;
      setIndex(((target % count) + count) % count);
    },
    [count]
  );
  const next = useCallback(() => goTo(activeIndex + 1), [goTo, activeIndex]);
  const prev = useCallback(() => goTo(activeIndex - 1), [goTo, activeIndex]);

  // Avanço automático: só com a galeria visível, sem interação e imagem pronta.
  const autoplay =
    playing && !hovered && !focused && inView && count > 1 && status === "loaded";

  useEffect(() => {
    if (!autoplay) return undefined;
    const timer = setTimeout(() => setIndex((i) => (i + 1) % count), AUTOPLAY_MS);
    return () => clearTimeout(timer);
  }, [autoplay, activeIndex, count]);

  // Mantém a miniatura ativa visível sem rolar a página.
  useEffect(() => {
    const strip = thumbsRef.current;
    const thumb = strip && strip.children[activeIndex];
    if (!thumb || !strip.scrollTo) return;
    const left = thumb.offsetLeft - (strip.clientWidth - thumb.clientWidth) / 2;
    strip.scrollTo({ left, behavior: reducedMotion ? "auto" : "smooth" });
  }, [activeIndex, reducedMotion]);

  // Pré-carrega a próxima imagem assim que a atual termina de carregar.
  useEffect(() => {
    if (status !== "loaded" || count < 2) return;
    const upcoming = items[(activeIndex + 1) % count].image;
    const img = new Image();
    img.sizes = sizesFor(upcoming.formato);
    img.srcset = srcSetFor(upcoming);
    img.src = upcoming.sm;
  }, [status, activeIndex, items, count]);

  const markImage = (id, value) =>
    setImageState((state) => ({ ...state, [id]: value }));

  const retry = () => {
    if (!current) return;
    setImageState((state) => {
      const copy = { ...state };
      delete copy[current.id];
      return copy;
    });
    setAttempt((value) => value + 1);
  };

  const onKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      next();
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      prev();
    }
  };

  const onPointerDown = (event) => {
    if (event.pointerType === "mouse") return;
    pointerStart.current = { x: event.clientX, y: event.clientY };
  };

  const onPointerUp = (event) => {
    const start = pointerStart.current;
    pointerStart.current = null;
    if (!start) return;
    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;
    if (Math.abs(dx) < SWIPE_PX || Math.abs(dx) < Math.abs(dy)) return;
    if (dx < 0) next();
    else prev();
  };

  if (!current) {
    return (
      <div className="gallery gallery--empty">
        <p>Nenhum projeto para exibir no momento.</p>
      </div>
    );
  }

  const { image } = current;

  return (
    <div
      ref={viewRef}
      className="gallery"
      role="region"
      aria-roledescription="carrossel"
      aria-label="Galeria de projetos"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
      onKeyDown={onKeyDown}
    >
      <div
        className="gallery__stage"
        data-format={image.formato}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => {
          pointerStart.current = null;
        }}
      >
        <div
          key={`${current.id}-${attempt}`}
          className="gallery__slide"
          role="group"
          aria-roledescription="slide"
          aria-label={`${activeIndex + 1} de ${count}`}
        >
          {status !== "error" ? (
            <img
              className={`gallery__image${status === "loaded" ? " is-loaded" : ""}`}
              src={image.lg}
              srcSet={srcSetFor(image)}
              sizes={sizesFor(image.formato)}
              width={image.width}
              height={image.height}
              alt={`${current.titulo}, ${current.tipo.toLowerCase()}`}
              decoding="async"
              draggable="false"
              onLoad={() => markImage(current.id, "loaded")}
              onError={() => markImage(current.id, "error")}
            />
          ) : null}

          {status === "loading" ? (
            <div className="gallery__loading" aria-hidden="true">
              <span className="gallery__spinner" />
            </div>
          ) : null}

          {status === "error" ? (
            <div className="gallery__error" role="alert">
              <Icon name="alert" className="icon gallery__error-icon" />
              <p>Não foi possível carregar a imagem de {current.titulo}.</p>
              <button type="button" className="btn btn--ghost btn--sm" onClick={retry}>
                <Icon name="refresh" />
                Tentar novamente
              </button>
            </div>
          ) : null}
        </div>
      </div>

      <div className="gallery__bar">
        <div
          className="gallery__caption"
          aria-live={autoplay ? "off" : "polite"}
          aria-atomic="true"
        >
          <h3 className="gallery__title">{current.titulo}</h3>
          <p className="gallery__meta">
            {current.tipo}
            <span className="gallery__count">
              {activeIndex + 1} de {count}
            </span>
          </p>
        </div>

        <div className="gallery__controls">
          <button
            type="button"
            className="icon-btn"
            onClick={() => setPlaying((value) => !value)}
            aria-label={playing ? "Pausar troca automática" : "Retomar troca automática"}
            title={playing ? "Pausar" : "Retomar"}
          >
            <Icon name={playing ? "pause" : "play"} />
          </button>
          <button
            type="button"
            className="icon-btn"
            onClick={prev}
            aria-label="Projeto anterior"
            title="Anterior"
          >
            <Icon name="chevronLeft" />
          </button>
          <button
            type="button"
            className="icon-btn"
            onClick={next}
            aria-label="Próximo projeto"
            title="Próximo"
          >
            <Icon name="chevronRight" />
          </button>
        </div>
      </div>

      <ul ref={thumbsRef} className="gallery__thumbs" aria-label="Escolher projeto">
        {items.map((item, i) => (
          <li key={item.id}>
            <button
              type="button"
              className="gallery__thumb"
              data-format={item.image.formato}
              aria-label={`Ver ${item.titulo}`}
              aria-current={i === activeIndex ? "true" : undefined}
              onClick={() => goTo(i)}
            >
              <img
                src={item.image.sm}
                alt=""
                width={item.image.smW}
                height={Math.round((item.image.height / item.image.width) * item.image.smW)}
                loading="lazy"
                decoding="async"
                draggable="false"
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsCarousel;
