import React from 'react';
import { Pie } from 'react-chartjs-2'
import { Card } from 'react-bootstrap'
import convertPriceToNumber from '../shared/convert-price-to-number'

export const PricePieChart = ({productsList, numOfProducts}) => {
  const sortedProducts = productsList
    .sort((a, b) => { return convertPriceToNumber(a.price) - convertPriceToNumber(b.price) })
    .reverse()

  const topProducts = sortedProducts.slice(0, numOfProducts)
  const dataValues = topProducts.map(p => convertPriceToNumber(p.price))

  const data = {
    labels: topProducts.map(p => p.name),
    datasets: [
      {
        data: dataValues,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }

  return (
    <Card>
      <Card.Header>Top {numOfProducts} prices</Card.Header>
      <Card.Body>
        <Pie data={data}/>
      </Card.Body>
    </Card>
  )
}