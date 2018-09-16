
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';

import './UserItem.scss';

export default class UserItem extends Component {

    render () {
        const { user } = this.props;
        return (
            <div className="s-users__item">
                <img src={user.avatar_url} alt={user.login} />
                <div>
                    <span>{user.login}</span>
                    <br />
                    <span>{user.html_url}</span>
                    <br />
                    <Link to={`/user/${user.login}`}><Icon type="arrow-right" theme="outlined" /></Link>
                </div>
            </div>
        );
    }
}


