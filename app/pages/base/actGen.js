import React, { Component } from 'react'
import { hashHistory/* , Link */ } from 'react-router'
// import PropTypes from 'prop-types'
import { Button, Row, Col, Form, Tag, Table } from 'antd';
import TableList from '@tableList';

// import {connect} from 'react-redux'
// import {} from '@actions/xxx'
// import Socket from '@configs/socket'

// @connect((storeState)=>({}))
const FormItem = Form.Item;


export default class actGen extends Component {
    static defaultProps = {
    }

    static propTypes = {
    }

    constructor(props) {
        super(props)
        this.state = {
            searchKey: {
                keyword: '',
                pageSize: 10,
                pageNo: 1,
                deptCode: '',
            },
            columns: [
                {
                    title: '编号',
                    dataIndex: 'id',
                    key: 'id',
                    width: '10%',
                },
                {
                    title: 'API序列号',
                    dataIndex: 'seq',
                    key: 'seq',
                    width: '20%',
                },
                {
                    title: 'API分类',
                    dataIndex: 'tag',
                    key: 'tag',
                    width: '25%',
                    render: tag => (
                        <Tag color='green' key={tag}>
                            {tag.toUpperCase()}
                        </Tag>),
                },
                {
                    title: 'API名称',
                    dataIndex: 'name',
                    key: 'name',
                },
            ],
            data: [
                { id: 1, name: "查询玩家信息", tag: "查询", seq: "R8122718675748" },
                { id: 2, name: "入口信息拉取", tag: "入口", seq: "E1822819671189" },
                { id: 3, name: "领取幸运点数", tag: "领取", seq: "R8122718675748" },
                { id: 4, name: "查询领取幸运点数组件状态", tag: "领取组件查询", seq: "S98127186272617" },
                { id: 5, name: "兑换道具", tag: "领取", seq: "R21633821671782" },
                { id: 6, name: "查询兑换道具组件状态", tag: "领取组件查询", seq: "S8724738263784" },
            ]
        }
    }

    componentDidMount() { }

    // #region vscode 1.17的收缩代码块功能  业务代码
    // 提交搜索
    handleSearch = (e) => {
        alert("查找！")
    }

    // #endregion

    // 发送socket数据
    onClickSend = () => {
        // Socket.send({ type: 'receive/hello3', data: { name: 'dupi' } })
    }

    render() {
        const {
            columns, data
        } = this.state;
        return (
            <div className="page" style={{ fontSize: '16px', overflow: 'auto' }}>
                <Row style={{ textAlign: 'center', marginTop: '30px', marginBottom: '50px' }}>
                    <span style={{ fontSize: '24px' }}>活动序列号</span>
                </Row>
                <div style={{ border: '1px solid #dcdcdc', padding: '20px 15px 20px 15px', margin: '10px 30px' }}>
                    <Table columns={columns} dataSource={data} pagination={false} bordered />
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
                        onClick={() => { hashHistory.push('/') }}
                        type="primary"
                        shape='round'
                        block
                    >
                        完成
                    </Button>
                </Row>
            </div>
        )
    }
}
