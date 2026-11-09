import React, { useState } from "react";

const LaporanPenjualan = () => {
  const [reportData] = useState([
    {
      area: "Dukuh Sari",
      items: [
        { id: "PL-001", nama: "Pak Radit", alamat: "Jln. Sendiri no 69", stok: "7", pesanan: "7", harga: "10,000", statusKirim: "Terkirim", statusBayar: "Cash", tglUpdate: "17/08/2025" },
        { id: "PL-002", nama: "Pak Jeri", alamat: "Jln. Sama - sama no 77", stok: "8", pesanan: "8", harga: "10,000", statusKirim: "Belum Terkirim", statusBayar: "Transfer", tglUpdate: "17/08/2025" },
      ],
    },
    {
      area: "Pamogan",
      items: [
        { id: "PL-003", nama: "Pak Alif", alamat: "Jln. Ghosting no 100", stok: "2", pesanan: "2", harga: "10,000", statusKirim: "Belum Terkirim", statusBayar: "Bon", tglUpdate: "" },
        { id: "PL-004", nama: "Pak Adit", alamat: "Jln. Saja", stok: "8 + 2", pesanan: "10", harga: "10,000", statusKirim: "Belum Terkirim", statusBayar: "Pending", tglUpdate: "" },
      ],
    },
  ]);

  const getStatusColor = (status) => {
    if (["Terkirim", "Cash", "Transfer"].includes(status)) return "#198754"; // Bootstrap success
    if (["Belum Terkirim", "Bon"].includes(status)) return "#dc3545"; // Bootstrap danger
    return "#212529"; // Default text
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-vh-100 bg-light" style={{ fontFamily: "Arial, sans-serif" }}>
      <div className="container-fluid py-4">
        
        <div className="d-flex justify-content-between align-items-center mb-4 d-print-none">
          <h2 className="m-0 text-dark fw-bold fs-4">Laporan Penjualan</h2>
          <button 
            onClick={handlePrint} 
            className="btn btn-primary px-4"
          >
            Cetak Laporan
          </button>
        </div>

     
        <div className="card shadow-sm border-0 mb-4 d-print-none">
          <div className="card-body d-flex flex-wrap gap-3 align-items-center">
            <select className="form-select" style={{ width: "auto", minWidth: "150px" }}>
              <option>DENPASAR I</option>
            </select>
            
            <input 
              type="date" 
              className="form-control" 
              style={{ width: "auto" }} 
              defaultValue="2025-08-17" 
            />
            
            <select className="form-select" style={{ width: "auto" }}>
              <option>Urutkan: Tanggal</option>
            </select>

            <div className="ms-auto d-flex gap-2">
              <input
                type="text"
                className="form-control"
                placeholder="Cari data..."
                style={{ width: "250px" }}
              />
              <button className="btn btn-outline-secondary">
                Refresh
              </button>
            </div>
          </div>
        </div>

        <main>
          <h3 className="d-none d-print-block text-center mb-4">Laporan Penjualan - 17/08/2025</h3>
          
          <div className="table-responsive bg-white shadow-sm border rounded">
            <table className="table table-bordered table-hover align-middle mb-0">
              <thead className="table-light text-center">
                <tr>
                  <th className="py-3">ID</th>
                  <th className="py-3">Nama</th>
                  <th className="py-3">Alamat</th>
                  <th className="py-3">Stok Galon</th>
                  <th className="py-3">Jumlah Pesanan</th>
                  <th className="py-3">Harga Satuan</th>
                  <th className="py-3">Status Pengiriman</th>
                  <th className="py-3">Status Pembayaran</th>
                  <th className="py-3">Tgl Update</th>
                </tr>
              </thead>
              <tbody>
                {reportData.map((group, groupIdx) => (
                  <React.Fragment key={groupIdx}>
      
                    <tr className="table-secondary">
                      <td colSpan="9" className="fw-bold py-2 px-3 text-uppercase">
                        Area: {group.area}
                      </td>
                    </tr>

        
                    {group.items.map((item, itemIdx) => (
                      <tr key={itemIdx} className="text-center" style={{ fontSize: "14px" }}>
                        <td className="py-2">{item.id}</td>
                        <td className="py-2 text-start">{item.nama}</td>
                        <td className="py-2 text-start">{item.alamat}</td>
                        <td className={`py-2 ${item.stok.includes("+") ? "fw-bold" : ""}`}>
                          {item.stok}
                        </td>
                        <td className="py-2">{item.pesanan}</td>
                        <td className="py-2">{item.harga}</td>
                        <td className="py-2 fw-bold" style={{ color: getStatusColor(item.statusKirim) }}>
                          {item.statusKirim}
                        </td>
                        <td className="py-2 fw-bold" style={{ color: getStatusColor(item.statusBayar) }}>
                          {item.statusBayar}
                        </td>
                        <td className="py-2 text-muted">{item.tglUpdate || "-"}</td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </main>

      </div>
    </div>
  );
};

export default LaporanPenjualan;