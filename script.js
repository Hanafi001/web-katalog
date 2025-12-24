'use strict';

// Nomor WhatsApp (sesuaikan dengan nomor Anda)
const WHATSAPP_NUMBER = '628973667310';

// Data Produk
let products = [
  { code: '001', name: 'Undangan Pernikahan Elegan Gold', category: 'Pernikahan', price: 85000, image: '' },
  { code: '002', name: 'Undangan Pernikahan Minimalis', category: 'Pernikahan', price: 65000, image: '' },
  { code: '003', name: 'Undangan Khitan Modern', category: 'Khitan', price: 45000, image: '' },
  { code: '004', name: 'Undangan Wisuda Eksklusif', category: 'Wisuda', price: 55000, image: '' },
  { code: '005', name: 'Undangan Ulang Tahun Anak', category: 'Ulang Tahun', price: 35000, image: '' },
  { code: '006', name: 'Undangan Custom Desain Sendiri', category: 'Custom', price: 75000, image: '' },
  { code: '007', name: 'Undangan Pernikahan Vintage', category: 'Pernikahan', price: 95000, image: '' },
  { code: '008', name: 'Undangan Khitan Bergambar', category: 'Khitan', price: 50000, image: '' },
  { code: '009', name: 'Undangan Wisuda Elegant', category: 'Wisuda', price: 60000, image: '' },
  { code: '010', name: 'Undangan Ulang Tahun Dewasa', category: 'Ulang Tahun', price: 40000, image: '' },
  { code: '011', name: 'Custom Undangan Premium', category: 'Custom', price: 100000, image: '' },
  { code: '012', name: 'Undangan Pernikahan 3D', category: 'Pernikahan', price: 120000, image: '' },
  { code: '013', name: 'Undangan Khitan Warna Cerah', category: 'Khitan', price: 48000, image: '' },
  { code: '014', name: 'Undangan Wisuda Klasik', category: 'Wisuda', price: 58000, image: '' },
  { code: '015', name: 'Undangan Ulang Tahun Remaja', category: 'Ulang Tahun', price: 42000, image: '' },
  { code: '016', name: 'Custom Undangan Standar', category: 'Custom', price: 70000, image: '' },
  { code: '017', name: 'Undangan Pernikahan Floral', category: 'Pernikahan', price: 88000, image: '' },
  { code: '018', name: 'Undangan Khitan Tradisional', category: 'Khitan', price: 46000, image: '' },
  { code: '019', name: 'Undangan Wisuda Modern', category: 'Wisuda', price: 62000, image: '' },
  { code: '020', name: 'Undangan Ulang Tahun Premium', category: 'Ulang Tahun', price: 48000, image: '' },
  { code: '021', name: 'Custom Undangan Unik', category: 'Custom', price: 85000, image: '' },
  { code: '022', name: 'Undangan Pernikahan Romantic', category: 'Pernikahan', price: 90000, image: '' },
  { code: '023', name: 'Undangan Khitan Berwarna', category: 'Khitan', price: 52000, image: '' },
  { code: '024', name: 'Undangan Wisuda Profesional', category: 'Wisuda', price: 65000, image: '' },
  { code: '025', name: 'Undangan Ulang Tahun Tema', category: 'Ulang Tahun', price: 45000, image: '' },
  { code: '026', name: 'Custom Undangan Eksklusif', category: 'Custom', price: 110000, image: '' },
  { code: '027', name: 'Undangan Pernikahan Mewah', category: 'Pernikahan', price: 125000, image: '' },
  { code: '028', name: 'Undangan Khitan Cantik', category: 'Khitan', price: 49000, image: '' },
  { code: '029', name: 'Undangan Wisuda Berkualitas', category: 'Wisuda', price: 60000, image: '' },
  { code: '030', name: 'Undangan Ulang Tahun Spesial', category: 'Ulang Tahun', price: 50000, image: '' },
  { code: '031', name: 'Custom Undangan Berkelas', category: 'Custom', price: 95000, image: '' },
  { code: '032', name: 'Undangan Pernikahan Artistik', category: 'Pernikahan', price: 92000, image: '' },
  { code: '033', name: 'Undangan Khitan Modern Style', category: 'Khitan', price: 51000, image: '' },
  { code: '034', name: 'Undangan Wisuda Elegan', category: 'Wisuda', price: 63000, image: '' },
  { code: '035', name: 'Undangan Ulang Tahun Kreatif', category: 'Ulang Tahun', price: 46000, image: '' },
  { code: '036', name: 'Custom Undangan Istimewa', category: 'Custom', price: 88000, image: '' },
  { code: '037', name: 'Undangan Pernikahan Klasik', category: 'Pernikahan', price: 87000, image: '' },
  { code: '038', name: 'Undangan Khitan Bersinar', category: 'Khitan', price: 53000, image: '' },
  { code: '039', name: 'Undangan Wisuda Berkelas', category: 'Wisuda', price: 64000, image: '' },
  { code: '040', name: 'Undangan Ulang Tahun Meriah', category: 'Ulang Tahun', price: 47000, image: '' },
  { code: '041', name: 'Custom Undangan Pilihan', category: 'Custom', price: 92000, image: '' },
  { code: '042', name: 'Undangan Pernikahan Cantik', category: 'Pernikahan', price: 89000, image: '' },
  { code: '043', name: 'Undangan Khitan Pilihan', category: 'Khitan', price: 54000, image: '' },
  { code: '044', name: 'Undangan Wisuda Indah', category: 'Wisuda', price: 65000, image: '' },
  { code: '045', name: 'Undangan Ulang Tahun Ceria', category: 'Ulang Tahun', price: 48000, image: '' },
  { code: '046', name: 'Custom Undangan Spesial', category: 'Custom', price: 96000, image: '' },
  { code: '047', name: 'Undangan Pernikahan Istimewa', category: 'Pernikahan', price: 91000, image: '' },
  { code: '048', name: 'Undangan Khitan Berkualitas', category: 'Khitan', price: 55000, image: '' },
  { code: '049', name: 'Undangan Wisuda Istimewa', category: 'Wisuda', price: 66000, image: '' },
  { code: '050', name: 'Undangan Ulang Tahun Gemilang', category: 'Ulang Tahun', price: 49000, image: '' },
  { code: '051', name: 'Custom Undangan Mewah', category: 'Custom', price: 100000, image: '' },
  { code: '052', name: 'Undangan Pernikahan Indah', category: 'Pernikahan', price: 93000, image: '' },
  { code: '053', name: 'Undangan Khitan Istimewa', category: 'Khitan', price: 56000, image: '' },
  { code: '054', name: 'Undangan Wisuda Premium', category: 'Wisuda', price: 67000, image: '' },
  { code: '055', name: 'Undangan Ulang Tahun Inovatif', category: 'Ulang Tahun', price: 50000, image: '' },
  { code: '056', name: 'Custom Undangan Premium Plus', category: 'Custom', price: 105000, image: '' },
  { code: '057', name: 'Undangan Pernikahan Spektakuler', category: 'Pernikahan', price: 95000, image: '' },
  { code: '058', name: 'Undangan Khitan Gemilang', category: 'Khitan', price: 57000, image: '' },
  { code: '059', name: 'Undangan Wisuda Megah', category: 'Wisuda', price: 68000, image: '' },
  { code: '060', name: 'Undangan Ulang Tahun Istimewa', category: 'Ulang Tahun', price: 51000, image: '' },
  { code: '061', name: 'Custom Undangan Eksklusif Plus', category: 'Custom', price: 110000, image: '' },
  { code: '062', name: 'Undangan Pernikahan Mewah Plus', category: 'Pernikahan', price: 97000, image: '' },
  { code: '063', name: 'Undangan Khitan Mewah', category: 'Khitan', price: 58000, image: '' },
  { code: '064', name: 'Undangan Wisuda Spektakuler', category: 'Wisuda', price: 69000, image: '' },
  { code: '065', name: 'Undangan Ulang Tahun Mewah', category: 'Ulang Tahun', price: 52000, image: '' },
  { code: '066', name: 'Custom Undangan Maksimal', category: 'Custom', price: 115000, image: '' },
  { code: '067', name: 'Undangan Pernikahan Elegan Plus', category: 'Pernikahan', price: 99000, image: '' },
  { code: '068', name: 'Undangan Khitan Spektakuler', category: 'Khitan', price: 59000, image: '' },
  { code: '069', name: 'Undangan Wisuda Eksklusif', category: 'Wisuda', price: 70000, image: '' },
  { code: '070', name: 'Undangan Ulang Tahun Eksklusif', category: 'Ulang Tahun', price: 53000, image: '' },
  { code: '071', name: 'Custom Undangan Terbaik', category: 'Custom', price: 120000, image: '' },
  { code: '072', name: 'Undangan Pernikahan Romantis Plus', category: 'Pernikahan', price: 101000, image: '' },
  { code: '073', name: 'Undangan Khitan Istimewa Plus', category: 'Khitan', price: 60000, image: '' },
  { code: '074', name: 'Undangan Wisuda Eksklusif Plus', category: 'Wisuda', price: 71000, image: '' },
  { code: '075', name: 'Undangan Ulang Tahun Spektakuler', category: 'Ulang Tahun', price: 54000, image: '' },
  { code: '076', name: 'Custom Undangan All Premium', category: 'Custom', price: 125000, image: '' },
  { code: '077', name: 'Undangan Pernikahan Deluxe', category: 'Pernikahan', price: 103000, image: '' },
  { code: '078', name: 'Undangan Khitan Mewah Plus', category: 'Khitan', price: 61000, image: '' },
  { code: '079', name: 'Undangan Wisuda Premium Plus', category: 'Wisuda', price: 72000, image: '' },
  { code: '080', name: 'Undangan Ulang Tahun Deluxe', category: 'Ulang Tahun', price: 55000, image: '' },
  { code: '081', name: 'Custom Undangan Ultra Premium', category: 'Custom', price: 130000, image: '' },
  { code: '082', name: 'Undangan Pernikahan Gold Edition', category: 'Pernikahan', price: 105000, image: '' },
  { code: '083', name: 'Undangan Khitan Gold Edition', category: 'Khitan', price: 62000, image: '' },
  { code: '084', name: 'Undangan Wisuda Gold Edition', category: 'Wisuda', price: 73000, image: '' },
  { code: '085', name: 'Undangan Ulang Tahun Gold', category: 'Ulang Tahun', price: 56000, image: '' },
  { code: '086', name: 'Custom Undangan Diamond', category: 'Custom', price: 135000, image: '' },
  { code: '087', name: 'Undangan Pernikahan Platinum', category: 'Pernikahan', price: 107000, image: '' },
  { code: '088', name: 'Undangan Khitan Platinum', category: 'Khitan', price: 63000, image: '' },
  { code: '089', name: 'Undangan Wisuda Platinum', category: 'Wisuda', price: 74000, image: '' },
  { code: '090', name: 'Undangan Ulang Tahun Platinum', category: 'Ulang Tahun', price: 57000, image: '' },
  { code: '091', name: 'Custom Undangan Platinum Plus', category: 'Custom', price: 140000, image: '' },
  { code: '092', name: 'Undangan Pernikahan Silver', category: 'Pernikahan', price: 109000, image: '' },
  { code: '093', name: 'Undangan Khitan Silver Edition', category: 'Khitan', price: 64000, image: '' },
  { code: '094', name: 'Undangan Wisuda Silver', category: 'Wisuda', price: 75000, image: '' },
  { code: '095', name: 'Undangan Ulang Tahun Silver', category: 'Ulang Tahun', price: 58000, image: '' },
  { code: '096', name: 'Custom Undangan Silver Premium', category: 'Custom', price: 145000, image: '' },
  { code: '097', name: 'Undangan Pernikahan Bronze', category: 'Pernikahan', price: 111000, image: '' },
  { code: '098', name: 'Undangan Khitan Bronze Edition', category: 'Khitan', price: 65000, image: '' },
  { code: '099', name: 'Undangan Wisuda Bronze', category: 'Wisuda', price: 76000, image: '' },
  { code: '100', name: 'Undangan Ulang Tahun Bronze', category: 'Ulang Tahun', price: 59000, image: '' }
];

