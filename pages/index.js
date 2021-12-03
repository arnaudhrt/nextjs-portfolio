import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Profil from '../components/Profil'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import { createClient } from 'contentful'

export async function getStaticProps() {
   const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_KEY
   })

   const res = await client.getEntries({
      content_type: 'portfolio'
   })

   return {
      props: {
         projects: res
      }
   }
}

export default function Home(props) {
   return (
      <>
         <Head>
            <title>Arnaud HURET Portfolio | Front-End Développeur</title>
            <meta content="Développeur Front-End junior spécialisé en React.js" name="description" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <div className="fixed-bg"></div>
         <Header />
         <Hero />
         <Profil />
         <Skills />
         <Projects projects={props.projects} />
      </>
   )
}
