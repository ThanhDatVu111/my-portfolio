const baseUrl = import.meta.env.BASE_URL;

const stops = [
  {
    title: "Golden Gate Bridge",
    image: `${baseUrl}images/golden_gate.avif`,
    alt: "Golden Gate Bridge viewed from the coast",
    caption: "Fog, wind, and that first view across the bay.",
    body:
      "The Golden Gate Bridge was the first stop that made the trip feel real. The wind was cold, the fog kept moving across the water, and every few minutes the view changed. It was one of those places that looks familiar from photos, then feels completely different when you are standing there in person.",
  },
  {
    title: "Pier 39",
    image: `${baseUrl}images/pier39.jpg`,
    alt: "Pier 39 waterfront in San Francisco",
    caption: "Sea lions, street performers, shops, and waterfront noise.",
    body:
      "Pier 39 had a totally different energy. There were shops, performers, food spots, and the sea lions hanging out near the docks like they owned the place. I liked how easy it was to just walk without a strict plan and let the afternoon happen.",
  },
  {
    title: "Lombard Street",
    image: `${baseUrl}images/lombard.jpg`,
    alt: "Curved road and homes along Lombard Street",
    caption: "A steep walk with one of the most memorable street views.",
    body:
      "Lombard Street was more interesting than I expected because it showed how much personality a city can have through its layout. Walking down the curves, looking at the houses, and watching cars slowly make the turns gave me a better appreciation for the small details that make San Francisco feel unique.",
  },
];

function Blog() {
  return (
    <main className="blog-page">
      <section className="blog-hero">
        <div className="blog-hero-copy">
          <p className="section-label">Spring Break Blog</p>
          <h1>Spring Break 2026: San Francisco</h1>
          <p>
            After a long semester, San Francisco felt like the right kind of reset:
            busy enough to feel exciting, open enough to slow down, and full of
            places that made me want to keep walking a little farther.
          </p>
        </div>
        <div className="blog-mosaic" aria-label="San Francisco trip photos">
          {stops.map((stop) => (
            <img key={stop.title} src={stop.image} alt={stop.alt} />
          ))}
        </div>
      </section>

      <section className="section blog-posts" aria-label="San Francisco travel stops">
        {stops.map((stop) => (
          <TravelStop key={stop.title} stop={stop} />
        ))}
      </section>

      <section className="section reflection-section">
        <h2>What I brought back</h2>
        <p>
          The trip reminded me that taking a break can make the work better
          when I come back to it. Seeing new streets, water, buildings, and
          people gave me fresh energy for school, internships, and personal
          projects. It also made me think more about how places are designed,
          which connects back to how I want my own software to feel: clear,
          thoughtful, and easy to move through.
        </p>
      </section>
    </main>
  );
}

function TravelStop({ stop }) {
  return (
    <article className="travel-stop">
      <figure>
        <img src={stop.image} alt={stop.alt} />
        <figcaption>{stop.caption}</figcaption>
      </figure>
      <div>
        <h2>{stop.title}</h2>
        <p>{stop.body}</p>
      </div>
    </article>
  );
}

export default Blog;
