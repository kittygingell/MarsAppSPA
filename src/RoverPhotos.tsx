import React, {useState, useEffect} from 'react';

interface RoverPhotosProps {
    img_srcs: string[]
}

const RoverPhotos: React.FC<RoverPhotosProps> = ({img_srcs}) => {
    return (
        <>
            {img_srcs.map(src => {
                    return (
                        <img src={src} width="400"/>
                    )
            })}
        </>
    )
}

export default RoverPhotos