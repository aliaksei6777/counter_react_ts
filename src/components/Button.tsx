import React from 'react';

type ButtonPropsType = {
    onClick: () => void
    disabled: boolean
    buttonTitle: string
}

export const Button: React.FC<ButtonPropsType> = ({onClick, disabled, buttonTitle}) => {
    return (
        <div>
            <button onClick={onClick} disabled={disabled}>{buttonTitle}</button>
        </div>
    )
}