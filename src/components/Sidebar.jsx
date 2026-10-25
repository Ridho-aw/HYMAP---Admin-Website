import profileImg from "/src/assets/placeholderLogoDashboard.jpg";

function Sidebar({adminName}) {
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
                    <li><a href="#" className="nav-link-custom">Kelola Data Pelanggan</a></li>
                    <li><a href="#" className="nav-link-custom">Kelola Data Sopir</a></li>
                    <li><a href="#" className="nav-link-custom">Jadwal Pengiriman</a></li>
                    <li><a href="#" className="nav-link-custom">Info Penjualan</a></li>
                    <li><a href="#" className="nav-link-custom">Kelola Stok Galon</a></li>
                    <li><a href="#" className="nav-link-custom">Data Daerah Kiriman</a></li>
                    <li><a href="#" className="nav-link-custom">Pantau Sopir</a></li>
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar;