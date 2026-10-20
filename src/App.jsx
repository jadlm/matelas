import React, { useState } from 'react';

const collections = [
  {
    number: '01',
    name: 'Luna',
    description: 'Un accueil enveloppant, pour des nuits tout en douceur.',
    className: 'luna',
    label: 'L’accueil moelleux',
    image: 'https://images.unsplash.com/photo-1647376036543-f9f543601a1d?auto=format&fit=crop&w=1100&q=85',
  },
  {
    number: '02',
    name: 'Aria',
    description: 'Un équilibre précis entre soutien et légèreté.',
    className: 'aria',
    label: 'L’équilibre parfait',
    image: 'https://images.unsplash.com/photo-1759176170553-7c078c66c514?auto=format&fit=crop&w=1100&q=85',
  },
  {
    number: '03',
    name: 'Terra',
    description: 'Une sensation naturelle, pensée pour se ressourcer.',
    className: 'terra',
    label: 'Le confort authentique',
    image: 'https://images.unsplash.com/photo-1531835551805-16d864c8d311?auto=format&fit=crop&w=1100&q=85',
  },
];

const features = [
  {
    number: '01',
    title: 'Le geste juste',
    description: 'Le soin du détail et la beauté des choses bien faites.',
  },
  {
    number: '02',
    title: 'Le confort repensé',
    description: 'Des collections conçues pour accompagner chaque nuit.',
  },
  {
    number: '03',
    title: 'L’élégance italienne',
    description: 'Des lignes sobres, inspirées par l’art de vivre italien.',
  },
];

function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className={diagonal ? 'icon icon-diagonal' : 'icon'}
      fill="none"
    >
      <path d="M3.75 10h12.5M10 3.75 16.25 10 10 16.25" />
    </svg>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <a className="wordmark" href="#accueil" aria-label="Dormia, accueil" onClick={closeMenu}>
        dormia<span>.</span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>
      <nav
        className={`main-navigation${menuOpen ? ' is-open' : ''}`}
        id="main-navigation"
        aria-label="Navigation principale"
      >
        <a href="#collections" onClick={closeMenu}>Nos matelas</a>
        <a href="#tradition" onClick={closeMenu}>Notre histoire</a>
        <a href="#savoir-faire" onClick={closeMenu}>Notre savoir-faire</a>
      </nav>
      <a className="header-contact" href="#contact">
        Parlons de vos nuits <ArrowIcon diagonal />
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="accueil">
      <div className="hero-copy">
        <p className="eyebrow"><span /> Le sommeil, à l’italienne</p>
        <h1>L’art de bien dormir <em>se transmet.</em></h1>
        <p className="hero-description">
          Le goût des belles matières, le sens du détail et le plaisir de bien
          vivre. Découvrez une autre façon de penser vos nuits.
        </p>
        <div className="hero-actions">
          <a className="button button-dark" href="#collections">
            Explorer nos matelas <ArrowIcon />
          </a>
          <a className="text-link" href="#tradition">
            Découvrir Dormia <span>↓</span>
          </a>
        </div>
        <div className="hero-note">
          <span className="note-rule" />
          <span>Une invitation à ralentir, et à mieux dormir.</span>
        </div>
      </div>
      <div className="hero-art">
        <img src="https://images.unsplash.com/photo-1531835551805-16d864c8d311?auto=format&fit=crop&w=1800&q=90" alt="Lit et matelas dans une chambre lumineuse aux tons naturels" fetchPriority="high" />
        <div className="art-caption"><span>01 / 03</span><span>La calma comincia qui</span></div>
      </div>
      <div className="hero-side-label">DORMIA · CASA DEL RIPOSO</div>
    </section>
  );
}

function CollectionCard({ item }) {
  return (
    <article className="collection-card">
      <a className={`product-art ${item.className}`} href="#contact" aria-label={`Découvrir le matelas ${item.name}`}>
        <img src={item.image} alt={`Matelas ${item.name} dans une chambre élégante`} loading="lazy" />
        <span className="product-overlay" />
        <span className="product-label">{item.label}</span>
        <span className="product-number">{item.number}</span>
        <span className="product-arrow"><ArrowIcon diagonal /></span>
      </a>
      <div className="product-info">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
      </div>
      <a className="product-details-link" href={`#details-${item.className}`}>Voir les détails <ArrowIcon /></a>
    </article>
  );
}

function Collections() {
  return (
    <section className="collections section-pad" id="collections">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Trouvez votre équilibre</p>
          <h2>À chacun <em>son confort.</em></h2>
        </div>
        <a className="text-link" href="#contact">
          Voir toutes les collections <ArrowIcon />
        </a>
      </div>
      <div className="collection-grid">
        {collections.map((item) => <CollectionCard key={item.number} item={item} />)}
      </div>
    </section>
  );
}

