import React, {useState, useEffect} from 'react';

interface ButtonProps {
    title: string,
    onClick: () => void
}

const GenericButton: React.FC<ButtonProps> = ({title, onClick}) => {
    return (
        <>
            <button onClick={onClick}>
                {title}
            </button>
        </>
    )
}

export default GenericButton