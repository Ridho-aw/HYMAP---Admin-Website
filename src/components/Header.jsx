import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header-custom text-white d-flex justify-content-between align-items-center px-4">
            <div className="fs-4 fw-bold" style={{ letterSpacing: '1px' }}>HYMAP</div>
            <div className="d-flex align-items-center">
                <Link to="/" className="text-white fw-medium text-decoration-underline fs-6">Logout</Link>
            </div>
        </header>
    );
}
export default Header;