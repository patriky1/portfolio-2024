import { fireEvent, render, screen, within } from "@testing-library/react";
import App from "./App";

test("exibe nome, cargo e navegação principal", () => {
  render(<App />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/Patriky\s*Brito/);
  const nav = screen.getByRole("navigation", { name: "Principal" });
  ["Sobre", "Habilidades", "Trajetória", "Projetos", "Contato"].forEach((label) => {
    expect(within(nav).getByRole("link", { name: label })).toBeInTheDocument();
  });
});

test("mantém todas as seções e dados de contato", () => {
  render(<App />);
  ["Sobre mim", "Habilidades profissionais", "Trajetória", "Projetos"].forEach((name) => {
    expect(screen.getByRole("region", { name })).toBeInTheDocument();
  });
  expect(screen.getByRole("contentinfo")).toHaveTextContent("Vamos conversar?");
  expect(screen.getAllByRole("link", { name: /patrikybrito@gmail.com/i }).length).toBeGreaterThan(0);
  expect(screen.getByText("+55 83 9697-9777")).toBeInTheDocument();
  expect(screen.getByText("Python")).toBeInTheDocument();
});

test("galeria navega entre projetos", () => {
  render(<App />);
  const gallery = screen.getByRole("region", { name: "Galeria de projetos" });
  const first = within(gallery).getByRole("heading", { level: 3 }).textContent;
  fireEvent.click(within(gallery).getByRole("button", { name: "Próximo projeto" }));
  expect(within(gallery).getByRole("heading", { level: 3 }).textContent).not.toBe(first);
});

test("menu mobile abre e fecha", () => {
  render(<App />);
  const toggle = screen.getByRole("button", { name: "Abrir menu" });
  fireEvent.click(toggle);
  expect(toggle).toHaveAttribute("aria-expanded", "true");
  fireEvent.keyDown(document, { key: "Escape" });
  expect(screen.getByRole("button", { name: "Abrir menu" })).toHaveAttribute("aria-expanded", "false");
});
