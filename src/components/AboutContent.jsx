export default function AboutContent() {
  const skills = [
    'React', 'Next.js', 'Node.js', 'TypeScript', 'Python',
    'PostgreSQL', 'Tailwind', 'Docker', 'Git', 'REST APIs',
    'GraphQL', 'System Architecture'
  ]

  return (
    <div className="about-wrap">
      <div className="about-top">
        <div className="about-avatar">S</div>
        <div className="about-name">
          <h1>Sanyam Dhawan</h1>
          <p>Software / Full-Stack Engineer</p>
        </div>
      </div>
      <div className="about-rule" />
      <p className="about-bio">
        Hey — I'm Sanyam. I build things that live on the internet, from snappy UIs to the
        backend systems that keep them running. I care a lot about the craft: clean code,
        thoughtful design, and software that actually feels good to use. Currently exploring
        the intersection of great engineering and great experience.
      </p>
      <div>
        <div className="stack-label">Tech Stack</div>
        <div className="tags">
          {skills.map((skill) => (
            <span key={skill} className="tag">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
