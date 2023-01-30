import "./grid.css";

import img1 from "../imagens/email.png";
import img2 from "../imagens/linkedin.png";
import img3 from "../imagens/instagram.png";
import img4 from "../imagens/github.png";

export default function RightContact() {
    return (
        <>
        <p className="contact-container">Contato</p>
            <p className="line1"></p>
            <div className="icons">
              <img className="email" src={img1} href="mailto:patrikybrito@gmail.com" alt="email" />
              <img className="linkedin" src={img2} alt="linkedin" />
              <img className="insta" src={img3} alt="instagram" />
              <img className="git" src={img4} alt="github" />
            </div>
        </>
    );
}