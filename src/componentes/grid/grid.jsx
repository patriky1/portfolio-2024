import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import "./grid.css";

// import img1 from "../imagens/email.png";
// import img2 from "../imagens/linkedin.png";
// import img3 from "../imagens/instagram.png";
// import img4 from "../imagens/github.png";
import qrcode from "../imagens/qrcode.png";
import imgbar from "../imagens/habilidades_mobile.svg";
import bar1 from "../imagens/bar1.png";
import bar3 from "../imagens/bar2.png";
import projects from "../imagens/projects.png";
// import RightContact from "./contact";

export default function App() {
  return (
    <div>

      <Carousel fade controls={false} interval={null}>
        <Carousel.Item  >
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
          <Carousel.Caption >
            <p className="title2">Desenvolvedor </p>
            <p className="titlegreen">Front-end</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={null}>
          <div className="bg1">
            <h4 className="title">Patriky</h4>
            <h4 className="title1"> Brito</h4>
          </div>

          <p className="info">
            E patrikybrito@gmail.com <br></br> T +55 83 9697-9777 <br></br>{" "}
            ©2022{" "}
          </p>
          <div className="sobre">
          <h3>Sobre mim</h3>
          </div>
          <div className="sobremim">
          <h5 className="sobremim">
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
          </div>
          <div className="qrcode">
            <img className="qrcode" src={qrcode} alt="qrcode" />
          </div>
          
        </Carousel.Item>



        <Carousel.Item interval={null}>
          <div className="bg1">
            <h4 className="title">Patriky</h4>
            <h4 className="title1"> Brito</h4>
          </div>
          <h1 className="informacoes">Habilidades Profissionais</h1>
          <div className="imgbar1" >
            <img className="imgbar1" src={imgbar} alt="imgbar"  />
          </div>
          <p className="info">
            E patrikybrito@gmail.com <br></br> T +55 83 9697-9777 <br></br>{" "}
            ©2022{" "}
          </p>
        </Carousel.Item>



        <Carousel.Item interval={null}>
          <div className="bg1">
            <h4 className="title">Patriky</h4>
            <h4 className="title1"> Brito</h4>
          </div>
          <h1 className="informacoes">Idiomas</h1>
       
              <div className="portugues">
                <h5 > Português</h5>
              </div>
            <div className="bar1" >
            <img  src={bar1} className="bar1" alt="bar1" />
            </div>
            <div className="espanhol">
             <h5> Espanhol </h5>
            </div>
            <div className="bar2">
            <img  className="bar2" src={bar1} alt="bar1" />
            </div>
            <div className="ingles">
            <h5 > Inglês</h5>
            </div>
            <div className="bar3">
            <img className="bar3" src={bar3} alt="bar1" />
            </div>
          
          <p className="info">
            E patrikybrito@gmail.com <br></br> T +55 83 9697-9777 <br></br>{" "}
            ©2022{" "}
          </p>
          <div className="formacao">
           <h3> Formação Acadêmica</h3>
          </div>
          <div className="exp">
            <h5 className="exp">
            Graduado em Redes de computadores pela Universidade Paulista UNIP,
            Sousa-PB Técnico em Informática, Instituto Federal de Ciências e
            Técnologia da Paraíba - IFPB. Ensino médio Integrado ao Técnico em
            Informática -IFPB.
            </h5>
            </div>
            <div className="formacao1">
            <h3 >Experiência profissional</h3>
            </div>
          <div className="exp1">
            <h5 className="exp1">
            Especialista em análise de dados no Instituto Brasileiro de
            Geografia e Estatistica - IBGE Desenvolvedor Front-end, LANE ART
            DESIGN Docente em Programação de sistemas, E.N.E. Jose de Paiva
            Gadelha
            </h5>
          </div>
          
        </Carousel.Item>



        <Carousel.Item interval={null}>
          <div className="bg1">
            <h4 className="title">Patriky</h4>
            <h4 className="title1"> Brito</h4>
          </div>
          <div className="informacoes">
          <h3>Projetos</h3>
          </div>
          <div className="projects" >
          <img className="projects" src={projects} alt="projects" />
          </div>
          <p className="info">
            E patrikybrito@gmail.com <br></br> T +55 83 9697-9777 <br></br>{" "}
            ©2022{" "}
          </p>

        </Carousel.Item>



      </Carousel>
    </div>
  );
}
