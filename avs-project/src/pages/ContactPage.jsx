function ContactPage() {
  return (
    <div>
      <section className="page-hero contact-hero">
        <div className="page-hero-content">
          <div className="hero-small">✦ SAY HELLO ✦</div>

          <h1>Contact Us</h1>

          <p>We'd love to hear from you.</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-info">
          <div className="section-small">✦ GET IN TOUCH</div>

          <h2>We'd Love to Hear From You</h2>

          <p>
            Have a question, suggestion, or just want to say hello? Feel free to
            reach out using the form or contact details below.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <span className="contact-icon">✉</span>

              <div>
                <strong>Email</strong>
                <p>hello@thevintagebox.com</p>
              </div>
            </div>

            <div className="contact-detail">
              <span className="contact-icon">☎</span>

              <div>
                <strong>Phone</strong>
                <p>+40 123 456 789</p>
              </div>
            </div>

            <div className="contact-detail">
              <span className="contact-icon">⌖</span>

              <div>
                <strong>Visit Us</strong>
                <p>Str. Vintage nr. 12, Cluj-Napoca, Romania</p>
              </div>
            </div>
          </div>

          <div className="follow-us">
            <h3>Follow Our Journey</h3>

            <p>
              Stay updated with our latest finds, special offers and vintage
              inspiration.
            </p>

            <div className="social-links">
              <span>◎</span>
              <span>◉</span>
              <span>●</span>
            </div>
          </div>
        </div>

        {/* FORM */}

        <form className="contact-form">
          <label>
            Name
            <input type="text" placeholder="Your name" />
          </label>

          <label>
            Email
            <input type="email" placeholder="you@example.com" />
          </label>

          <label>
            Message
            <textarea placeholder="How can we help?" rows="6"></textarea>
          </label>

          <button type="submit" className="submit-button">
            Send Message →
          </button>

          <div className="form-decoration">❀</div>
        </form>
      </section>
    </div>
  );
}

export default ContactPage;
