import React, {FC, useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {PRIZE_FOR_ONE_CORRECT_ANSWER, PrizesPage} from "../../PrizesPage/PrizesPage";
import {Link} from "react-router-dom";
import {ButtonGroup} from "@material-ui/core";
import {DifficultyDialog} from "./DifficultyDialog/DifficultyDialog";
import {useUserMessage} from "../../../hooks/useUserMessage";


interface EndQuizDialogProps {
    score: number,
    action: () => void
}

export const EndQuizDialog: FC<EndQuizDialogProps> = (props) => {
    const [open, setOpen] = useState(true);
    const [difficultyOpen, setDifficultyOpen] = useState(false);

    const {message, setMessage} = useUserMessage()

    const resetQuestions = async () => {
        delete localStorage.questions
        // alert("Questions are now changed !")
        setTimeout(props.action, 500)
        setMessage("Questions are now changed !")
    }

    const handleDifficultyOpen = () => {
        setOpen(false)
        setDifficultyOpen(true)
    }

    return (
        <Dialog
            open={open}
            maxWidth='xl'
            keepMounted
        >
            {message}
            <DialogTitle>
                Congratulations !
            </DialogTitle>
            <DialogContent>
                <DialogContentText variant="subtitle1">
                    Thank you for participating in our quiz!
                    You have scored {props.score} correct answers. So you have
                    won {PRIZE_FOR_ONE_CORRECT_ANSWER * props.score} $. Choose one of the following options
                    below:
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <ButtonGroup fullWidth>
                    <Button component={Link} to={PrizesPage.routeName} color="primary" variant="contained" size="small"
                    >
                        Check my prizes !
                    </Button>
                    <Button color="default" variant="contained" size="small"
                            onClick={resetQuestions}>
                        Change questions ?
                    </Button>
                    <Button color="secondary" variant="contained" size="small" onClick={handleDifficultyOpen}>
                        Change difficulty ?
                    </Button>
                </ButtonGroup>
            </DialogActions>
            {difficultyOpen && <DifficultyDialog open={difficultyOpen} onClose={() => {
                setDifficultyOpen(false);
                setOpen(true)
            }}/>}
        </Dialog>

    );
}






