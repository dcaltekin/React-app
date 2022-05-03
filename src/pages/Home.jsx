
import React from "react";
import Navbar from "../components/Navbar"
import Header from "../components/Header";
import Profile from "../components/Profile";
import Price from "../components/Price";
import Footer from "../components/Footer";

function Home(){
    
    // const x = 35+35;
    return(
     
     <div> 
        <Navbar logo="Doğukan Çaltekin" />
        
        <Header />

        <Profile />

        <Price />
        
        <Footer />
        
     </div>
     
        
    );
    
        
}


export default Home;