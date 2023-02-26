import React, {FC} from 'react';
import Typography from "../../atoms/Typography";
import Button from "../../atoms/Button";
import classes from './styles.module.scss'

interface Props {
    handleClose: () => void
}

const CardHeader: FC<Props> = ({ handleClose }) => {
    return (
        <div className={classes.header}>
            <Typography variant='h1' label='Settings'/>
            <Button handleClick={handleClose} variant='text-only'>
                <i className="fa-solid fa-xmark"/>
            </Button>
        </div>
    );
};

export default CardHeader;
