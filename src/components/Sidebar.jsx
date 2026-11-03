import { Link } from "react-router-dom";
import profileImg from "/src/assets/placeholderLogoDashboard.jpg";

function Sidebar({ adminName }) {
    return (
        <aside className="sidebar-custom text-white py-4 px-3 d-flex flex-column gap-4">
            <div className="d-flex flex-column align-items-center text-center">
                <div className="avatar-bg rounded-circle overflow-hidden mb-3">
                    <img src={profileImg} alt="Avatar Admin" className="w-100 h-100 object-fit-cover" />
                </div>
                <h3 className="fs-4 fw-bold text-uppercase" style={{ letterSpacing: '1px' }}>
                    {adminName || 'Loading...'}
                </h3>
            </div>

            <div className="d-flex flex-column gap-2">
                <div className="fw-bold text-uppercase fs-7" style={{ letterSpacing: '0.5px', fontSize: '13px' }}>MENU</div>
                <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                    <li><Link to="/" className="nav-link-custom">Dashboard</Link></li>
                    <li><Link to="#" className="nav-link-custom">Kelola Data Pelanggan</Link></li>
                    <li><Link to="#" className="nav-link-custom">Kelola Data Sopir</Link></li>
                    <li><Link to="#" className="nav-link-custom">Jadwal Pengiriman</Link></li>
                    <li><Link to="#" className="nav-link-custom">Info Penjualan</Link></li>
                    <li><Link to="#" className="nav-link-custom">Kelola Stok Galon</Link></li>
                    <li><Link to="/daerahKiriman" className="nav-link-custom">Data Daerah Kiriman</Link></li>
                    <li><Link to="#" className="nav-link-custom">Pantau Sopir</Link></li>
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar;