import {
    observable,
    action
} from 'mobx';

import Config from './../config/config'

class RepoListStore {

    @observable count;
    @observable repoList;
    @observable loading;

    constructor() {
        this.count = 0;
        this.repoList = [];
        this.loading = false;
    }

    @action
    searchRepo = (repoName, page=1) => {
        this.loading = true;

        fetch(Config.GITHUB_REPO_SEARCH + repoName + '&page=' + page).then(

            action('fetchRes', res => {
                return res.json()
            })).then(action('fetchSuccess', data => {
                console.log(data);
                this.loading = false;
                this.repoList = data.items;
                this.count = data.total_count;
            })).catch(action('fetchError', e => {
                    console.log(e.message);
                    this.loading = false;
                })
            );
    }
}

const repoListStore = new RepoListStore()

export {
    repoListStore
}