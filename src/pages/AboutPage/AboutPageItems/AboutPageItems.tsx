/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import React, {FC} from 'react';
import {AboutPageItem} from "./AboutPageItem/AboutPageItem";
import useTheme from "@material-ui/core/styles/useTheme";


const ACCORDIONS = [
    {
        name: 'Participation agreement, Prizes & Payments regulations',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus eius eveniet facere illum ipsam iure optio quaerat quod, repellendus saepe sint velit voluptatem, voluptates! Accusamus accusantium aperiam delectus dicta dolor hic inventore laudantium, modi mollitia nam nobis optio repudiandae sunt.',
        icon: 'expand_more'
    },
    {
        name: 'Copyright, License & Trademarks',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus eius eveniet facere illum ipsam iure optio quaerat quod, repellendus saepe sint velit voluptatem, voluptates! Accusamus accusantium aperiam delectus dicta dolor hic inventore laudantium, modi mollitia nam nobis optio repudiandae sunt.',
        icon: 'expand_more'
    }
]

export const AboutPageItems: FC = () => {
    const theme = useTheme()
    const styles = {
        root: css`
          display: flex;          
          margin-top: ${theme.spacing(10)} px;
          justify-content: space-around;          
        `,
        wrapper: css`
          margin-top: ${theme.spacing(10)} px;
          text-align: start;  
        `,
    }
    return (
        <div css={styles.root}>
            <div css={styles.wrapper}>
                {ACCORDIONS.map(accordion => (
                    <AboutPageItem key={accordion.name}
                                   {...accordion}/>
                ))}
            </div>
        </div>
    );
};