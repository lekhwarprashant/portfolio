import React from "react";
import Hero from "./sections/hero";
import ShowCaseSection from "./sections/ShowCaseSection";
import NavBar from "./components/NavBar";
import LogoShowcase from "./sections/LogoShowcase";

const App = () => {
    return(
        <>
            <NavBar/>
            <Hero />
            <ShowCaseSection/>
            <LogoShowcase/>
        </>
    )
}
export default App

