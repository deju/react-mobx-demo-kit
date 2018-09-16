
import React, { Component } from 'react'
import { Spin, Table } from 'antd';
import { inject, observer } from "mobx-react";
import columns, { processUserInfo2Table } from '../modules/table';
import { isEmptyObject } from './../../../utils/objectEmpty';
import './User.scss';

@inject("store") @observer
export default class Detail extends Component {
    
    constructor(props){
        super(props);
        this._id = props.match.params.id
        this.store = props.store.userInfoStore;
    }
    
    componentWillMount() {
        const { fetchUserInfo, clearData } = this.store;
        fetchUserInfo(this._id);
        clearData();
    }

    renderUserKV () {
        const user = this.store.user;
        const data = processUserInfo2Table(user);
        return <Table columns={columns} dataSource={data} size="small" scroll={{ y: 500 }} pagination={false} />;
    }

    render() {
        const { user } = this.store;
        return (
            <div className="s-root s-user">
                <h4 className="s-user__title">User Info</h4>
                {
                  isEmptyObject(user) ?
                    <div className="loading">
                      <Spin size="large" tip="Loading User Info..." />
                    </div> :
                    <div className="s-user__detail">{this.renderUserKV()}</div>
                }
          </div>
        )
  }
}