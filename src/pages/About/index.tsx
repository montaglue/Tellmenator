import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import './style.css';

const readme = `## Tellmenator \n  
### Change Logs \n 
### Future Plans \n 
### FAQ`;

const About = () => {
    return <>
        <div className="about-container">
            <ReactMarkdown children={readme} remarkPlugins={[remarkGfm]} />
        </div>
    </>;
}

export default About;