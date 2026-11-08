import { useState, useEffect } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import { fetchUsersData } from '../services/userDataService'; 

function DashMainContent() {
    const { AdminUsername } = useOutletContext();
    const navigate = useNavigate();
    
    const [summary, setSummary] = useState({
        totalKiriman: 0,
        totalDaerah: 0,
        galonDipinjam: 67, 
        stokGalon: 727     
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadDashboardData = async () => {
            try {
                const users = await fetchUsersData();
                const totalKiriman = users.length;
                const uniqueCities = new Set(users.map(user => user.address.city)).size;

                setSummary(prev => ({
                    ...prev,
                    totalKiriman,
                    totalDaerah: uniqueCities
                }));
            } catch (error) {
                console.error("Gagal memuat data dashboard:", error);
            } finally {
                setLoading(false);
            }
        };

        loadDashboardData();
    }, []);

    return (
        <main className="flex-grow-1 bg-white p-5">
            <h1 className="fs-2 fw-normal text-dark mb-4">
                Welcome Back! {AdminUsername?.username ? AdminUsername.username : 'Admin'}.
            </h1>
            <h2 className="fs-3 fw-bold text-black mb-4">Dashboard Panel</h2>

            {loading ? (
                <p>Memuat ringkasan data...</p>
            ) : (
                <div className="row g-4">
                    <div className="col-12 col-md-6 d-flex flex-column gap-3">
                        <div 
                            className="dashboard-box box-short p-4 d-flex flex-column justify-content-center shadow-sm"
                            onClick={() => navigate('/statusPengiriman')}
                            style={{ cursor: 'pointer' }}
                        >
                            <h5 className="text-muted fw-semibold mb-2">Total Jadwal Kiriman</h5>
                            <h2 className="display-5 fw-bold mb-0">
                                {summary.totalKiriman} <span className="fs-6 text-muted fw-normal">Pengiriman</span>
                            </h2>
                        </div>

                        <div 
                            className="dashboard-box box-short p-4 d-flex flex-column justify-content-center shadow-sm"
                            onClick={() => navigate('/daerahKiriman')}
                            style={{ cursor: 'pointer' }}
                        >
                            <h5 className="text-muted fw-semibold mb-2">Grup Daerah Kiriman</h5>
                            <h2 className="display-5 fw-bold mb-0">
                                {summary.totalDaerah} <span className="fs-6 fw-normal">Wilayah Aktif</span>
                            </h2>
                        </div>
                    </div>
                    
                    <div className="col-12 col-md-6">
                        <div 
                            className="dashboard-box box-tall p-4 d-flex flex-column justify-content-center align-items-center shadow-sm text-center"
                            onClick={() => navigate('/stokGalon')}
                            style={{ cursor: 'pointer' }}
                        >
                            <h4 className="fw-bold text-dark mb-5">Ringkasan Stok Galon</h4>
                            
                            <div className="d-flex w-100 justify-content-around mt-3">
                                <div>
                                    <h5 className="text-muted fw-semibold mb-3">Galon Dipinjam</h5>
                                    <h1 className="display-4 fw-bold mb-0">{summary.galonDipinjam}</h1>
                                </div>
                                
                                <div className="border-end border-2 mx-2"></div>
                                
                                <div>
                                    <h5 className="text-muted fw-semibold mb-3">Stok Tersedia</h5>
                                    <h1 className="display-4 fw-bold mb-0">{summary.stokGalon}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}

export default DashMainContent;