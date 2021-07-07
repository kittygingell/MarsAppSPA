import React, { Component } from 'react';
import NasaParagraph1 from "./NasaParagraph1";
import NasaImage from "./NasaImage";
import NasaParagraph2 from "./NasaParagraph2";
export default class ParagraphsWithImage extends Component {

    render() {
        return (<>
            <h1>NASA INFORMATION</h1>
        <div>
            <NasaParagraph1/>
        </div>
                <NasaImage/>
                <div>
            <NasaParagraph2/>
        </div></>
        )
    }
}