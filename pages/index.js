import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Profil from '../components/Profil'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import { createClient } from 'contentful'
import Contact from '../components/Contact'
import { useState } from 'react'

export async function getStaticProps() {
   const client = createClient({
      space: 'keqtyez6fo9s',
      accessToken: 'jieGB515AuW_aKEAnPy3WRhcwSCkCwyFzoKd6e1N0J0'
   })

   const res = await client.getEntries({
      content_type: 'portfolio',
      order: 'fields.number'
   })

   return {
      props: {
         projects: res.items
      }
   }
}

export default function Home(props) {
   const FR = {
      heroTxt: {
         hello: 'HELLO, JE SUIS',
         front: 'DÉVELOPPEUR',
         dev: 'FRONT-END'
      },
      profilTxt: {
         titre: 'MON PROFIL',
         maj: 'J',
         phrase1: 'e m’appelle Arnaud, j’ai 24 ans et je suis Développeur Front-End junior spécialisé en React.js avec également de bonne connaissance en Back-End.',
         phrase2: 'Passionné depuis longtemps par les technologies informatiques, j’ai décidé d’en faire mon métier et de mettre à profil toutes les connaissances que j’ai acquises ces dernières années.',
         phrase3: 'Je suis quelqu’un de motivé et rigoureux, je m’implique à 100% dans mon travail et je vais toujours au bout de mes engagements.',
         phrase4: 'Je travaille actuellement en Freelance mais je suis aussi à l’écoute de toute opportunité d’emploi.',
         resume: 'CV'
      },
      skillsTxt: {
         titre: 'MES COMPÉTENCES',
         soustitre: 'Voici la stack technique des langages, frameworks et outils que je maîtrise et que j’utilise dans mes projets.',
         tools: "OUTILS"
      },
      projectsTxt: {
         titre: 'MES PROJETS'
      },
      contactTxt: {
         titre: 'CONTACTEZ-MOI',
         soustitre: "N’hésitez pas à me contacter pour plus d'informations ou pour convenir d'un rendez-vous."
      }
   }
   const EN = {
      heroTxt: {
         hello: 'HELLO, I AM',
         front: 'A FRONT-END',
         dev: 'DEVELOPER'
      },
      profilTxt: {
         titre: 'WHO I AM ?',
         maj: 'M',
         phrase1: 'y name is Arnaud, I am 24 years old and I am a Junior Frontend Developer specialized on React.js with also a good Backend knowledge.',
         phrase2: 'Passionated since a long time by computer science, I decided to make it my job and use all my knowledge and skills that I acquired those last years.',
         phrase3: 'I can say I am such a motivated and hard worker person, I get involved at 100% on my work and I always follow through on my commitments.',
         phrase4: 'I currently work as a Freelancer but I am still up to any other opportunities of job.',
         resume: 'Resume'
      },
      skillsTxt: {
         titre: 'MY SKILLS',
         soustitre: 'Here my technology stack of languages, frameworks and tools that I master and use in all my projects.',
         tools: "TOOLS"
      },
      projectsTxt: {
         titre: 'MY PROJECTS'
      },
      contactTxt: {
         titre: 'GET IN TOUCH',
         soustitre: "Feel free to contact me to get more informations or to book an appointment ."
      }
   }
   const [text, setText] = useState(FR)

   const LangEN = () => {
      setText(EN)
   }
   const LangFR = () => {
      setText(FR)
   }
   return (
      <>
         <Head>
            <title>Arnaud HURET Portfolio | Front-End Développeur</title>
            <meta content="Développeur Front-End junior spécialisé en React.js" name="description" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <div className="fixed-bg"></div>
         <Header LangEN={LangEN} LangFR={LangFR}/>
         <Hero heroTxt={text.heroTxt} />
         <Profil profilTxt={text.profilTxt} />
         <Skills skillsTxt={text.skillsTxt} />
         <Projects projects={props.projects} projectsTxt={text.projectsTxt}/>
         <Contact contactTxt={text.contactTxt}/>
      </>
   )
}
