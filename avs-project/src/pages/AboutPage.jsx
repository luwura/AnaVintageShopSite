import SectionTitle from "../components/SectionTitle";

function AboutPage() {
  return (
    <div>
      <section className="page-hero about-hero">
        <div className="page-hero-content">
          <div className="hero-small">✦ OUR STORY ✦</div>

          <h1>About Us</h1>

          <p>Our passion for vintage lives here.</p>
        </div>
      </section>

      <section className="about-story">
        <div className="about-text">
          <SectionTitle
            small="MORE THAN JUST A SHOP"
            title="A Love for Things With a Story"
          />

          <p>At Ana Vintage Shop, we believe that every object has a story.</p>

          <p>
            Our journey began with a simple love for vintage treasures — the
            kind that carry history, character and a little bit of nostalgia.
          </p>

          <p>
            We lovingly tend to each piece to preserve as much of its original
            charm as possible. Whether you're a seasoned collector or just
            beginning your vintage journey, we hope you'll find something here
            that speaks to you.
          </p>

          <div className="signature">The Ana Vintage Team</div>
        </div>

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80"
            alt="Vintage interior"
          />
        </div>
      </section>

      <section className="values-section">
        <SectionTitle small="WHAT WE BELIEVE" title="Our Values" />

        <div className="values-grid">
          <div className="value">
            <div className="value-icon">♢</div>
            <h3>Authenticity</h3>
            <p>
              We love objects that feel genuine, imperfect and full of
              character.
            </p>
          </div>

          <div className="value">
            <div className="value-icon">♡</div>
            <h3>Passion</h3>
            <p>Every item is selected because we genuinely love it.</p>
          </div>

          <div className="value">
            <div className="value-icon">✧</div>
            <h3>Sustainability</h3>
            <p>Old objects deserve new homes and new stories.</p>
          </div>

          <div className="value">
            <div className="value-icon">❖</div>
            <h3>Quality</h3>
            <p>We search for pieces that deserve to be treasured.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
