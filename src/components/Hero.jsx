import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id='hero'>
      <p className="intro fade-in-up" style={{ animationDelay: "0.2s" }}>Hi, my name is</p>
      <h1 className="name fade-in-up" style={{ animationDelay: "0.4s" }}>Lidia Martínez</h1>
      <h2 className="subtitle fade-in-up" style={{ animationDelay: "0.6s" }}>I build creative websites and automations.</h2>
      <p className="description fade-in-up" style={{ animationDelay: "0.8s" }}>
        I'm a front-end developer and automation designer focused on building beautiful, user-friendly websites and smart workflows powered by AI.
      </p>
      <div className="scroll-down fade-in-up" style={{ animationDelay: "1s" }}>
        <span>Scroll down</span>
       <div className="arrow-wrapper">
    <div className="arrow"></div>
  </div>
        </div>
    </section>
  );
}
