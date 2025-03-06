import FlipCard from './Flipcard'
import './skills.css'
const Skills = () => {
  
  return (
    <section id="skills" className="min-h-screen h-full bg-white flex flex-col items-center p-4">
        <div className='p-4 shadow-2xl w-full max-w-lg rounded'>

          <h2 className="text-xl border-b-2 border-orange-500 font-bold text-gray-800">Technical Skills</h2>
          <div className='w-full p-2'>
            <p><span className='font-bold'>Front-End:</span> HTML, CSS, JavaScript, React</p>
            <p><span className='font-bold'>Back-End:</span> Node.js, Express.js</p>
            <p><span className='font-bold'>Database:</span> MongoDB</p>
            <p><span className='font-bold'>State Management:</span> Redux Toolkit</p>
            <p><span className='font-bold'>Tools:</span> VS Code, Postman, Git, Github</p>
          </div>

          <h2 className="text-xl font-bold text-gray-800">Certifications</h2>
          <div className='w-full p-2 border-2 rounded mt-2'>
            <img className='w-full h-64 rounded' src="./Certificate.jpg" alt="" />
          </div>

          <div className='w-full mt-4'>
            <a href="https://drive.google.com/file/d/1sHmIahun1i0yLprJWn2r3wdlzloo5-6p/view?usp=sharing" download={true}>
              <button className='button w-full border-2 text-[#ff5733] font-bold border-[#ff5733] p-4 rounded'>Download Resume</button>
              </a>
          </div>

        </div>
    </section>
  );
};

export default Skills;
