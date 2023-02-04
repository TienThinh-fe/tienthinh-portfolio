export function ContactItem({ imgSrc, link }) {
  return (
    <li className="contact-item">
      <img src={imgSrc} alt="Contact" />
      <span>{link}</span>
    </li>
  );
}
