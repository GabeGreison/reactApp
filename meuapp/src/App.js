import React from "react";
import Produtos from "./Produtos";
import Home from "./Home"
import Header from "./Header";


const App = () => {

   
  const {pathname} = window.location;
  let Page;
  if(pathname === '/Produtos'){
    Page = Produtos
  } else {
    Page = Home  
  }

  return <>
  <Header />
    <Page />
  </>
};

export default App;
