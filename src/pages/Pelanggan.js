import React, { useState } from 'react';

const daftarJasa = [
    '-- Pilih Jasa --', 'Cetak Banner', 'Cetak Sticker Produk', 'Cetak Foto',
    'Printing', 'Laminating', 'Ketik', 'FC Mini', 'Cetak Kartu NPWP/BPJS',
    'Undangan Custome', 'Cetak Foto Polaroid', 'Gantungan Kunci',
    'Accesories Custome', 'Stempel Flash', 'Buku Yasin', 'Cetak Nota', 'DLL'
];

function Pelanggan({
    nama, setNama,
    wa, setWa,
    jasa, setJasa,
    jumlah, setJumlah,
    catatanDesain, setCatatanDesain,
    tambahPesanan
}) {
    // State lokal untuk menyembunyikan/menampilkan list jasa tambahan
    const [showExtra, setShowExtra] = useState(false);

    return (
        <div style={{ backgroundColor: '#fff', color: '#1a1a1a', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>

            {/* ==========================================================================
               ✨ 1. HERO SECTION (LATAR BELAKANG GAMBAR PRINTER + GRADASI PINK TRANSPARAN)
               ========================================================================== */}
            <div style={{
                backgroundImage: `linear-gradient(rgba(233, 30, 140, 0.82), rgba(157, 23, 77, 0.9)), url('/hero-bg.webp')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                color: '#fff',
                textAlign: 'center',
                padding: '95px 20px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{
                    fontSize: '48px',
                    fontWeight: '800',
                    letterSpacing: '-1px',
                    marginBottom: '10px',
                    textShadow: '0px 2px 8px rgba(0,0,0,0.4)'
                }}>
                    Elfitri Store
                </div>
                <p style={{
                    fontSize: '16px',
                    color: 'rgba(255,255,255,0.9)',
                    maxWidth: '500px',
                    margin: '0 auto 28px auto',
                    lineHeight: '1.5',
                    textShadow: '0px 2px 6px rgba(0,0,0,0.4)'
                }}>
                    Sistem Antrean Mandiri Cetak & Custom Digital. Praktis, Cepat, dan Real-Time Terintegrasi.
                </p>
                <a href="#ambil-antrean" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: '#fff',
                    color: '#E91E8C',
                    padding: '13px 28px',
                    borderRadius: '50px',
                    fontSize: '15px',
                    fontWeight: '600',
                    textDecoration: 'none',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.15)'
                }}>
                    Ambil Antrean Mandiri
                </a>
            </div>

            {/* 2. DAFTAR UTAMA LAYANAN TOKO */}
            <div style={{ padding: '48px 20px', maxWidth: '600px', margin: '0 auto' }}>
                <h2 style={{ fontSize: '15px', fontWeight: '700', color: '#1a1a1a', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '24px', textAlign: 'center' }}>Layanan Kami</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '12px' }}>
                    {daftarJasa.slice(1, 9).map((j, idx) => (
                        <div key={idx} style={{ background: '#f8f9fa', padding: '16px', borderRadius: '12px', textAlign: 'center', border: '1px solid #edf2f7' }}>
                            <div style={{ fontSize: '14px', fontWeight: '600', color: '#2d3748' }}>{j}</div>
                        </div>
                    ))}
                    {showExtra && daftarJasa.slice(9).map((j, idx) => (
                        <div key={idx} style={{ background: '#f8f9fa', padding: '16px', borderRadius: '12px', textAlign: 'center', border: '1px solid #edf2f7' }}>
                            <div style={{ fontSize: '14px', fontWeight: '600', color: '#2d3748' }}>{j}</div>
                        </div>
                    ))}
                </div>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <button
                        onClick={() => setShowExtra(!showExtra)}
                        style={{ background: 'none', border: 'none', color: '#E91E8C', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}
                    >
                        {showExtra ? 'Lihat Lebih Sedikit ▲' : 'Lihat Semua Layanan ▼'}
                    </button>
                </div>
            </div>

            {/* 3. SUB-KONTEN FORMULIR DIGITAL PELANGGAN */}
            <div id="ambil-antrean" style={{ padding: '48px 20px', background: '#f8f9fa', borderTop: '1px solid #edf2f7' }}>
                <div style={{ maxWidth: '480px', margin: '0 auto', background: '#fff', padding: '32px', borderRadius: '20px', boxShadow: '0 4px 24px rgba(0,0,0,0.04)' }}>
                    <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '4px', color: '#1a1a1a' }}>Isi Formulir Antrean</h2>
                    <p style={{ fontSize: '13px', color: '#718096', marginBottom: '24px' }}>Silakan masukkan data pesanan kamu dengan benar.</p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <label style={{ fontSize: '13px', fontWeight: '600', color: '#1a1a1a' }}>Nama Lengkap:</label>
                            <input type="text" placeholder="Masukkan nama kamu" value={nama} onChange={(e) => setNama(e.target.value)} style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '14px', outline: 'none', boxSizing: 'border-box', backgroundColor: '#fff', color: '#1a1a1a' }} />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <label style={{ fontSize: '13px', fontWeight: '600', color: '#1a1a1a' }}>Nomor WhatsApp:</label>
                            <input type="text" placeholder="Contoh: 08123456789" value={wa} onChange={(e) => setWa(e.target.value)} style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '14px', outline: 'none', boxSizing: 'border-box', backgroundColor: '#fff', color: '#1a1a1a' }} />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <label style={{ fontSize: '13px', fontWeight: '600', color: '#1a1a1a' }}>Pilih Jasa / Layanan:</label>
                            <select value={jasa} onChange={(e) => setJasa(e.target.value)} style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '14px', outline: 'none', boxSizing: 'border-box', backgroundColor: '#fff', color: '#1a1a1a' }}>
                                {daftarJasa.map((j, idx) => (
                                    <option key={idx} value={j === '-- Pilih Jasa --' ? '' : j}>{j}</option>
                                ))}
                            </select>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <label style={{ fontSize: '13px', fontWeight: '600', color: '#1a1a1a' }}>Jumlah (Qty):</label>
                            <input type="number" min="1" placeholder="1" value={jumlah} onChange={(e) => setJumlah(e.target.value)} style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '14px', outline: 'none', boxSizing: 'border-box', backgroundColor: '#fff', color: '#1a1a1a' }} />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <label style={{ fontSize: '13px', fontWeight: '600', color: '#1a1a1a' }}>Permintaan Desain / Catatan & Bukti Bayar:</label>
                            <textarea
                                rows="4"
                                placeholder="Contoh catatan: Cetak banner ukuran 2x1 meter. &#10;&#10;🔗 Untuk menyertakan bukti pembayaran atau referensi desain, silakan upload ke Google Drive / Canva lalu tempelkan link-nya di sini."
                                value={catatanDesain}
                                onChange={(e) => setCatatanDesain(e.target.value)}
                                style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '14px', outline: 'none', boxSizing: 'border-box', backgroundColor: '#fff', color: '#1a1a1a', fontFamily: 'inherit', resize: 'vertical' }}
                            />
                        </div>

                        <button onClick={tambahPesanan} style={{ width: '100%', background: '#E91E8C', color: '#fff', border: 'none', padding: '14px', borderRadius: '12px', fontSize: '15px', fontWeight: '600', cursor: 'pointer', marginTop: '8px', boxShadow: '0 4px 12px rgba(233,30,140,0.2)' }}>
                            Masuk Antrean Toko
                        </button>
                    </div>
                </div>
            </div>

            {/* 4. FOOTER KONTAK */}
            <div style={{ background: '#E91E8C', color: '#fff', padding: '40px 20px', textAlign: 'center' }}>
                <h2 style={{ fontSize: '22px', fontWeight: '500', marginBottom: '8px' }}>Hubungi kami sekarang</h2>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.85)', marginBottom: '20px' }}>Kami siap melayani kamu. Datang langsung atau hubungi via WhatsApp!</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center', marginBottom: '22px', fontSize: '13px' }}>
                    <div>Jl. Raya Igir Somawangi RT 6/2 Mandiraja, Banjarnegara</div>
                    <div>WhatsApp: 08818799410</div>
                </div>
                <a href="https://wa.me/6208818799410" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', background: '#fff', color: '#E91E8C', padding: '12px 32px', borderRadius: '50px', fontSize: '15px', fontWeight: '500', textDecoration: 'none' }}>
                    Chat WhatsApp
                </a>
            </div>

        </div>
    );
}

export default Pelanggan;