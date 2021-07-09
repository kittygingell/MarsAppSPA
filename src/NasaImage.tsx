import React, { Component } from 'react';

    interface imageData {
        image: string
    }

    export default function NasaImage(props: imageData) {
        return (<img src={props.image} height="300" width="300"/>)
    }
