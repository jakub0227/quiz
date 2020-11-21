import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';


export default function SimpleSnackbar() {
    const [open, setOpen] = React.useState(false);

    const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <div>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Questions are now changed !"
                action={
                    <React.Fragment>
                        <IconButton size="medium" onClick={handleClose}>
                            CLOSE
                        </IconButton>
                    </React.Fragment>
                }
            />
        </div>
    );
}