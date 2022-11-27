import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import "./grid.css";

import img1 from "../imagens/email.png";
import img2 from "../imagens/linkedin.png";
import img3 from "../imagens/instagram.png";
import img4 from "../imagens/github.png";
import qrcode from "../imagens/qrcode.png";
import imgbar from "../imagens/habilidades.png";
import bar1 from "../imagens/bar1.png";
import bar3 from "../imagens/bar2.png";
import projects from "../imagens/projects.png";

export default function App() {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item interval={null}>
          <div className="bg1">
            <h4 className="title">Patriky</h4>
            <h4 className="title1"> Brito</h4>
          </div>
          <div className="retangle1"></div>
          <h1 className="titleprincipal">
            Ajudando<br></br> Negócios e <br></br> Organizações a Crescer
          </h1>
          <p className="info">
            E patrikybrito@gmail.com <br></br> T +55 83 9697-9777 <br></br>{" "}
            ©2022{" "}
          </p>
          <Carousel.Caption>
            <p className="title2">Desenvolvedor </p>{" "}
            <p className="titlegreen">Front-end</p>
            <p className="contact">Contato</p>
            <p className="line1"></p>
            <div className="icons">
              <img className="email" src={img1} alt="email" />
              <img className="linkedin" src={img2} alt="linkedin" />
              <img className="insta" src={img3} alt="instagram" />
              <img className="git" src={img4} alt="github" />
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={null}>
          <div className="bg1">
            <h4 className="title">Patriky</h4>
            <h4 className="title1"> Brito</h4>
          </div>
          <h1 className="informacoes">Informações</h1>
          <h1 className="dados">
            Nome <span className="textinfo"> Patriky Lucena de Brito </span>{" "}
            <br></br>Data de Nascimento{" "}
            <span className="textinfo">julho, 1998</span>
            <br></br>
            Endereço
            <span className="textinfo"> Cajazeiras, Paraíba, Brazil </span>{" "}
            <br></br> Nacionalidade{" "}
            <span className="textinfo"> Brasileiro</span>
          </h1>
          <p className="info">
            E patrikybrito@gmail.com <br></br> T +55 83 9697-9777 <br></br>{" "}
            ©2022{" "}
          </p>
          <h1 className="sobre">Sobre mim</h1>
          <h5 className="sobremim">
            {" "}
            Sou o Patriky Brito, tenho 24 anos e sou Desenvolvedor Front-end.
            Meu objetivo é entregar experiências memoráveis para novas marcas e
            para aqueles que desejam digitalizar-se. Trabalho como programador
            desde 2019, e me considero um profissional autodidata com visão
            estratégica, grande adaptabilidade e bom fortalecimento de equipes.
            Me graduei na Área de Redes de Computadores (UNIP). Atualmente
            trabalhando como desenvolvedor front-end na Lane art design e
            Formador de profissionais ágeis que buscam adentar no mercado da
            programação. <br></br>No meu tempo livre, gosto de experimentar
            cachaças artesanais, cozinhar novos pratos, viajar e fazer
            caminhadas ao ar livre.
          </h5>
          <div className="qrcode">
            <img className="qr" src={qrcode} alt="qrcode" />
          </div>
          <Carousel.Caption>
            <p className="contact">Contato</p>
            <p className="line1"></p>
            <div className="icons">
              <img className="email" src={img1} alt="email" />
              <img className="linkedin" src={img2} alt="linkedin" />
              <img className="insta" src={img3} alt="instagram" />
              <img className="git" src={img4} alt="github" />
            </div>
          </Carousel.Caption>
        </Carousel.Item>



        <Carousel.Item interval={null}>
          <div className="bg1">
            <h4 className="title">Patriky</h4>
            <h4 className="title1"> Brito</h4>
          </div>
          <h1 className="informacoes">Habilidades Profissionais</h1>
          <div className="habilidades">
            <img className="imgbar" src={imgbar} alt="imgbar" />
          </div>
          <p className="info">
            E patrikybrito@gmail.com <br></br> T +55 83 9697-9777 <br></br>{" "}
            ©2022{" "}
          </p>
          <Carousel.Caption>
            <p className="contact">Contato</p>
            <p className="line1"></p>
            <div className="icons">
              <img className="email" src={img1} alt="email" />
              <img className="linkedin" src={img2} alt="linkedin" />
              <img className="insta" src={img3} alt="instagram" />
              <img className="git" src={img4} alt="github" />
            </div>
          </Carousel.Caption>
        </Carousel.Item>



        <Carousel.Item interval={null}>
          <div className="bg1">
            <h4 className="title">Patriky</h4>
            <h4 className="title1"> Brito</h4>
          </div>
          <h1 className="informacoes">Idiomas</h1>
          <div>
            <h5 className="languages"> Português</h5>
            <img className="bar1" src={bar1} alt="bar1" />
            <h5 className="languages">
              {" "}
              <br></br>
              <br></br>
              <br></br>Espanhol
            </h5>
            <img className="bar2" src={bar1} alt="bar1" />
            <h5 className="ingles"> Inglês</h5>
            <img className="bar3" src={bar3} alt="bar1" />
          </div>
          <p className="info">
            E patrikybrito@gmail.com <br></br> T +55 83 9697-9777 <br></br>{" "}
            ©2022{" "}
          </p>
          <h1 className="formacao"> Formação Acadêmica</h1>
          <h5 className="sobremim">
            {" "}
            Graduado em Redes de computadores pela Universidade Paulista UNIP,
            Sousa-PB Técnico em Informática, Instituto Federal de Ciências e
            Técnologia da Paraíba - IFPB. Ensino médio Integrado ao Técnico em
            Informática -IFPB.
          </h5>
          <h1 className="experiencia">Experiência profissional</h1>
          <h5 className="exp">
            {" "}
            Especialista em análise de dados no Instituto Brasileiro de
            Geografia e Estatistica - IBGE Desenvolvedor Front-end, LANE ART
            DESIGN Docente em Programação de sistemas, E.N.E. Jose de Paiva
            Gadelha
          </h5>
          <Carousel.Caption>
            <p className="contact">Contato</p>
            <p className="line1"></p>
            <div className="icons">
              <img className="email" src={img1} alt="email" />
              <img className="linkedin" src={img2} alt="linkedin" />
              <img className="insta" src={img3} alt="instagram" />
              <img className="git" src={img4} alt="github" />
            </div>
          </Carousel.Caption>
        </Carousel.Item>



        <Carousel.Item interval={null}>
          <div className="bg1">
            <h4 className="title">Patriky</h4>
            <h4 className="title1"> Brito</h4>
          </div>
          <h1 className="informacoes">Projetos</h1>
          <img className="projects" src={projects} alt="projects" />
          
          <p className="info">
            E patrikybrito@gmail.com <br></br> T +55 83 9697-9777 <br></br>{" "}
            ©2022{" "}
          </p>
          <Carousel.Caption>

            <p className="contact">Contato</p>
            <p className="line1"></p>
            <div className="icons">
              <img className="email" src={img1} alt="email" />
              <img className="linkedin" src={img2} alt="linkedin" />
              <img className="insta" src={img3} alt="instagram" />
              <img className="git" src={img4} alt="github" />
            </div>
          </Carousel.Caption>
        </Carousel.Item>



      </Carousel>
    </div>
  );
}
