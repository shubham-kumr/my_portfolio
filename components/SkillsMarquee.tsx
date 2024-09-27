function SkillsMarquee() {
  const skills1 = ["TypeScript", "JavaScript", "Python", " "];
  const skills2 = ["Frontend - React.js / Next.js", "Backend - Node.js", "Database - MongoDB"," "];
  const skills3 = ["JSON", "OpenAI", "APIs", "GitHub", " "];
  const skills4 = ["Tailwind CSS", "shadcnUI", "Vercel", "Netlify", " "];

  const renderMarquee = (skills: string[]) => (
    <>
      <ul className="marquee__content">
        {skills.map((skill, index) => (
          <li key={index} className="text-white">
            {skill}
          </li>
        ))}
      </ul>
      <ul className="marquee__content" aria-hidden="true">
        {skills.map((skill, index) => (
          <li key={index} className="text-white">
            {skill}
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <section className="marquees-wrapper space-y-4 mt-5">
      <div className='items-center justify-left'>
        <h1 className="dark:text-gray-800 text-gray-200 text-xl font-bold tracking-wide">current skills 🛠️</h1>
      <div className='h-[1px] w-full dark:bg-gray-300 bg-zinc-800' />
      <p className="text-lg dark:text-gray-600 text-gray-400">tech nerd always interested in learning new stacks.</p>
      </div>
      <div className="bg-purple-400 text-2xl p-3 marquee marquee-1 transform rotate-[-5deg]">
        {renderMarquee(skills1)}
      </div>
      <div className="bg-purple-400 text-2xl p-3 marquee marquee-2 transform rotate-[5deg]">
        {renderMarquee(skills2)}
      </div>
      <div className="bg-purple-400 text-2xl p-3 marquee marquee-3 transform rotate-[-8deg]">
        {renderMarquee(skills3)}
      </div>
      <div className="bg-purple-400 text-2xl p-3 marquee marquee-4 transform rotate-[10deg]">
        {renderMarquee(skills4)}
      </div>
      
    </section>
  );
}

export default SkillsMarquee;