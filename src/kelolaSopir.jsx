import React, { useState } from "react";

const KelolaSopir = () => {
  const [drivers, setDrivers] = useState([
    { id: "SP-001", nama: "Komang", telp: "08123456789", armada: "DPS-01", username: "komang", password: "HydroJaya321" },
    { id: "SP-002", nama: "Efrid", telp: "08123456789", armada: "DPS-02", username: "efrid", password: "HydroJaya321" },
    { id: "SP-003", nama: "Yusuf", telp: "08124324523", armada: "DPS-01", username: "yusuf", password: "HydroJaya321" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    id: "", nama: "", telp: "", armada: "", username: "", password: ""
  });

  const handleRowClick = (driver) => {
    setFormData(driver); 
    setShowModal(true);  
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const updatedDrivers = drivers.map((driver) =>
      driver.id === formData.id ? formData : driver
    );
    
    setDrivers(updatedDrivers);
    setShowModal(false); 
  };

  return (
    <main className="flex-grow-1 bg-white p-5 w-100">
      <h2 className="fs-3 fw-bold text-black mb-4">Kelola Data Sopir</h2>

      <div>
        <div className="d-flex justify-content-end mb-2">
          <button className="btn btn-sm btn-outline-success">Tambah Sopir</button>
        </div>
        
        <table className="table table-striped table-hover" id="tabelSopir">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nama</th>
              <th>No Telepon</th>
              <th>Kode Armada</th>
              <th>Username</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {drivers.map((driver) => (
              <tr 
                key={driver.id} 
                onClick={() => handleRowClick(driver)} 
                style={{ cursor: "pointer" }}
              >
                <td>{driver.id}</td>
                <td>{driver.nama}</td>
                <td>{driver.telp}</td>
                <td>{driver.armada}</td>
                <td>{driver.username}</td>
                <td>{driver.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <>
          <div className="modal-backdrop fade show"></div>
          
          <div className="modal fade show d-block" tabIndex="-1">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Edit Data</h5>
                  <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                </div>
                
                <div className="modal-body">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label className="form-label">ID</label>
                      <input type="text" name="id" className="form-control" value={formData.id} readOnly />
                    </div>
                    
                    <div className="mb-3">
                      <label className="form-label">Nama</label>
                      <input type="text" name="nama" className="form-control" value={formData.nama} onChange={handleInputChange} required />
                    </div>
                    
                    <div className="mb-3">
                      <label className="form-label">No Telepon</label>
                      <input type="text" name="telp" className="form-control" value={formData.telp} onChange={handleInputChange} required />
                    </div>
                    
                    <div className="mb-3">
                      <label className="form-label">Kode Armada</label>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="armada" id="armada1" value="DPS-01" 
                          checked={formData.armada === "DPS-01"} onChange={handleInputChange} />
                        <label className="form-check-label" htmlFor="armada1">DPS-01</label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="armada" id="armada2" value="DPS-02" 
                          checked={formData.armada === "DPS-02"} onChange={handleInputChange} />
                        <label className="form-check-label" htmlFor="armada2">DPS-02</label>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <label className="form-label">Username</label>
                      <input type="text" name="username" className="form-control" value={formData.username} onChange={handleInputChange} required />
                    </div>
                    
                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input type="text" name="password" className="form-control" value={formData.password} onChange={handleInputChange} required />
                    </div>
                    
                    <button type="submit" className="btn btn-primary w-100 mb-2">Simpan</button>
                    <button type="button" className="btn btn-danger w-100" onClick={() => setShowModal(false)}>Hapus</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default KelolaSopir;