import React, { Component } from 'react';

    interface imageData {
        image: string
    }

    export default function NasaImage(props: imageData) {
        return (<img src={props.image} height="400" width="400"/>)
    }

//return (<img src="https://media0.giphy.com/media/3h4EVXAvarDaaRaeYX/source.gif" height="400" width="400" />