import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routerConfig} from "./routerConfig";


export const AppRouter = () => {
    return (
        <div>
            <Routes>
                {routerConfig.map(route => <Route key={route.path} path={route.path} element={(
                    <Suspense>
                        {route.element}
                    </Suspense>
                )}/>)}
            </Routes>
        </div>
    );
};


