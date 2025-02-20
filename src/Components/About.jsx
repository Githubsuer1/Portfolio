import myImage from '../assets/Siddhant_mishra.jpg';

const About = () => {
    return (
      <section id="about" className=" min-h-screen h-full  w-full flex sm:flex-row flex-col items-center justify-center">
        <div className='w-full max-w-xl p-4 rounded'>
        <h2 className="sm:hidden text-4xl font-bold text-gray-800 p-4  text-center">About Me</h2>
          <img className='w-full max-w-xl rounded' src={myImage} alt="" />
        </div>

        <div className="w-full max-w-xl p-4 rounded">
        <h2 className="hidden sm:block text-4xl font-bold text-gray-800 p-4  text-center">About Me</h2>

          <p className="text-md text-justify text-gray-900 leading-relaxed">
            Hi, I'm <strong>Siddhant Mishra</strong>, a passionate and detail-oriented 
            <span className="text-blue-500 font-semibold"> full-stack developer</span> specializing in <strong>React.js, JavaScript, Tailwind CSS, and backend technologies like Node.js and MongoDB</strong>. 
            With a Master's degree in <strong>Computer Applications (MCA)</strong> and a Bachelor's in <strong>Computer Applications (BCA)</strong>, I have built a strong foundation in <strong>software development and problem-solving</strong>.
          </p>
  
          <p className="text-md text-justify text-gray-900  leading-relaxed ">
            My <strong>technical expertise</strong> spans across tools like <strong>HTML, CSS, React.js, Redux Toolkit, JavaScript, Nodejs, Git, and MongoDB</strong>, allowing me to create <strong>scalable, efficient, and high-performing applications</strong>. 
            I have worked on multiple projects, including <strong>Todo List, Random Password Generator, Currency Converter, Weather App, Calculator, BMI Generator, MyOwnGPT websites</strong>, showcasing my ability to build interactive and user-friendly applications.
          </p>
  
          <p className="text-md text-justify  text-gray-900 leading-relaxed">
            I thrive on <strong>problem-solving, optimizing performance, and continuously learning new technologies</strong>. Whether working on the <strong>frontend, backend, or full-stack solutions</strong>, I ensure <strong>clean code, best practices, and a user-first approach</strong>. 
            I am always <strong>eager to collaborate on innovative projects and enhance user experiences</strong> through technology.
          </p>
  
          <p className="text-md text-justify text-gray-900 leading-relaxed">
          <strong>Let's build something amazing together!</strong> 🚀  
            Feel free to <strong>connect with me</strong> and explore my work. 😊
          </p>
        </div>

        
      </section>
    );
  };
  
  export default About;
  