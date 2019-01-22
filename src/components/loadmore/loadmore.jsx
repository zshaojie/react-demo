import React, { Component } from 'react'
import './loadmore.css'

export default class Loadmore extends Component {

  render () {

    const { obsureList, showAddress, loadMoreDataFn } = this.props

    return (
      <div>
        <div className='mask' style={{ display: showAddress }}>
          <div className='content'>
            <div className='header'>请选择地址</div>
            <div className='address-list'>
              <ul>
                {
                  obsureList.map((item, index) => (
                    <li key={index}>{item.address}</li>
                  ))
                }
              </ul>
              <div className="loadMore" ref="wrapper" onClick={loadMoreDataFn}>点击加载更多</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
