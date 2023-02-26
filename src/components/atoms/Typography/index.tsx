import React, {FC, ReactElement} from 'react';
import classes from './styles.module.scss'

type variantsMappingType =  "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body1" | "body2" | "huge";

const variantsMapping = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    body1: "p",
    body2: "span",
    huge: 'p'
};

interface Props {
    variant: variantsMappingType
    label: string | ReactElement
    className?: string
}

const Typography: FC<Props> = ({variant, className, label, ...props}) => {

    const Component: any = variant ? variantsMapping[variant] : "p";

    const typographyClass = [
        classes[variant],
        className
    ].join(' ')

        return (
        <Component
            className={typographyClass}
            {...props}
        >
            {label}
        </Component>
    );
};

export default Typography;
