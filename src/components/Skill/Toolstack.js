import React from "react";
import { SiVisualstudiocode, SiNetlify } from "react-icons/si";

import { DiGit } from "react-icons/di";
import { AiFillGithub } from "react-icons/ai"
function Toolstack() {
  return (
    <div className="skillContainer">
      <div className="tech-icons">
        <AiFillGithub /><p>GitHub</p>
      </div>
      <div className="tech-icons">
        <SiVisualstudiocode /><p>VSCode</p>
      </div>
      
      <div className="tech-icons">
        <SiNetlify /><p>Netlify</p>
      </div>

      <div className="tech-icons">
        <DiGit /><p>Git</p>
      </div>
      
    </div >
  );
}

export default Toolstack;
