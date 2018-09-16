import { observable, action } from 'mobx'
import Config from './../config/config'

class RepoInfoStore {
    @observable repo;
    @observable loading;

    constructor() {
        this.repo = {}
        this.loading = false;
    }

    @action clearData=()=>{
        this.repo = {}
        this.loading = false;
    }

    @action fetchRepoInfo = (repoName) => {
        fetch(Config.GITHUB_REPO + repoName).then(
          action('fetchRes', res => {
            return res.json()
          })).then(
            action('fetchSuccess', data => {
                this.repo= data;
                this.loading = false;
          })).catch(
            action('fetchError', e => {
                console.log(e.message)
                this.loading = false;
          }))
    }
}

const repoInfoStore = new RepoInfoStore();

export { repoInfoStore }
