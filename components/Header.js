import React from 'react'

export default function Header() {
   return (
      <header className="header">
         <div className="left">
            <img src="./assets/svg/logo.svg" alt="Logo" />
         </div>
         <div className="right">
            <div className="lang">
               <span className="active">FR</span>
               <span>EN</span>
            </div>
            <div className="menu">
               <img src="./assets/svg/menu.svg" alt="Icone menu" />
            </div>
         </div>
      </header>
   )
}
