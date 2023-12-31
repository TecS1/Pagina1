//import React , { useState } from "react";
//import { Navigation } from "./routes";
import { Header } from "./layouts";
import { Footer } from "./layouts";
//import { Home, Products, About, Privacy } from "./pages";
import { Navigation } from "./routes";

import './_App.scss';
import { CategMenuMobile, CategoryMenu } from "./Componentes/Menus";

export default function App() {

  return (
      <>
        <a href="https://api.whatsapp.com/send/?phone=573134237538&text&type=phone_number&app_absent=0" className="btn-wapp" 
          target="_blank" rel="noreferrer">
            <img
                src={require("./Assets/png/WappIcon.png")}
                width="479px"
                height="480"
                alt="iconWapp"              
            />
        </a>

        <CategMenuMobile/>

        <div>
          <CategoryMenu/>
        </div>

        <Header></Header>

        <Navigation></Navigation>

        <Footer></Footer>
      </>
      
  );
}
