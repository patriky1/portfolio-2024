import "./grid.css";

import img1 from "../imagens/email.png";
import img2 from "../imagens/linkedin.png";
import img3 from "../imagens/instagram.png";
import img4 from "../imagens/github.png";
import styled from "styled-components";

const Contact = styled.div`
position: absolute;
  display: flex;
  flex-direction: column;
  margin-top: 30vh;
  right: 2rem;
  z-index: 999;
  .p-right {
    text-align: center;
    margin-block-end: 3rem;
    color: white;
    transform: rotate(90deg);
  }

  .icons-content {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0px;
    margin: 0px;
    gap: 35px;
    right: -32%;
    img {
      width: 20px;
      heigth: 20px;
    }
    
  }
  .line {
    margin-inline: 0.6rem;
    margin-block-end: 2rem;

    width: 40px;
    height: 0px;
    border: 1px solid #ffffff;
    transform: rotate(90deg);
  }
  @media screen and (max-width: 780px) {
    position: absolute;
    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    bottom: 0vh;
    gap: 1.25rem;
    .p-right, .line {
    transform: rotate(0deg);
    margin: 0;
    }
    .icons-content {
      flex-direction: row;
      padding: 0px;
    margin: 0px;
    gap: 35px;
    right: 0;
    max-height:20px;
    * {
      aspect-ratio:1;
      width: 50px;
      heigth: 50px;
    }
    }
  }
}
  `
;

export default function RightContact() {
  return (
    <>
      <Contact>
        <span className="p-right">Contato</span>
        <p className="line"></p>
        <div className="icons-content">
        <a href="#" className="email"><img
            src={img1}
            href="mailto:patrikybrito@gmail.com"
            alt="email"
          /></a>
          
          <a href="#" className="linkedin"><img src={img2} alt="linkedin" /></a>
          <a href="#" className="insta"><img src={img3} alt="instagram" /></a>
          <a href="#" className="git"><img src={img4} alt="github" /></a>
        </div>
      </Contact>
    </>
  );
}
