import React, { Component } from 'react';
import NasaImage from "../NasaImage";
import NasaParagraph from "../NasaParagraph";
//import styled from 'styled-components';


interface psWithImageProps {
    heading: string,
    paragraph1: string,
    paragraph2: string,
    image: string
}
// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
// `;

const ParagraphsWithImage: React.FC<psWithImageProps> = ({heading, paragraph1, paragraph2, image}) =>{

    return (<>
        <h1>{heading}</h1>
        <NasaParagraph paragraph={paragraph1}/>
        <NasaImage image={image}/>
        <NasaParagraph paragraph={paragraph2}/>
</>
    )
}

export default ParagraphsWithImage