import React, {FC} from 'react';
import classes from './styles.module.scss'
import Card from "../Card";


interface Props {
    open: boolean
    handleClose: () => void
}

const SettingsModal: FC<Props> = ({open, handleClose}) => {
    return (
        open && (
            <div className={classes.container}>

                <div className={classes.modal}>
                    <Card handleClose={handleClose}/>
                </div>

                <div className={classes.backdrop} />

            </div>
        )
    );
};

export default SettingsModal;
