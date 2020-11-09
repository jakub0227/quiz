import React from "react";
import {Layout} from "./hoc/Layout/Layout";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {StartQuizPage} from "./Pages/StartQuizPage/StartQuizPage";
import {PrizesPage} from "./Pages/PrizesPage/PrizesPage";
import {AboutPage} from "./Pages/AboutPage/AboutPage";


export const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route path="/" exact>
                        <StartQuizPage/>
                    </Route>
                    <Route path="/prizes" exact>
                        <PrizesPage/>
                    </Route>
                    <Route path="/about" exact>
                        <AboutPage/>
                    </Route>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
};
