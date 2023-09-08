import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import {routesHome} from "../../../configs/routes";
import {routesHomeType} from "../../../configs/types";
import Header from "../../public/Header";


const App: React.FC = () => {
    const showItem: (routes: routesHomeType[]) => JSX.Element[] | undefined = (routes) => {
        if (routes && routes.length > 0) {
            return routes.map((item, index) => {
                return (
                    <Route key={index} exact={item.exact} path={item.path} component={item.component} />
                )
            })
        }
    }

    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Switch>
                    {showItem(routesHome)}
                    <Redirect from="*" to="/404"/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
