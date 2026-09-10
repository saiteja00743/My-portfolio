import { useEffect, useState } from "react";
const links = [
  ["#home", "Home"], ["#projects", "Work"], ["#about", "About"],
  ["#experience", "Journey"], ["#skills", "Skills"], ["#certificates", "Credentials"],
  ["#resume", "Resume"], ["#contact", "Contact"],
];
export function Navbar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const escape = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, []);
  return (
    <header className="film-header">
      <a href="#home" className="film-brand" onClick={() => setOpen(false)}>SAI TEJA</a>
      <p className="film-roles">Developer<br />Builder<br />AI Explorer</p>
      <nav aria-label="Primary" className="film-nav">{links.map(([href, label]) => <a key={href} href={href}>{label}</a>)}</nav>
      <span className="film-edition">PORTFOLIO — MMXXVI <b>•••</b></span>
      <button type="button" className="film-menu-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="film-mobile-menu" onClick={() => setOpen(!open)}>{open ? "CLOSE −" : "MENU +"}</button>
      <nav id="film-mobile-menu" aria-label="Mobile" className="film-mobile-menu" hidden={!open}>{links.map(([href, label]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}</nav>
    </header>
  );
}
