import React, { useRef } from 'react';
import './index.css'
function App() {
  const door = useRef(null);
  const ai = useRef(null);
  const audio = useRef(null);
  const flowers = useRef(null);
  const guitar = useRef(null);
  const immersive = useRef(null);
    const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
    <div className="flex w-screen h-screen bg-irl-black overflow-x-clip">
        <div className='flex flex-col w-fit h-fit'>
          <div className='flex justify-center flex-col align-middle items-center w-screen h-screen bg-black'>
              <video width="1920" height="1080" controls autoPlay muted>
                  <source src="irl-cut.webm" type="video/webm"></source>
                  Your browser does not support the WebM format.
              </video>
          </div>
          <div id = "header" className='flex relative w-full h-fit bg-[url(./assets/splatter.png)] bg-contain justify-center align-middle items-center flex-col 2xl:flex-row items-center gap-20'>
            <div className='flex flex-col align-middle justify-center w-1/2 2xl:w-1/4 h-full text-center text-5xl'>
              <img src = "./logo.png" className=' drop-shadow-white drop-shadow-2xl/50 -mb-20 z-0'></img>
              <h1 className='w-full z-10 font-bold'>SHOWCASE</h1>
            </div>
            <div className = "flex w-1/2 h-full text-center align-middle items-center justify-center">
              <div className='flex flex-col gap-5 mt-20 items-center'>
                <h1 style = {{'--c':'#bd184f', '--w': '20px'}} className='irlgrid text-6xl bg-irl-red p-10 border-4 border-white rounded-full w-fit h-fit'>Welcome to the IRL Immersive Showcase</h1>
                <div style = {{'--c':'#bd184f', '--w': '30px'}} className='irlgrid flex flex-col irlgrid text-2xl bg-irl-red p-10 border-4 border-white rounded-2xl w-fit h-fit font-normal items-center mb-20'>
                  <p>At the <b>Idea Realization Lab (IRL)</b>, we build next-generation immersive experiences that blend art, code, hardware, and AI. This project is a fully integrated, student-built platform for exploring real-time multimedia storytelling.</p> 
                  <img className="w-[10rem] invert" src="./Smile.png"></img>
                  <p>With motion triggers, projection mapping, DMX lighting, surround sound, AI visuals, and more, it’s both a performance and a testbed—a space for pushing boundaries in artistic expression and AI-enhanced cognitive engagement.</p>
                  <img className="w-[16rem] invert" src="./Black hand.png"></img>
                  <p>Students learn hands-on skills in robotics, lighting design, sensor integration, sound engineering, and real-time control systems—all while building an unforgettable experience.</p>              
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col 2xl:flex-row h-fit w-screen align-middle justify-center items-center bg-black'>
            <button onClick={() => scrollToSection(door)} className='bg-irl-blue w-full 2xl:w-[15%]'>Automatic Door Reveal</button>
            <button onClick={() => scrollToSection(guitar)}className='bg-gray-500 w-full 2xl:w-[15%]'>The Guitar Sword in the Stone</button>
            <button onClick={() => scrollToSection(ai)}className='bg-irl-yellow w-full 2xl:w-[15%]'>Generative AI Visuals</button>
            <button onClick={() => scrollToSection(flowers)}className='bg-irl-red w-full 2xl:w-[15%]'>A Field of Robotic Flowers</button>
            <button onClick={() => scrollToSection(audio)}className='bg-irl-blue w-full 2xl:w-[15%]' >Dolby Atmos Surround Audio</button>
            <button onClick={() => scrollToSection(immersive)}className='bg-gray-500 w-full 2xl:w-[15%]'>Immersive Multimedia Experience</button>
          </div>
          <h1 style = {{'--c':'#3b3b3b', '--w': '50px'}}className='irlgrid bg-irl-black text-9xl text-center p-10'>INTERACTIVE SCENES</h1>
          <div ref = {door} style = {{'--c':'#56c7f0', '--w': '120px'}} className='irlgrid flex w-screen min-h-screen bg-irl-blue flex-col'>
            <h1 className='text-8xl pt-10 underline underline-offset-4 '>AUTOMATIC DOOR REVEAL</h1>
            <div className='flex flex-col 2xl:flex-row w-full items-center justify-center'>
              <div className='flex flex-col text-3xl font-input w-full 2xl:w-1/2 h-full overflow-clip items-center justify-center align-middle text-center p-10 gap-10'>
                <img className= "w-xl h-full object-stretch flex-grow b" src = "./door/IMG_7007.webp"></img>
                <p><b>Ean Rains</b> created a massive 10-foot wall that opens automatically using a garage door motor. <b>Tina Alkayed</b> and <b>Matthew Reichard</b> hacked the remote control and connected it to a radar sensor, triggering the door when someone approaches—complete with synchronized lighting and sound.</p>
              </div>
              <div className='flex items-center justify-center align-middle w-1/2'>
                <img className= "w-2xl b" src = "./door/IMG_7001.gif"></img>
              </div>
            </div>
          </div>
          <div ref = {guitar} style = {{'--c':'#3b3b3b', '--w': '120px'}} id="guitar" className='irlgrid flex w-screen min-h-screen bg-irl-black flex-col'>
            <h1 className='text-8xl pt-10 underline underline-offset-4 w-full text-right p-5'>THE GUITAR SWORD IN THE STONE</h1>
            <div className='flex flex-col 2xl:flex-row justify-center align-middle items-center w-full gap-10 p-10 text-center'>
                <img className='w-3xl b' src = "./guitar/g1.webp"></img>
                <p><b>Auriel Kremp</b>, <b>Matthew Reichard</b>, and <b>Ruben Lobo</b> built a laser-etched pedestal for a guitar that knows when it's been lifted, triggering a new scene in the experience. The guitar itself was custom-built by Jonathan Shepard.</p>
                <img className='w-3xl b' src = "./guitar/g2.webp"></img>
            </div>
          </div>
          <div ref = {ai}style = {{'--c':'#ede200', '--w': '120px'}} id="flowers" className='irlgrid flex w-screen min-h-screen bg-irl-yellow text-irl-black flex-col'>
            <h1 className='text-8xl pt-10 underline underline-offset-4 '>GENERATIVE AI VISUALS</h1>
            <div className='flex w-full justify-center align-middle items-center p-5'>
                <img className = "w-[80rem] border-[12px] border-black border-dashed " src = "./ai/sd.gif"></img>
            </div>
            <div className='flex flex-col 2xl:flex-row justify-center gap-10 align-middle items-center'>
                <img className="w-6xl m-10 border-[12px] border-black border-dashed"src = "./ai/sc.webp"></img>
                <p><b>Nate Seligson</b> and <b>Auriel Kremp</b> used cutting-edge generative AI tools to create reactive visuals that “hallucinate” in sync with the space and respond to visitor movement.</p>
            </div>
          </div>
          <div ref = {flowers} style = {{'--c':'#bd184f', '--w': '120px'}} id="automatic-door-reveal" className='irlgrid flex w-screen min-h-screen bg-irl-red flex-col'>
            <h1 className='text-8xl pt-10 underline underline-offset-4 w-full text-right p-5'>A FIELD OF ROBOTIC FLOWERS</h1>
            <div className = "flex flex-col 2xl:flex-row w-full h-full justify-center align-middle items-center">
              <div className='flex flex-col justify-center text-center align-middle items-center w-full 2xl:w-1/2 m-10'>
                <p><b>Alisa Zharkova</b> designed a robotic flower that blooms and lights up on command. The prototype is network-controlled and designed to scale—imagine a whole field of these flowers responding to your presence.</p>
                <img src = "./flowers/process.webp" className='w-4xl b m-10'></img>
              </div>
              <img src="./flowers/main.gif" className='w-[150rem] m-10 b'></img>
            </div>
          </div>
          <div ref = {audio} style = {{'--c':'#56c7f0', '--w': '120px'}} id="automatic-door-reveal" className='irlgrid flex w-screen min-h-screen bg-irl-blue flex-col'>
            <h1 className='text-8xl pt-10 underline underline-offset-4 '>DOLBY ATMOS SURROUND AUDIO</h1>
            <div className='flex flex-col 2xl:flex-row w-full justify-center align-middle items-center'>
              <img src="./audio/IMG_6998.webp" className='w-3xl m-10 b'></img>
              <div className='flex flex-col w-full 2xl:w-1/2 justify-center align-middle items-center text-center'>
                <img src="./audio/IMG_6988.webp" className='w-5xl m-10 b'></img>
                <p><b>Jonathan Shepard </b>installed a full Dolby Atmos surround system with 12 speakers. He composed a custom piece to showcase the system's immersive soundscapes and built experimental guitar effects that work with Dolby's spatial rendering engine.</p>
              </div>
            </div>
          </div>
          <div ref = {immersive} style = {{'--c':'#3b3b3b', '--w': '120px'}} id="automatic-door-reveal" className='irlgrid flex w-screen min-h-screen bg-irl-black flex-col'>
            <h1 className='text-8xl pt-10 underline underline-offset-4 w-full text-right p-5'>IMMERSIVE MULTIMEDIA EXPERIENCE</h1>
              <div className='flex flex-col 2xl:flex-row w-full justify-center align-middle items-center'>
                <div className='flex flex-col w-full 2xl:w-1/2 justify-center align-middle items-center text-center'>
                <img src="./immersive/IMG_6994.webp" className='w-5xl m-10 b'></img>
                <p><b>Matthew Reichard </b>built a unified control system that automates fog machines, wind fans, and DMX lighting. His software infrastructure synchronizes all scene transitions. Auriel Kremp added layered visuals using lasers and projection-mapped floor effects.</p>
              </div>
              <img src="./immersive/i1.webp" className='w-4xl m-10 b'></img>
            </div>
          </div>
          <footer id="colophon" className="bg-irl-black text-white py-10">
            <div className="flex flex-col items-center">
              <div className="flex flex-row w-full justify-between px-10 mb-10">
                {/* Contact Information Section 1 */}
                <div className="flex flex-col w-1/3">
                  <h4 className="text-irl-red text-2xl mb-2">Contact IRL1</h4>
                  <p>Phone: 312-362-1451</p>
                  <p>Email: <a href="mailto:IRL1@depaul.edu" className="text-irl-blue">IRL1@depaul.edu</a></p>
                </div>
                
                {/* Contact Information Section 2 */}
                <div className="flex flex-col w-1/3">
                  <h4 className="text-irl-red text-2xl mb-2">Contact IRL2</h4>
                  <p>Phone: 773-325-3100</p>
                  <p>Email: <a href="mailto:IRL2@depaul.edu" className="text-irl-blue">IRL2@depaul.edu</a></p>
                </div>

                {/* Footer Navigation */}
                <div className="flex flex-col w-1/3">
                  <h4 className="text-irl-red text-2xl mb-2">Quick Links</h4>
                  <nav className="">
                    <a href="https://irl.depaul.edu/contact/" className="text-irl-blue hover:text-irl-blue-dark">Contact</a>
                    <br></br>
                    <a href="https://irl.depaul.edu/equipments/" className="text-irl-blue hover:text-irl-blue-dark">Equipments</a>
                    <br></br>
                    <a href="https://irl.depaul.edu/events/" className="text-irl-blue hover:text-irl-blue-dark">Events</a>
                    <br></br>
                    <a href="https://secure.alumni.depaul.edu/s/1906/19/interior.aspx?sid=1906&gid=2&pgid=954&cid=2837&dids=899&appealcode=CFI22" target="_blank" className="text-irl-blue hover:text-irl-blue-dark">Donate To The Lab</a>
                    <br></br>
                    <a href="https://irl.depaul.edu/how-to-work-with-us/" className="text-irl-blue hover:text-irl-blue-dark">How to work with us</a>
                    <br></br>
                    <a href="https://irl.depaul.edu/policies/" className="text-irl-blue hover:text-irl-blue-dark">Policies</a>
                  </nav>
                </div>
              </div>

              {/* Location Information */}
              <div className="flex flex-row w-full justify-between px-10 mb-10">
                <div className="flex flex-col w-1/3">
                  <h4 className="text-irl-red text-2xl mb-2">Visit IRL1</h4>
                  <p>Daley 310<br />247 S State St<br />Chicago, IL 60604</p>
                </div>

                <div className="flex flex-col w-1/3">
                  <h4 className="text-irl-red text-2xl mb-2">Visit IRL2</h4>
                  <p>SAC 236<br />2320 N Kenmore Ave<br />Chicago, IL 60614</p>
                </div>

                {/* Social Media Links */}
                <div className="flex flex-col items-center w-1/3">
                  <h4 className="text-irl-red text-2xl mb-2">Follow Us</h4>
                  <div className="flex gap-5">
                    <a href="https://www.facebook.com/IdeaRealizationLabDPU" className="text-irl-blue hover:text-irl-blue-dark" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-facebook text-3xl">Facebook</i>
                    </a>
                    <a href="https://twitter.com/irlteam" className="text-irl-blue hover:text-irl-blue-dark" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-twitter text-3xl">Twitter</i>
                    </a>
                    <a href="https://www.instagram.com/irlteam" className="text-irl-blue hover:text-irl-blue-dark" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram text-3xl">Instagram</i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Footer Bottom */}
              <div className="text-center mt-10">
                <p>&copy; {new Date().getFullYear()} Idea Realization Lab. All Rights Reserved.</p>
              </div>
            </div>
          </footer>

        </div>
        
    </div>
    </>
  )
}

export default App
