import React from 'react';
import { Jumbotron, Row, Col } from 'react-bootstrap';
import { ProductType } from '../shared/product-type'
import { ProductBarChart } from '../shared/product-bar-chart'
import { PricePieChart } from '../shared/price-pie-chart'
import convertPriceToNumber from '../shared/convert-price-to-number'

import productsList from '../../files/Products.json';

export const Dashboard = () => {
    const prodTypes = [...new Set(productsList.map(p => p.type))]

    const prodsPrice = []

    prodTypes.map(type => {
        const totalPrice = productsList
            .filter(pr => pr.type === type)
            .map(pr => pr.price)
            .reduce((a, b) => { return a + convertPriceToNumber(b)  }, 0)

        return prodsPrice
            .push({ type, totalPrice: totalPrice.toFixed(2) })
    })

    return <Jumbotron className="bg-white b-1-cello brad-5 text-cello">
        <Row className="mb-2">
        {
            prodsPrice.map((p, index) => {
                return <ProductType key={index} type={p.type} price={p.totalPrice}></ProductType>
            })
        }
        </Row>
        <Row>
            <Col>
                <ProductBarChart productsList = {productsList}></ProductBarChart>
            </Col>
            <Col>
                <PricePieChart productsList = {productsList} numOfProducts={5}></PricePieChart>
            </Col>
        </Row>
    </Jumbotron>
}