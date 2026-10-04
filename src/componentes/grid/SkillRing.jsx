import { memo } from "react";

const RADIUS = 44;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

/**
 * Anel de proficiência em SVG puro (substitui o CircularProgress do MUI).
 * Anima uma única vez quando a lista entra na tela (prop `active`).
 */
function SkillRing({ label, value, active, index = 0 }) {
  const offset = active ? CIRCUMFERENCE * (1 - value / 100) : CIRCUMFERENCE;

  return (
    <li className="skill" style={{ "--i": index }}>
      <div className="skill__ring">
        <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false">
          <circle className="skill__track" cx="50" cy="50" r={RADIUS} />
          <circle
            className="skill__bar"
            cx="50"
            cy="50"
            r={RADIUS}
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
          />
        </svg>
        <span className="skill__value" aria-hidden="true">
          {value}%
        </span>
      </div>
      <span className="skill__label">
        {label}
        <span className="visually-hidden">: {value}% de domínio</span>
      </span>
    </li>
  );
}

export default memo(SkillRing);
