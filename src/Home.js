import React from "react";
import "./App.css";
import "./Home.css";

export default class Home extends React.Component {
  render() {
    return (
      <div className="bodyApp">
        <div className="mainApp">
          <h1>ACCUEIL</h1>
          <div className="wip">
            /!\ Le site est en cours de developpement /!\
          </div>
          <div>
          <ul>Liens utiles</ul>
          <li><a href="https://drive.google.com/file/d/1qahcljjcZ2Zzjx1ymXO1-XGQ-E7IaesV/view?usp=sharing" target="_blank" rel="noopener noreferrer">CV</a></li>
          <li><a href="https://www.linkedin.com/in/klecalve/" target="_blank" rel="noopener noreferrer">LINKEDIN</a></li>
          <li><a href="https://github.com/klecalve" target="_blank" rel="noopener noreferrer">GITHUB</a></li>
          </div>
          <div>
            <h2>Bienvenue sur mon site !</h2>
            <p>Il me sert de vitrine afin de représenter ma personnalité, mon savoir-faire accéder aux liens utils (linkedin, github ou bien télécharger mon CV) et pouvoir me contacter facilement.
              Je vous remercie de votre visite !
            </p>
          </div>
        </div>
      </div>
    );
  }
}
