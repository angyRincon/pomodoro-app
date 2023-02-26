import React, {FC, useState} from 'react';
import classes from './styles.module.scss';
import Typography from "../../atoms/Typography";
import Button from "../../atoms/Button";
import classNames from "classnames";

interface Props {
    title: string
    items: {
        id: string
        type: string
        active: boolean
        font?: string
        color?: string
    }[]
}

const StylePickerStack: FC<Props> = ({title, items}) => {

    const [selectedItems, setSelectedItems] = useState(items)
    const selectItem = (item) => {
        const itemsMapped = items.map((element) => element.id === item.id ? {...element, active: true} : {
            ...element,
            active: false
        })
        setSelectedItems(itemsMapped)
    }

    return (
        <div className={classes.container}>
            <Typography variant='h6' label={title} className={classes.title}/>

            <div className={classes.actions}>
                {
                    selectedItems.map((item) => (
                        <Button
                            className={classNames(
                                classes.buttonAction,
                                classes[`button-${item.color}`],
                                classes[item.type === 'font' && item.active && 'font-active'],
                                classes[item.type === 'color' && item.active && 'color-active']
                            )
                            }
                            variant='rounded'
                            handleClick={() => selectItem(item)}
                        >
                            {
                                item.type === 'font' ? (
                                        <Typography
                                            variant='body2'
                                            label='Aa'
                                            className={classes[`font-${item.font}`]}
                                        />
                                    )
                                    : <Typography
                                        variant='body2'
                                        label={item.active && <i className="fa-solid fa-check"/>}
                                    />
                            }
                        </Button>
                    ))
                }
            </div>
        </div>
    );
};

export default StylePickerStack;
