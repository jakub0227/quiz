import React, {FC} from 'react';
import {routeList} from "./routeList";
import {NavigationItem} from "./NavigationItem/NavigationItem";


export const NavigationItems: FC = () => {
    return (
        <div>
            {routeList.map(({routeName, displayName}) => (
                <NavigationItem key={routeName} name={displayName} link={routeName}/>
            ))}
        </div>
    );
};