import LayoutIndex from "../components/LayoutIndex/LayoutIndex";
import React from "react";
import Hello from "../Sections/Hello/Hello";
import Skills from "../Sections/Skills/Skills";
import Portfolio from "../Sections/Portfolio/Portfolio";

function Index() {
    return (
        <LayoutIndex>
            <Hello />
            <Skills />
            <Portfolio />
        </LayoutIndex>
    );
}

export default Index;
