import React from 'react'
import Link from 'next/link'

export default function Contact(props) {
   return (
      <section className="contact">
         <div className="head">
            <div className="title-wp">
               <h2>{props.contactTxt.titre}</h2>
               <div className="divider"></div>
            </div>
            <h4>{props.contactTxt.soustitre}</h4>
         </div>
         <div className="center-wp">
            <div className="center">
               <div className="left">
                  <div>
                     <h3>Email</h3>
                     <a href="mailto:arnaud3488@gmail.com">arnaud3488@gmail.com</a>
                  </div>
                  <div>
                     <h3>Tel & Whatsapp</h3>
                     <a href="tel:+33771670299">+33 7 71 67 02 99</a>
                  </div>
               </div>
               <div className="right">
                  <a className="malt" href="https://www.malt.fr/profile/arnaudhrt">
                     Profil Malt
                     <img src="./assets/svg/arrow-rotate.svg" alt="Arrow icon" />
                  </a>
                  <div className="social-bar">
                     <a href="https://github.com/arnaudhrt" rel="noreferrer" target="_blank">
                        <img src="./assets/svg/github.svg" alt="Github icon" />
                     </a>

                     <a href="https://www.linkedin.com/in/arnaud-huret/" rel="noreferrer" target="_blank">
                        <img src="./assets/svg/linkedin.svg" alt="Github icon" />
                     </a>

                     <a href="https://dribbble.com/arnaudhrt" rel="noreferrer" target="_blank">
                        <img src="./assets/svg/dribbble.svg" alt="Github icon" />
                     </a>
                  </div>
               </div>
            </div>
         </div>
         <p className="footer">
            ARNAUD HURET <span>©</span> - ALL RIGHT RESERVED - MADE BY <span>♡</span> (OPEN SOURCE){' '}
         </p>
      </section>
   )
}
