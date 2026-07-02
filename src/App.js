import React, { useState } from 'react';
import Pelanggan from './pages/Pelanggan';

function App() {
  // State Utama untuk Formulir Antrean (Dishare ke Komponen Pelanggan)
  const [nama, setNama] = useState('');
  const [wa, setWa] = useState('');
  const [jasa, setJasa] = useState('');
  const [jumlah, setJumlah] = useState('1');
  const [catatanDesain, setCatatanDesain] = useState('');

  // Fungsi untuk Menembak Data Antrean ke Google Apps Script / Sheets API
  const tambahPesanan = async () => {
    if (!nama || !wa || !jasa) {
      alert('Nama, WhatsApp, dan Jasa wajib diisi!');
      return;
    }

    try {
      // GANTI URL DI BAWAH INI DENGAN LINK ENDPOINT /EXEC DARI GOOGLE APPS SCRIPT-MU
      const API_ENDPOINT = "https://script.google.com/macros/s/AKfycbzHeabZh5MnnuZ9Ce03VOuUVaJqUDhhG7_BxdH5SNGyjeOO_wC2t90A-nXK4Q5n-Y-V/exec";

      alert('Sedang memproses antrean kamu, mohon tunggu...');

      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors', // Penting agar tidak terkena block CORS di browser
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nama: nama,
          whatsapp: wa,
          layanan: jasa,
          jumlah: jumlah,
          catatan: catatanDesain,
          status: 'Belum Bayar' // Status default saat pelanggan pertama kali mendaftar
        }),
      });

      alert(`Terima kasih ${nama}, antreanmu berhasil disimpan ke sistem!`);

      // Reset Formulir setelah sukses input data
      setNama('');
      setWa('');
      setJasa('');
      setJumlah('1');
      setCatatanDesain('');

    } catch (error) {
      console.error("Error sending data: ", error);
      alert('Waduh, terjadi gangguan koneksi saat mengirim antrean. Silakan coba lagi!');
    }
  };

  // Mekanisme Routing Sederhana Berbasis URL Path
  const currentPath = window.location.pathname;

  // JALUR 1: Jika user mengakses halaman Admin
  if (currentPath === '/rahasia-admin-elfitri') {
    return (
      <div style={{ backgroundColor: '#9d174d', minHeight: '100vh', color: '#fff', padding: '40px 20px', fontFamily: 'sans-serif', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '10px' }}>Dashboard Admin Elfitri Store</h2>
        <p style={{ color: 'rgba(255,255,255,0.8)' }}>Panel Manajemen Antrean Real-Time Terintegrasi Google Sheets</p>
        <div style={{ marginTop: '40px', background: 'rgba(255,255,255,0.1)', padding: '30px', borderRadius: '15px', display: 'inline-block' }}>
          Halaman Manajemen Admin (Tabel Antrean Aktif) Siap Diintegrasikan.
        </div>
      </div>
    );
  }

  // JALUR 2: Default (Jika user mengakses halaman utama /)
  return (
    <Pelanggan
      nama={nama} setNama={setNama}
      wa={wa} setWa={setWa}
      jasa={jasa} setJasa={setJasa}
      jumlah={jumlah} setJumlah={setJumlah}
      catatanDesain={catatanDesain} setCatatanDesain={setCatatanDesain}
      tambahPesanan={tambahPesanan}
    />
  );
}

export default App;