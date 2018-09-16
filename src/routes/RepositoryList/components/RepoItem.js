
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';

import './RepoItem.scss';

export default class RepoItem extends Component {

    render () {
        const { repo } = this.props;
        const owner = repo.owner;
        return (
            <div className="s-repos__item">
                <h3>{repo.name}</h3>
                <div className="s-repos__item__lang">
                    {repo.language}
                    {repo.license && repo.license.name && <span>&nbsp;&nbsp;&nbsp;&nbsp;({repo.license.name})</span>}
                </div>
                <p>{repo.description}</p>
                <p className="s-repos__item__op">
                    <span><Icon type="user" /><Link to={`/user/${owner.login}`}>{owner.login}</Link></span>
                    <span><Icon type="star" /> {repo.stargazers_count}</span>
                    <span><Icon type="fork" /> {repo.forks}</span>
                    <span>Last Update: {repo.updated_at}</span>
                    <span><Link to={`/repo/${repo.full_name}`}><Icon type="arrow-right" theme="outlined" /></Link></span>
                </p>
            </div>
        );
    }
}


