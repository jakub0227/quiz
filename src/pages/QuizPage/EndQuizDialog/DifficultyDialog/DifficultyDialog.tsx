import React, {ChangeEventHandler, FC, FormEventHandler, useState} from 'react';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
    Button,
    ButtonGroup, DialogContent,
    FormControl,
    FormControlLabel,
    FormHelperText,
    FormLabel,
    Radio,
    RadioGroup
} from "@material-ui/core";


interface DifficultyDialogProps {
    open: boolean
    onClose: () => void
}

export const DifficultyDialog: FC<DifficultyDialogProps> = props => {

    const DIFFICULTIES: {
        value: number
        label: string
    }[] = ["Easy", "Medium", "Hard"].map((value, index) => ({label: value, value: index}))

    const [value, setValue] = useState<number | null>(null)
    const [helperText, setHelperText] = useState('')
    const [error, setError] = useState(false);

    const handleSubmit: FormEventHandler = event => {
        event.preventDefault()

        if (value === 0) {
            localStorage.setItem("difficulty", "easy")
            setHelperText('Its Easy now!')
            setError(false)
        } else if (value === 1) {
            localStorage.setItem("difficulty", "medium")
            setHelperText('Now its Medium!')
            setError(false)
        } else if (value === 2) {
            localStorage.setItem("difficulty", "hard")
            setHelperText('Hard mode!')
            setError(false)
        } else {
            setHelperText('You must select desired difficulty !')
            setError(true)
        }
    }

    const handleRadioChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setValue(+event.target.value)
    }

    // const styles = {
    //     : css`
    //
    //     `,
    // }

    return (
        <Dialog
            open={props.open}
            onClose={props.onClose}
        >
            <DialogTitle>
                Difficulty Control Panel
            </DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit}>
                    <FormControl color="secondary" error={error}>
                        <FormLabel>Select Quiz Difficulty:</FormLabel>
                        <RadioGroup row name="quiz" value={value} onChange={handleRadioChange}>
                            {DIFFICULTIES.map(difficulty => (
                                <FormControlLabel control={<Radio/>} {...difficulty}/>
                            ))}
                        </RadioGroup>
                        <FormHelperText>{helperText}</FormHelperText>
                        <ButtonGroup fullWidth>
                            <Button type="submit" variant="contained" color="primary" size="small">
                                Save
                            </Button>
                            <Button variant="contained" color="secondary" onClick={props.onClose}
                                    size="small">
                                Exit
                            </Button>
                        </ButtonGroup>
                    </FormControl>
                </form>
            </DialogContent>
        </Dialog>
    );
};