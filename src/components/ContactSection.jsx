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
        I'm currently open to new opportunities and actively looking for my next challenge in front-end development. Whether you have a job offer, a collaboration idea, or just want to connect, feel free to reach out, I’d love to hear from you!
      </p>
      <a href="mailto:l.martinez.mena@gmail.com" className="contact-button">
        Contact me
      </a>
    </section>
  );
}
