import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Col, Input, Row, Button, Select } from 'antd'
import { DatePicker } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { hashHistory/* , Link */ } from 'react-router'

const { Option } = Select;


const { RangePicker } = DatePicker;
// import {connect} from 'react-redux'
// import {} from '@actions/xxx'

// @connect((storeState)=>({}))

export default class queryConf extends Component {
    static defaultProps = {
    }

    static propTypes = {
    }

    constructor(props) {
        super(props)
        this.state = {
            kind: [
                { id: 1, name: "用户信息" },
                { id: 2, name: "活动信息" },
                { id: 3, name: "额外信息" },
            ],
            conds: [
                { id: 1, name: "用户当前等级" },
                { id: 2, name: "用户名" },
                { id: 3, name: "用户服务器名" },
                { id: 4, name: "用户积分值" },
                { id: 5, name: "用户游戏指标值" },
            ],
        }
    }

    componentDidMount() { }

    // #region vscode 1.17的收缩代码块功能  业务代码

    // #endregion

    render() {
        const { kind, conds } = this.state
        return (
            <div className="page" style={{ fontSize: '16px' }}>
                <Row style={{ textAlign: 'center', marginTop: '30px', marginBottom: '50px' }}>
                    <span style={{ fontSize: '24px' }}>新建查询</span>
                </Row>
                <div style={{ border: '1px solid #dcdcdc', padding: '15px 10px 5px 10px', margin: '10px 30px' }}>
                    <Row>查询1</Row>
                    <Row style={{ marginBottom: '15px' }}>
                        <Col span={2} />
                        <Col span={4} style={{ textAlign: 'right', marginTop: '4px', marginRight: '5px' }}>
                            <span style={{ color: 'red' }}>*</span>
                            <label>查询名称：</label>
                        </Col>
                        <Col span={6}><Input /></Col>
                        <Col />
                    </Row>
                    <Row style={{ marginBottom: '15px' }}>
                        <Col span={2} />
                        <Col span={4} style={{ textAlign: 'right', marginRight: '5px' }}>
                            <span style={{ color: 'red' }}>*</span>
                            <label>查询类别：</label>
                        </Col>
                        <Col span={6}>
                            <Select size='large' style={{ width: '200px' }}>
                                {kind.map((item, index) => (
                                    <Option key={item.id}>{item.name}</Option>
                                ))}
                            </Select>
                        </Col>
                        <Col />
                    </Row>
                    <Row style={{ marginBottom: '15px' }}>
                        <Col span={2} />
                        <Col span={4} style={{ textAlign: 'right', marginTop: '4px', marginRight: '5px' }}>
                            <span style={{ color: 'red' }}>*</span>
                            <label>查询数据项：</label>
                        </Col>
                        <Col>
                            <Select size='large' style={{ width: '200px', marginRight: '15px' }}>
                                {conds.map((item, index) => (
                                    <Option key={item.id}>{item.name}</Option>
                                ))}
                            </Select>
                            <label>输出键名：</label>
                            <Input style={{ width: '100px', marginRight: '20px' }} />
                        </Col>
                    </Row>
                    <Row style={{ marginBottom: '15px' }}>
                        <Col span={2} />
                        <Col span={4} style={{ textAlign: 'right', marginTop: '4px', marginRight: '5px' }} />
                        <Col>
                            <Select size='large' style={{ width: '200px', marginRight: '15px' }}>
                                {conds.map((item, index) => (
                                    <Option key={item.id}>{item.name}</Option>
                                ))}
                            </Select>
                            <label>输出键名：</label>
                            <Input style={{ width: '100px', marginRight: '20px' }} />
                            <PlusCircleOutlined />
                        </Col>
                    </Row>
                </div>
                <Row style={{ textAlign: 'center', margin: '30px 100px' }}>
                    <Button
                        type="primary"
                        block
                        ghost
                    >
                        新建查询
                    </Button>
                </Row>
                <Row style={{ textAlign: 'center', margin: '100px 0px' }}>
                    <Button
                        style={{ width: '150px' }}
                        onClick={() => { hashHistory.push('/act/type') }}
                        type="primary"
                        shape='round'
                        block
                    >
                        上一步
                    </Button>
                    <Button
                        style={{ width: '150px' }}
                        onClick={() => { hashHistory.push('/act/reward') }}
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
