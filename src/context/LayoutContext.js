import React, { createContext, useState } from 'react';

export const LayoutContext = createContext();

const LayoutContextProvider = (props) => {
    const [sideBar, setSideBar] = useState('expanded');

    const toggleSideBar = (sideBar) => {
        sideBar === 'expanded' ? setSideBar('shrinked') : setSideBar('expanded');
    };

    return (
        <LayoutContext.Provider value={{ sideBar, toggleSideBar }}>
            {props.children}
        </LayoutContext.Provider>
    );
};

export default LayoutContextProvider