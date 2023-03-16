import React from 'react';

const AlertsContext = React.createContext({
    alertsInQueue: [],
    activeAlert: {},
    setActiveAlert: (alert) => {},
    setAlerts: (alerts) => {}
});

export default AlertsContext;