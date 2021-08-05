import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Col, Input, Row, Button, Select } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons';
import { hashHistory/* , Link */ } from 'react-router'

const { Option } = Select;

// import {connect} from 'react-redux'
// import {} from '@actions/xxx'

// @connect((storeState)=>({}))

export default class rewardConf extends Component {
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
            prp: [
                { id: 1, name: "魔王的宝藏" },
                { id: 2, name: "勇士的铠甲" },
                { id: 3, name: "国君的王冠" },
                { id: 4, name: "巫师的法杖" },
            ]
        }
    }

    componentDidMount() { }

    // #region vscode 1.17的收缩代码块功能  业务代码

    // #endregion

    render() {
        const { kind, conds, period, role, opr, prp } = this.state
        return (
            <div className="page" style={{ fontSize: '16px', overflow: 'auto' }}>
                <Row style={{ textAlign: 'center', marginTop: '30px', marginBottom: '50px' }}>
                    <span style={{ fontSize: '24px' }}>新建领奖</span>
                </Row>
                <div style={{ border: '1px solid #dcdcdc', padding: '15px 10px 5px 10px', margin: '10px 30px' }}>
                    <Row>领奖1</Row>
                    <Row style={{ marginBottom: '15px' }}>
                        <Col span={2} />
                        <Col span={4} style={{ textAlign: 'right', marginTop: '4px', marginRight: '5px' }}>
                            <span style={{ color: 'red' }}>*</span>
                            <label>领奖名称：</label>
                        </Col>
                        <Col span={6}><Input /></Col>
                        <Col />
                    </Row>
                    <Row style={{ marginBottom: '15px' }}>
                        <Col span={2} />
                        <Col span={4} style={{ textAlign: 'right', marginRight: '5px' }}>
                            <span style={{ color: 'red' }}>*</span>
                            <label>领奖类别：</label>
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
                            <label>领奖限量：</label>
                        </Col>
                        <Col>

                        </Col>
                    </Row>
                    <Row style={{ marginBottom: '15px' }}>
                        <Col span={2} />
                        <Col span={4} style={{ textAlign: 'right', marginTop: '4px', marginRight: '5px' }} />
                        <Col>
                            <label>维度：</label>
                            <Select size='large' style={{ width: '150px', marginRight: '15px' }}>
                                {role.map((item, index) => (
                                    <Option key={item.id}>{item.name}</Option>
                                ))}
                            </Select>
                            <label>周期：</label>
                            <Select size='large' style={{ width: '150px', marginRight: '15px' }}>
                                {period.map((item, index) => (
                                    <Option key={item.id}>{item.name}</Option>
                                ))}
                            </Select>
                            <label>限量：</label>
                            <Input style={{ width: '100px', marginRight: '20px' }} />
                        </Col>
                    </Row>
                    <Row style={{ marginBottom: '15px' }}>
                        <Col span={2} />
                        <Col span={4} style={{ textAlign: 'right', marginTop: '4px', marginRight: '5px' }}>
                            <span style={{ color: 'red' }}>*</span>
                            <label>领奖条件：</label>
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
                        </Col>
                    </Row>
                    <Row style={{ marginBottom: '15px' }}>
                        <Col span={2} />
                        <Col span={4} style={{ textAlign: 'right', marginTop: '4px', marginRight: '5px' }}>
                            <span style={{ color: 'red' }}>*</span>
                            <label>领奖动作：</label>
                        </Col>
                        <Col />
                    </Row>
                    <Row style={{ marginBottom: '15px' }}>
                        <Col span={2} />
                        <Col span={4} style={{ textAlign: 'right', marginTop: '4px', marginRight: '5px' }} />
                        <Col>
                            <label>道具：</label>
                            <Select size='large' style={{ width: '150px', marginRight: '15px' }}>
                                {prp.map((item, index) => (
                                    <Option key={item.id}>{item.name}</Option>
                                ))}
                            </Select>
                            <label>数量：</label>
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
                        新建领奖
                    </Button>
                </Row>
                <Row style={{ textAlign: 'center', margin: '100px 0px' }}>
                    <Button
                        style={{ width: '150px' }}
                        onClick={() => { hashHistory.push('/act/query') }}
                        type="primary"
                        shape='round'
                        block
                    >
                        上一步
                    </Button>
                    <Button
                        style={{ width: '150px' }}
                        onClick={() => { hashHistory.push('/act/entry') }}
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
