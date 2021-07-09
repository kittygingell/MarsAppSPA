import 'react-slideshow-image/dist/styles.css'
import React from 'react';
import {EpicSpecifierContext} from "./EpicPage";

const {Fade} = require('react-slideshow-image')
export default function PhotoSlideshow() {
    return (
        <EpicSpecifierContext.Consumer>
            {value => {
                const slideImageURLs = value.urls;
                const images = slideImageURLs.map(url => {
                    return (
                        <>
                            <div className="each-fade">
                                <div className="image-container">
                                    <img src={url}/>
                                </div>
                            </div>
                        </>
                    )
                })

                const generalStyle = '* {color: white; background-color: black}'
                const style4Fade = '.each-fade > .image-container > img {width: 80%}'
                return (
                    <div className="slide-container">
                        <style>
                            {generalStyle}
                            {style4Fade}
                        </style>
                        <p>Number of images: {slideImageURLs.length}</p>
                        <Fade>
                            {images}
                        </Fade>
                    </div>
                )
            }}
        </EpicSpecifierContext.Consumer>

    )
}