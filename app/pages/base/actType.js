import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Col, Card, Row, Input, Button } from 'antd'
import { hashHistory/* , Link */ } from 'react-router'

// import {connect} from 'react-redux'
// import {} from '@actions/xxx'

// @connect((storeState)=>({}))

export default class actType extends Component {
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
    chooseCard = () => {
        hashHistory.push('/act/query')
    }

    // #endregion

    render() {
        return (
            <div style={{ margin: '40px 15px' }}>
                <div style={{ marginBottom: '15px' }}>
                    <Input
                        className="input-base-width"
                        size="default"
                        placeholder="请输入关键字进行搜索"
                    />
                    <Button style={{ marginTop: '5px', marginLeft: '10px' }} type="primary">
                        搜索
                    </Button>
                </div>
                <div className="site-card-wrapper">
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card title="充值返利活动" bordered={false} onClick={this.chooseCard}>
                                玩家在CBT阶段进行过充值后，OBT阶段为玩家返还相应的充值奖励，以激励玩家继续参与游戏。
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="促活活动" bordered={false} onClick={this.chooseCard}>
                                游戏稳定运营阶段，为提高玩家对游戏的黏性和线上活跃度，通过做任务发奖励的模式给玩家发放游戏福利。
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="回流活动" bordered={false} onClick={this.chooseCard}>
                                游戏中后期，干预玩家流失进程，依托新的游戏内容，通过奖励、折扣、裂变等玩法吸引玩家回到游戏。
                            </Card>
                        </Col>
                    </Row>
                </div>
                <Row style={{ textAlign: 'center', margin: '100px 0px' }}>
                    <Button
                        style={{ width: '150px' }}
                        onClick={() => { hashHistory.push('/act/create') }}
                        type="primary"
                        shape='round'
                        block
                    >
                        上一步
                    </Button>
                </Row>
            </div>
        )
    }
}
