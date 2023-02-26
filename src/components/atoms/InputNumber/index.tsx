import React, {FC} from 'react';
import classes from './styles.module.scss';

interface Props {
    label: string
}

const InputNumber: FC<Props> = ({label}) => {
    return (
        <div className={classes.container}>
            <label className={classes.label} htmlFor={label}>
                {label}
            </label>

            <input className={classes.input} type="number" min={0} max={59}/>
        </div>
    );
};

export default InputNumber;
