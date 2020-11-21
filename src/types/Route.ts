import {FC} from "react";
import {RouteComponentProps} from "react-router-dom";

export interface Route extends FC {
    routeName: string
    displayName: string
}