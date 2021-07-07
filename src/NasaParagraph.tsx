import React, { Component } from 'react';

interface paragraphData {
    paragraph: string
}

export default function NasaParagraph(props: paragraphData) {
    return (<p>{props.paragraph}</p>)
}