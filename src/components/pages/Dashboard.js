import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const Dashboard = () => {
    return <Jumbotron className="bg-white b-1-cello brad-5 text-cello">
        <h1>Hello Developer,</h1>
        <p className="fs-1">
            We are glad you are here.
            This is a live coding session as part of the interview process.
        </p>
        <br/>
        <NavLink to="/help" className="btn btn-fill btn-primary">View Session Objectives</NavLink>
    </Jumbotron>
}
