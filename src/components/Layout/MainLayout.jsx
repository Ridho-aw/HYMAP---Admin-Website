import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import { fetchAdminUser } from "../../services/dashboardService";

function MainLayout() {
    const [AdminUsername, setAdminUsername] = useState(null);

    useEffect(() => {
        const getAdminData = async () => {
            const user = await fetchAdminUser();
            if (user) {
                setAdminUsername(user);
            }
        };

        getAdminData();
    }, []);

    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" />

            <div className="d-flex flex-column min-vh-100">
                <Header />
                <div className="d-flex flex-grow-1">
                    <Sidebar adminName={AdminUsername?.username} />
                    <div className="flex-grow-1">
                        <Outlet context={{ AdminUsername }} />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default MainLayout;