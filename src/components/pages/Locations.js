import React from 'react';
import { Card, Row, Col, Badge } from 'react-bootstrap';

import locationsList from '../../files/Locations.json';

export const Locations = () => {
    return <Row>
        {locationsList.map(location => {
            return <Col sm={12} md={3} key={location.id} className="mb-2">
                <Card>
                    <Card.Body className="fs-0">
                        <Badge className="float-right" variant="info">{location.status}</Badge>
                        <Card.Title as="h3" className="text-cello">Store #{location.id}</Card.Title>
                        <p>{location.address}</p>
                        <Badge variant="success">{location.lat}, {location.long}</Badge>
                        <Badge variant="light" className="ml-1">Phone: {location.phone}</Badge>
                    </Card.Body>
                </Card>
            </Col>
        })}
    </Row>
}