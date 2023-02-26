import React, {FC, useState} from 'react';
import Button from "../../atoms/Button";
import classes from './styles.module.scss'

interface Props {
    items: {
        label: string
        active: boolean
    }[]
}

const ButtonStack: FC<Props> = ({items}) => {
    const [buttonItems, setButtonItems] = useState(items)
    const selectItem = (item) => {
       items = items.map(element => element.label === item.label ? {...element, active: true} : {
            ...element,
            active: false
        })
        setButtonItems(items)
    }


    return (
        <div className={classes.container}>
            {
                buttonItems.map((item) => (
                    <Button
                        key={item.label}
                        isActive={item.active}
                        label={item.label}
                        handleClick={() => selectItem(item)}
                    />
                ))
            }
        </div>
    );
};

export default ButtonStack;
