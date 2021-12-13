import React, { useState } from 'react'

export default function Header(props) {
   const [toggleLangBtn, settoggleLangBtn] = useState(true)
   return (
      <header className="header">
         <div className="left">
            <img src="./assets/svg/logo.svg" alt="Logo" />
         </div>
         <div className="right">
            <div className="lang">
               <span
                  className={toggleLangBtn ? 'active' : ''}
                  onClick={() => {
                     props.LangFR()
                     settoggleLangBtn(!toggleLangBtn)
                  }}
               >
                  FR
               </span>
               <span
                  className={toggleLangBtn ? '' : 'active'}
                  onClick={() => {
                     props.LangEN()
                     settoggleLangBtn(!toggleLangBtn)
                  }}
               >
                  EN
               </span>
            </div>
         </div>
      </header>
   )
}
