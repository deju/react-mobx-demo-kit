
import React, { Component } from 'react'
import { Spin, Table } from 'antd';
import { inject, observer } from "mobx-react";
import columns, { processRepoInfo2Table } from '../modules/table';
import { isEmptyObject } from './../../../utils/objectEmpty';
import './Repo.scss';

@inject("store") @observer
export default class Detail extends Component {
    constructor(props){
        super(props);
        this._id = props.match.params['0'];
        this.store = props.store.repoInfoStore;
    }
    
    componentWillMount() {
        this.store.fetchRepoInfo(this._id);
        this.store.clearData();
    }

    renderRepoKV () {
        const repo = this.store.repo;
        const data = processRepoInfo2Table(repo);
        return <Table columns={columns} dataSource={data} size="small" scroll={{ y: 500 }} pagination={false} />;
    }

    render() {
        const { repo } = this.store;
        return (
            <div className="s-root s-repo">
                <h4 className="s-repo__title">Repo Info</h4>
                {
                  isEmptyObject(repo) ?
                    <div className="loading">
                      <Spin size="large" tip="Loading Repo Info..." />
                    </div> :
                    <div className="s-user__detail">{this.renderRepoKV()}</div>
                }
          </div>
        )
  }
}