import React from "react";
import Hero from "./sections/hero";
import ShowCaseSection from "./sections/ShowCaseSection";
import NavBar from "./components/NavBar";

const App = () => {
    return(
        <>
            <NavBar/>
            <Hero />
            <ShowCaseSection/>
        </>
    )
}
export default App

