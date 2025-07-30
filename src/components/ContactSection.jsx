import "./ContactSection.css";

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
        <h2 className="section-title">
        What’s Next?
        <span className="section-line"></span>
      </h2>
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-text">
        Although I’m not currently looking for new opportunities, my inbox is always open.
        Whether you have a question or just want to say hi, I’ll try my best to get back to you!
      </p>
      <a href="mailto:your.email@example.com" className="contact-button">
        Contact me
      </a>
    </section>
  );
}
