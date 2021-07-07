import React, { Component } from 'react';
import NasaParagraph from "./NasaParagraph";
import NasaImage from "./NasaImage";
export default class ParagraphsWithImage extends Component {

    render() {
        return (<>
            <h1>NASA INFO</h1>
        <div>
            <NasaParagraph/>
        </div>
                <NasaImage/>
                <div>
            <p>A Mars Rover</p>
        </div></>
        )
    }
}