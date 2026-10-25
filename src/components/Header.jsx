function Header() {
    return (
        <header className="header-custom text-white d-flex justify-content-between align-items-center px-4">
            <div className="fs-4 fw-bold" style={{ letterSpacing: '1px' }}>HYMAP</div>
            <div className="d-flex align-items-center">
                <a href="#" className="text-white fw-medium text-decoration-underline fs-6">Logout</a>
            </div>
        </header>
    );
}
export default Header;