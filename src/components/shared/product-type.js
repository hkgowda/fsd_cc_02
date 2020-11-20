import React from 'react';
import { Card, Col, Badge, NavLink } from 'react-bootstrap';

export const ProductType = ({type, price}) => {
    return(
        <Col>
            <Card>
                <Card.Body className="fs-1">
                    <Badge variant="info">{type}</Badge>
                    <Badge  className="float-right" variant="success">{price}</Badge>
                </Card.Body>
                <Card.Footer>
                <NavLink>{'CTA -->'}</NavLink>
                </Card.Footer>
            </Card>
        </Col>
    )
}