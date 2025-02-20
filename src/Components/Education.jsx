import myImage from '../assets/aktu.png';
import myImage2 from '../assets/mgkvp.png';

const Education = () => {
    return (
      <div className="w-full bg-white min-h-screen h-full p-6 flex flex-col sm:flex-row gap-8 justify-center items-center">
           <div className='sm:w-96 shadow-2xl p-6 rounded transition-all duration-700 ease hover:scale-105 '>
              <img className='w-90 h-90' src={myImage} alt="" />
              <p className='text-gray-800 text-center mt-4 font-bold'>AKTU </p>
              <h1 className='text-gray-800 text-center'>Master Of Computer Application - (2022-24)</h1>
              <h1 className='text-center text-gray-900 '>CGPA - 7.22</h1>
            </div> 

            <div className='sm:w-96 shadow-2xl p-6 rounded transition-all duration-700 ease hover:scale-105'>
              <img className='w-90 h-90 mix-blend-multiply' src={myImage2} alt="" />
              <p className='text-gray-800 text-center mt-4 font-bold'>MGKVP </p>
              <h1 className='text-gray-800 text-center'>Bachelor Of Computer Application - (2018-21)</h1>
              <h1 className='text-center text-gray-900 '>Percentage - 65.47 </h1>
            </div> 

      </div>
    );
  };
  
  export default Education;

