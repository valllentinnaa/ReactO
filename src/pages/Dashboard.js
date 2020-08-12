import React, {useState} from "react";
import DemoDashboard from "./DemoDashboard";
import LoginDashboard from "./LoginDashboard";

const Dashboard = () => {
    const [isLogged, setIsLogged] = useState(true);
    return (
        <>
            {
                isLogged ? <LoginDashboard/> : <DemoDashboard/>
            }
            </>
    );
};

export default Dashboard;