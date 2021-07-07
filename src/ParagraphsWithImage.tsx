import React, { Component } from 'react';
import NasaParagraph from "./NasaParagraph";
import NasaImage from "./NasaImage";
import NasaParagraph2 from "./NasaParagraph2";
export default class ParagraphsWithImage extends Component {

    render() {
        return (<>
            <h1>NASA INFORMATION</h1>
        <div>
            <NasaParagraph/>
        </div>
                <NasaImage/>
                <div>
            <NasaParagraph2/>
        </div></>
        )
    }
}