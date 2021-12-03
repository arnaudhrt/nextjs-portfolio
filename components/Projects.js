import React from 'react'

export default function Projects(props) {
   const projects = props.projects
   console.log(projects)
   return (
      <section className="projects">
         <div className="head">
            <h2>MES PROJETS</h2>
            <div className="divider"></div>
         </div>
         <div className="projects-wp">
            <div className="overflow">
               <div className="row">
                  <h3>NETFLIX CLONE</h3>
                  <p>Développement Front-End & Back-End d’une partie de l’application web Netflix.</p>
                  <div className="tags">
                     <p>
                        <span>#</span>react.js
                     </p>
                     <p>
                        <span>#</span>node.js
                     </p>
                     <p>
                        <span>#</span>HTML
                     </p>
                     <p>
                        <span>#</span>CSS
                     </p>
                  </div>
               </div>

               <div className="row">
                  <h3>NETFLIX CLONE</h3>
                  <p>Développement Front-End & Back-End d’une partie de l’application web Netflix.</p>
                  <div className="tags">
                     <p>
                        <span>#</span>react.js
                     </p>
                     <p>
                        <span>#</span>node.js
                     </p>
                     <p>
                        <span>#</span>HTML
                     </p>
                     <p>
                        <span>#</span>CSS
                     </p>
                  </div>
               </div>

               <div className="row">
                  <h3>NETFLIX CLONE</h3>
                  <p>Développement Front-End & Back-End d’une partie de l’application web Netflix.</p>
                  <div className="tags">
                     <p>
                        <span>#</span>react.js
                     </p>
                     <p>
                        <span>#</span>node.js
                     </p>
                     <p>
                        <span>#</span>HTML
                     </p>
                     <p>
                        <span>#</span>CSS
                     </p>
                  </div>
               </div>
            </div>
            <div className="scroll-sign">
               <img src="./assets/images/scroll.png" alt="Icone scroll" />
            </div>
         </div>
      </section>
   )
}
