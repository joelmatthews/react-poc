import BaseRestService from "./BaseRestService";

class AlertRestService extends BaseRestService {
    constructor() {
        super();
        this.ALERTS_ENDPOINT = 'Alerts';
    }

    alertsUrl(endpoint = '') {
        return this.buildUrl(`${this.ALERTS_ENDPOINT}/${endpoint}`)
    }
}

export default AlertRestService;