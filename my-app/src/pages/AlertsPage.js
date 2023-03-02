import { json } from "react-router-dom";
import { useLoaderData } from 'react-router-dom';

const AlertsPage = () => {
    const data = useLoaderData();

    const stringifiedData = JSON.stringify(data);
    return (
        <>
            <h3>Alerts</h3>
            <p>{stringifiedData}</p>
        </>
    )
};

export async function loader() {
    const response = await fetch('https://dev-api.zeroeyes.com/api/v1/Alerts');

    if (!response.ok) {
        throw json({message: 'Unable to GET alerts!'}, {status: response.status})
    }


    const alertData = response.json();
    console.log(alertData);

    return alertData;

}

export default AlertsPage;