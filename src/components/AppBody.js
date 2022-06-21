import React from 'react';
import Navbar from "./Navbar";
import Table from "./Table";
import classes from "./AppBody.module.css";

const AppBody = () => {
    return (
        <div className={classes.AppBody}>
            <Navbar/>
            <div className={classes.AppPadding}> </div>
            <Table/>
        </div>
    );
};

export default AppBody;