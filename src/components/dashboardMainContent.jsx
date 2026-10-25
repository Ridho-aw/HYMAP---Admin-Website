function dashMainContent({adminName}) {
    return (
        <main className="flex-grow-1 bg-white p-5">
            <h1 className="fs-2 fw-normal text-dark mb-4">
                Welcome Back! {adminName ? adminName : 'Admin'}.
            </h1>
            <h2 className="fs-3 fw-bold text-black mb-4">Dashboard Panel</h2>

            <div className="row g-4">
                <div className="col-12 col-md-6 d-flex flex-column gap-3">
                    <div className="dashboard-box box-short"></div>
                    <div className="dashboard-box box-short"></div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="dashboard-box box-tall"></div>
                </div>
            </div>
        </main>
    );
}

export default dashMainContent;