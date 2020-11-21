import React, {FC} from "react";
import Button from "@material-ui/core/Button/Button";
import {Link} from "react-router-dom";

interface NavigationItemProps {
    link: string;
    name: string;
}

export const NavigationItem: FC<NavigationItemProps> = (props) => {
    return (
        <Button component={Link} to={props.link} variant='text' color='inherit'>
            {props.name}
        </Button>
    )
}