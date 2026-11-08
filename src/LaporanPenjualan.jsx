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
    if (["Terkirim", "Cash", "Transfer"].includes(status)) return "#168D4A"; 
    if (["Belum Terkirim", "Bon"].includes(status)) return "#D32F2F"; 
    return "#333333"; 
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="d-flex flex-column min-vh-100"
      style={{ backgroundColor: "#E6F3F2", fontFamily: "sans-serif" }}
    >
      <div
        className="d-flex justify-content-between align-items-start px-3 py-2 d-print-none"
        style={{ backgroundColor: "#357A8B" }}
      >
        <div
          className="d-flex align-items-center rounded py-2 px-3"
          style={{ backgroundColor: "#408C9F", width: "450px" }}
        >
          <button
            className="btn p-1 me-3 fw-bold"
            style={{ backgroundColor: "#E6F3F2", color: "#357A8B", borderRadius: "8px", border: "none" }}
          >
            ☰
          </button>
          <h1 className="m-0 text-white fs-4 fw-bold" style={{ letterSpacing: "2px" }}>
            Laporan Penjualan
          </h1>
        </div>

        <div className="d-flex gap-4 align-items-start mt-2">
          <div className="d-flex flex-column gap-2">
            <select
              className="form-select form-select-sm border-0 shadow-sm"
              style={{ width: "200px", fontWeight: "600", color: "#333" }}
            >
              <option>DENPASAR I</option>
            </select>
            <div className="d-flex gap-2">
              <div
                className="d-flex align-items-center justify-content-between bg-white px-2 py-1 shadow-sm rounded"
                style={{ width: "130px", fontSize: "14px", cursor: "pointer" }}
              >
                <span>17/08/2025</span>
                <span>📅</span>
              </div>
              <select
                className="form-select form-select-sm border-0 shadow-sm"
                style={{ width: "200px", fontSize: "14px" }}
              >
                <option>Urutkan Berdasarkan: Tanggal</option>
              </select>
            </div>
          </div>

          <div className="d-flex align-items-center gap-3">
            <div
              className="d-flex align-items-center bg-white rounded-pill px-3 py-1 shadow-sm"
              style={{ width: "250px" }}
            >
              <input
                type="text"
                className="form-control border-0 bg-transparent shadow-none p-0"
                placeholder="Cari"
                style={{ fontSize: "14px" }}
              />
              <span style={{ color: "#888" }}>🔍</span>
            </div>
            <button className="btn btn-link p-0 text-dark text-decoration-none fs-4">
              ⟳
            </button>
          </div>
        </div>
      </div>

      <main className="flex-grow-1 p-4">
        {/* Tambahkan judul khusus yang hanya muncul saat di-print (opsional) */}
        <h2 className="d-none d-print-block text-center mb-4">Laporan Penjualan</h2>
        
        <table
          className="table table-borderless w-100"
          style={{ borderCollapse: "separate", borderSpacing: "0 6px" }}
        >
          <thead>
            <tr className="text-center align-middle">
              <th className="py-3" style={{ backgroundColor: "#B7DEE6", borderRadius: "4px 0 0 4px" }}>Id</th>
              <th className="py-3" style={{ backgroundColor: "#B7DEE6" }}>Nama</th>
              <th className="py-3" style={{ backgroundColor: "#B7DEE6" }}>Alamat</th>
              <th className="py-3" style={{ backgroundColor: "#B7DEE6" }}>Stok<br />Galon</th>
              <th className="py-3" style={{ backgroundColor: "#B7DEE6" }}>Jumlah<br />Pesanan</th>
              <th className="py-3" style={{ backgroundColor: "#B7DEE6" }}>Harga Satuan</th>
              <th className="py-3" style={{ backgroundColor: "#B7DEE6" }}>Status<br />Pengiriman</th>
              <th className="py-3" style={{ backgroundColor: "#B7DEE6" }}>Status<br />Pembayaran</th>
              <th className="py-3" style={{ backgroundColor: "#B7DEE6", borderRadius: "0 4px 4px 0" }}>Tgl Update<br />Terakhir</th>
            </tr>
          </thead>
          <tbody>
            {reportData.map((group, groupIdx) => (
              <React.Fragment key={groupIdx}>
                <tr>
                  <td
                    colSpan="9"
                    className="fw-bold py-2 px-3"
                    style={{ backgroundColor: "#A0D0DC", fontSize: "16px", borderRadius: "4px" }}
                  >
                    {group.area}
                  </td>
                </tr>

                {group.items.map((item, itemIdx) => (
                  <tr key={itemIdx} className="text-center align-middle" style={{ fontSize: "14px" }}>
                    <td className="py-3" style={{ backgroundColor: "#C8E5EB", borderRadius: "4px 0 0 4px" }}>{item.id}</td>
                    <td className="py-3 text-start" style={{ backgroundColor: "#C8E5EB" }}>{item.nama}</td>
                    <td className="py-3 text-start" style={{ backgroundColor: "#C8E5EB" }}>{item.alamat}</td>
                    <td className={`py-3 ${item.stok.includes("+") ? "fw-bold" : ""}`} style={{ backgroundColor: "#C8E5EB" }}>
                      {item.stok}
                    </td>
                    <td className="py-3" style={{ backgroundColor: "#C8E5EB" }}>{item.pesanan}</td>
                    <td className="py-3" style={{ backgroundColor: "#C8E5EB" }}>{item.harga}</td>
                    <td className="py-3 fw-bold" style={{ backgroundColor: "#C8E5EB", color: getStatusColor(item.statusKirim) }}>
                      {item.statusKirim}
                    </td>
                    <td className="py-3 fw-bold" style={{ backgroundColor: "#C8E5EB", color: getStatusColor(item.statusBayar) }}>
                      {item.statusBayar}
                    </td>
                    <td className="py-3" style={{ backgroundColor: "#C8E5EB", borderRadius: "0 4px 4px 0" }}>{item.tglUpdate}</td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </main>
      
      <button
        onClick={handlePrint}
        className="btn d-flex align-items-center gap-2 position-fixed fw-bold d-print-none"
        style={{
          bottom: "30px",
          right: "30px",
          backgroundColor: "#B7DEE6",
          border: "2px solid #95C6D1",
          borderRadius: "20px",
          padding: "8px 20px",
          color: "#555"
        }}
      >
        Cetak 🖨️
      </button>
    </div>
  );
};

export default LaporanPenjualan;