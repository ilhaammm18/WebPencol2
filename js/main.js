/**
 * DESA PENCOL 2 - PORTAL KEMERDEKAAN & KEGIATAN WARGA
 * Tema: Merah Putih Kemerdekaan
 * Kecamatan Gerih, Kabupaten Ngawi, Jawa Timur
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Navbar on Scroll
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const navMenu = document.getElementById('primaryNavMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      navMenu.classList.toggle('open');
      const expanded = mobileToggle.classList.contains('active');
      mobileToggle.setAttribute('aria-expanded', expanded);
    });

    // Close menu when clicking nav links
    document.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('open');
      });
    });
  }

  // 3. UI TABS SISTEM: DOKUMENTASI (AGUSTUS 2025 & AGUSTUS 2026)
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-content-panel');

  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetPanelId = btn.getAttribute('data-tab-target');

      // Nonaktifkan semua tab button
      tabButtons.forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });

      // Sembunyikan semua tab panel
      tabPanels.forEach((panel) => {
        panel.classList.remove('active');
      });

      // Aktifkan tab yang dipilih
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const targetPanel = document.getElementById(targetPanelId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });

  // 4. Modal Dialog Logic (Buka & Tutup)
  const openModalBtns = document.querySelectorAll('[data-open-modal]');
  const closeModalBtns = document.querySelectorAll('[data-close-modal]');
  const allModals = document.querySelectorAll('.modal-backdrop');

  openModalBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetModalId = btn.getAttribute('data-open-modal');
      const modal = document.getElementById(targetModalId);
      if (modal) {
        modal.classList.add('open');
      }
    });
  });

  closeModalBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      allModals.forEach((m) => m.classList.remove('open'));
    });
  });

  allModals.forEach((modal) => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      allModals.forEach((m) => m.classList.remove('open'));
    }
  });

  // ===================================================================
  // 5. DATA DOKUMENTASI (20+ FOTO PER KATEGORI/TAHUN) & MODAL GALLERY
  // ===================================================================
  const documentationData = {
    '2026': {
      title: 'Semarak Kemerdekaan RI ke-81 (Agustus 2026)',
      yearLabel: 'Agustus 2026',
      photos: [
        {
          id: '2026-1',
          title: 'Keseruan Lomba Balap Karung Pesta Rakyat',
          desc: 'Sorak tawa anak-anak dan warga RT 01-04 dalam perlombaan balap karung kemerdekaan di lapangan dusun.',
          category: 'Lomba 17-an',
          img: 'assets/images/perayaan_17an.jpg',
          date: '15 Agu 2026'
        },
        {
          id: '2026-2',
          title: 'Kerja Bakti Bersih Lingkungan Menyambut 17-an',
          desc: 'Aksi gotong royong pemuda bersama bapak-bapak membersihkan bahu jalan poros dusun dan irigasi sawah.',
          category: 'Gotong Royong',
          img: 'assets/images/gotong_royong.jpg',
          date: '10 Agu 2026'
        },
        {
          id: '2026-3',
          title: 'Musyawarah Panitia 17-an & LPJ Kas di Balai Pendopo',
          desc: 'Rapat koordinasi pembagian hadiah lomba dan pembacaan laporan pertanggungjawaban kas kemerdekaan secara transparan.',
          category: 'Musyawarah & Kas',
          img: 'assets/images/musyawarah_desa.jpg',
          date: '18 Agu 2026'
        },
        {
          id: '2026-4',
          title: 'Pemasangan Bendera & 100+ Umbul-Umbul Dusun',
          desc: 'Semangat pemuda Karang Taruna mempercantik seluruh jalan gang dusun dengan 100+ bendera merah putih.',
          category: 'Gotong Royong',
          img: 'assets/images/hero_pencol.jpg',
          date: '01 Agu 2026'
        },
        {
          id: '2026-5',
          title: 'Lomba Tradisional Makan Kerupuk & Kelereng Anak',
          desc: 'Keceriaan anak-anak RT 01 s/d RT 04 beradu tangkas dalam lomba khas kemerdekaan penuh tawa dan keakraban.',
          category: 'Lomba 17-an',
          img: 'assets/images/perayaan_17an.jpg',
          date: '16 Agu 2026'
        },
        {
          id: '2026-6',
          title: 'Lomba Tarik Tambang Pemuda Antar RT 01 vs RT 02',
          desc: 'Adu stamina dan kekompakan pemuda yang disaksikan antusias oleh seluruh warga di pinggir lapangan.',
          category: 'Lomba 17-an',
          img: 'assets/images/gotong_royong.jpg',
          date: '16 Agu 2026'
        },
        {
          id: '2026-7',
          title: 'Panjat Pinang Kemerdekaan Penuh Gelak Tawa',
          desc: 'Aksi saling topang para pemuda menaklukkan pohon pinang berlumur oli demi meraih hadiah di puncak.',
          category: 'Lomba 17-an',
          img: 'assets/images/perayaan_17an.jpg',
          date: '17 Agu 2026'
        },
        {
          id: '2026-8',
          title: 'Lomba Estafet Tepung & Balon Ibu-Ibu PKK',
          desc: 'Kemeriahan kompetisi antar regu ibu-ibu dusun yang menghadirkan canda tawa hangat warga.',
          category: 'Lomba 17-an',
          img: 'assets/images/perayaan_17an.jpg',
          date: '15 Agu 2026'
        },
        {
          id: '2026-9',
          title: 'Pembersihan Lapangan & Penataan Panggung Utama',
          desc: 'Kerja bakti bersama para pemuda menata panggung hiburan dan tenda terop menjelang malam tirakatan.',
          category: 'Gotong Royong',
          img: 'assets/images/gotong_royong.jpg',
          date: '14 Agu 2026'
        },
        {
          id: '2026-10',
          title: 'Rapat Persiapan Pembentukan Panitia 17-an',
          desc: 'Musyawarah awal penentuan struktur koordinator seksi dan penentuan anggaran kas pemuda.',
          category: 'Musyawarah & Kas',
          img: 'assets/images/musyawarah_desa.jpg',
          date: '25 Jul 2026'
        },
        {
          id: '2026-11',
          title: 'Pemasangan Lampu Hias & Gapura Bambu Merah Putih',
          desc: 'Dekorasi lampu gemerlap di sepanjang pintu masuk dusun untuk menyambut bulan kemerdekaan RI.',
          category: 'Gotong Royong',
          img: 'assets/images/hero_pencol.jpg',
          date: '05 Agu 2026'
        },
        {
          id: '2026-12',
          title: 'Malam Tirakatan & Doa Bersama Sesepuh Dusun',
          desc: 'Refleksi perjuangan kemerdekaan, doa bersama lintas generasi untuk keselamatan desa dan bangsa.',
          category: 'Malam Tirakatan',
          img: 'assets/images/musyawarah_desa.jpg',
          date: '16 Agu 2026'
        },
        {
          id: '2026-13',
          title: 'Prosesi Potong Tumpeng Kemerdekaan Balai Pertemuan',
          desc: 'Simbol rasa syukur warga Pencol 2 atas kemerdekaan dan kebersamaan rukun warga.',
          category: 'Malam Tirakatan',
          img: 'assets/images/musyawarah_desa.jpg',
          date: '16 Agu 2026'
        },
        {
          id: '2026-14',
          title: 'Pemberian Piala & Piagam Juara Lomba 17-an',
          desc: 'Apresiasi kepada para pemenang lomba anak-anak dan perwakilan RT peraih juara umum tahun 2026.',
          category: 'Panggung Hiburan',
          img: 'assets/images/perayaan_17an.jpg',
          date: '17 Agu 2026'
        },
        {
          id: '2026-15',
          title: 'Pentas Tari Tradisional Karang Taruna Putri',
          desc: 'Penampilan tari kreasi daerah memukau dari pemudi Pencol 2 di panggung malam puncak kemerdekaan.',
          category: 'Panggung Hiburan',
          img: 'assets/images/perayaan_17an.jpg',
          date: '17 Agu 2026'
        },
        {
          id: '2026-16',
          title: 'Penampilan Musik Akustik Pemuda Pencol 2',
          desc: 'Kolaborasi musik akustik lagu-lagu nasional dan daerah oleh remaja Karang Taruna.',
          category: 'Panggung Hiburan',
          img: 'assets/images/musyawarah_desa.jpg',
          date: '17 Agu 2026'
        },
        {
          id: '2026-17',
          title: 'Senam Sehat Ceria Warga Pencol 2',
          desc: 'Kegiatan olahraga pagi bersama lansia, orang tua, dan anak-anak bertabur kupon doorprize.',
          category: 'Lomba 17-an',
          img: 'assets/images/hero_pencol.jpg',
          date: '17 Agu 2026'
        },
        {
          id: '2026-18',
          title: 'Pawai Obor Semarak Kemerdekaan Mengelilingi Dusun',
          desc: 'Arak-arakan anak-anak dan santri membawa obor bambu menyusuri jalan desa dengan gembira.',
          category: 'Malam Tirakatan',
          img: 'assets/images/gotong_royong.jpg',
          date: '16 Agu 2026'
        },
        {
          id: '2026-19',
          title: 'Pembersihan Sampah & Pembongkaran Terop Lapangan',
          desc: 'Kekompakan pemuda pasca-kegiatan menjaga kebersihan dan mengembalikan fasilitas umum dusun.',
          category: 'Gotong Royong',
          img: 'assets/images/gotong_royong.jpg',
          date: '18 Agu 2026'
        },
        {
          id: '2026-20',
          title: 'Audit Terbuka & Pengesahan Buku Kas 17-an',
          desc: 'Penyampaian pertanggungjawaban nota belanja hadiah, konsumsi, dan sisa kas kepada sesepuh RT.',
          category: 'Musyawarah & Kas',
          img: 'assets/images/musyawarah_desa.jpg',
          date: '20 Agu 2026'
        },
        {
          id: '2026-21',
          title: 'Lomba Menghias Tumpeng Kreatif Antar-RT',
          desc: 'Adu kreasi menu tumpeng tradisional bernuansa merah putih dari perwakilan RT 01 sampai RT 04.',
          category: 'Lomba 17-an',
          img: 'assets/images/perayaan_17an.jpg',
          date: '16 Agu 2026'
        },
        {
          id: '2026-22',
          title: 'Lomba Tangkap Bebek Mata Tertutup Lapangan',
          desc: 'Keseruan atraksi lomba lucu yang mengundang tepuk tangan meriah para penonton.',
          category: 'Lomba 17-an',
          img: 'assets/images/perayaan_17an.jpg',
          date: '15 Agu 2026'
        },
        {
          id: '2026-23',
          title: 'Foto Bersama Pengurus Karang Taruna & Panitia',
          desc: 'Kenangan manis kekompakan seluruh panitia pelaksana HUT RI ke-81 di panggung kehormatan.',
          category: 'Panggung Hiburan',
          img: 'assets/images/hero_pencol.jpg',
          date: '17 Agu 2026'
        },
        {
          id: '2026-24',
          title: 'Ramah Tamah & Doa Syukuran Penutupan Acara',
          desc: 'Makan bersama seluruh warga desa menandai selesainya rangkaian peringatan kemerdekaan dengan damai.',
          category: 'Malam Tirakatan',
          img: 'assets/images/musyawarah_desa.jpg',
          date: '20 Agu 2026'
        }
      ]
    },
    '2025': {
      title: 'Peringatan HUT RI ke-80 (Agustus 2025)',
      yearLabel: 'Agustus 2025',
      photos: [
        {
          id: '2025-1',
          title: 'Dokumentasi Lomba Volly Antar RT Dusun Pencol 2',
          desc: 'Keseruan dan kekompakan pemuda Karang Taruna Dusun Pencol 2 Randusongo dalam pertandingan volly unik antar-RT menyemarakkan kemerdekaan.',
          category: 'Lomba Volly Antar RT',
          img: 'assets/images/Dokumentasi/2025/LombaVollyAntarRt-1.jpeg',
          date: 'Agustus 2025'
        },
        {
          id: '2025-2',
          title: 'Gotong Royong Pemasangan Gapura 17-an 2025',
          desc: 'Kekompakan pemuda mempersiapkan gerbang masuk dusun bernuansa bambu merah putih tahun 2025.',
          category: 'Gotong Royong',
          img: 'assets/images/gotong_royong.jpg',
          date: '08 Agu 2025'
        },
        {
          id: '2025-3',
          title: 'Peringatan HUT RI ke-80 & Lomba Balap Kelereng Anak',
          desc: 'Kenangan perayaan lomba anak-anak dan keceriaan warga RT 01-04 tahun 2025 yang meriah.',
          category: 'Lomba 17-an',
          img: 'assets/images/perayaan_17an.jpg',
          date: '15 Agu 2025'
        },
        {
          id: '2025-4',
          title: 'Musyawarah Anggaran & Transparansi Kas 2025',
          desc: 'Rapat koordinasi dan transparansi laporan kas kegiatan kemerdekaan tahun 2025 bersama warga.',
          category: 'Musyawarah & Kas',
          img: 'assets/images/musyawarah_desa.jpg',
          date: '12 Agu 2025'
        },
        {
          id: '2025-5',
          title: 'Keseruan Lomba Tarik Tambang Antar-RT 2025',
          desc: 'Adu kekuatan penuh sportivitas antar pemuda RT 01 dan RT 02 disaksikan ratusan warga.',
          category: 'Lomba 17-an',
          img: 'assets/images/perayaan_17an.jpg',
          date: '16 Agu 2025'
        },
        {
          id: '2025-6',
          title: 'Pembersihan Saluran Irigasi Menjelang Perayaan',
          desc: 'Aksi peduli lingkungan pemuda bersama kelompok tani membersihkan saluran air desa.',
          category: 'Gotong Royong',
          img: 'assets/images/gotong_royong.jpg',
          date: '06 Agu 2025'
        },
        {
          id: '2025-7',
          title: 'Lomba Memasukkan Benang ke Jarum Para Lansia',
          desc: 'Keceriaan simbah-simbah berpartisipasi memeriahkan lomba 17-an dengan penuh semangat.',
          category: 'Lomba 17-an',
          img: 'assets/images/perayaan_17an.jpg',
          date: '14 Agu 2025'
        },
        {
          id: '2025-8',
          title: 'Pemasangan Umbul-Umbul Bambu Merah Putih',
          desc: 'Bahu-membahu pemuda menegakkan tiang umbul-umbul di sepanjang jalan raya Gerih.',
          category: 'Gotong Royong',
          img: 'assets/images/hero_pencol.jpg',
          date: '07 Agu 2025'
        },
        {
          id: '2025-9',
          title: 'Musyawarah Panitia dengan Tokoh & Sesepuh Dusun',
          desc: 'Mendengarkan arahan sesepuh desa terkait etika pelaksanaan dan rute pawai kemerdekaan.',
          category: 'Musyawarah & Kas',
          img: 'assets/images/musyawarah_desa.jpg',
          date: '10 Agu 2025'
        },
        {
          id: '2025-10',
          title: 'Lomba Memasak Nasi Goreng Bapak-Bapak RT',
          desc: 'Aksi unik dan lucu para bapak menunjukkan keahlian memasak di hadapan juri ibu-ibu PKK.',
          category: 'Lomba 17-an',
          img: 'assets/images/perayaan_17an.jpg',
          date: '15 Agu 2025'
        },
        {
          id: '2025-11',
          title: 'Malam Tirakatan HUT RI ke-80 di Balai Warga',
          desc: 'Doa bersama memohon ketentraman dusun Pencol 2 dipimpin sesepuh dusun.',
          category: 'Malam Tirakatan',
          img: 'assets/images/musyawarah_desa.jpg',
          date: '16 Agu 2025'
        },
        {
          id: '2025-12',
          title: 'Pemberian Bingkisan Hadiah Juara Lomba 2025',
          desc: 'Penyerahan piala dan hadiah perlengkapan sekolah bagi anak-anak berprestasi di lomba.',
          category: 'Panggung Hiburan',
          img: 'assets/images/perayaan_17an.jpg',
          date: '17 Agu 2025'
        },
        {
          id: '2025-13',
          title: 'Pentas Seni Campursari Pemuda Dusun',
          desc: 'Hiburan tembang campursari dan seni tari tradisional menghangatkan malam puncak perayaan.',
          category: 'Panggung Hiburan',
          img: 'assets/images/hero_pencol.jpg',
          date: '17 Agu 2025'
        },
        {
          id: '2025-14',
          title: 'Lomba Sepeda Hias Anak Dusun Pencol 2',
          desc: 'Kreativitas hiasan sepeda bendera merah putih anak-anak yang memukau warga sepanjang jalan.',
          category: 'Lomba 17-an',
          img: 'assets/images/perayaan_17an.jpg',
          date: '17 Agu 2025'
        },
        {
          id: '2025-15',
          title: 'Pawai Budaya Pakaian Adat Mengelilingi Dusun',
          desc: 'Warna-warni baju adat nusantara dikenakan warga dan pemuda untuk menanamkan cinta budaya.',
          category: 'Malam Tirakatan',
          img: 'assets/images/gotong_royong.jpg',
          date: '16 Agu 2025'
        },
        {
          id: '2025-16',
          title: 'Kerja Bakti Pasca-Acara Bersih Lapangan',
          desc: 'Pembersihan tuntas sampah acara dan penertiban kembali perlengkapan inventaris balai.',
          category: 'Gotong Royong',
          img: 'assets/images/gotong_royong.jpg',
          date: '18 Agu 2025'
        },
        {
          id: '2025-17',
          title: 'Laporan Pertanggungjawaban Kas 2025 & Audit RT',
          desc: 'Pemaparan terbuka rincian pemasukan swadaya dan pengeluaran 17-an tahun 2025.',
          category: 'Musyawarah & Kas',
          img: 'assets/images/musyawarah_desa.jpg',
          date: '20 Agu 2025'
        },
        {
          id: '2025-18',
          title: 'Lomba Joget Balon Berpasangan Warga',
          desc: 'Keceriaan tawa warga mempertahankan balon diiringi irama musik dangdut kemerdekaan.',
          category: 'Lomba 17-an',
          img: 'assets/images/perayaan_17an.jpg',
          date: '15 Agu 2025'
        },
        {
          id: '2025-19',
          title: 'Penyerahan Sisa Saldo Kas ke Tabungan Kas Dusun',
          desc: 'Sisa saldo kegiatan 2025 dibukukan kembali untuk kas cadangan sosial warga Pencol 2.',
          category: 'Musyawarah & Kas',
          img: 'assets/images/musyawarah_desa.jpg',
          date: '22 Agu 2025'
        },
        {
          id: '2025-20',
          title: 'Foto Kebersamaan Warga & Karang Taruna 2025',
          desc: 'Momen penuh keakraban seluruh keluarga besar Dusun Pencol 2 memperingati HUT RI ke-80.',
          category: 'Panggung Hiburan',
          img: 'assets/images/hero_pencol.jpg',
          date: '17 Agu 2025'
        }
      ]
    }
  };

  // --- A. KONTROL SLIDER HORIZONTAL (PREV / NEXT ARROWS) ---
  const sliderTracks = document.querySelectorAll('.gallery-slider-track');
  const prevButtons = document.querySelectorAll('.slider-btn-prev');
  const nextButtons = document.querySelectorAll('.slider-btn-next');

  function updateSliderArrows(track, prevBtn, nextBtn) {
    if (!track || !prevBtn || !nextBtn) return;
    const maxScroll = track.scrollWidth - track.clientWidth - 8;
    prevBtn.disabled = track.scrollLeft <= 8;
    nextBtn.disabled = track.scrollLeft >= maxScroll;
  }

  prevButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const track = document.getElementById(targetId);
      if (track) {
        track.scrollBy({ left: -360, behavior: 'smooth' });
      }
    });
  });

  nextButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const track = document.getElementById(targetId);
      if (track) {
        track.scrollBy({ left: 360, behavior: 'smooth' });
      }
    });
  });

  sliderTracks.forEach((track) => {
    const trackId = track.id;
    const prevBtn = document.querySelector(`.slider-btn-prev[data-target="${trackId}"]`);
    const nextBtn = document.querySelector(`.slider-btn-next[data-target="${trackId}"]`);

    track.addEventListener('scroll', () => {
      updateSliderArrows(track, prevBtn, nextBtn);
    });

    // Jalankan inisialisasi awal
    updateSliderArrows(track, prevBtn, nextBtn);
  });

  // Update slider arrows juga saat tab berganti
  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      setTimeout(() => {
        sliderTracks.forEach((track) => {
          const trackId = track.id;
          const prevBtn = document.querySelector(`.slider-btn-prev[data-target="${trackId}"]`);
          const nextBtn = document.querySelector(`.slider-btn-next[data-target="${trackId}"]`);
          updateSliderArrows(track, prevBtn, nextBtn);
        });
      }, 100);
    });
  });

  // --- B. MODAL / LIGHTBOX GALLERY LENGKAP STATE & LOGIC ---
  const modalGalleryFull = document.getElementById('modalGalleryFull');
  const modalGalleryTitle = document.getElementById('modalGalleryTitle');
  const modalGalleryCountBadge = document.getElementById('modalGalleryCountBadge');
  const galleryFilterContainer = document.getElementById('galleryFilterContainer');
  const modalGalleryGridContainer = document.getElementById('modalGalleryGridContainer');
  const btnCloseGalleryModal = document.getElementById('btnCloseGalleryModal');
  const btnBackToGrid = document.getElementById('btnBackToGrid');
  const galleryGridView = document.getElementById('galleryGridView');
  const gallerySingleView = document.getElementById('gallerySingleView');

  // Single Photo View Elements
  const singlePhotoImg = document.getElementById('singlePhotoImg');
  const singlePhotoBadge = document.getElementById('singlePhotoBadge');
  const singlePhotoDate = document.getElementById('singlePhotoDate');
  const singlePhotoCounter = document.getElementById('singlePhotoCounter');
  const singlePhotoTitle = document.getElementById('singlePhotoTitle');
  const singlePhotoDesc = document.getElementById('singlePhotoDesc');
  const btnSinglePrev = document.getElementById('btnSinglePrev');
  const btnSingleNext = document.getElementById('btnSingleNext');

  // Gallery State
  let activeYear = '2026';
  let activeCategory = 'Semua';
  let activePhotoIndex = 0;
  let currentFilteredList = [];

  // 1. Fungsi Membuka Modal Galeri
  function openGalleryModal(year = '2026', initialMode = 'grid', photoIndex = 0) {
    activeYear = year;
    const yearData = documentationData[year] || documentationData['2026'];

    if (modalGalleryTitle) {
      modalGalleryTitle.textContent = `Dokumentasi Lengkap • ${yearData.title}`;
    }

    // Render Filter Pills dinamis berdasarkan kategori yang ada
    renderFilterPills(yearData.photos);

    // Filter daftar foto
    applyPhotoFilter('Semua', false);

    // Tentukan View awal (Grid atau Single Foto)
    if (initialMode === 'single') {
      showSinglePhoto(photoIndex);
    } else {
      showGridView();
    }

    // Tampilkan Modal
    if (modalGalleryFull) {
      modalGalleryFull.classList.add('active');
      document.body.style.overflow = 'hidden'; // Kunci scroll halaman belakang
    }
  }

  // 2. Fungsi Menutup Modal Galeri
  function closeGalleryModal() {
    if (modalGalleryFull) {
      modalGalleryFull.classList.remove('active');
      document.body.style.overflow = ''; // Pulihkan scroll halaman belakang
    }
  }

  // 3. Render Filter Pills (Kancing Kategori)
  function renderFilterPills(allPhotos) {
    if (!galleryFilterContainer) return;

    // Ambil daftar kategori unik
    const categories = ['Semua'];
    allPhotos.forEach((p) => {
      if (p.category && !categories.includes(p.category)) {
        categories.push(p.category);
      }
    });

    galleryFilterContainer.innerHTML = '';
    categories.forEach((cat) => {
      const count = cat === 'Semua' ? allPhotos.length : allPhotos.filter((p) => p.category === cat).length;
      const pill = document.createElement('button');
      pill.type = 'button';
      pill.className = `px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 border ${
        cat === activeCategory
          ? 'bg-red-600 text-white border-red-500 shadow-sm'
          : 'bg-white/10 text-slate-300 border-white/10 hover:bg-white/20 hover:text-white'
      }`;
      pill.textContent = `${cat} (${count})`;
      pill.addEventListener('click', () => {
        applyPhotoFilter(cat, true);
      });
      galleryFilterContainer.appendChild(pill);
    });
  }

  // 4. Filter Foto & Render Grid
  function applyPhotoFilter(category, isUserClick = true) {
    activeCategory = category;
    const yearData = documentationData[activeYear] || documentationData['2026'];

    if (category === 'Semua') {
      currentFilteredList = [...yearData.photos];
    } else {
      currentFilteredList = yearData.photos.filter((p) => p.category === category);
    }

    // Update Pills Style
    if (galleryFilterContainer) {
      const pills = galleryFilterContainer.querySelectorAll('button');
      pills.forEach((p) => {
        const pText = p.textContent.split(' (')[0];
        if (pText === category) {
          p.className = 'px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 border bg-red-600 text-white border-red-500 shadow-sm';
        } else {
          p.className = 'px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 border bg-white/10 text-slate-300 border-white/10 hover:bg-white/20 hover:text-white';
        }
      });
    }

    // Update Counter Badge
    if (modalGalleryCountBadge) {
      modalGalleryCountBadge.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> ${currentFilteredList.length} Foto ${category !== 'Semua' ? `[${category}]` : 'Tersedia'}`;
    }

    renderGridItems(currentFilteredList);

    // Jika sedang di mode Single Photo, perbarui index
    if (!gallerySingleView?.classList.contains('hidden')) {
      activePhotoIndex = 0;
      updateSinglePhotoDisplay();
    }
  }

  // 5. Render Kartu Foto ke Grid
  function renderGridItems(photos) {
    if (!modalGalleryGridContainer) return;
    modalGalleryGridContainer.innerHTML = '';

    if (photos.length === 0) {
      modalGalleryGridContainer.innerHTML = `
        <div class="col-span-full py-16 text-center text-slate-400">
          <p class="text-base font-semibold">Tidak ada foto dalam kategori ini.</p>
          <button type="button" class="mt-3 px-4 py-2 rounded-xl bg-red-600 text-white text-xs font-bold" onclick="document.querySelector('#galleryFilterContainer button').click()">
            Tampilkan Semua Foto
          </button>
        </div>
      `;
      return;
    }

    photos.forEach((photo, idx) => {
      const card = document.createElement('div');
      card.className = 'group relative rounded-2xl overflow-hidden bg-slate-900 border border-white/10 shadow-lg hover:border-red-500/50 hover:shadow-red-600/20 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col';
      card.innerHTML = `
        <div class="relative h-48 sm:h-52 w-full overflow-hidden bg-black/60">
          <img src="${photo.img}" alt="${photo.title}" loading="lazy" decoding="async" class="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out">
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
            <span class="text-white text-xs font-medium flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
              Perbesar Foto
            </span>
          </div>
          <span class="absolute top-2.5 left-2.5 bg-red-600 text-white text-[11px] font-bold px-2 py-0.5 rounded-full shadow-sm">
            ${photo.category}
          </span>
          <span class="absolute top-2.5 right-2.5 bg-slate-950/80 text-slate-300 text-[10px] font-medium px-2 py-0.5 rounded-full backdrop-blur-md">
            ${photo.date}
          </span>
        </div>
        <div class="p-4 flex-1 flex flex-col justify-between">
          <h4 class="text-sm font-bold text-white group-hover:text-red-400 transition-colors line-clamp-1 leading-snug">
            ${photo.title}
          </h4>
          <p class="text-xs text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
            ${photo.desc}
          </p>
        </div>
      `;

      card.addEventListener('click', () => {
        showSinglePhoto(idx);
      });

      modalGalleryGridContainer.appendChild(card);
    });
  }

  // 6. Tampilkan Mode Grid
  function showGridView() {
    if (galleryGridView) galleryGridView.classList.remove('hidden');
    if (gallerySingleView) gallerySingleView.classList.add('hidden');
    if (btnBackToGrid) btnBackToGrid.classList.add('hidden');
  }

  // 7. Tampilkan Mode Single Photo Detail
  function showSinglePhoto(index) {
    if (index < 0 || index >= currentFilteredList.length) return;
    activePhotoIndex = index;

    if (galleryGridView) galleryGridView.classList.add('hidden');
    if (gallerySingleView) {
      gallerySingleView.classList.remove('hidden');
      gallerySingleView.classList.add('flex');
    }
    if (btnBackToGrid) btnBackToGrid.classList.remove('hidden');

    updateSinglePhotoDisplay();

    // Scroll ke atas area modal
    const scrollArea = document.getElementById('modalGalleryScrollArea');
    if (scrollArea) scrollArea.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // 8. Update Tampilan Single Photo
  function updateSinglePhotoDisplay() {
    const photo = currentFilteredList[activePhotoIndex];
    if (!photo) return;

    if (singlePhotoImg) {
      singlePhotoImg.src = photo.img;
      singlePhotoImg.alt = photo.title;
    }
    if (singlePhotoBadge) singlePhotoBadge.textContent = photo.category;
    if (singlePhotoDate) singlePhotoDate.textContent = photo.date;
    if (singlePhotoCounter) {
      singlePhotoCounter.textContent = `Foto ${activePhotoIndex + 1} dari ${currentFilteredList.length}`;
    }
    if (singlePhotoTitle) singlePhotoTitle.textContent = photo.title;
    if (singlePhotoDesc) singlePhotoDesc.textContent = photo.desc;

    // Update state tombol prev & next
    if (btnSinglePrev) btnSinglePrev.disabled = activePhotoIndex === 0;
    if (btnSingleNext) btnSingleNext.disabled = activePhotoIndex === currentFilteredList.length - 1;

    if (btnSinglePrev) btnSinglePrev.style.opacity = activePhotoIndex === 0 ? '0.35' : '1';
    if (btnSingleNext) btnSingleNext.style.opacity = activePhotoIndex === currentFilteredList.length - 1 ? '0.35' : '1';
  }

  // --- C. EVENT LISTENERS MODAL GALLERY & CAROUSEL ---

  // Klik kartu preview foto di slider utama -> buka single photo view
  const previewCards = document.querySelectorAll('.gallery-card');
  previewCards.forEach((card) => {
    card.addEventListener('click', () => {
      const year = card.getAttribute('data-year') || '2026';
      const index = parseInt(card.getAttribute('data-index') || '0', 10);
      openGalleryModal(year, 'single', index);
    });
  });

  // Klik kartu ke-6 "Lihat Semua (20+ Foto)" -> buka grid modal lengkap
  const seeAllCards = document.querySelectorAll('[data-open-gallery]');
  seeAllCards.forEach((card) => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const year = card.getAttribute('data-open-gallery') || '2026';
      openGalleryModal(year, 'grid', 0);
    });

    // Support keyboard Enter & Spasi
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const year = card.getAttribute('data-open-gallery') || '2026';
        openGalleryModal(year, 'grid', 0);
      }
    });
  });

  // Tombol Tutup Modal
  btnCloseGalleryModal?.addEventListener('click', closeGalleryModal);

  // Tombol Kembali ke Grid dari Single View
  document.querySelectorAll('.btn-back-to-grid').forEach((btn) => {
    btn.addEventListener('click', showGridView);
  });

  // Tombol Navigasi Prev/Next di Single View
  btnSinglePrev?.addEventListener('click', () => {
    if (activePhotoIndex > 0) {
      activePhotoIndex--;
      updateSinglePhotoDisplay();
    }
  });

  btnSingleNext?.addEventListener('click', () => {
    if (activePhotoIndex < currentFilteredList.length - 1) {
      activePhotoIndex++;
      updateSinglePhotoDisplay();
    }
  });

  // Tutup jika klik backdrop di luar area konten
  modalGalleryFull?.addEventListener('click', (e) => {
    if (e.target === modalGalleryFull) {
      closeGalleryModal();
    }
  });

  // Keyboard Navigation (Escape, ArrowLeft, ArrowRight)
  document.addEventListener('keydown', (e) => {
    if (!modalGalleryFull?.classList.contains('active')) return;

    if (e.key === 'Escape') {
      if (!gallerySingleView?.classList.contains('hidden')) {
        showGridView();
      } else {
        closeGalleryModal();
      }
    } else if (e.key === 'ArrowLeft') {
      if (!gallerySingleView?.classList.contains('hidden') && activePhotoIndex > 0) {
        activePhotoIndex--;
        updateSinglePhotoDisplay();
      }
    } else if (e.key === 'ArrowRight') {
      if (!gallerySingleView?.classList.contains('hidden') && activePhotoIndex < currentFilteredList.length - 1) {
        activePhotoIndex++;
        updateSinglePhotoDisplay();
      }
    }
  });

  // 6. Formulir Usul Kegiatan Warga (Feedback Toast)
  const formUsul = document.getElementById('formUsulKegiatan');
  if (formUsul) {
    formUsul.addEventListener('submit', (e) => {
      e.preventDefault();
      const nama = document.getElementById('namaPengusul')?.value || 'Warga';
      const kategori = document.getElementById('kategoriKegiatan')?.value || 'Kegiatan';

      // Buat Toast Notifikasi Elegan
      const toast = document.createElement('div');
      toast.style.position = 'fixed';
      toast.style.bottom = '28px';
      toast.style.right = '28px';
      toast.style.background = '#dc2626';
      toast.style.color = '#ffffff';
      toast.style.padding = '16px 24px';
      toast.style.borderRadius = '12px';
      toast.style.boxShadow = '0 10px 30px rgba(220, 38, 38, 0.4)';
      toast.style.zIndex = '9999';
      toast.style.fontWeight = '700';
      toast.style.fontSize = '0.94rem';
      toast.style.border = '2px solid #ffffff';
      toast.textContent = `✓ Matur nuwun, ${nama}! Usulan [${kategori}] panjenengan telah terkirim ke panitia Karang Taruna Pencol 2.`;

      document.body.appendChild(toast);
      formUsul.reset();

      // Tutup modal
      const modal = document.getElementById('modalUsulKegiatan');
      if (modal) modal.classList.remove('open');

      setTimeout(() => {
        toast.remove();
      }, 5000);
    });
  }

  // 7. FAQ Accordion Interaktif
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const btn = item.querySelector('.faq-question-btn');
    const collapse = item.querySelector('.faq-answer-collapse');

    btn?.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Tutup accordion lain
      faqItems.forEach((other) => {
        other.classList.remove('active');
        const otherCollapse = other.querySelector('.faq-answer-collapse');
        if (otherCollapse) otherCollapse.style.maxHeight = null;
      });

      // Buka/tutup yang diklik
      if (!isActive && collapse) {
        item.classList.add('active');
        collapse.style.maxHeight = collapse.scrollHeight + 'px';
      }
    });
  });

  // 8. Auto-load Custom JPG Logo if available in assets/images/logo_pencol2.jpg
  const testLogo = new Image();
  testLogo.onload = function() {
    document.querySelectorAll('.brand-logo-img').forEach((el) => {
      el.src = 'assets/images/logo_pencol2.jpg';
      el.style.transform = 'scale(1.42)'; // Auto crop lingkaran
    });
  };
  testLogo.src = 'assets/images/logo_pencol2.jpg';

  // 9. Active Link Navigation on Scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      const navItem = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navItem?.classList.add('active');
      } else {
        navItem?.classList.remove('active');
      }
    });
  });
});
