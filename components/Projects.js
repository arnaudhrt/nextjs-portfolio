import { v4 as uuid } from 'uuid'

export default function Projects(props) {
   const projects = props.projects
   console.log(projects)
   const sortByNumber = (a, b) => {
    return b.fields.number - a.fields.number
  }
   return (
      <section className="projects">
         <div className="head">
            <h2>{props.projectsTxt.titre}</h2>
            <div className="divider"></div>
         </div>
         <div className="projects-wp">
            <div className="overflow">
               {projects.sort(sortByNumber).map((el) => {
                  return (
                     <div className="row" key={uuid()}>
                        <h3>{el.fields.titre}</h3>
                        <p className="description">{el.fields.description}</p>
                        <div className="toggle">
                           <h5>Fonctionnalité développé : </h5>
                           <div className="functionality">
                              {el.fields.functionality.map((el) => (
                                 <p>• {el}</p>
                              ))}
                           </div>
                           <h5>Stack technique du projet :</h5>
                        </div>
                        <div className="tags">
                           {el.fields.tags.map((el) => (
                              <p key={uuid()}>
                                 <span>#</span>
                                 {el}
                              </p>
                           ))}
                        </div>
                        <a className="discover" href={el.fields.url} target="_blank">
                           <i>Découvrir</i>
                           <img src="./assets/svg/arrow.svg" alt="" />
                        </a>
                        <span className="number">{el.fields.number}</span>
                     </div>
                  )
               })}
            </div>
            <div className="scroll-sign">
               <img src="./assets/images/scroll.png" alt="Icone scroll" />
            </div>
         </div>
      </section>
   )
}
