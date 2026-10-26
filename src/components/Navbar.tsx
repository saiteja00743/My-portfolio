import { useEffect, useState } from "react";
const links = [
  ["#home", "Home"], ["#about", "About"], ["#experience", "Experience"],
  ["#skills", "Skills"], ["#projects", "Projects"], ["#certificates", "Credentials"],
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
      <p className="film-roles">Full Stack<br />Developer<br />AI Engineer</p>
      <nav aria-label="Primary" className="film-nav">{links.map(([href, label]) => <a key={href} href={href}>{label}</a>)}</nav>
      <span className="film-edition">OPEN TO WORK <b>•••</b></span>
      <button type="button" className="film-menu-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="film-mobile-menu" onClick={() => setOpen(!open)}>{open ? "CLOSE −" : "MENU +"}</button>
      <nav id="film-mobile-menu" aria-label="Mobile" className="film-mobile-menu" hidden={!open}>{links.map(([href, label]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}</nav>
    </header>
  );
}
