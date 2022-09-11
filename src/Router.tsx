import React, { FC } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';

import Root from './views/Root';
import AccessKeys from './views/AccessKeys';
import OurTeam from "./views/OurTeam";

const Router: FC = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Root />} />
                <Route path="/access-keys" element={<AccessKeys/>} />
                <Route path="/our-team" element={<OurTeam/>} />
            </Routes>
        </HashRouter>
    )
}

export default Router;
