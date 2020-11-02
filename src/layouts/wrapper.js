import React from 'react';
import { Route } from 'react-router-dom';
import MainLayout from './MainLayout';

function RouteWrapper({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={props => (
                <MainLayout {...props}>
                    <Component {...props} />
                </MainLayout>
            )}
        />
    );
}

export default RouteWrapper;
