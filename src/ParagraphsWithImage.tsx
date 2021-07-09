import React, { Component } from 'react';
import NasaImage from "./NasaImage";
import NasaParagraph from "./NasaParagraph";
import "./style.css"

interface psWithImageProps {
    heading: string,
    paragraph1: string,
    paragraph2: string,
    image: string
}

const ParagraphsWithImage: React.FC<psWithImageProps> = ({heading, paragraph1, paragraph2, image}) =>{

    return (<><div className="logo">
            <NasaImage image={image}/>
        </div>
            <div className = "heading">
        <h1>{heading}</h1>
            </div>
        <NasaParagraph paragraph={paragraph1}/>
        <NasaParagraph paragraph={paragraph2}/>
</>
    )
}

export default ParagraphsWithImage