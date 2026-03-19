import { Analytics } from "@vercel/analytics/react"

import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import { StrictMode, Suspense } from 'react'

import Loader from './Components/Loader.jsx'
import App from './App.jsx'
import './index.css'

console.log("Hi if you notice a bug please contact me genzcoder01@gmail.com")


const isMobile = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  const isTouchDevice = () => {
    return (('ontouchstart' in window) ||
      (navigator.maxTouchPoints > 0) ||
      (navigator.msMaxTouchPoints > 0));
  };

  const mobileCheck = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
  return mobileCheck || (isTouchDevice() && ((window.innerWidth <= 1024) || (window.innerHeight <= 800)));
}

const root = ReactDOM.createRoot(document.querySelector('#root'))

const fovForMobile = 100
const fovForPc = 45

root.render(
  <StrictMode>
    <Canvas
      style={{
        width: '100%',
        height: '100%',
        display: 'block',
      }}
      camera={{
        fov: isMobile() ? fovForMobile : fovForPc,
        near: 0.1,
        far: 200,
        position: [52, 7, 12],
      }}
      dpr={[1, 2]}
      gl={{
        antialias: true,
        alpha: false,
      }}
    >
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>

      {/*<Perf position="top-left" />*/}
    </Canvas>

    <Analytics />
    <div style={{ display: "none" }}>
      <section aria-hidden="true">
        <h1>Sankalp Kumar - Creative Developer</h1>
        <h2>Computer Science Student at KIIT University</h2>
        <h2>Three.js and React Three Fiber Expert</h2>
        <h2>Beginner in 3D Web Development</h2>
      </section>
      <section aria-hidden="true">
        <h2>Skills and Expertise</h2>
        <ul>
          <li>Three.js Developer</li>
          <li>React Three Fiber Developer</li>
          <li>GSAP Developer</li>
          <li>AI/ML</li>
          <li>Creative Coding</li>
        </ul>
      </section>
      <section aria-hidden="true">
        <p>
          Welcome to the 3D portfolio of Sankalp Kumar. This immersive portfolio has
          been created using React Three Fiber and GSAP, with custom 3D models designed
          in Blender. Explore innovative web experiences that blend creativity and technology.
        </p>
      </section>
      <noscript>
        <p>
          This 3D portfolio of GenZCoder showcases creative web development using
          React Three Fiber, Three.js, and GSAP. Please enable JavaScript to explore
          the immersive experience.
        </p>
      </noscript>
    </div>



  </StrictMode>
)