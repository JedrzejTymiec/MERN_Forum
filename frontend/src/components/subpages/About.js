import React from "react";

export default function About() {

    return (
        <div className="subpage-container">
            <div className="content-box">
                <div className="image-container">
                    <div className="image-box">
                        <img src={require("./pics/utah.jpg")}/>
                    </div>
                    <div className="image-box">
                        <img src={require("./pics/maledives.jpg")}/>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="about">About page</h3>
            </div>
        </div>
    );
}