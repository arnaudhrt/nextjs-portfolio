import React from 'react'
import Link from 'next/link'

export default function Hero() {
   return (
      <section className="hero">
         <div className="center">
            <div className="animation-wp">
               <svg className="path" viewBox="0 0 705 274" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M202 7.5H697.5V266.5H7.5V47" stroke="#C1B88A" strokeWidth="15"></path>
               </svg>
            </div>
            <span className="left">HELLO, JE SUIS</span>
            <h1>ARNAUD</h1>
            <span className="right">
               DÉVELOPPEUR
               <br />
               FRONT-END
            </span>
         </div>
         <div className="scroll-sign">
            <img src="./assets/images/scroll.png" alt="Icone scroll" />
         </div>
         <div className="social-bar">
            <Link href="https://github.com/arnaudhrt">
               <a>
                  <img src="./assets/svg/github.svg" alt="Github icon" />
               </a>
            </Link>
            <Link href="https://www.linkedin.com/in/arnaud-huret/">
               <a>
                  <img src="./assets/svg/linkedin.svg" alt="Github icon" />
               </a>
            </Link>
            <Link href="https://dribbble.com/arnaudhrt">
               <a>
                  <img src="./assets/svg/dribbble.svg" alt="Github icon" />
               </a>
            </Link>
         </div>
      </section>
   )
}
