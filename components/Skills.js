import React from 'react'

export default function Skills(props) {
   return (
      <section className="skills">
         <div className="head">
            <div className="title-wp">
               <h2>{props.skillsTxt.titre}</h2>
               <div className="divider"></div>
            </div>
            <h4>{props.skillsTxt.soustitre}</h4>
         </div>
         <div className="grid">
            <div className="row">
               <div className="title-wp">
                  <span className="title">FRONT-END</span>
               </div>
               <div className="content">
                  <div className="items">
                     <div className="item">
                        <img src="./assets/svg/html.svg" alt="HTML icone" />
                        <span>HTML</span>
                     </div>
                     <div className="item">
                        <img src="./assets/svg/css.svg" alt="css icone" />
                        <span>CSS</span>
                     </div>
                     <div className="item">
                        <img src="./assets/svg/javascript.svg" alt="javascript icone" />
                        <span>JAVASCRIPT</span>
                     </div>
                  </div>
                  <div className="items">
                     <div className="item">
                        <img src="./assets/svg/scss.svg" alt="scss icone" />
                        <span>SASS</span>
                     </div>
                     <div className="item">
                        <img src="./assets/svg/react.svg" alt="reactjs icone" />
                        <span>REACT.JS</span>
                     </div>
                     <div className="item">
                        <img src="./assets/svg/next.svg" alt="nextjs icone" />
                        <span>NEXT.JS</span>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row middle">
               <div className="title-wp">
                  <span className="title">BACK-END</span>
               </div>
               <div className="content">
                  <div className="items">
                     <div className="item">
                        <img src="./assets/svg/node.svg" alt="Nodejs icone" />
                        <span>NODE.JS</span>
                     </div>
                     <div className="item">
                        <img src="./assets/svg/express.svg" alt="Express icone" />
                        <span>EXPRESS.JS</span>
                     </div>
                     <div className="item">
                        <img src="./assets/svg/mongodb.svg" alt="Mongodb icone" />
                        <span>MONGODB</span>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="title-wp">
                  <span className="title">{props.skillsTxt.tools}</span>
               </div>
               <div className="content">
                  <div className="items">
                     <div className="item">
                        <img src="./assets/svg/vscode.svg" alt="VS code icone" />
                        <span>VS CODE</span>
                     </div>
                     <div className="item">
                        <img src="./assets/svg/github.svg" alt="Github icone" />
                        <span>GIT & GITHUB</span>
                     </div>
                     <div className="item">
                        <img src="./assets/svg/figma.svg" alt="Figma icone" />
                        <span>FIGMA</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}
