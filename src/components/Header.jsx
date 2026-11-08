import { Link } from "react-router-dom";

function Header({ onToggleSidebar }) {
    return (
        <header className="header-custom text-white d-flex justify-content-between align-items-center px-4">
            <div className="d-flex align-items-center">
                <button type="button" className="btn btn-outline-light btn-sm me-3" onClick={onToggleSidebar} style={{ padding: '2px 10px', fontSize: '18px' }}>
                    ☰
                </button>
                <div className="fs-4 fw-bold" style={{ letterSpacing: '1px' }}>HYMAP</div>
            </div>
            <div className="d-flex align-items-center">
                <Link to="/" className="text-white fw-medium text-decoration-underline fs-6">Logout</Link>
            </div>
        </header>
    );
}
export default Header;