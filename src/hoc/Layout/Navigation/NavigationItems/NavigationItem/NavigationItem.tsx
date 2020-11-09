import React, {FC} from "react";
import {Route} from "../routeList";
/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import Button from "@material-ui/core/Button/Button";
import {Link} from "react-router-dom";

type NavigationItemProps = Route

export const NavigationItem: FC<NavigationItemProps> = (props) => {
    const styles = {
        root: css`
            margin: 100px;
        `,
    }

    return (
        <Button css={styles.root} component={Link} to={props.link} variant='text' color='inherit'>
            {props.name}
        </Button>
    )
}