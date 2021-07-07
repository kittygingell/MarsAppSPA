import React, { Component } from 'react';
import NasaImage from "./NasaImage";
import NasaParagraph from "./NasaParagraph";

interface psWithImageProps {
    heading: string,
    paragraph1: string,
    paragraph2: string,
    image: string
}

export default function ParagraphsWithImage(props: psWithImageProps) {
    const props4Paragraph1 = {
        paragraph: props.paragraph1
    }
    const props4Para2 = {
        paragraph: props.paragraph2
    }
    const props4img = {
        image: props.image
    }


    return (<>
        <h1>{props.heading}</h1>
    <div>
        {NasaParagraph(props4Paragraph1)}
    </div>
        {NasaImage(props4img)}
    <div>
        {NasaParagraph(props4Para2)}
    </div></>
    )
}