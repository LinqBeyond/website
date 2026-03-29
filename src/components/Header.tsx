import { LogoMark } from "./LogoMark";

const nav = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="site-header">
      <a href="#top" className="site-header__brand">
        <LogoMark className="site-header__mark" />
        <span className="site-header__wordmark">
          <span className="site-header__lynq">LynQ</span>
          <span className="site-header__beyond"> BEYOND</span>
        </span>
      </a>
      <nav className="site-header__nav" aria-label="Primary">
        <ul>
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <a className="btn btn--primary site-header__cta" href="mailto:deeyapatel0007@gmail.com">
        Email us
      </a>
    </header>
  );
}
