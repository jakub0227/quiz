import React, {useState} from 'react'
import {Alert, Color} from "@material-ui/lab";
import {Snackbar} from '@material-ui/core';

export const useUserMessage = () => {
    const [open, setOpen] = useState(false)
    const [_message, setMessage] = useState("")
    const [_severity, setSeverity] = useState<Color>("success")

    const handleOpen = (message: string, {severity = 'success'}: Partial<{ severity: typeof _severity }> = {}) => {
        setMessage(message)
        setSeverity(severity)
        setOpen(true)
    }

    const onClose = () => {
        setOpen(false)
    }

    return {
        setMessage: handleOpen,
        message: (
            <Snackbar open={open} autoHideDuration={500} onClose={onClose}>
                <Alert onClose={onClose} severity={_severity}>
                    {_message}
                </Alert>
            </Snackbar>
        )
    }
}

