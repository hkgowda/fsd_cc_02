import React, {useState, useEffect} from 'react';
import { Card, Row, Col, Badge, InputGroup, FormControl, Form } from 'react-bootstrap';
import Icon from '../utils/Icon';

import productsList from '../../files/Products.json';

export const Inventory = () => {
    const [products, setProducts] = useState(productsList);
    const [search, setSearch] = useState('');
    const [inStock, setInStock] = useState(false);

    useEffect(() => {
        const newProductsList = inStock ? products.filter(p => p.stock > 0) : products;
        setProducts(newProductsList);
    }, [inStock, products])

    useEffect(() => {
        const newProductsList = productsList.filter( p => p.name.toLowerCase().indexOf(search.toLowerCase()) !== -1);
        setProducts(newProductsList);
    }, [search]);

    return <Row>
        <Col sm={12} className="mb-3">
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text><Icon icon="search" /></InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl placeholder="Search for products" onChange={(e) => setSearch(e?.target?.value ?? '')}/>
            </InputGroup>
        </Col>
        <Col sm={12} className="mb-3">
            <Card>
                <Card.Body>
                    <p className="text-bold float-right">Showing {products.length} products</p>
                    <Form.Check type="checkbox" label="In Stock" onChange={(e) => setInStock(e?.target?.checked ?? false)} />
                </Card.Body>
            </Card>
        </Col>
        {products.map(product => {
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