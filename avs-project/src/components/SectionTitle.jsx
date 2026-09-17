function SectionTitle({ small, title, description }) {
  return (
    <div className="section-title">
      {small && <div className="section-small">✦ &nbsp; {small} &nbsp; ✦</div>}

      <h2>{title}</h2>

      {description && <p>{description}</p>}
    </div>
  );
}

export default SectionTitle;
