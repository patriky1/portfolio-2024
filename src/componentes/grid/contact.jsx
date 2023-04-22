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
  }`
;

export default function RightContact() {
  return (
    <>
      <Contact>
        <span className="p-right">Contato</span>
        <p className="line"></p>
        <div className="icons-content">
          <img
            className="email"
            src={img1}
            href="mailto:patrikybrito@gmail.com"
            alt="email"
          />
          <img className="linkedin" src={img2} alt="linkedin" />
          <img className="insta" src={img3} alt="instagram" />
          <img className="git" src={img4} alt="github" />
        </div>
      </Contact>
    </>
  );
}
