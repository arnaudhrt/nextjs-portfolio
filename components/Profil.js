import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import profilPic from '../public/assets/images/profil-pic.jpg'

export default function Profil() {
   return (
      <section className="profil">
         <div className="head">
            <h2>MON PROFIL</h2>
            <div className="divider"></div>
         </div>
         <div className="center">
            <div className="left">
               <p>
                  <span className="capital">J</span>e m’appelle Arnaud, j’ai 24 ans et je suis Développeur Front-End junior spécialisé en React.js avec également de bonne connaissance en Back-End.
                  <br />
                  <br /> Passionné depuis longtemps par les technologies informatiques, j’ai décidé d’en faire mon métier et de mettre à profil toutes les connaissances que j’ai acquises ces dernières années.
                  <br />
                  <br /> Je suis quelqu’un de motivé et rigoureux, je m’implique à 100% dans mon travail et je vais toujours au bout de mes engagements.
                  <br />
                  <br /> Je travaille actuellement en Freelance mais je suis aussi à l’écoute de toute opportunité d’emploi.
               </p>
               <Link href="./assets/documents/CV_Arnaud_Huret.pdf">
                  <button className="resume">
                     <img src="./assets/svg/resume.svg" alt="Resume icone" />
                     <span>CV.pdf</span>
                  </button>
               </Link>
            </div>
            <div className="right">
               <div className="img-border">
                  <div className="profil-pic active">
                     <Image src={profilPic} width="1440" height="1152" layout="responsive" placeholder="blur" />
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}
