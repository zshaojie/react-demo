import React, { Component } from 'react'
import { Input, Drawer } from 'antd'
import 'antd/dist/antd.css'
import './loadmore.css'
import Loadmore from './loadmore'

export default class App extends Component {

  state = {
    obsureList: [
      {
        address: '测试地址1111111'
      }, {
        address: '测试地址2222222'
      }, {
        address: '测试地址3333333'
      }, {
        address: '测试地址4444444'
      }, {
        address: '测试地址1111111'
      }, {
        address: '测试地址2222222'
      }, {
        address: '测试地址3333333'
      }, {
        address: '测试地址4444444'
      }, {
        address: '测试地址1111111'
      }, {
        address: '测试地址2222222'
      }, {
        address: '测试地址3333333'
      }, {
        address: '测试地址4444444'
      }, {
        address: '测试地址1111111'
      }, {
        address: '测试地址2222222'
      }, {
        address: '测试地址3333333'
      }, {
        address: '测试地址4444444'
      }
    ],
    showAddress: true
  }

  loadMoreDataFn (that) {
    console.log('加载更多。。。')
    that.setState({
      obsureList: that.state.obsureList.concat(
        [{
          address: 'ddddddddddd'
        }])
    })
  }

  render () {
    const Search = Input.Search
    const { obsureList, showAddress } = this.state


    return (
      <div>
        <div style={{ margin: '3rem 0 2rem 2.2rem' }}>
          <Search
            placeholder="请输入查询内容"
            onSearch={value => this.showDrawer(value)}
            enterButton
          />
        </div>

        <Loadmore obsureList={obsureList} showAddress={showAddress} loadMoreDataFn={this.loadMoreDataFn.bind(this, this)} />
      </div>
    )
  }
}
