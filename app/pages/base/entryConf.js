import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Col, Input, Row, Button, Select, Checkbox, Radio } from 'antd'
import { UploadOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { hashHistory/* , Link */ } from 'react-router'

const { Option } = Select;

// import {connect} from 'react-redux'
// import {} from '@actions/xxx'

// @connect((storeState)=>({}))

export default class entryConf extends Component {
    static defaultProps = {
    }

    static propTypes = {
    }

    constructor(props) {
        super(props)
        this.state = {
            role: [
                { id: 1, name: "角色" },
                { id: 2, name: "账号" },
            ],
            period: [
                { id: 1, name: "年" },
                { id: 2, name: "月" },
                { id: 3, name: "周" },
                { id: 4, name: "日" },
                { id: 5, name: "活动期间" },
            ],
            kind: [
                { id: 1, name: "普通领取" },
                { id: 2, name: "兑换奖励" },
            ],
            conds: [
                { id: 1, name: "用户当前等级" },
                { id: 2, name: "用户名" },
                { id: 3, name: "用户服务器名" },
                { id: 4, name: "用户积分值" },
                { id: 5, name: "用户游戏指标值" },
            ],
            opr: [
                { id: 1, name: "＞" },
                { id: 2, name: "＜" },
                { id: 3, name: "＝" },
                { id: 4, name: "≥" },
                { id: 5, name: "≤" },
                { id: 5, name: "≠" },
            ],
            value: 0
        }
    }

    componentDidMount() { }

    // #region vscode 1.17的收缩代码块功能  业务代码

    // #endregion

    render() {
        const { kind, conds, period, role, opr, value } = this.state
        return (
            <div className="page" style={{ fontSize: '16px', overflow: 'auto' }}>
                <Row style={{ textAlign: 'center', marginTop: '30px', marginBottom: '50px' }}>
                    <span style={{ fontSize: '24px' }}>入口配置</span>
                </Row>
                <div style={{ border: '1px solid #dcdcdc', padding: '20px 10px 5px 10px', margin: '10px 30px' }}>
                    <Row>基本配置</Row>
                    <Row style={{ marginBottom: '15px' }}>
                        <Col span={2} />
                        <Col span={4} style={{ textAlign: 'right', marginRight: '5px' }}>
                            <span style={{ color: 'red' }}>*</span>
                            <label>入口图标：</label>
                        </Col>
                        <Col span={6}>
                            <Button type="primary" size={'small'} ghost><UploadOutlined />上传</Button>
                        </Col>
                        <Col />
                    </Row>
                    <Row>
                        <Col span={2} />
                        <Col span={4} style={{ textAlign: 'right', marginRight: '5px' }}>
                        </Col>
                        <Col span={6}>
                            <img width={35} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
                        </Col>
                        <Col />
                    </Row>
                    <Row style={{ marginBottom: '15px' }}>
                        <Col span={2} />
                        <Col span={4} style={{ textAlign: 'right', marginTop: '4px', marginRight: '5px' }}>
                            <span style={{ color: 'red' }}>*</span>
                            <label>入口控制：</label>
                        </Col>
                        <Col />
                    </Row>
                    <Row style={{ marginBottom: '15px' }}>
                        <Col span={2} />
                        <Col span={4} style={{ textAlign: 'right', marginTop: '4px', marginRight: '5px' }} />
                        <Col>
                            <label>条件：</label>
                            <Select size='large' style={{ width: '150px', marginRight: '15px' }}>
                                {conds.map((item, index) => (
                                    <Option key={item.id}>{item.name}</Option>
                                ))}
                            </Select>
                            <label>满足：</label>
                            <Select size='large' style={{ width: '150px', marginRight: '15px' }}>
                                {opr.map((item, index) => (
                                    <Option key={item.id}>{item.name}</Option>
                                ))}
                            </Select>
                            <label>数值：</label>
                            <Input style={{ width: '100px', marginRight: '20px' }} />
                            <PlusCircleOutlined />
                        </Col>
                    </Row>
                </div>
                <div style={{ border: '1px solid #dcdcdc', padding: '20px 10px 5px 10px', margin: '10px 30px' }}>
                    <Row>红点配置</Row>
                    <Row style={{ marginBottom: '15px' }}>
                        <Col span={2} />
                        <Col span={4} style={{ textAlign: 'right', marginRight: '5px' }}>
                            <span style={{ color: 'red' }}>*</span>
                            <label>红点可见性：</label>
                        </Col>
                        <Col />
                    </Row>
                    <Row style={{ marginBottom: '15px' }}>
                        <Col span={2} />
                        <Col span={4} style={{ textAlign: 'right', marginTop: '4px', marginRight: '5px' }} />
                        <Col>
                            <label>默认配置：</label>
                            <Checkbox style={{ marginLeft: '10px' }}>有奖励可领则展示红点</Checkbox>
                        </Col>
                    </Row>
                    <Row style={{ marginBottom: '15px' }}>
                        <Col span={2} />
                        <Col span={4} style={{ textAlign: 'right', marginTop: '4px', marginRight: '5px' }} />
                        <Col>
                            <label>条件：</label>
                            <Select size='large' style={{ width: '150px', marginRight: '15px' }}>
                                {conds.map((item, index) => (
                                    <Option key={item.id}>{item.name}</Option>
                                ))}
                            </Select>
                            <label>满足：</label>
                            <Select size='large' style={{ width: '150px', marginRight: '15px' }}>
                                {opr.map((item, index) => (
                                    <Option key={item.id}>{item.name}</Option>
                                ))}
                            </Select>
                            <label>数值：</label>
                            <Input style={{ width: '100px', marginRight: '20px' }} />
                            <PlusCircleOutlined />
                        </Col>
                    </Row>
                    <Row style={{ marginBottom: '15px' }}>
                        <Col span={2} />
                        <Col span={4} style={{ textAlign: 'right', marginRight: '5px' }}>
                            <span style={{ color: 'red' }}>*</span>
                            <label>红点样式：</label>
                        </Col>
                        <Col />
                    </Row>
                    <Row style={{ marginBottom: '15px' }}>
                        <Col span={2} />
                        <Col span={4} style={{ textAlign: 'right', marginTop: '4px', marginRight: '5px' }} />
                        <Col>
                            <label>样式：</label>
                            <Radio.Group value={value} onChange={(e) => { this.setState({ value: e.target.value }) }}>
                                <Radio style={{ marginLeft: '10px' }} value={0}>红点</Radio>
                                <Radio style={{ marginLeft: '10px' }} value={1}>数字</Radio>
                            </Radio.Group>
                        </Col>
                    </Row>
                </div>
                <Row style={{ textAlign: 'center', margin: '100px 0px' }}>
                    <Button
                        style={{ width: '150px' }}
                        onClick={() => { hashHistory.push('/act/reward') }}
                        type="primary"
                        shape='round'
                        block
                    >
                        上一步
                    </Button>
                    <Button
                        style={{ width: '150px' }}
                        onClick={() => { hashHistory.push('/act/generate') }}
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
