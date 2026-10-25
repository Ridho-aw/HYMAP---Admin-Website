import { useState} from 'react';
import MainContent from './components/dashboardMainContent';
import './styles/Dashboard.css';

function Dashboard() {
  const [setAdminUser] = useState(null);

  return (
    <>
      <main className="p-5">
            <MainContent />
        </main>
    </>
  )
}

export default Dashboard;
