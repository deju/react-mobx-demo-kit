
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd';
import { bind } from 'decko';

export default class Header extends Component {
    
    constructor(porps) {
        super(porps);
        this.state = {
            current: this.props.pathname === '/' ? '/users' : this.props.pathname
        }
    }

    @bind
    handleClick(e) {
        if(e.key !== this.state.current) this.setState({current: e.key});
    }

    render() {
        return (
            <header className="app-header">
                <Link className="app-header__logo" to="/">&nbsp;</Link>
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal">
                        <Menu.Item key="/users">
                            <Link to="/">
                                <span>Users</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/repos">
                            <Link to="/repos">
                                <span>Repositories</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/about">
                            <Link to="/about">
                                <span>About</span>
                            </Link>
                        </Menu.Item>
                </Menu>
            </header>
        );
    }
}