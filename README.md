# 🚚 TrackingMore App

Aplikasi sederhana untuk tracking resi ekspedisi menggunakan **TrackingMore API**, dibangun dengan:
- HTML + TailwindCSS (frontend)
- Vercel Serverless Function (backend proxy)
- TrackingMore API

---

## 🔧 Setup

### 1. Clone Repo
```bash
git clone https://github.com/username/trackingmore-app.git
cd trackingmore-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Tambahkan API Key
Daftar di [TrackingMore](https://www.trackingmore.com) lalu ambil **API Key**.  
Masukkan ke environment variable (di local pakai `.env`, di Vercel pakai dashboard):

```
TRACKINGMORE_API_KEY=your_api_key_here
```

### 4. Run di Local
```bash
vercel dev
```

### 5. Deploy ke Vercel
Push repo ke GitHub lalu import ke [Vercel](https://vercel.com).  
Vercel otomatis akan membaca folder `/api/` sebagai serverless functions.

---

## 📂 Struktur Project
```
trackingmore-app/
│
├── index.html          # UI untuk tracking
├── api/
│   └── tracking.js     # Backend proxy ke TrackingMore API
├── package.json        # Dependency
└── README.md           # Dokumentasi
```
