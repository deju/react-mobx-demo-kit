import {
    observable,
    action
} from 'mobx';

import Config from './../config/config'

class UserListStore {

    @observable count;
    @observable userList;
    @observable status; // 'loading', 'success', 'failure'
    @observable loading;

    constructor() {
        this.count = 0;
        this.userList = [];
        this.status = '';
    }

    @action
    searchUser = (userName, page=1) => {
        this.status = 'loading';
        fetch(Config.GITHUB_SEARCH + userName + '&page=' + page).then(
            action('fetchRes', res => {
                return res.json()
            })).then(action('fetchSuccess', data => {
                this.status = 'success';
                this.userList = data.items;
                this.count = data.total_count;
            })).catch(action('fetchError', e => {
                this.status = 'failure';
            }));
    }
}

const userListStore = new UserListStore()

export {
    userListStore
}