import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from './App.jsx';
import About from './Components/About.jsx';
import Home from './Components/Home.jsx';
import Contact from './Components/Contact.jsx';
import Education from './Components/Education.jsx';
import Skills from './Components/Skills.jsx';
import Projects from './Components/Projects.jsx';
import ImageCarousel from './Components/ImageCarousel.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <About /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '/education', element: <Education /> },
      { path: '/skills', element: <Skills /> },
      { path: '/projects', element: <Projects /> },
      { path: '/carousel', element: <ImageCarousel /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
