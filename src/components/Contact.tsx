import { type FormEvent, useState } from "react";

function formDataToUrlEncoded(fd: FormData): string {
  const params = new URLSearchParams();
  fd.forEach((value, key) => {
    params.append(key, typeof value === "string" ? value : "");
  });
  return params.toString();
}

export function Contact() {
  const [notice, setNotice] = useState<string | null>(null);
  const [noticeIsError, setNoticeIsError] = useState(false);
  const [pending, setPending] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setPending(true);
    setNotice(null);
    setNoticeIsError(false);
    try {
      const body = formDataToUrlEncoded(new FormData(form));
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      if (!res.ok) throw new Error(String(res.status));
      setNotice("Thanks — your message was sent. We will reply by email soon.");
      form.reset();
    } catch {
      setNoticeIsError(true);
      setNotice(
        "We could not send that just now. Please email deeyapatel0007@gmail.com directly.",
      );
    } finally {
      setPending(false);
    }
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
          <a className="btn btn--primary btn--lg contact__mailto" href="mailto:deeyapatel0007@gmail.com">
            Email us
          </a>
        </div>
        <div className="contact__form-wrap">
          <form
            className="contact-form"
            name="contact"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="contact-form__honeypot" aria-hidden="true">
              <label htmlFor="contact-bot-field">Leave this empty</label>
              <input
                id="contact-bot-field"
                name="bot-field"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
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
                required
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
                required
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
                required
              />
            </div>
            <button type="submit" className="btn btn--secondary btn--block" disabled={pending}>
              {pending ? "Sending…" : "Send message"}
            </button>
            <p className="contact-form__hint">
              We usually reply within two business days. You can also use the email button on the
              left.
            </p>
          </form>
          {notice ? (
            <div
              className={`contact-notice${noticeIsError ? " contact-notice--error" : ""}`}
              role="status"
              aria-live="polite"
            >
              {notice}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
