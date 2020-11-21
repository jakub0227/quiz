import React from "react";
import {Layout} from "./hoc/Layout/Layout";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {routeList} from "./hoc/Layout/Navigation/NavigationItems/routeList";
import {StylesProvider} from "@material-ui/core";
import {Theme} from "./hoc/Theme/Theme";


export const App = () => {
    return (
        <BrowserRouter>
            <StylesProvider injectFirst>
                <Theme>
                    <Layout>
                        <Switch>
                            {routeList.map(route => (
                                <Route exact key={route.routeName} path={route.routeName} component={route}/>
                            ))}
                        </Switch>
                    </Layout>
                </Theme>
            </StylesProvider>
        </BrowserRouter>
    );
};
