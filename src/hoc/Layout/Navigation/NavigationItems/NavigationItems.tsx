import React, {FC} from 'react';
import {routeList} from "./routeList";
import {NavigationItem} from "./NavigationItem/NavigationItem";

export const NavigationItems: FC = () => {
    return (
        <div>
            {routeList.map(({link, name}) => (
                <NavigationItem key={link} name={name} link={link}/>
            ))}
        </div>
    );
};