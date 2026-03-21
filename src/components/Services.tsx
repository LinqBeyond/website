const items = [
  {
    title: "Websites that convert",
    body: "Clear structure, polished design, and messaging that builds trust the moment someone lands on your page.",
  },
  {
    title: "Search visibility",
    body: "Foundational SEO and local signals so the right people can discover you when it matters.",
  },
  {
    title: "A coherent digital presence",
    body: "Consistent branding, performance, and mobile experience across the touchpoints your clients use.",
  },
];

export function Services() {
  return (
    <section className="section" id="services" aria-labelledby="services-heading">
      <div className="section__inner">
        <h2 id="services-heading" className="section__title">
          What we help you build
        </h2>
        <p className="section__intro">
          Whether you are refining an existing site or starting fresh, we align design, content,
          and technical fundamentals so your business shows up with confidence online.
        </p>
        <ul className="card-grid">
          {items.map((item) => (
            <li key={item.title} className="card">
              <h3 className="card__title">{item.title}</h3>
              <p className="card__body">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
