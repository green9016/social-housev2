import React, { FC } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';

import Root from './views/Root';

const Router: FC = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Root />} />
            </Routes>
        </HashRouter>
    )
}

export default Router;
