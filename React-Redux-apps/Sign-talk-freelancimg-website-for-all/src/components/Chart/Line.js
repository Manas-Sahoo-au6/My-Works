import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';
import './Pie.css'

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', ],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: ["#41B883", "#E46651", "#00D8FF","orange","white"],
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56]
    }
  ]
};

export default class LineDemo extends Component {
  render() {
    return (
      <div id="main">
       <div> </div>
       <div id="pie"> <Line ref="chart" data={data} /></div>
      </div>
    );
  }

  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data
    console.log(datasets[0].data);
  }
}