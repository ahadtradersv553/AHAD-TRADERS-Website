import "./Hero.css";
import heroImage from "../../assets/images/HeroImage.png";

export default function Hero() {
  return (
    <section className="hero" id="home" aria-label="Ahad Traders tyre shop">
      <img
        className="hero-image"
        src={heroImage}
        alt="Tyre and wheel at an automotive workshop"
        fetchpriority="high"
      />
      <div className="hero-overlay">
        <h1 className="hero-brand">AHAD TRADERS</h1>
        <p className="hero-tagline">New Tyres — All Premium &amp; Chinese Brands</p>
        <p className="hero-tagline">Rims &bull; Wraps &bull; Tinting &bull; Accessories</p>
        <p className="hero-tagline">🚚 Delivery All Over Pakistan</p>
        <div className="hero-divider"></div>
        <p className="hero-location">📍 DHA New Super Town, Lahore</p>
        <p className="hero-phone">0334-933134 &bull; 0302-4158700</p>
      </div>
    </section>
  );
}


