import React from 'react';
import { Card, Row, Col, Badge } from 'react-bootstrap';

import productsList from '../../files/Products.json';

export const Products = () => {
    return <Row>
        {productsList.map(product => {
            return <Col sm={12} md={3} key={product.id} className="mb-2">
                <Card>
                    <Card.Body className="fs-1">
                        <Badge className="float-right" variant="info">{product.type}</Badge>
                        <Card.Title as="h2" className="text-cello">{product.name}</Card.Title>
                        <Badge variant="success">{product.price}</Badge>
                        <Badge variant="light" className="ml-1">Stock: {product.stock}</Badge>
                    </Card.Body>
                </Card>
            </Col>
        })}
    </Row>
}