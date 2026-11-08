import React, { useState } from "react";

const KelolaPelanggan = () => {
  const [customers, setCustomers] = useState([
    { id: "PL-001", nama: "Radit", telp: "08123456789", alamat: "Jl. Sendiri no.69" },
    { id: "PL-002", nama: "Jericho", telp: "08123456789", alamat: "Jl. Sama-Sama no.22" },
    { id: "PL-003", nama: "Salman", telp: "08124324523", alamat: "Jl. aja no.99" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [isEditMode, setIsEditMode] = useState(true);
  const [formData, setFormData] = useState({
    id: "",
    nama: "",
    telp: "",
    alamat: "",
  });

  const handleRowClick = (customer) => {
    setIsEditMode(true);
    setFormData(customer);
    setShowModal(true);
  };

  const handleAddNew = () => {
    setIsEditMode(false);
    const nextIdNumber = customers.length + 1;
    const nextId = `PL-${String(nextIdNumber).padStart(3, "0")}`;
    setFormData({ id: nextId, nama: "", telp: "", alamat: "" });
    setShowModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditMode) {
      setCustomers(
        customers.map((item) => (item.id === formData.id ? formData : item))
      );
    } else {
      setCustomers([...customers, formData]);
    }
    setShowModal(false);
  };

  const handleDelete = () => {
    if (window.confirm("Yakin hapus pelanggan ini?")) {
    setCustomers(customers.filter((item) => item.id !== formData.id));
    setShowModal(false);
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: "#333333" }}>


      <div className="d-flex flex-grow-1">
        <main className="flex-grow-1 bg-white p-5">
          <h1 className="fs-2 fw-normal text-dark mb-4">Welcome Back! Admin.</h1>
          <h2 className="fs-3 fw-bold text-black mb-4">Kelola Data Pelanggan</h2>

        <div className="d-flex justify-content-end mb-2">
          <button className="btn btn-sm btn-outline-success">Tambah Pelanggan</button>
        </div>
            
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nama</th>
                  <th>No Telepon</th>
                  <th>Alamat</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((item) => (
                  <tr
                    key={item.id}
                    onClick={() => handleRowClick(item)}
                    style={{ cursor: "pointer" }}
                  >
                    <td>{item.id}</td>
                    <td>{item.nama}</td>
                    <td>{item.telp}</td>
                    <td>{item.alamat}</td>
                  </tr>
                ))}
              </tbody>
            </table>

          {showModal && (
            <div
              className="modal fade show d-block"
              tabIndex="-1"
              style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">
                      {isEditMode ? "Edit Data Pelanggan" : "Tambah Data Pelanggan"}
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      onClick={() => setShowModal(false)}
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label className="form-label">ID</label>
                        <input
                          type="text"
                          name="id"
                          className="form-control"
                          value={formData.id}
                          readOnly
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Nama</label>
                        <input
                          type="text"
                          name="nama"
                          className="form-control"
                          value={formData.nama}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">No Telepon</label>
                        <input
                          type="text"
                          name="telp"
                          className="form-control"
                          value={formData.telp}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Alamat</label>
                        <input
                          type="text"
                          name="alamat"
                          className="form-control"
                          value={formData.alamat}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <button type="submit" className="btn btn-primary w-100 mb-2">
                        Simpan
                      </button>

                      {isEditMode && (
                        <button
                          type="button"
                          className="btn btn-danger w-100"
                          onClick={handleDelete}
                        >
                          Hapus
                        </button>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default KelolaPelanggan;