function MattressDetails() {
  return (
    <section className="mattress-details section-pad" id="details">
      <div className="section-heading">
        <div>
          <p className="eyebrow">De la surface au cœur du matelas</p>
          <h2>Chaque couche a <em>son rôle.</em></h2>
        </div>
        <p className="details-intro">Découvrez la structure et les sensations de nos modèles. Les matériaux exacts sont à confirmer sur la fiche de chaque matelas.</p>
      </div>
      <div className="detail-grid">
        {[
          { id: 'luna', name: 'Luna', image: 'https://images.unsplash.com/photo-1647376036543-f9f543601a1d?auto=format&fit=crop&w=900&q=85', note: 'Accueil moelleux', layers: ['Housse textile', 'Couche de confort', 'Noyau de soutien', 'Base stabilisatrice'] },
          { id: 'aria', name: 'Aria', image: 'https://images.unsplash.com/photo-1759176170553-7c078c66c514?auto=format&fit=crop&w=900&q=85', note: 'Confort équilibré', layers: ['Housse textile', 'Couche d’accueil', 'Zone de soutien', 'Base de maintien'] },
          { id: 'terra', name: 'Terra', image: 'https://images.unsplash.com/photo-1531835551805-16d864c8d311?auto=format&fit=crop&w=900&q=85', note: 'Sensation naturelle', layers: ['Housse textile', 'Couche de confort', 'Noyau de soutien', 'Base stabilisatrice'] },
        ].map((item) => (
          <article className="detail-card" id={`details-${item.id}`} key={item.id}>
            <img src={item.image} alt={`Détail du matelas ${item.name}`} loading="lazy" />
            <div className="detail-card-copy">
              <p className="eyebrow">{item.note}</p>
              <h3>{item.name} <span>— vue en coupe</span></h3>
              <div className="mattress-cutaway" aria-label={`Couches du matelas ${item.name}`}>
                {item.layers.map((layer, index) => <div className={`mattress-layer layer-${index + 1}`} key={layer}><span>{String(index + 1).padStart(2, '0')}</span>{layer}</div>)}
              </div>
              <p className="detail-note">Schéma indicatif : demandez la composition exacte du modèle en magasin.</p>
            </div>
          </article>
        ))}
      </div>
      <p className="medical-note"><strong>Confort et matériaux.</strong> Les couches présentées décrivent des éléments de confort et de soutien. Elles ne constituent pas une promesse de traitement médical ; la composition définitive dépend de la fiche fabricant.</p>
    </section>
  );
}

function TraditionVideo() {
  const videoUrl = `${import.meta.env.BASE_URL}video/matelasvideo.mp4`;
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section className="tradition section-pad" id="tradition">
      <div className="tradition-copy">
        <p className="eyebrow eyebrow-light"><span /> Le savoir-faire, autrement</p>
        <h2>Une tradition italienne.<br /><em>Un regard nouveau.</em></h2>
        <p className="tradition-description">
          Il y a des gestes qui traversent le temps. Nous les faisons vivre
          aujourd’hui avec une vision contemporaine du confort et des nuits
          qui font du bien.
        </p>
        <a className="button button-light" href="#savoir-faire">
          Notre philosophie <ArrowIcon />
        </a>
        <span className="tradition-stamp" aria-hidden="true">FATTO<br />CON<br />CURA</span>
      </div>
      <div className="video-frame">
        {videoUrl && !videoFailed ? (
          <video
            className="advert-video"
            controls
            playsInline
            preload="metadata"
            onError={() => setVideoFailed(true)}
          >
            <source src={videoUrl} type="video/mp4" />
            Votre navigateur ne prend pas en charge la lecture vidéo.
          </video>
        ) : (
          <div className="video-placeholder">
            <div className="video-placeholder-content">
              <span className="play-mark" aria-hidden="true">▶</span>
              <span className="video-kicker">DORMIA PRESENTA</span>
              <span className="video-title">Il tempo<br />del riposo.</span>
              <span className="video-hint">
                {videoFailed
                  ? 'La vidéo n’a pas pu être chargée.'
                  : 'Votre film de marque apparaîtra ici.'}
              </span>
            </div>
            <span className="video-index">FILM 01 — LA NOSTRA STORIA</span>
          </div>
        )}
        <span className="video-corner" aria-hidden="true">D.</span>
      </div>
    </section>
  );
}

function Craftsmanship() {
  return (
    <section className="craftsmanship section-pad" id="savoir-faire">
      <div className="craft-heading">
        <p className="eyebrow">L’essentiel, avec intention</p>
        <h2>Le confort est une <em>affaire de détails.</em></h2>
      </div>
      <div className="craft-grid">
        {features.map((feature) => (
          <article className="craft-item" key={feature.number}>
            <span className="craft-number">{feature.number}</span>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <span className="craft-line" />
          </article>
        ))}
      </div>
      <p className="closing-note">Dormia — Il piacere di sentirsi a casa.</p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <a className="wordmark wordmark-footer" href="#accueil">dormia<span>.</span></a>
      <p>Les belles nuits commencent par une conversation.</p>
      <a className="footer-link" href="mailto:ciao@dormia.fr">
        ciao@dormia.fr <ArrowIcon diagonal />
      </a>
      <span className="copyright">© {new Date().getFullYear()} Dormia. Tous droits réservés.</span>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Collections />
        <MattressDetails />
        <TraditionVideo />
        <Craftsmanship />
      </main>
      <Footer />
    </>
  );
}
