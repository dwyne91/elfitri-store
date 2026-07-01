import React, { useState, useEffect } from 'react';
import Pelanggan from './pages/Pelanggan';
import Admin from './pages/Admin';

function App() {
  const [nama, setNama] = useState('');
  const [wa, setWa] = useState('');
  const [jasa, setJasa] = useState('-- Pilih Jasa --');
  const [jumlah, setJumlah] = useState('');
  const [catatanDesain, setCatatanDesain] = useState('');

  // State utama penampung data Excel asli
  const [antrean, setAntrean] = useState([]);

  const URL_API_SINKRON = 'https://script.google.com/macros/s/AKfycbzHeabZh5MnnuZ9Ce03VOuUVaJqUDhhG7_BxdH5SNGyjeOO_wC2t90A-nXK4Q5n-Y-V/exec';

  // Fungsi penarik data asli dari Google Sheets menggunakan fetch (SUDAH DIPERBAIKI)
  const muatDataAntrean = () => {
    fetch(URL_API_SINKRON)
      .then((response) => {
        if (!response.ok) throw new Error('Gagal mengambil data langsung');
        return response.json();
      })
      .then((data) => {
        let dataAsli = [];
        if (Array.isArray(data)) {
          dataAsli = data;
        } else if (data && Array.isArray(data.data)) {
          dataAsli = data.data;
        }
        setAntrean(dataAsli);
      })
      .catch((error) => {
        console.warn("Mencoba jalur alternatif cors-anywhere karena diblokir browser...");

        fetch('https://api.allorigins.win/get?url=' + encodeURIComponent(URL_API_SINKRON))
          .then(response => {
            if (response.ok) return response.json();
            throw new Error('Network response was not ok.');
          })
          .then(wrapper => {
            const dataBersih = JSON.parse(wrapper.contents);
            let dataAsli = [];
            if (Array.isArray(dataBersih)) {
              dataAsli = dataBersih;
            } else if (dataBersih && Array.isArray(dataBersih.data)) {
              dataAsli = dataBersih.data;
            }
            setAntrean(dataAsli);
          })
          .catch(err => console.error("Semua jalur pembacaan data terblokir CORS:", err));
      });
  };

  // Menjalankan penarikan data otomatis setiap 30 detik agar hemat data internet
  useEffect(() => {
    muatDataAntrean();
    const interval = setInterval(muatDataAntrean, 30000);
    return () => clearInterval(interval);
  }, [URL_API_SINKRON]);

  // =========================================================================
  // FUNGSI ubahStatus YANG SUDAH DIPERBAIKI (KEBAL TERHADAP CORS REDIRECT)
  // =========================================================================
  const ubahStatus = (index, orderId) => {
    const dataBaru = [...antrean];
    const statusSaatIni = dataBaru[index].Status || 'Antre';
    let statusBaru = 'Antre';

    if (statusSaatIni === 'Antre') statusBaru = 'Bayar';
    else if (statusSaatIni === 'Bayar') statusBaru = 'Lunas';
    else return;

    // Update tampilan lokal dulu agar responsif di mata user
    dataBaru[index].Status = statusBaru;
    setAntrean(dataBaru);

    const payload = {
      _method: "PUT",
      ID: orderId,
      Status: statusBaru
    };

    // Menggunakan mode: 'no-cors' agar Google mengizinkan eksekusi tanpa hambatan keamanan browser
    fetch(URL_API_SINKRON, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: JSON.stringify(payload)
    })
      .then(() => {
        console.log("Status berhasil diperbarui di server Google!");
        // Kasih jeda 1.5 detik sebelum reload data agar Google selesai memproses row-nya
        setTimeout(muatDataAntrean, 1500);
      })
      .catch((err) => {
        console.error("Gagal update status ke Excel:", err);
        setTimeout(muatDataAntrean, 1500);
      });
  };

  // Fungsi tambah pesanan baru dari sisi pelanggan
  const tambahPesanan = () => {
    if (!nama.trim() || !wa.trim() || !jumlah.trim() || jasa === '-- Pilih Jasa --') {
      alert('Mohon lengkapi semua data antrean!');
      return;
    }

    if ((jasa === 'Undangan Custome' || jasa === 'Accesories Custome') && !catatanDesain.trim()) {
      alert('Silakan isi detail permintaan desain atau sertakan link referensi terlebih dahulu!');
      return;
    }

    // Properti disesuaikan dengan susunan kolom Excel terbaru kamu
    const pesananBaru = {
      ID: Date.now().toString(),
      Waktu: new Date().toLocaleString('id-ID'),
      Pelanggan: nama,
      WhatsApp: wa,
      Layanan: jasa,
      Jumlah: jumlah,
      Status: 'Antre',
      Catatan: catatanDesain
    };

    // Menggunakan mode: 'no-cors' dengan text/plain mentah agar tembus tanpa diblokir browser
    fetch(URL_API_SINKRON, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: JSON.stringify(pesananBaru)
    })
      .then(() => {
        alert('Berhasil masuk antrean toko!');
        setNama(''); setWa(''); setJasa('-- Pilih Jasa --'); setJumlah(''); setCatatanDesain('');
        // Kasih jeda 1.5 detik agar server Google selesai menulis data sebelum direfresh
        setTimeout(muatDataAntrean, 1500);
      })
      .catch((error) => {
        console.error("Gagal mengirim pesanan:", error);
        alert('Terjadi kesalahan saat menyambungkan ke server.');
      });
  };

  const currentPath = window.location.pathname;

  if (currentPath === '/rahasia-admin-elfitri') {
    return (
      <div>
        <Admin antrean={antrean} ubahStatus={ubahStatus} />
      </div>
    );
  }

  return (
    <div>
      <Pelanggan
        nama={nama} setNama={setNama}
        wa={wa} setWa={setWa}
        jasa={jasa} setJasa={setJasa}
        jumlah={jumlah} setJumlah={setJumlah}
        catatanDesain={catatanDesain} setCatatanDesain={setCatatanDesain}
        tambahPesanan={tambahPesanan}
      />
    </div>
  );
}

export default App;