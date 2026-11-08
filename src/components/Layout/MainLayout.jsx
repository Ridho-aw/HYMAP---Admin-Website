import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import { fetchAdminUser } from "../../services/dashboardService";

function MainLayout() {
    const [AdminUsername, setAdminUsername] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 768);

    useEffect(() => {
        const getAdminData = async () => {
            const user = await fetchAdminUser();
            if (user) {
                setAdminUsername(user);
            }
        };
        getAdminData();
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" />

            <div className="d-flex flex-column min-vh-100">
                <Header onToggleSidebar={toggleSidebar} />
                
                <div className="d-flex flex-grow-1 position-relative overflow-hidden">
                    <Sidebar adminName={AdminUsername?.username} isOpen={isSidebarOpen} />
                    {isSidebarOpen && (
                        <div 
                            className="sidebar-overlay d-md-none" 
                            onClick={toggleSidebar}
                        ></div>
                    )}
                    
                    <div className="flex-grow-1 w-100 transition-all">
                        <Outlet context={{ AdminUsername }} />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default MainLayout;