import { observable, action } from 'mobx'
import Config from './../config/config'

class UserInfoStore {
    @observable user;
    @observable loading;

    constructor() {
        this.user = {}
        this.loading = false;
    }

    @action clearData=()=>{
        this.user = {}
        this.loading = false;
    }

    @action fetchUserInfo = (userName) => {
        fetch(Config.GITHUB_USER + userName).then(
          action('fetchRes', res => {
            return res.json()
          })).then(
            action('fetchSuccess', data => {
                this.user= data;
                this.loading = false;
          })).catch(
            action('fetchError', e => {
                this.loading = false;
          }))
    }
}

const userInfoStore = new UserInfoStore();

export { userInfoStore }
