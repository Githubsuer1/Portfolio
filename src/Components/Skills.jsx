import FlipCard from './Flipcard'
const Skills = () => {
  
  return (
    <section id="skills" className="min-h-screen h-full bg-white flex flex-col items-center p-4">
        <h2 className="text-3xl text-center p-4 font-bold text-gray-800">Skills</h2>
        <div className='w-full max-w-3xl grid sm:grid-cols-2 gap-4 place-items-center'>
          <FlipCard domen="Front-end" technology="HTML CSS JAVASCRIPT"/>
          <FlipCard domen="Back-end" technology="Nodejs Expressjs" />  
          <FlipCard domen="Database" technology="MONGODB" />  
          <FlipCard domen="Version-control" technology="GIT GITHUB" />  
        </div>
    </section>
  );
};

export default Skills;
