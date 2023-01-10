import React from "react";
import "./Stats.css";


export const Stats = () => {

    return (
        <div className="statsBox">
            <h3>GitHub Stats</h3>
            <div>
            <div className="statsContainer">
                <div>
                    <a href="https://github.com/AJ31032003">
                        <img align="left" src="https://github-readme-streak-stats.herokuapp.com/?user=AJ31032003" />
                    </a>
                </div>
            </div>

            <div className="stats-3">
                <p align="center">
                <a href="https://github.com/AJ31032003">
                        <img align="center" src="https://github-readme-stats.vercel.app/api/top-langs/?username=AJ31032003&bg_color=0D1117" alt="" />
                    </a>
                </p>
            </div>

            <div className="stats-2">
                <p align="center">
                    <a href="https://github.com/AJ31032003/github-readme-stats">
                        <img alt="Arihant Github Stats" 
                        src="https://github-readme-stats.vercel.app/api?username=AJ31032003&show_icons=true&locale=en&theme=react&hide_border=true&bg_color=0D1117" 
                        />
                    </a>
                </p>
            </div>

            
            </div>
        </div>

    );
}