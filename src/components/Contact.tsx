import { type FormEvent, useState } from "react";

export function Contact() {
  const [notice, setNotice] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setNotice(
      "This form is not connected yet—we are finishing our inquiry workflow. Please email us at contact@lynqbeyond.com for now.",
    );
  }

  return (
    <section className="section contact" id="contact" aria-labelledby="contact-heading">
      <div className="section__inner contact__grid">
        <div>
          <h2 id="contact-heading" className="section__title">
            Get in touch
          </h2>
          <p className="section__intro contact__intro">
            Tell us what you are looking to improve. We will follow up by email to schedule a short
            call or share next steps.
          </p>
          <a className="btn btn--primary btn--lg contact__mailto" href="mailto:contact@lynqbeyond.com">
            Email contact@lynqbeyond.com
          </a>
        </div>
        <div className="contact__form-wrap">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="contact-form__row">
              <label className="contact-form__label" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                className="contact-form__input"
                placeholder="Your name"
              />
            </div>
            <div className="contact-form__row">
              <label className="contact-form__label" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="contact-form__input"
                placeholder="you@example.com"
              />
            </div>
            <div className="contact-form__row">
              <label className="contact-form__label" htmlFor="business">
                Business name
              </label>
              <input
                id="business"
                name="business"
                type="text"
                autoComplete="organization"
                className="contact-form__input"
                placeholder="Optional"
              />
            </div>
            <div className="contact-form__row">
              <label className="contact-form__label" htmlFor="message">
                How can we help?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="contact-form__input contact-form__textarea"
                placeholder="A sentence or two is enough to start."
              />
            </div>
            <button type="submit" className="btn btn--secondary btn--block">
              Send message
            </button>
            <p className="contact-form__hint">
              Submitting previews our future workflow. Until the form is live, use the email button
              above.
            </p>
          </form>
          {notice ? (
            <div className="contact-notice" role="status" aria-live="polite">
              {notice}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
