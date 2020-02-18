import React, { Component } from 'react'
import './index.css'
import { connect } from 'react-redux';
import { getData } from './../../app/actions'


class OrderBook extends Component {
  componentDidMount = () => {
    this.props.fetchData()
  }

  render() {
    return (
      <div className="table-container">
        <table>
          {tableHeader}
          <tbody>{orderRows(this.props.websocketData)}</tbody>
        </table>
      </div>
    )
  }
}
const tableHeader = (
  <thead>
    <tr>
      <th>Count</th>
      <th>Amount</th>
      <th>Price</th>
      <th>Total</th>
    </tr>
  </thead>
);

const orderRows = (arr) => {
  let total = 0;
  console.log("array", arr)
  return arr &&
    arr.map((item, index) => {
      if(index === 0) {
        total = 0;
      }
      total += parseFloat(item[0][3])
      total = Math.round((total + Number.EPSILON) * 1000) / 1000
      return item.map((row) =>
        <tr>
          <td>{row[2]}</td>
          <td>{Math.round((parseFloat(row[3]) + Number.EPSILON) * 1000) / 1000}</td>
          <td>{row[1]}</td>
          <td>{total}</td>
        </tr>);
    })
}

const mapStateToProps = state => ({
  websocketData: state.orderBookState.dataArray
})

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(getData()),
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderBook)