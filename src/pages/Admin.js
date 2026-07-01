import React, { useState } from 'react';

function Admin({ antrean, ubahStatus }) {
    const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem('adminAuth') === 'true');
    const [inputPassword, setInputPassword] = useState('');

    const PASSWORD_RAHASIA = 'elfitri123';

    const handleLogin = (e) => {
        e.preventDefault();
        if (inputPassword === PASSWORD_RAHASIA) {
            sessionStorage.setItem('adminAuth', 'true');
            setIsLoggedIn(true);
        } else {
            alert('Password Salah! Akses Ditolak.');
            setInputPassword('');
        }
    };

    const handleLogout = () => {
        sessionStorage.removeItem('adminAuth');
        setIsLoggedIn(false);
    };

    // --- TAMPILAN LOGIN ---
    if (!isLoggedIn) {
        return (
            <div style={{ backgroundColor: '#f9f9f9', minHeight: '100vh', fontFamily: '"Poppins", sans-serif', margin: 0, padding: 0 }}>
                <div style={{ backgroundColor: '#e91e63', color: 'white', textAlign: 'center', padding: '60px 20px', borderBottomLeftRadius: '30px', borderBottomRightRadius: '30px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                    <h1 style={{ fontSize: '32px', margin: '0 0 10px 0', fontWeight: 'bold', letterSpacing: '1px' }}>Elfitri Store</h1>
                    <p style={{ margin: 0, fontSize: '15px', opacity: 0.9 }}>Akses Terkunci — Panel Administrasi Toko</p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '-30px', padding: '0 20px' }}>
                    <div style={{ backgroundColor: 'white', width: '100%', maxWidth: '360px', padding: '30px 25px', borderRadius: '20px', boxShadow: '0 10px 25px rgba(0,0,0,0.08)', textAlign: 'center' }}>
                        <h3 style={{ margin: '0 0 8px 0', color: '#333' }}>Verifikasi Admin</h3>
                        <p style={{ fontSize: '12px', color: '#777', marginBottom: '20px' }}>Silakan masukkan password khusus pengelola</p>
                        <form onSubmit={handleLogin}>
                            <input
                                type="password"
                                placeholder="Password Admin"
                                value={inputPassword}
                                onChange={(e) => setInputPassword(e.target.value)}
                                style={{ width: '100%', marginBottom: '15px', padding: '12px 16px', boxSizing: 'border-box', border: '1px solid #ddd', borderRadius: '50px', outline: 'none', backgroundColor: '#fcfcfc', fontSize: '14px', transition: '0.3s', textAlign: 'center' }}
                            />
                            <button type="submit" style={{ width: '100%', padding: '12px', backgroundColor: '#e91e63', color: 'white', border: 'none', borderRadius: '50px', fontWeight: 'bold', fontSize: '14px', cursor: 'pointer', boxShadow: '0 4px 10px rgba(233,30,99,0.3)' }}>
                                Masuk Sistem
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    // --- TAMPILAN DASHBOARD UTAMA ---
    return (
        <div style={{ backgroundColor: '#f9f9f9', minHeight: '100vh', fontFamily: '"Poppins", sans-serif', margin: 0, paddingBottom: '40px' }}>

            {/* HEADER BANNER */}
            <div style={{ backgroundColor: '#e91e63', color: 'white', padding: '40px 20px', borderBottomLeftRadius: '25px', borderBottomRightRadius: '25px', boxShadow: '0 4px 15px rgba(0,0,0,0.06)' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
                    <div>
                        <h1 style={{ fontSize: '28px', margin: 0, fontWeight: 'bold' }}>Elfitri Store</h1>
                        <p style={{ margin: '5px 0 0 0', fontSize: '14px', opacity: 0.9 }}>Solusi cetak &amp; custom terbaik di Banjarnegara.</p>
                    </div>
                    <button onClick={handleLogout} style={{ backgroundColor: 'white', color: '#e91e63', padding: '10px 24px', border: 'none', borderRadius: '50px', fontWeight: 'bold', fontSize: '13px', cursor: 'pointer', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                        Keluar (Logout)
                    </button>
                </div>
            </div>

            {/* SEKSI TABEL DATA */}
            <div style={{ maxWidth: '1000px', margin: '30px auto 0 auto', padding: '0 16px' }}>
                <div style={{ backgroundColor: 'white', borderRadius: '20px', padding: '25px', boxShadow: '0 4px 20px rgba(0,0,0,0.04)', border: '1px solid #eaeaea' }}>

                    <div style={{ textAlign: 'center', marginBottom: '25px' }}>
                        <h2 style={{ fontSize: '22px', color: '#333', margin: 0, fontWeight: '600' }}>Daftar Antrean Aktif</h2>
                        <div style={{ width: '50px', height: '4px', backgroundColor: '#e91e63', margin: '8px auto 0 auto', borderRadius: '10px' }}></div>
                    </div>

                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                            <thead>
                                <tr style={{ borderBottom: '2px solid #f0f0f0', backgroundColor: '#fff5f7' }}>
                                    <th style={{ padding: '14px 16px', fontSize: '13px', color: '#e91e63', fontWeight: 'bold' }}>Waktu</th>
                                    <th style={{ padding: '14px 16px', fontSize: '13px', color: '#e91e63', fontWeight: 'bold' }}>Pelanggan</th>
                                    <th style={{ padding: '14px 16px', fontSize: '13px', color: '#e91e63', fontWeight: 'bold' }}>Layanan</th>
                                    <th style={{ padding: '14px 16px', fontSize: '13px', color: '#e91e63', fontWeight: 'bold', textAlign: 'center' }}>Jumlah</th>
                                    <th style={{ padding: '14px 16px', fontSize: '13px', color: '#e91e63', fontWeight: 'bold', textAlign: 'center' }}>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {antrean.length === 0 ? (
                                    <tr>
                                        <td colSpan="5" style={{ textAlign: 'center', color: '#999', padding: '40px 20px', fontSize: '14px' }}>
                                            Menghubungkan ke Excel / tidak ada antrean masuk saat ini.
                                        </td>
                                    </tr>
                                ) : (
                                    antrean.map((order, index) => {
                                        // Membaca data dengan toleransi penuh huruf besar/kecil dan spasi bawaan Excel
                                        const nilaiWaktu = order.Waktu || '-';
                                        const nilaiPelanggan = order.Pelanggan || '-';
                                        const nilaiWhatsapp = order.WhatsApp || '';
                                        const nilaiLayanan = order.Layanan || order["Layanan "] || '-';
                                        const nilaiQty = order.Jumlah || order["Jumlah "] || 0;
                                        const nilaiStatus = order.Status || 'Antre';
                                        const nilaiCatatan = order.Catatan || order.catatan || '';

                                        return (
                                            <tr key={order.ID || index} style={{ borderBottom: '1px solid #f6f6f6', transition: '0.2s' }}>
                                                <td style={{ fontSize: '13px', padding: '16px', color: '#333', fontWeight: '500' }}>
                                                    {nilaiWaktu}
                                                </td>
                                                <td style={{ padding: '16px' }}>
                                                    <strong style={{ color: '#222', fontSize: '14px', display: 'block' }}>{nilaiPelanggan}</strong>
                                                    <span style={{ fontSize: '12px', color: '#666' }}>{nilaiWhatsapp}</span>
                                                </td>

                                                {/* LAYANAN DENGAN MINI CATATAN DI BAWAHNYA */}
                                                <td style={{ padding: '16px', fontSize: '14px', color: '#333' }}>
                                                    <span style={{ backgroundColor: '#fff5f7', padding: '6px 12px', borderRadius: '20px', border: '1px solid #fcd8e2', color: '#e91e63', display: 'inline-block', fontWeight: '500', fontSize: '12px', marginBottom: nilaiCatatan ? '4px' : '0' }}>
                                                        {nilaiLayanan}
                                                    </span>
                                                    {nilaiCatatan && (
                                                        <div style={{ fontSize: '11px', color: '#666', fontStyle: 'italic', maxWidth: '200px', wordWrap: 'break-word' }}>
                                                            {nilaiCatatan}
                                                        </div>
                                                    )}
                                                </td>

                                                <td style={{ padding: '16px', fontSize: '14px', fontWeight: 'bold', color: '#333', textAlign: 'center' }}>
                                                    {nilaiQty}
                                                </td>
                                                <td style={{ padding: '16px', textAlign: 'center' }}>
                                                    <span
                                                        onClick={() => ubahStatus(index, order.ID)}
                                                        style={{
                                                            cursor: nilaiStatus === "Lunas" ? "default" : "pointer",
                                                            backgroundColor: nilaiStatus === "Lunas" ? "#28a745" : (nilaiStatus === "Bayar" ? "#17a2b8" : "#ffc107"),
                                                            color: "white", padding: "6px 16px", borderRadius: "50px", fontWeight: "bold", fontSize: '11px', display: 'inline-block', boxShadow: '0 2px 6px rgba(0,0,0,0.08)'
                                                        }}
                                                    >
                                                        {nilaiStatus}
                                                    </span>
                                                </td>
                                            </tr>
                                        );
                                    })
                                )}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Admin;