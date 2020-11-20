import React from 'react';
import { Alert, Jumbotron } from 'react-bootstrap';

export const Help = () => {
    return <Jumbotron className="bg-white b-1-cello brad-5 text-cello">
        <Alert variant="primary fs-1">Instructions</Alert>
        <ul className="fs-1">
            <li>Design and develop a dashboard page</li>
            <li>Must display products by type and number of items per product type information</li>
            <li>Must display chart for product by type</li>
            <li>Must display chart for open/closed locations</li>
            <li>Must display chart for top-5 products by price</li>
            <li>Must display list of products in stock below 50</li>
        </ul>
        <Alert variant="primary fs-1">If time permits</Alert>
        <ul className="fs-1">
            <li>Design and refactor products listing page</li>
            <li>Design and refactor inventory listing page</li>
            <li>Design and refactor a store listings page</li>
        </ul>
    </Jumbotron>
}