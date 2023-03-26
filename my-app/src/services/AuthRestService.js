import BaseRestService from "./BaseRestService";

class AuthRestService extends BaseRestService {
    constructor() {
        super();
        this.AUTH_ENDPOINT = 'Account';
    }

    loginUrl() {
        return this.buildUrl(`${this.AUTH_ENDPOINT}/Login`)
    }

    refreshUrl() {
        return this.buildUrl(`${this.AUTH_ENDPOINT}/Account/RefreshToken`)
    }
}

export default AuthRestService;