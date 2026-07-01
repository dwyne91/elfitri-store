import React, { useState } from 'react'; // Pastikan useState di-import di sini

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
    // MEMBUAT STATE SHOWEXTRA DI SINI SUPAYA TIDAK ERROR NO-UNDEF
    const [showExtra, setShowExtra] = useState(false);

    return (
        <div style={{ backgroundColor: '#fff', color: '#1a1a1a', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>

            {/* 1. HERO SECTION */}
            <div style={{
                background: '#E91E8C', color: '#fff', textAlign: 'center',
                padding: '60px 20px', position: 'relative', overflow: 'hidden'
            }}>
                <div style={{ fontSize: '48px', fontWeight: '700', letterSpacing: '-1px', fontStyle: 'italic', lineHeight: '1' }}>Elfitri</div>
                <div style={{ fontSize: '18px', letterSpacing: '6px', color: 'rgba(255,255,255,0.85)', textTransform: 'uppercase', marginTop: '4px', marginBottom: '16px' }}>Store</div>
                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.9)', marginBottom: '26px', lineHeight: '1.6', maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto' }}>
                    Solusi cetak & custom terbaik di Banjarnegara.<br />Kualitas terjamin, harga bersahabat!
                </p>
                <a href="#ambil-antrean" style={{
                    display: 'inline-block', background: '#fff', color: '#E91E8C', padding: '12px 32px',
                    borderRadius: '50px', fontSize: '15px', fontWeight: '500', textDecoration: 'none'
                }}>
                    Ambil Antrean Mandiri
                </a>
            </div>

            {/* 2. SERVICES SECTION */}
            <div style={{ padding: '40px 16px', background: '#f8f8f8' }}>
                <div style={{ maxWidth: '720px', margin: '0 auto' }}>
                    <p style={{ textAlign: 'center', fontSize: '22px', fontWeight: '500', color: '#1a1a1a', marginBottom: '6px' }}>Layanan Kami</p>
                    <p style={{ textAlign: 'center', fontSize: '14px', color: '#666', marginBottom: '24px' }}>Lengkap & berkualitas untuk semua kebutuhan cetak kamu</p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '12px' }}>
                        <div style={{ background: '#fff', border: '1px solid #eee', borderRadius: '12px', padding: '16px 10px', textAlign: 'center' }}>
                            <div style={{ fontSize: '26px', color: '#E91E8C', marginBottom: '8px' }}><i className="ti ti-photo"></i></div>
                            <div style={{ fontSize: '12px', fontWeight: '500' }}>Cetak Foto & Polaroid</div>
                        </div>
                        <div style={{ background: '#fff', border: '1px solid #eee', borderRadius: '12px', padding: '16px 10px', textAlign: 'center' }}>
                            <div style={{ fontSize: '26px', color: '#E91E8C', marginBottom: '8px' }}><i className="ti ti-layout-board"></i></div>
                            <div style={{ fontSize: '12px', fontWeight: '500' }}>Cetak Banner</div>
                        </div>
                        <div style={{ background: '#fff', border: '1px solid #eee', borderRadius: '12px', padding: '16px 10px', textAlign: 'center' }}>
                            <div style={{ fontSize: '26px', color: '#E91E8C', marginBottom: '8px' }}><i className="ti ti-sticker"></i></div>
                            <div style={{ fontSize: '12px', fontWeight: '500' }}>Cetak Stiker Produk</div>
                        </div>
                        <div style={{ background: '#fff', border: '1px solid #eee', borderRadius: '12px', padding: '16px 10px', textAlign: 'center' }}>
                            <div style={{ fontSize: '26px', color: '#E91E8C', marginBottom: '8px' }}><i className="ti ti-printer"></i></div>
                            <div style={{ fontSize: '12px', fontWeight: '500' }}>Printing & Laminating</div>
                        </div>
                        <div style={{ background: '#fff', border: '1px solid #eee', borderRadius: '12px', padding: '16px 10px', textAlign: 'center' }}>
                            <div style={{ fontSize: '26px', color: '#E91E8C', marginBottom: '8px' }}><i className="ti ti-heart"></i></div>
                            <div style={{ fontSize: '12px', fontWeight: '500' }}>Undangan Custom</div>
                        </div>
                        <div style={{ background: '#fff', border: '1px solid #eee', borderRadius: '12px', padding: '16px 10px', textAlign: 'center' }}>
                            <div style={{ fontSize: '26px', color: '#E91E8C', marginBottom: '8px' }}><i className="ti ti-key"></i></div>
                            <div style={{ fontSize: '12px', fontWeight: '500' }}>Gantungan Kunci</div>
                        </div>
                        <div style={{ background: '#fff', border: '1px solid #eee', borderRadius: '12px', padding: '16px 10px', textAlign: 'center' }}>
                            <div style={{ fontSize: '26px', color: '#E91E8C', marginBottom: '8px' }}><i className="ti ti-star"></i></div>
                            <div style={{ fontSize: '12px', fontWeight: '500' }}>Aksesori Custom</div>
                        </div>
                        <div style={{ background: '#fff', border: '1px solid #eee', borderRadius: '12px', padding: '16px 10px', textAlign: 'center' }}>
                            <div style={{ fontSize: '26px', color: '#E91E8C', marginBottom: '8px' }}><i className="ti ti-bolt"></i></div>
                            <div style={{ fontSize: '12px', fontWeight: '500' }}>Stempel Flash</div>
                        </div>
                        <div style={{ background: '#fff', border: '1px solid #eee', borderRadius: '12px', padding: '16px 10px', textAlign: 'center' }}>
                            <div style={{ fontSize: '26px', color: '#E91E8C', marginBottom: '8px' }}><i className="ti ti-book"></i></div>
                            <div style={{ fontSize: '12px', fontWeight: '500' }}>Buku Yasin & Nota</div>
                        </div>
                        <div style={{ background: '#fff', border: '1px solid #eee', borderRadius: '12px', padding: '16px 10px', textAlign: 'center' }}>
                            <div style={{ fontSize: '26px', color: '#E91E8C', marginBottom: '8px' }}><i className="ti ti-id-badge"></i></div>
                            <div style={{ fontSize: '12px', fontWeight: '500' }}>Kartu NPWP/BPJS</div>
                        </div>
                        <div style={{ background: '#fff', border: '1px solid #eee', borderRadius: '12px', padding: '16px 10px', textAlign: 'center' }}>
                            <div style={{ fontSize: '26px', color: '#E91E8C', marginBottom: '8px' }}><i className="ti ti-keyboard"></i></div>
                            <div style={{ fontSize: '12px', fontWeight: '500' }}>Ketik & FC Mini</div>
                        </div>

                        {/* TOGGLE MORE BUTTON */}
                        <div
                            onClick={() => setShowExtra(!showExtra)}
                            style={{ background: '#fce4f0', border: '1.5px dashed #E91E8C', borderRadius: '12px', padding: '16px 10px', textAlign: 'center', cursor: 'pointer' }}
                        >
                            <div style={{ fontSize: '24px', marginBottom: '4px', color: '#b01470' }}>
                                <i className={showExtra ? "ti ti-minus" : "ti ti-plus"}></i>
                            </div>
                            <div style={{ fontSize: '12px', fontWeight: '500', color: '#b01470' }}>{showExtra ? 'Tutup' : 'Dan masih banyak lagi'}</div>
                        </div>

                        {/* EXTRA SERVICES */}
                        {showExtra && (
                            <div style={{ gridColumn: '1 / -1', background: '#f0f0f0', border: '1px solid #ddd', borderRadius: '12px', padding: '16px', marginTop: '4px' }}>
                                <div style={{ fontSize: '13px', fontWeight: '500', color: '#E91E8C', marginBottom: '12px', textAlign: 'center' }}>Layanan lainnya</div>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '8px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', background: '#fff', borderRadius: '8px', padding: '8px 10px', border: '1px solid #eee' }}><i className="ti ti-cut" style={{ color: '#E91E8C' }}></i> Cetak Kartu Nama</div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', background: '#fff', borderRadius: '8px', padding: '8px 10px', border: '1px solid #eee' }}><i className="ti ti-file-text" style={{ color: '#E91E8C' }}></i> Cetak Brosur</div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', background: '#fff', borderRadius: '8px', padding: '8px 10px', border: '1px solid #eee' }}><i className="ti ti-calendar" style={{ color: '#E91E8C' }}></i> Cetak Kalender</div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', background: '#fff', borderRadius: '8px', padding: '8px 10px', border: '1px solid #eee' }}><i className="ti ti-shirt" style={{ color: '#E91E8C' }}></i> Cetak Kaos / Sablon</div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', background: '#fff', borderRadius: '8px', padding: '8px 10px', border: '1px solid #eee' }}><i className="ti ti-gift" style={{ color: '#E91E8C' }}></i> Hampers & Souvenir</div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', background: '#fff', borderRadius: '8px', padding: '8px 10px', border: '1px solid #eee' }}><i className="ti ti-badge" style={{ color: '#E91E8C' }}></i> ID Card & Lanyard</div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', background: '#fff', borderRadius: '8px', padding: '8px 10px', border: '1px solid #eee' }}><i className="ti ti-map" style={{ color: '#E91E8C' }}></i> Cetak Peta</div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', background: '#fff', borderRadius: '8px', padding: '8px 10px', border: '1px solid #eee' }}><i className="ti ti-certificate" style={{ color: '#E91E8C' }}></i> Piagam & Sertifikat</div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* 3. FORM INPUT SELF-ORDER */}
            <div id="ambil-antrean" style={{ padding: '50px 16px', background: '#fff' }}>
                <div style={{
                    maxWidth: '500px',
                    margin: '0 auto',
                    background: '#fff',
                    border: '1px solid #eee',
                    padding: '30px 20px',
                    borderRadius: '16px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                    boxSizing: 'border-box'
                }}>
                    <h3 style={{ textAlign: 'center', marginBottom: '6px', fontSize: '20px', color: '#1a1a1a' }}>Ambil Antrean Mandiri</h3>
                    <p style={{ textAlign: 'center', fontSize: '13px', color: '#666', marginBottom: '24px' }}>Silakan masukkan data Anda untuk mendaftar antrean cetak</p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

                        {/* INPUT NAMA */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <label style={{ fontSize: '13px', fontWeight: '600', color: '#1a1a1a', textAlign: 'left' }}>Nama Anda:</label>
                            <input
                                type="text"
                                value={nama}
                                onChange={(e) => setNama(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '12px 14px',
                                    borderRadius: '8px',
                                    border: '1px solid #ccc',
                                    fontSize: '14px',
                                    outline: 'none',
                                    boxSizing: 'border-box',
                                    backgroundColor: '#fff',
                                    color: '#1a1a1a'
                                }}
                            />
                        </div>

                        {/* INPUT WHATSAPP */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <label style={{ fontSize: '13px', fontWeight: '600', color: '#1a1a1a', textAlign: 'left' }}>No. WhatsApp:</label>
                            <input
                                type="text"
                                placeholder="Misal: 08818799410"
                                value={wa}
                                onChange={(e) => setWa(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '12px 14px',
                                    borderRadius: '8px',
                                    border: '1px solid #ccc',
                                    fontSize: '14px',
                                    outline: 'none',
                                    boxSizing: 'border-box',
                                    backgroundColor: '#fff',
                                    color: '#1a1a1a'
                                }}
                            />
                        </div>

                        {/* PILIH JASA DAN QTY */}
                        <div style={{ display: 'flex', gap: '12px', width: '100%', boxSizing: 'border-box' }}>

                            {/* SELECT JASA */}
                            <div style={{ flex: 2, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                <label style={{ fontSize: '13px', fontWeight: '600', color: '#1a1a1a', textAlign: 'left' }}>Pilih Jasa:</label>
                                <select
                                    value={jasa}
                                    onChange={(e) => setJasa(e.target.value)}
                                    style={{
                                        width: '100%',
                                        padding: '12px 14px',
                                        borderRadius: '8px',
                                        border: '1px solid #ccc',
                                        backgroundColor: '#fff',
                                        color: '#1a1a1a',
                                        fontSize: '14px',
                                        outline: 'none',
                                        boxSizing: 'border-box',
                                        height: '46px'
                                    }}
                                >
                                    {daftarJasa.map((item, i) => (
                                        <option key={i} value={item} style={{ color: '#1a1a1a', background: '#fff' }}>
                                            {item}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* INPUT QTY */}
                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                <label style={{ fontSize: '13px', fontWeight: '600', color: '#1a1a1a', textAlign: 'left' }}>Jumlah:</label>
                                <input
                                    type="number"
                                    value={jumlah}
                                    onChange={(e) => setJumlah(e.target.value)}
                                    style={{
                                        width: '100%',
                                        padding: '12px 14px',
                                        borderRadius: '8px',
                                        border: '1px solid #ccc',
                                        fontSize: '14px',
                                        outline: 'none',
                                        boxSizing: 'border-box',
                                        backgroundColor: '#fff',
                                        color: '#1a1a1a',
                                        height: '46px'
                                    }}
                                />
                            </div>
                        </div>

                        {/* KOLOM INPUT DESAIN / CATATAN */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <label style={{ fontSize: '13px', fontWeight: '600', color: '#1a1a1a' }}>
                                    Permintaan Desain / Catatan:
                                </label>
                                <span style={{
                                    fontSize: '11px',
                                    fontWeight: '500',
                                    color: (jasa === 'Undangan Custome' || jasa === 'Accesories Custome') ? '#d32f2f' : '#666'
                                }}>
                                    {(jasa === 'Undangan Custome' || jasa === 'Accesories Custome') ? '* Wajib diisi' : '(Opsional)'}
                                </span>
                            </div>
                            <textarea
                                rows="3"
                                placeholder="Contoh: Cetak warna ukuran A4 kertas glossy. Jika ada file/foto contoh desain, silakan cantumkan link Google Drive / Canva Anda di sini."
                                value={catatanDesain}
                                onChange={(e) => setCatatanDesain(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '12px 14px',
                                    borderRadius: '8px',
                                    border: '1px solid #ccc',
                                    fontSize: '14px',
                                    outline: 'none',
                                    boxSizing: 'border-box',
                                    backgroundColor: '#fff',
                                    color: '#1a1a1a',
                                    fontFamily: 'inherit',
                                    resize: 'vertical'
                                }}
                            />
                        </div>

                        <button
                            onClick={tambahPesanan}
                            style={{
                                width: '100%',
                                background: '#E91E8C',
                                color: '#fff',
                                padding: '14px',
                                border: 'none',
                                borderRadius: '50px',
                                fontSize: '15px',
                                fontWeight: '600',
                                cursor: 'pointer',
                                marginTop: '6px',
                                boxSizing: 'border-box'
                            }}
                        >
                            MASUK ANTREAN TOKO
                        </button>
                    </div>
                </div>
            </div>

            {/* 4. PROMO SECTION */}
            <div style={{ background: '#fce4f0', padding: '40px 20px', textAlign: 'center' }}>
                <div style={{ display: 'inline-block', background: '#E91E8C', color: '#fff', fontSize: '11px', fontWeight: '500', padding: '4px 14px', borderRadius: '50px', marginBottom: '12px', letterSpacing: '1px', textTransform: 'uppercase' }}>Promo spesial</div>
                <h2 style={{ fontSize: '20px', fontWeight: '500', color: '#99124f', marginBottom: '8px' }}>Konsultasi gratis, hasil terbaik!</h2>
                <p style={{ fontSize: '13px', color: '#b03070', marginBottom: '20px', lineHeight: '1.6', maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto' }}>Tidak tahu mau cetak apa? Hubungi kami dan dapatkan rekomendasi terbaik sesuai kebutuhanmu — tanpa biaya konsultasi.</p>
                <a href="https://wa.me/6208818799410" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#E91E8C', color: '#fff', padding: '12px 24px', borderRadius: '50px', fontSize: '14px', fontWeight: '500', textDecoration: 'none' }}>
                    <i className="ti ti-message-circle"></i> Tanya via WhatsApp
                </a>
            </div>

            {/* 5. WHY SECTION */}
            <div style={{ padding: '40px 16px', background: '#fff' }}>
                <div style={{ maxWidth: '720px', margin: '0 auto' }}>
                    <p style={{ textAlign: 'center', fontSize: '20px', fontWeight: '500', color: '#1a1a1a', marginBottom: '6px' }}>Kenapa pilih kami?</p>
                    <p style={{ textAlign: 'center', fontSize: '13px', color: '#666', marginBottom: '24px' }}>Kepercayaan kamu adalah prioritas kami</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '12px' }}>
                        <div style={{ background: '#f8f8f8', borderRadius: '12px', padding: '16px 12px', textAlign: 'center' }}>
                            <div style={{ fontSize: '26px', color: '#E91E8C', marginBottom: '8px' }}><i className="ti ti-rosette"></i></div>
                            <div style={{ fontSize: '14px', fontWeight: '500', marginBottom: '4px' }}>Kualitas terjamin</div>
                            <div style={{ fontSize: '12px', color: '#666', lineHeight: '1.4' }}>Hasil cetak tajam & warna akurat</div>
                        </div>
                        <div style={{ background: '#f8f8f8', borderRadius: '12px', padding: '16px 12px', textAlign: 'center' }}>
                            <div style={{ fontSize: '26px', color: '#E91E8C', marginBottom: '8px' }}><i className="ti ti-clock"></i></div>
                            <div style={{ fontSize: '14px', fontWeight: '500', marginBottom: '4px' }}>Proses cepat</div>
                            <div style={{ fontSize: '12px', color: '#666', lineHeight: '1.4' }}>Dikerjakan tepat waktu sesuai janji</div>
                        </div>
                        <div style={{ background: '#f8f8f8', borderRadius: '12px', padding: '16px 12px', textAlign: 'center' }}>
                            <div style={{ fontSize: '26px', color: '#E91E8C', marginBottom: '8px' }}><i className="ti ti-coins"></i></div>
                            <div style={{ fontSize: '14px', fontWeight: '500', marginBottom: '4px' }}>Harga terjangkau</div>
                            <div style={{ fontSize: '12px', color: '#666', lineHeight: '1.4' }}>Ramah di kantong, hasilnya premium</div>
                        </div>
                        <div style={{ background: '#f8f8f8', borderRadius: '12px', padding: '16px 12px', textAlign: 'center' }}>
                            <div style={{ fontSize: '26px', color: '#E91E8C', marginBottom: '8px' }}><i className="ti ti-users"></i></div>
                            <div style={{ fontSize: '14px', fontWeight: '500', marginBottom: '4px' }}>Pelayanan ramah</div>
                            <div style={{ fontSize: '12px', color: '#666', lineHeight: '1.4' }}>Siap membantu dari awal hingga selesai</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 6. CONTACT SECTION */}
            <div style={{ background: '#E91E8C', color: '#fff', padding: '40px 20px', textAlign: 'center' }} id="kontak">
                <h2 style={{ fontSize: '22px', fontWeight: '500', marginBottom: '8px' }}>Hubungi kami sekarang</h2>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.85)', marginBottom: '20px' }}>Kami siap melayani kamu. Datang langsung atau hubungi via WhatsApp!</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center', marginBottom: '22px', fontSize: '13px' }}>
                    <div><i className="ti ti-map-pin"></i> Jl. Raya Igir Somawangi RT 6/2 Mandiraja, Banjarnegara</div>
                    <div><i className="ti ti-brand-whatsapp"></i> 08818799410</div>
                </div>
                <a href="https://wa.me/6208818799410" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#fff', color: '#E91E8C', padding: '12px 32px', borderRadius: '50px', fontSize: '15px', fontWeight: '500', textDecoration: 'none' }}>
                    <i className="ti ti-brand-whatsapp"></i> Chat WhatsApp
                </a>
            </div>

            {/* 7. FOOTER */}
            <div style={{ background: '#c01070', color: 'rgba(255,255,255,0.7)', textAlign: 'center', padding: '14px', fontSize: '12px' }}>
                © 2026 Elfitri Store — Mandiraja, Banjarnegara
            </div>

        </div>
    );
}

export default Pelanggan;