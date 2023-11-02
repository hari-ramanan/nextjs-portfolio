import { useState } from 'react';
import { SoftSkillsData, HardSkillsData } from "@/lib/data";

export default function Skills({ isDarkMode }) {
  const [displaySkills, setDisplaySkills] = useState(SoftSkillsData);

  const handleSkillsToggle = (skills) => {
    setDisplaySkills(skills);
  };

  return (
    <section id="skills" className="mb-8 max-w-4xl mx-auto text-center">
      <h2 className={`mt-10 text-3xl text-center ${isDarkMode ? 'dark:bg-opacity-10 dark:text-white/80' : ''}`}>Skills</h2>
      <div className="mt-10">
        <button
          onClick={() => handleSkillsToggle(SoftSkillsData)}
          className={`mr-2 py-2 px-4 ${displaySkills === SoftSkillsData ? 'bg-pink-700 rounded-lg text-white' : 'bg-gray-300 rounded-lg text-black'}`}
        >
          Soft Skills
        </button>

        <button
          onClick={() => handleSkillsToggle(HardSkillsData)}
          className={`ml-2 py-2 px-4 ${displaySkills === HardSkillsData ? 'bg-pink-700 rounded-lg text-white' : 'bg-gray-300 rounded-lg text-black'}`}
        >
          Hard Skills
        </button>
      </div>
      <ul className="mt-10 ml-5 flex flex-wrap justify-center gap-2 text-lg text-black">
        {displaySkills.map((skill, index) => (
          <li className={`bg-gray-300 border rounded-xl p-3 ${isDarkMode ? 'dark:bg-opacity-10 dark:text-white/80' : ''}`} key={index}>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
