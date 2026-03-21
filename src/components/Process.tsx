const steps = [
  {
    step: "01",
    title: "Discovery",
    body: "We learn your goals, audience, and what success looks like—so the site supports how you actually work.",
  },
  {
    step: "02",
    title: "Design & build",
    body: "We craft layouts, copy structure, and performance-minded implementation tailored to your brand.",
  },
  {
    step: "03",
    title: "Launch & optimize",
    body: "We ship, validate, and tune SEO and analytics basics so you can measure what is working.",
  },
];

export function Process() {
  return (
    <section className="section section--alt" id="process" aria-labelledby="process-heading">
      <div className="section__inner">
        <h2 id="process-heading" className="section__title">
          How we work
        </h2>
        <p className="section__intro">
          A straightforward process with room for your feedback at each step—no jargon required.
        </p>
        <ol className="process">
          {steps.map((s) => (
            <li key={s.step} className="process__item">
              <span className="process__step">{s.step}</span>
              <div>
                <h3 className="process__title">{s.title}</h3>
                <p className="process__body">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
