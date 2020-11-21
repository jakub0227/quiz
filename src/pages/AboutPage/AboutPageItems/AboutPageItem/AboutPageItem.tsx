/** @jsx jsx */
import {jsx, css} from "@emotion/core";
import React, {FC} from 'react';
import {AccordionSummary} from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Accordion from "@material-ui/core/Accordion";

interface AboutPageItemProps {
    icon: string;
    name: string;
    text: string
}

export const AboutPageItem: FC<AboutPageItemProps> = (props) => {
    const styles = {
        root: css`
            margin: 0;
            border: 0;
            
            &::before {
              display: none;
            }
        `,
    }

    return (
        <Accordion variant='outlined' css={styles.root}>
            <AccordionSummary expandIcon={<Icon>{props.icon}</Icon>}>
                <Typography variant={"body1"}>
                    {props.name}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant={"overline"}>
                    {props.text}
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
};