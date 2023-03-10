import { useLoaderData } from 'react-router-dom';

import authInstance from "../util/axiosInterceptors";

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
    authInstance.get()

}

export default AlertsPage;