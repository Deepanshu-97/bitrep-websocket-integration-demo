import React, { Component } from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import { connect } from 'react-redux'
import { getData } from './../../app/actions'
import { handleAscData, handleDesData } from './../../helper/datahelper'

class OrderBook extends Component {
  componentDidMount = () => {
    this.props.fetchData()
  }

  render() {
    return (
      <div>
        {this.props.isDataLoading ? (<Loader type="BallTriangle" className="loader" />) :
          <div className="table-container">
            <table>
              {tableHeader('bids')}
              <tbody>{orderRows(handleDesData(this.props.websocketBidsData))}</tbody>
            </table>
            <table>
              {tableHeader('asks')}
              <tbody>{orderRows(handleAscData(this.props.websocketAsksData))}</tbody>
            </table>
          </div>}
      </div>
    )
  }
}
const tableHeader = (title) => (
  <thead>
    <tr>
      <th colSpan="4">{title}</th>
    </tr>
    <tr>
      <th>Count</th>
      <th>Amount</th>
      <th>Price</th>
      <th>Total</th>
    </tr>
  </thead>
)

const orderRows = (arr) => {
  let total = 0
  return arr &&
    arr.map((item, index) => {
      if (index === 0) {
        total = 0
      }
      total += parseFloat(item[0][3])
      total = Math.round((total + Number.EPSILON) * 1000) / 1000
      return item.map((row, index) =>
        !isNaN(parseFloat(row[3])) &&
        <tr key={index}>
          <td>{row[2]}</td>
          <td>{Math.round((parseFloat(row[3]) + Number.EPSILON) * 1000) / 1000}</td>
          <td>{row[1]}</td>
          <td>{total}</td>
        </tr>)
    })
}

const mapStateToProps = state => ({
  websocketBidsData: state.orderBookState.dataBidsArray,
  websocketAsksData: state.orderBookState.dataAsksArray,
  isDataLoading: state.orderBookState.isLoading
})

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(getData()),
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderBook)