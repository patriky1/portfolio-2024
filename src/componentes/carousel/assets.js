// Mapa de imagens otimizadas (WebP) dos projetos.
// sm = miniaturas e telas pequenas; lg = destaque / telas de alta densidade.
// Originais em alta resolução permanecem em ./img-celular (fora do bundle).
import img1sm from "./img-otimizadas/img1-sm.webp";
import img1lg from "./img-otimizadas/img1-lg.webp";
import img2sm from "./img-otimizadas/img2-sm.webp";
import img2lg from "./img-otimizadas/img2-lg.webp";
import img3sm from "./img-otimizadas/img3-sm.webp";
import img3lg from "./img-otimizadas/img3-lg.webp";
import img4sm from "./img-otimizadas/img4-sm.webp";
import img4lg from "./img-otimizadas/img4-lg.webp";
import img5sm from "./img-otimizadas/img5-sm.webp";
import img5lg from "./img-otimizadas/img5-lg.webp";
import img6sm from "./img-otimizadas/img6-sm.webp";
import img6lg from "./img-otimizadas/img6-lg.webp";
import img7sm from "./img-otimizadas/img7-sm.webp";
import img7lg from "./img-otimizadas/img7-lg.webp";
import img8sm from "./img-otimizadas/img8-sm.webp";
import img8lg from "./img-otimizadas/img8-lg.webp";
import img9sm from "./img-otimizadas/img9-sm.webp";
import img9lg from "./img-otimizadas/img9-lg.webp";
import img11sm from "./img-otimizadas/img11-sm.webp";
import img11lg from "./img-otimizadas/img11-lg.webp";
import img13sm from "./img-otimizadas/img13-sm.webp";
import img13lg from "./img-otimizadas/img13-lg.webp";
import img14sm from "./img-otimizadas/img14-sm.webp";
import img14lg from "./img-otimizadas/img14-lg.webp";

const phone = (sm, lg) => ({
  sm,
  lg,
  smW: 286,
  lgW: 562,
  width: 562,
  height: 1100,
  formato: "retrato",
});

const projectImages = {
  img1: phone(img1sm, img1lg),
  img2: phone(img2sm, img2lg),
  img3: phone(img3sm, img3lg),
  img4: phone(img4sm, img4lg),
  img5: phone(img5sm, img5lg),
  img6: phone(img6sm, img6lg),
  img7: phone(img7sm, img7lg),
  img8: phone(img8sm, img8lg),
  img9: { sm: img9sm, lg: img9lg, smW: 720, lgW: 1600, width: 1600, height: 815, formato: "paisagem" },
  img11: { sm: img11sm, lg: img11lg, smW: 720, lgW: 1440, width: 1440, height: 1024, formato: "paisagem" },
  img13: { sm: img13sm, lg: img13lg, smW: 720, lgW: 1440, width: 1440, height: 1024, formato: "paisagem" },
  img14: { sm: img14sm, lg: img14lg, smW: 720, lgW: 1440, width: 1440, height: 936, formato: "paisagem" },
};

export default projectImages;
