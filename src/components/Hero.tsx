import { LogoMark } from "./LogoMark";

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-heading">
      <div className="hero__glow" aria-hidden />
      <div className="hero__inner">
        <LogoMark className="hero__logo" />
        <p className="hero__eyebrow">Digital presence for growing businesses</p>
        <h1 id="hero-heading" className="hero__title">
          <span className="hero__title-lynq">LynQ</span>
          <span className="hero__title-beyond"> BEYOND</span>
        </h1>
        <p className="hero__line" role="presentation" aria-hidden />
        <p className="hero__tagline">Modern websites that help businesses grow</p>
        <p className="hero__lede">
          We design and build fast, credible web experiences and help you get found online—so
          you can focus on serving clients and running your business.
        </p>
        <div className="hero__actions">
          <a className="btn btn--primary btn--lg" href="mailto:contact@lynqbeyond.com">
            Start a conversation
          </a>
          <a className="btn btn--ghost btn--lg" href="#contact">
            Request information
          </a>
        </div>
      </div>
    </section>
  );
}
