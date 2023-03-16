import { useReducer } from "react";

import AlertsContext from "./alerts-context";

const defaultAlertsState = {
  alerts: [],
  activeAlert: {},
};

const alertsReducer = (state, action) => {
  if (action.type === "ALERTS") {
    const updatedAlerts = action.alerts.filter((alert) =>
      !state.alerts.some((al) => alert.id === al.id)
    );

    return {
      alerts: [...state.alerts, ...updatedAlerts],
      activeAlert: updatedAlerts[0],
    };
  }

  if (action.type === "ACTIVE") {
      const selectedActiveAlert = state.alerts.find(alert => alert.id === action.alert.id)

    return {
        alerts: state.alerts,
        activeAlert: selectedActiveAlert
    }
  }

  return defaultAlertsState;
};

const AlertsProvider = ({ children }) => {
  const [alertsState, dispatch] = useReducer(alertsReducer, defaultAlertsState);

  const setActiveAlert = (alert) => {
    dispatch({ type: "ACTIVE", alert: alert });
  };

  const setAlerts = (alerts) => {
    dispatch({ type: "ALERTS", alerts: alerts });
  };

  const alertsContext = {
    alerts: alertsState.alerts,
    activeAlert: alertsState.activeAlert,
    setAlerts,
    setActiveAlert,
  };

  return (
    <AlertsContext.Provider value={alertsContext}>
      {children}
    </AlertsContext.Provider>
  );
};

export default AlertsProvider;
