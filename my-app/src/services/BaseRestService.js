import { config as devConfig } from '../config/Dev';
import { config as prodConfig } from '../config/Prod';

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

class BaseRestService {
    constructor() {
        this.API_BASE_URL = config.baseURL;
        this.API_VERSION ='v1';
    }

    buildUrl(endpoint) {
        return `${this.API_BASE_URL}/${this.API_VERSION}/${endpoint}`;
    }
}

export default BaseRestService;