import React, { Component } from 'react'
import { hashHistory/* , Link */ } from 'react-router'
// import PropTypes from 'prop-types'
import { Button, Row, Col, Form, Input } from 'antd';
import TableList from '@tableList';

// import {connect} from 'react-redux'
// import {} from '@actions/xxx'
// import Socket from '@configs/socket'

// @connect((storeState)=>({}))
const FormItem = Form.Item;


export default class app extends Component {
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
      userListResult: {
        list: [
          {
            id: 1,
            name: "7月促活活动1",
            span: "2021-07-01 ~ 2021-08-01",
            status: 0,
            username: "tinshine",
          },
          {
            id: 2,
            name: "7月促活活动2",
            span: "2021-07-01 ~ 2021-08-01",
            status: 2,
            username: "tinshine",
          },
          {
            id: 3,
            name: "7月促活活动3",
            span: "2021-07-01 ~ 2021-08-01",
            status: 1,
            username: "tinshine",
          },
        ],
        loading: false,
        totalCount: 3
      },

    }
  }

  componentDidMount() { }

  // #region vscode 1.17的收缩代码块功能  业务代码
  // 提交搜索
  handleSearch = (e) => {
    alert("查找！")
  }

  // 生成表格头部信息
  renderColumn() {
    return [
      {
        title: '编号',
        dataIndex: 'id',
        key: 'id',
        width: '10%',
      },
      {
        title: '活动名称',
        dataIndex: 'name',
        key: 'name',
        width: '20%',
      },
      {
        title: '活动时间',
        dataIndex: 'span',
        key: 'span',
        width: '25%',
      },
      {
        title: '创建人',
        dataIndex: 'username',
        key: 'username',
        width: '15%',
      },
      {
        title: '活动状态',
        dataIndex: 'status',
        key: 'status',
        width: '10%',
        render: (text, record, index) => (
          <span>{record.status ? '已过期' : '在线上'}</span>
        ),
      },
      {
        title: '操作',
        key: 'operate',
      },
    ];
  }

  // #endregion

  // 发送socket数据
  onClickSend = () => {
    // Socket.send({ type: 'receive/hello3', data: { name: 'dupi' } })
  }

  render() {
    const {
      userListResult,
    } = this.state;
    return (
      <div className="page">
        <Row style={{ minHeight: '50px' }}>
          <Col style={{ paddingLeft: '10px' }} span={22}>
            <Form style={{ marginTop: '10px' }} className="flexrow" onSubmit={this.handleSearch}>
              <FormItem>
                <Input
                  className="input-base-width"
                  size="default"
                  placeholder="请输入关键字进行搜索"
                />
              </FormItem>
              <Button style={{ marginTop: '5px' }} type="primary">
                搜索
              </Button>
            </Form>
          </Col>
          <Col>
            <Button style={{ marginTop: '17px' }} type="primary" onClick={() => {
              hashHistory.push('/act/create')
            }} > 创建活动</Button>
          </Col>
        </Row>
        <TableList
          rowKey="id"
          columns={this.renderColumn()}
          dataSource={userListResult.list}
          currentPage={this.state.searchKey.pageNo}
          pageSize={this.state.searchKey.pageSize}
          loading={userListResult.loading}
          scroll={{ y: true }}
          // onChange={}
          // onShowSizeChange={}
          totalCount={userListResult.totalCount}
        />
      </div>
    )
  }
}
