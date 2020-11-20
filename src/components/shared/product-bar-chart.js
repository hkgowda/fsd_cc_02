import React from 'react';
import { Bar } from 'react-chartjs-2'
import { Card } from 'react-bootstrap'

export const ProductBarChart = ({productsList}) => {
  const prodTypes = [...new Set(productsList.map(p => p.type))]
  const dataValues = []
  prodTypes.map(type => {
    return dataValues.push(productsList.filter(p => p.type === type).length)
  })

  const data = {
    labels: prodTypes,
    datasets: [
      {
        label: '# of Votes',
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
  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  }

  return (<Card>
  <Card.Header>Products</Card.Header>
    <Card.Body>
    <Bar data={data} options={options} />
    </Card.Body>
  </Card>)
}