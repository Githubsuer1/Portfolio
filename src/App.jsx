import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="mt-14"> 
        <Outlet /> 
      </main>
    </>
  );
}

export default App;
