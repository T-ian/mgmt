import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Col, Input, Row, Button } from 'antd'
import { DatePicker } from 'antd';
import { PlusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { hashHistory/* , Link */ } from 'react-router'


const { RangePicker } = DatePicker;
// import {connect} from 'react-redux'
// import {} from '@actions/xxx'

// @connect((storeState)=>({}))

export default class createAct extends Component {
  static defaultProps = {
  }

  static propTypes = {
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() { }

  // #region vscode 1.17的收缩代码块功能  业务代码


  // #endregion

  render() {
    return (
      <div className="page" style={{ fontSize: '16px' }}>
        <Row style={{ textAlign: 'center', marginTop: '30px', marginBottom: '50px' }}>
          <span style={{ fontSize: '24px' }}>新建活动</span>
        </Row>
        <Row style={{ marginBottom: '15px' }}>
          <Col span={2} />
          <Col span={4} style={{ textAlign: 'right', marginTop: '4px', marginRight: '5px' }}>
            <span style={{ color: 'red' }}>*</span>
            <label>活动名称：</label>
          </Col>
          <Col span={6}><Input /></Col>
          <Col />
        </Row>
        <Row style={{ marginBottom: '15px' }}>
          <Col span={2} />
          <Col span={4} style={{ textAlign: 'right', marginTop: '4px', marginRight: '5px' }}>
            <span style={{ color: 'red' }}>*</span>
            <label>活动时间：</label>
          </Col>
          <Col span={6}>
            <RangePicker showTime />
          </Col>
          <Col />
        </Row>
        <Row style={{ marginBottom: '15px' }}>
          <Col span={2} />
          <Col span={4} style={{ textAlign: 'right', marginTop: '4px', marginRight: '5px' }}>
            <span style={{ color: 'red' }}>*</span>
            <label>活动参与人员：</label>
          </Col>
          <Col span={6}>
            <Input />
          </Col>
          <Col />
        </Row>
        <Row style={{ marginBottom: '15px' }}>
          <Col span={2} />
          <Col span={4} style={{ textAlign: 'right', marginTop: '4px', marginRight: '5px' }}>
            <span style={{ color: 'red' }}>*</span>
            <label>活动积分：</label>
          </Col>
        </Row>
        <Row style={{ marginBottom: '15px' }}>
          <Col span={2} />
          <Col span={4} style={{ textAlign: 'right', marginTop: '4px', marginRight: '5px' }}>
          </Col>
          <Col>
            <label>积分名：</label>
            <Input style={{ width: '100px', marginRight: '20px' }} />
            <Button shape="round" size='small' type='primary' style={{ marginRight: '20px' }}>
              保存
            </Button>
            <PlusCircleOutlined />
          </Col>
          <Col />
        </Row>
        <Row style={{ textAlign: 'center', margin: '200px 0px' }}>
          <Button
            style={{ width: '150px' }}
            onClick={() => { hashHistory.push('/act/type') }}
            type="primary"
            shape='round'
            block
          >
            下一步
          </Button>
        </Row>
      </div>
    )
  }
}
