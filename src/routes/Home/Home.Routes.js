import React from "react";
import backgroundImg from "../../assets/home-background.png"
import Header from "../../components/Header/Header.component";

export default function Home() {
    return (
        <div>
            <Header 
                backgroundImg={backgroundImg} 
                headline="Full-stack Developer"
            />
        </div>
    )
}