import React, {Component} from 'react'
import {inject, observer} from "mobx-react";
import { Input, Pagination, Spin } from 'antd';
import { bind } from 'decko';
import RepoItem from '../components/RepoItem';

import './RepositoryList.scss';


const Search = Input.Search;

@inject("store") @observer
export default class RepositoryList extends Component {
    constructor(props) {
        super(props)
        this.store = props.store.repoListStore;
        this.state = {
            page: 1,
            repoName: ''
        };
    }

    @bind
    handleSearch (value) {
        this.setState({
            repoName: value
        }, () => {
            if (this.state.repoName !== '') this.store.searchRepo(this.state.repoName);
        });
    }

    @bind
    handlePageChange (page) {
        this.setState({
            page
        }, () => {
            const { repoName, page } = this.state;
            if (repoName !== '') this.store.searchRepo(repoName, page);
        })
    }

    render() {
        const { repoList, count, loading } = this.store;
        const { page, repoName } = this.state;
        return (
            <div className="s-root s-repos">
                <div className="s-repos__query">
                    <Search
                        placeholder="Please Input Github Repo Name"
                        defaultValue={repoName}
                        onSearch={this.handleSearch}
                        enterButton
                    />
                </div>
                <Spin size="large" spinning={loading} tip={`Search Repos named "${repoName}" ...`}>
                    <div className="s-repos__list">
                        {repoList.map((repo) => <RepoItem key={repo.id} repo={repo} />)}
                    </div>
                </Spin>

                <div className="s-repos__pagination" style={{textAlign: 'center'}}>
                    <Pagination defaultCurrent={page} pageSize={30} total={count} showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`} onChange={this.handlePageChange} />
                </div>
            </div>
        );
  }
}
