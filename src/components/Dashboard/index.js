import React, { Component } from 'react'
import Footer from '../Footer';
import OrderBook from '../OrderBook'
import Header from '../Header';

class Dashboard extends Component {

  render() {
    return (
      <div>
        <Header text="ORDER BOOK"/>
        <OrderBook />
        <Footer />
      </div>
    )
  }
}

export default Dashboard