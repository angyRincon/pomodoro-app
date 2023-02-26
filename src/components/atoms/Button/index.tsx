import React, {ReactElement} from 'react';
import {FC} from 'react';
import classes from './styles.module.scss'

type buttonVariantType = 'normal' | 'rounded' | 'text-only'

interface Props {
    label?: string
    variant?: buttonVariantType
    isActive?: boolean
    className?: string
    children?: ReactElement
    handleClick: () => void
}

const Button: FC<Props> = (
    {
        label,
        variant = 'normal',
        isActive,
        children,
        className,
        handleClick
    }) => {

    const buttonClasses = [
        classes[variant],
        classes[isActive && 'active'],
        classes.button,
        className
    ].join(' ')

    return (
        <button className={buttonClasses} onClick={handleClick}>
            {label ?? children}
        </button>
    );
};

export default Button;
