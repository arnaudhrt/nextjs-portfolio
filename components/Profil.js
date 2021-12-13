import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import profilPic from '../public/assets/images/profil-pic.jpg'

export default function Profil(props) {
   return (
      <section className="profil">
         <div className="head">
            <h2>{props.profilTxt.titre}</h2>
            <div className="divider"></div>
         </div>
         <div className="center">
            <div className="left">
               <p>
                  <span className="capital">{props.profilTxt.maj}</span>{props.profilTxt.phrase1}
                  <br />
                  <br /> {props.profilTxt.phrase2}
                  <br />
                  <br /> {props.profilTxt.phrase3}
                  <br />
                  <br /> {props.profilTxt.phrase4}
               </p>
               <Link href="./assets/documents/CV_Arnaud_Huret.pdf">
                  <button className="resume">
                     <img src="./assets/svg/resume.svg" alt="Resume icone" />
                     <span>{props.profilTxt.resume}.pdf</span>
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
