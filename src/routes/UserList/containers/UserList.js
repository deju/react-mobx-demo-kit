import React, {Component} from 'react'
import {inject, observer} from "mobx-react";
import { Input, Pagination, Spin } from 'antd';
import { bind } from 'decko';
import UserItem from '../components/UserItem';

import './UserList.scss';

const Search = Input.Search;

@inject("store") @observer
export default class UserList extends Component {
    constructor(props) {
        super(props)
        this.store = props.store.userListStore;
        this.state = {
            page: 1,
            userName: ''
        };
    }

    @bind
    handleSearch (value) {
        this.setState({
            userName: value
        }, () => {
            if (this.state.userName !== '') this.store.searchUser(this.state.userName);
        });
    }

    @bind
    handlePageChange (page) {
        this.setState({
            page
        }, () => {
            const { userName, page } = this.state;
            if (userName !== '') this.store.searchUser(userName, page);
        })
    }

    render() {
        const { userList, count, status } = this.store;
        const { page, userName } = this.state;
        return (
            <div className="s-root s-users">
                <div className="s-users__query">
                    <Search
                        placeholder="Please Input Github User Name"
                        defaultValue={userName}
                        onSearch={this.handleSearch}
                        enterButton
                    />                
                </div>
                <Spin size="large" spinning={status === 'loading'} tip="Search Users...">
                    <div className="s-users__list">
                        {userList.map((user) => <UserItem key={user.login} user={user} />)}
                    </div>
                </Spin>

                {count > 0 && <div className="s-users__pagination">
                    <Pagination page={page} total={count} pageSize={30} showTotal={(total, range) => `${total} users`} onChange={this.handlePageChange} />
                </div>}
            </div>
        );
  }
}
