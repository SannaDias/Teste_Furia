import React from 'react';
import './LandingPage.css'; 

const LandingPage = ({ onEnterChat }) => {
  return (
    <div className="landing-page-container">
      <div className="content-wrapper">
        {/* <img
        src="imagens/furia-esports-logo-stencil-text-label-transparent-png-1145455-removebg-preview.png"
          alt="FURIA Logo"
          className="furia-logo"
        /> */}
        <h1 className="main-title">Bem-vindo ao FURIA Fan Chat!</h1>
        <p className="subtitle">Interaja com outros fãs e acompanhe os jogos ao vivo!</p>
        <button className="primary-button"  onClick={onEnterChat} >Comece a conversar</button>

        <div className="teasers-section">
          <h2>Próximos Jogos e Momentos Épicos</h2>
          <div className="teasers-carousel">
            <div className="teaser-item">
              <img src="https://i.ytimg.com/vi/iCMED6QEk28/sddefault.jpg" alt="Momento Épico 1" className="teaser-image" />
              <p className="teaser-text">Reviva a jogada incrível contra Cloud9!</p>
            </div>
            <div className="teaser-item">
              
              <p className="teaser-info">📅 Próximo Jogo: Leviatán - 14/05 às 21:00</p>
            </div>
            <div className="teaser-item">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEsCjEM0Q-1hz9ASuVpotiv_hZQToYrHfYug&s" alt="Momento Épico 2" className="teaser-image" />
              <p className="teaser-text">Confira o clutch emocionante de havoc!</p>
            </div>
            {}
          </div>
        </div>
      </div>

      {/* Seção do Rodapé */}
      <footer className="main-footer">
        <div className="newsletter-section">
          <h3>Newsletter</h3>
          <input type="email" placeholder="Seu email" className="newsletter-input" />
          <button className="newsletter-button">Inscrever</button>
        </div>
        <div className="social-links-section">
          <h3>Redes FURIA</h3>
          <ul>
            <li><a href="https://twitter.com/furiagg" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.instagram.com/furiagg/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.tiktok.com/@furiagg" target="_blank" rel="noopener noreferrer">Tiktok</a></li>
            <li><a href="https://www.youtube.com/channel/UCE4elIT7Dq5FzxbKMXsg-yw" target="_blank" rel="noopener noreferrer">Youtube</a></li>
          </ul>
        </div>
        <div className="quick-links-section">
          <h3>Links rápidos</h3>
          <ul>
            <li><a href="/reembolso">Compre produtos oficiais</a></li>
            <li><a href="/frete">Política de Frete</a></li>
            <li><a href="/privacidade">Política de Privacidade</a></li>
          </ul>
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} FURIA eSports. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;