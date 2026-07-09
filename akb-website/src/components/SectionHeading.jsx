// Reusable heading block for page sections.
// Keeps the title/intro layout consistent across Services, Work, and future sections.
function SectionHeading({ eyebrow, title, intro }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{intro}</p>
    </div>
  )
}

export default SectionHeading
