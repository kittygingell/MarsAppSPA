import React, {useState, useEffect} from 'react';

interface RoverPhotosProps {
    img_srcs: string[]
}

const RoverPhotos: React.FC<RoverPhotosProps> = ({img_srcs}) => {
    return (
        <>
            <p>Retrieved {img_srcs.length} pictures</p>
            {img_srcs.map(src => {
                    return (
                        <img src={src} width="400"/>
                    )
            })}
        </>
    )
}

export default RoverPhotos