// Load products from localStorage
function loadProducts() {
  const stored = localStorage.getItem('products');
  if (stored) {
    products = JSON.parse(stored);
  }
}

// Filter by catalog navbar
function filterByCatalogNav(category, el) {
  document.querySelectorAll('.catalog-nav-item').forEach((item) => {
    item.classList.remove('active');
  });
  if (el) el.classList.add('active');

  const categoryFilter = document.getElementById('categoryFilter');
  if (categoryFilter) categoryFilter.value = category;

  renderProducts();
}

// Render products
function renderProducts() {
  const container = document.getElementById('productsContainer');
  const searchInput = document.getElementById('searchInput');
  const categoryFilter = document.getElementById('categoryFilter');

  if (!container || !searchInput || !categoryFilter) return;

  const searchTerm = searchInput.value.toLowerCase();
  const category = categoryFilter.value;

  const filtered = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm) ||
      product.code.toLowerCase().includes(searchTerm);

    const matchesCategory = !category || product.category === category;
    return matchesSearch && matchesCategory;
  });

  if (filtered.length === 0) {
    container.innerHTML = '<div class="no-results">Tidak ada produk yang sesuai dengan pencarian Anda.</div>';
    return;
  }

  container.innerHTML = filtered
    .map(
      (product) => `
        <div class="product-card">
          <div class="product-image">
            <div class="product-code">${product.code}</div>
            ${
              product.image
                ? `<img src="${product.image}" alt="${product.name}">`
                : '<div style="width: 100%; display: flex; align-items: center; justify-content: center;">📦</div>'
            }
          </div>
          <div class="product-info">
            <div class="product-name">${product.name}</div>
            <div class="product-category">Kategori: ${product.category}</div>
            <div class="product-price">Rp ${product.price.toLocaleString('id-ID')}</div>
            <a
              href="https://wa.me/${WHATSAPP_NUMBER}?text=Halo, saya tertarik dengan produk ${product.code} - ${product.name}."
              target="_blank"
              class="btn-whatsapp"
              rel="noopener"
            >
              <i class="fab fa-whatsapp"></i> Chat via WhatsApp
            </a>
          </div>
        </div>
      `
    )
    .join('');
}

// supaya bisa dipanggil dari onclick di HTML
window.filterByCatalogNav = filterByCatalogNav;

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const categoryFilter = document.getElementById('categoryFilter');

  if (searchInput) searchInput.addEventListener('input', renderProducts);
  if (categoryFilter) categoryFilter.addEventListener('change', renderProducts);

  loadProducts();
  renderProducts();
});
