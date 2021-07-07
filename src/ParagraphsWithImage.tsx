import React, { Component } from 'react';
import NasaParagraph from "./NasaParagraph";
export default class ParagraphsWithImage extends Component {

    render() {
        return (<>
            <h1>NASA INFO</h1>
        <div>
            <NasaParagraph/>
        </div>
        <img src="https://www.google.co.uk/url?sa=i&url=https%3A%2F%2Fmars.nasa.gov%2Fmars2020%2F&psig=AOvVaw2v-3AJz2wad5zXq0eynUwR&ust=1625741968783000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCPCcvPbm0PECFQAAAAAdAAAAABAD"/>
        <div>
            <p>A Mars Rover</p>
        </div></>
        )
    }
}