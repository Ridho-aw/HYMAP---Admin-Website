import { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/dashboardMainContent';
import Footer from './components/Footer';
import { fetchAdminUser } from './services/dashboardService';
import './styles/Dashboard.css';

function Dashboard() {
  const [admin, setAdminUser] = useState(null);

  useEffect(() => {
    const getAdminData = async () => {
      const user = await fetchAdminUser();
      if (user) {
        setAdminUser(user);
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
          <Sidebar adminName={admin?.username} />
          <MainContent adminName={admin?.username} />
        </div>

        <Footer />
      </div>
    </>
  )
}

export default Dashboard;
