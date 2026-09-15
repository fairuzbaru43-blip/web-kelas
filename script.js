
const SCHEDULE = {
  senin: [
    { time: "07.00 - 07.30", subject: "Upacara / Apel Kedisiplinan", teacher: "Tim Kesiswaan", room: "Lapangan" },
    { time: "07.30 - 08.45", subject: "Pendidikan Pancasila dan Kewarganegaraan", teacher: "Hermin Susilowati, S.Pd", room: "Kelas X RPL 1" },
    { time: "08.45 - 09.55", subject: "Pendidikan Jasmani, Olah Raga dan Kesehatan", teacher: "Kurniawan Rojali, S.Pd", room: "Lapangan" },
    { time: "09.55 - 10.10", subject: "Istirahat", teacher: "-", room: "-" },
    { time: "10.10 - 11.15", subject: "Projek IPA dan Sosial", teacher: "Mudlofar, S.Pd", room: "Kelas X RPL 1" },
    { time: "11.15 - 12.30", subject: "Ishoma", teacher: "-", room: "-" },
    { time: "12.30 - 13.05", subject: "Projek IPA dan Sosial", teacher: "Mudlofar, S.Pd", room: "Kelas X RPL 1" },
    { time: "13.05 - 13.40", subject: "Bimbingan Konseling", teacher: "M. Azif Nabbieh N.F., S.Pd", room: "Kelas X RPL 1" },
    { time: "13.40 - 15.00", subject: "Seni Budaya", teacher: "Achmad Salahuddin, S.Sn", room: "Kelas X RPL 1" },
  ],
  selasa: [
    { time: "07.00 - 07.15", subject: "Pembiasaan", teacher: "Wali Kelas", room: "Kelas X RPL 1" },
    { time: "07.15 - 09.55", subject: "Ekstra Kurikuler Pramuka", teacher: "Pembina Pramuka", room: "Lapangan / Kelas" },
    { time: "09.55 - 10.10", subject: "Istirahat", teacher: "-", room: "-" },
    { time: "10.10 - 11.15", subject: "Bahasa Inggris", teacher: "Sulistiawati, S.Pd", room: "Kelas X RPL 1" },
    { time: "11.15 - 12.30", subject: "Ishoma", teacher: "-", room: "-" },
    { time: "12.30 - 13.40", subject: "Informatika", teacher: "Amrik Puwara Juwita, S.Pd", room: "Lab RPL" },
    { time: "13.40 - 15.00", subject: "Koding dan Kecerdasan Artifisial", teacher: "Amrik Puwara Juwita, S.Pd", room: "Lab RPL" },
  ],
  rabu: [
    { time: "07.00 - 07.15", subject: "Pembiasaan", teacher: "Wali Kelas", room: "Kelas X RPL 1" },
    { time: "07.15 - 09.55", subject: "Dasar-Dasar Program Keahlian", teacher: "Bhertha Kristiana, ST", room: "Lab RPL" },
    { time: "09.55 - 10.10", subject: "Istirahat", teacher: "-", room: "-" },
    { time: "10.10 - 10.45", subject: "Dasar-Dasar Program Keahlian", teacher: "Bhertha Kristiana, ST", room: "Lab RPL" },
    { time: "10.45 - 11.15", subject: "Dasar-Dasar Program Keahlian", teacher: "Zulfa Candraningrum, S.Pd", room: "Lab RPL" },
    { time: "11.15 - 12.30", subject: "Ishoma", teacher: "-", room: "-" },
    { time: "12.30 - 15.00", subject: "Dasar-Dasar Program Keahlian", teacher: "Zulfa Candraningrum, S.Pd", room: "Lab RPL" },
  ],
  kamis: [
    { time: "07.00 - 07.15", subject: "Pembiasaan", teacher: "Wali Kelas", room: "Kelas X RPL 1" },
    { time: "07.15 - 08.35", subject: "Bahasa Inggris", teacher: "Sulistiawati, S.Pd", room: "Kelas X RPL 1" },
    { time: "08.35 - 09.55", subject: "Sejarah Indonesia", teacher: "Nuzul Satriawan, S.Pd", room: "Kelas X RPL 1" },
    { time: "09.55 - 10.10", subject: "Istirahat", teacher: "-", room: "-" },
    { time: "10.10 - 11.15", subject: "Bahasa Jawa", teacher: "Anik Nur Rosidah, S.Pd", room: "Kelas X RPL 1" },
    { time: "11.15 - 12.30", subject: "Ishoma", teacher: "-", room: "-" },
    { time: "12.30 - 13.40", subject: "Matematika", teacher: "Heru Prabawa, S.Pd", room: "Kelas X RPL 1" },
    { time: "13.40 - 15.00", subject: "Bahasa Indonesia", teacher: "Onny Noormala Y., S.Pd", room: "Kelas X RPL 1" },
  ],
  jumat: [
    { time: "07.00 - 07.15", subject: "Pembiasaan", teacher: "Wali Kelas", room: "Kelas X RPL 1" },
    { time: "07.15 - 09.15", subject: "Pendidikan Agama dan Budi Pekerti", teacher: "Muhammad Sirojudin N, S.Ag", room: "Musala" },
    { time: "09.15 - 09.55", subject: "Projek IPA dan Sosial", teacher: "Mudlofar, S.Pd", room: "Kelas X RPL 1" },
    { time: "09.55 - 10.10", subject: "Istirahat", teacher: "-", room: "-" },
    { time: "10.10 - 11.15", subject: "Projek IPA dan Sosial", teacher: "Mudlofar, S.Pd", room: "Kelas X RPL 1" },
    { time: "11.15 - 12.30", subject: "Sholat Jum'at / Ishoma", teacher: "-", room: "Musala" },
    { time: "12.30 - 13.40", subject: "Matematika", teacher: "Heru Prabawa, S.Pd", room: "Kelas X RPL 1" },
    { time: "13.40 - 15.00", subject: "Bahasa Indonesia", teacher: "Onny Noormala Y., S.Pd", room: "Kelas X RPL 1" },
  ],
};

// Daftar orang yang diperbolehkan masuk. Ganti atau tambahkan akun sesuai kebutuhan.
// Catatan: untuk perlindungan data sungguhan, pindahkan autentikasi ke backend.
const ALLOWED_USERS = {
  "x rpl 1": { password: "Admin!RPL_26#Kelas", name: "X RPL 1", role: "admin" },
  siswa: { password: "", name: "Siswa X RPL 1", role: "member" },
};
const AUTH_SESSION_KEY = "x-rpl-1-authenticated-user";
const AUTH_SESSION_ID_KEY = "x-rpl-1-session-id";
const ACTIVE_SESSION_KEY_PREFIX = "x-rpl-1-active-session-";
const IDLE_TIMEOUT_MS = 15 * 60 * 1000;
const SESSION_REFRESH_MS = 30 * 1000;

const DUTY_SCHEDULE = {
  senin: ["Aditya", "Aqila", "Alviano", "Helmi", "Arvino", "Gadaffi", "Fairus", "Hazel"],
  selasa: ["Fridilan", "Anastasya", "Alya", "Aldino", "Bima", "Juniko", "Ferdyan"],
  rabu: ["Ardhan", "Dimas", "Kevin", "Ahmad", "Fredhika", "Fadhila", "Amrizal"],
  kamis: ["Arezha", "Fico", "Dhiya", "Abyan", "Cikho", "Indra", "Ibnu"],
  jumat: ["Andika", "Keyvin", "Andri", "Alvian", "Ibra", "Ashrori", "Alvin"],
};

const DEFAULT_ANNOUNCEMENTS = [
  { date: "10 Agu 2026", title: "Libur Upacara Kemerdekaan", body: "Upacara HUT RI dilaksanakan Senin, 17 Agustus di lapangan utama. Wajib pakai seragam lengkap dan datang 06.30." },
  { date: "8 Agu 2026", title: "Pengumpulan Iuran Kas", body: "Iuran kas kelas bulan Agustus dikumpulkan ke bendahara paling lambat Jumat ini." },
  { date: "5 Agu 2026", title: "Jadwal Ulangan Harian Fisika", body: "Ulangan harian Bab 3 (Gerak Lurus) dilaksanakan Rabu depan, materi dari LKS hal. 30–48." },
  { date: "3 Agu 2026", title: "Piket Kelas Diperbarui", body: "Jadwal piket minggu ini sudah ditempel di grup WhatsApp kelas, cek dan sesuaikan jika ada yang bentrok." },
];

const DEFAULT_GALLERY = [
  { emoji: "🧪", caption: "Praktikum Kimia — Titrasi", color: "#7fa8a3" },
  { emoji: "🏐", caption: "Turnamen Voli Antar Kelas", color: "#e8664a" },
  { emoji: "🎨", caption: "Pameran Seni Rupa", color: "#f2c14e" },
  { emoji: "📚", caption: "Belajar Kelompok di Perpustakaan", color: "#1e3a2f" },
  { emoji: "🎉", caption: "Perayaan HUT Sekolah", color: "#e8664a" },
  { emoji: "🔬", caption: "Praktikum Biologi — Mikroskop", color: "#7fa8a3" },
];

const ANNOUNCEMENTS_STORAGE_KEY = "x-rpl-1-announcements";
const GALLERY_STORAGE_KEY = "x-rpl-1-gallery";

function readContent(key, fallback) {
  try {
    const saved = JSON.parse(localStorage.getItem(key));
    return Array.isArray(saved) ? saved : fallback;
  } catch {
    return fallback;
  }
}

let announcements = readContent(ANNOUNCEMENTS_STORAGE_KEY, DEFAULT_ANNOUNCEMENTS);
let gallery = readContent(GALLERY_STORAGE_KEY, DEFAULT_GALLERY);

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character]);
}

const MEMBERS = [
  { name: "Kurniawan Rojali, S.Pd", role: "Wali Kelas", initials: "KR" },
  { name: "Juniko", role: "Ketua Kelas", initials: "AP" },
  { name: "Fridilan", role: "Wakil Ketua", initials: "FR" },
  { name: "Andri Haryo", role: "Sekretaris 1", initials: "AH" },
  { name: "Aqila", role: "Sekretaris 2", initials: "AQ" },
  { name: "Anastasya", role: "Bendahara 1", initials: "AN" },
  { name: "Alya", role: "Bendahara 2", initials: "AL" },
];

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const sections = document.querySelectorAll("main > section, .hero");
const navLinkEls = document.querySelectorAll(".nav-link");

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute("id");
      navLinkEls.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
      });
    }
  });
}, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

sections.forEach(section => sectionObserver.observe(section));

const dayTabs = document.getElementById("dayTabs");
const scheduleBody = document.getElementById("scheduleBody");

function parseStartHour(timeRange) {
  const startPart = timeRange.split(/–|-/)[0].trim();
  const [h, m] = startPart.split(".").map(Number);
  return h * 60 + m;
}
function parseEndHour(timeRange) {
  const endPart = timeRange.split(/–|-/)[1].trim();
  const [h, m] = endPart.split(".").map(Number);
  return h * 60 + m;
}

const DAY_MAP = ["minggu", "senin", "selasa", "rabu", "kamis", "jumat", "sabtu"];

function renderSchedule(day) {
  const rows = SCHEDULE[day] || [];
  const now = new Date();
  const nowMinutes = now.getHours() * 60 + now.getMinutes();
  const todayKey = DAY_MAP[now.getDay()];

  scheduleBody.innerHTML = rows.map(row => {
    const isNow = day === todayKey &&
      nowMinutes >= parseStartHour(row.time) &&
      nowMinutes <= parseEndHour(row.time);
    return `
      <tr class="${isNow ? "is-now" : ""}">
        <td>${row.time}</td>
        <td>
          <span class="subject-name">${row.subject}</span>
        </td>
        <td>${row.teacher}</td>
        <td>${row.room}</td>
      </tr>
    `;
  }).join("") || `<tr><td colspan="4" style="text-align:center; color:var(--ink-fade); padding:28px;">Tidak ada jadwal.</td></tr>`;
}

dayTabs.addEventListener("click", (e) => {
  const btn = e.target.closest(".day-tab");
  if (!btn) return;
  dayTabs.querySelectorAll(".day-tab").forEach(t => t.classList.remove("active"));
  btn.classList.add("active");
  renderSchedule(btn.dataset.day);
});

// Buka otomatis ke hari ini kalau tersedia, kalau tidak default Senin
(function initScheduleDay() {
  const now = new Date();
  const todayKey = DAY_MAP[now.getDay()];
  const targetBtn = dayTabs.querySelector(`[data-day="${todayKey}"]`) || dayTabs.querySelector(`[data-day="senin"]`);
  dayTabs.querySelectorAll(".day-tab").forEach(t => t.classList.remove("active"));
  targetBtn.classList.add("active");
  renderSchedule(targetBtn.dataset.day);
})();

const dutyTabs = document.getElementById("dutyTabs");
const dutyMembers = document.getElementById("dutyMembers");
const dutyDayTitle = document.getElementById("dutyDayTitle");
const DAY_LABELS = { senin: "Senin", selasa: "Selasa", rabu: "Rabu", kamis: "Kamis", jumat: "Jumat" };

function renderDuty(day) {
  const members = DUTY_SCHEDULE[day] || [];
  dutyDayTitle.textContent = `Piket Hari ${DAY_LABELS[day]}`;
  dutyMembers.innerHTML = members.map((name, index) => `
    <div class="duty-member"><span>${String(index + 1).padStart(2, "0")}</span>${name}</div>
  `).join("") || '<p class="duty-empty">Belum ada petugas piket.</p>';
}

dutyTabs.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-duty-day]");
  if (!btn) return;
  dutyTabs.querySelectorAll(".day-tab").forEach(tab => tab.classList.remove("active"));
  btn.classList.add("active");
  renderDuty(btn.dataset.dutyDay);
});

(function initDutyDay() {
  const todayKey = DAY_MAP[new Date().getDay()];
  const targetBtn = dutyTabs.querySelector(`[data-duty-day="${todayKey}"]`) || dutyTabs.querySelector('[data-duty-day="senin"]');
  dutyTabs.querySelectorAll(".day-tab").forEach(tab => tab.classList.remove("active"));
  targetBtn.classList.add("active");
  renderDuty(targetBtn.dataset.dutyDay);
})();

const corkboard = document.getElementById("corkboard");

function renderAnnouncements() {
  corkboard.innerHTML = announcements.map(item => `
    <article class="note">
      <span class="note-date">${escapeHtml(item.date)}</span>
      <h3 class="note-title">${escapeHtml(item.title)}</h3>
      <p class="note-body">${escapeHtml(item.body)}</p>
    </article>
  `).join("");
}

renderAnnouncements();

const galleryGrid = document.getElementById("galleryGrid");
const lightbox = document.getElementById("lightbox");
const lightboxPhoto = document.getElementById("lightboxPhoto");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");

function renderGallery() {
  galleryGrid.innerHTML = gallery.map((item, i) => {
  const photoContent = item.image 
    ? `<img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.caption)}" class="gallery-img">`
    : `<div class="gallery-photo" style="background:${item.color || 'var(--board-deep)'};">${item.emoji || '📸'}</div>`;
  
  return `
    <button class="gallery-item" data-index="${i}">
      ${photoContent}
      <span class="gallery-caption">${escapeHtml(item.caption)}</span>
    </button>
  `;
  }).join("");
}

renderGallery();

galleryGrid.addEventListener("click", (e) => {
  const btn = e.target.closest(".gallery-item");
  if (!btn) return;
  const item = gallery[Number(btn.dataset.index)];
  
  if (item.image) {
    lightboxPhoto.style.background = "none";
    lightboxPhoto.innerHTML = `<img src="${item.image}" alt="${item.caption}" class="lightbox-img">`;
  } else {
    lightboxPhoto.style.background = item.color || "var(--board-deep)";
    lightboxPhoto.innerHTML = item.emoji || "📸";
  }
  
  lightboxCaption.textContent = item.caption;
  lightbox.classList.add("open");
});

lightboxClose.addEventListener("click", () => lightbox.classList.remove("open"));
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) lightbox.classList.remove("open");
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") lightbox.classList.remove("open");
});

const memberGrid = document.getElementById("memberGrid");

memberGrid.innerHTML = MEMBERS.map(member => `
  <div class="member-card">
    <div class="member-avatar">${member.initials}</div>
    <p class="member-name">${member.name}</p>
    <span class="member-role">${member.role}</span>
  </div>
`).join("");

document.getElementById("toTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const themeToggle = document.getElementById("themeToggle");
const themeText = document.getElementById("themeText");

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  if (themeText) {
    themeText.textContent = theme === "dark" ? "Mode Terang" : "Mode Malam";
  }
}

function initTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark" || savedTheme === "light") {
    applyTheme(savedTheme);
  } else {
    applyTheme("light");
  }
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  });
}

initTheme();

const loginScreen = document.getElementById("loginScreen");
const siteContent = document.getElementById("siteContent");
const loginForm = document.getElementById("loginForm");
const loginError = document.getElementById("loginError");
const logoutButton = document.getElementById("logoutButton");
const passwordToggle = document.getElementById("passwordToggle");
const loginPassword = document.getElementById("loginPassword");
const loginUsername = document.getElementById("loginUsername");
const adminBadge = document.getElementById("adminBadge");

// Elemen Pilihan Peran Login (Opsi 2)
const roleSelectionGroup = document.getElementById("roleSelectionGroup");
const adminCredentialsGroup = document.getElementById("adminCredentialsGroup");
const studentLoginBtn = document.getElementById("studentLoginBtn");
const adminToggleBtn = document.getElementById("adminToggleBtn");
const adminBackButton = document.getElementById("adminBackButton");
const loginTitle = document.getElementById("loginTitle");
const loginDesc = document.getElementById("loginDesc");

let idleTimer;
let lastActivityAt = 0;
let isAdminLoginMode = false;
let editingAnnouncementIndex = -1;
let editingGalleryIndex = -1;

function setAdminLoginMode(enabled) {
  isAdminLoginMode = enabled;
  loginError.textContent = "";
  
  if (enabled) {
    roleSelectionGroup.hidden = true;
    adminCredentialsGroup.hidden = false;
    loginTitle.textContent = "Login sebagai Admin";
    loginDesc.textContent = "Masukkan akun admin untuk mengelola papan kelas X RPL 1.";
    
    // Aktifkan required agar divalidasi browser saat submit
    loginUsername.required = true;
    loginPassword.required = true;
    loginUsername.focus();
  } else {
    roleSelectionGroup.hidden = false;
    adminCredentialsGroup.hidden = true;
    loginTitle.textContent = "Masuk ke papan kelas";
    loginDesc.textContent = "Selamat datang di papan kelas X RPL 1. Halaman ini dapat diakses oleh semua pengunjung.";
    
    // Nonaktifkan required saat mode siswa/pilihan peran agar tidak menghambat form
    loginUsername.required = false;
    loginPassword.required = false;
    loginForm.reset();
  }
}

function getSessionId() {
  let sessionId = sessionStorage.getItem(AUTH_SESSION_ID_KEY);
  if (!sessionId) {
    sessionId = typeof crypto.randomUUID === "function"
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    sessionStorage.setItem(AUTH_SESSION_ID_KEY, sessionId);
  }
  return sessionId;
}

function getActiveSessionKey(username) {
  return `${ACTIVE_SESSION_KEY_PREFIX}${username}`;
}

function getActiveSession(username = sessionStorage.getItem(AUTH_SESSION_KEY)) {
  if (!username) return null;
  try {
    return JSON.parse(localStorage.getItem(getActiveSessionKey(username)));
  } catch {
    return null;
  }
}

function isSessionExpired(session) {
  return !session || Date.now() - session.lastActivity > IDLE_TIMEOUT_MS;
}

function clearAuthentication() {
  const username = sessionStorage.getItem(AUTH_SESSION_KEY);
  const activeSession = getActiveSession();
  if (username && activeSession && activeSession.username === username && (username === "siswa" || activeSession.sessionId === getSessionId())) {
    localStorage.removeItem(getActiveSessionKey(username));
  }
  sessionStorage.removeItem(AUTH_SESSION_KEY);
  window.clearTimeout(idleTimer);
}

function showLogin(message = "") {
  clearAuthentication();
  siteContent.hidden = true;
  loginScreen.hidden = false;
  document.body.style.overflow = "hidden";
  loginForm.reset();
  setAdminLoginMode(false);
  loginError.textContent = message;
  
  const adminPanel = document.getElementById("adminPanel");
  if (adminPanel) adminPanel.hidden = true;
}

function endIdleSession() {
  showLogin("Anda keluar otomatis karena tidak ada aktivitas selama 15 menit.");
}

function refreshIdleTimer() {
  window.clearTimeout(idleTimer);
  idleTimer = window.setTimeout(endIdleSession, IDLE_TIMEOUT_MS);
}

function recordActivity() {
  const username = sessionStorage.getItem(AUTH_SESSION_KEY);
  if (!username || loginScreen.hidden === false) return;

  const now = Date.now();
  if (now - lastActivityAt < 1000) return;
  lastActivityAt = now;

  const activeSession = getActiveSession(username);
  
  // Lewati verifikasi session ID unik jika perannya adalah siswa biasa
  if (username !== "siswa") {
    if (!activeSession || activeSession.sessionId !== getSessionId()) {
      showLogin("Sesi Anda berakhir karena akun ini digunakan di tempat lain.");
      return;
    }
  }

  localStorage.setItem(getActiveSessionKey(username), JSON.stringify({
    username,
    sessionId: getSessionId(),
    lastActivity: now,
  }));
  refreshIdleTimer();
}

function showSite() {
  loginScreen.hidden = true;
  siteContent.hidden = false;
  document.body.style.overflow = "";
  const username = sessionStorage.getItem(AUTH_SESSION_KEY);
  const isAdmin = ALLOWED_USERS[username]?.role === "admin";
  adminBadge.hidden = !isAdmin;
  
  const adminPanel = document.getElementById("adminPanel");
  if (adminPanel) {
    adminPanel.hidden = !isAdmin;
  }
  
  if (isAdmin) {
    renderAdminAnnouncements();
    renderAdminGallery();
  }
  
  lastActivityAt = 0;
  recordActivity();
}

function initAuthentication() {
  const savedUsername = sessionStorage.getItem(AUTH_SESSION_KEY);
  const activeSession = getActiveSession(savedUsername);
  
  if (savedUsername && ALLOWED_USERS[savedUsername]) {
    if (savedUsername === "siswa") {
      // Siswa tidak divalidasi session ID uniknya
      if (!isSessionExpired(activeSession)) {
        showSite();
        return;
      }
    } else {
      // Admin/member biasa divalidasi session ID-nya
      if (activeSession?.username === savedUsername && activeSession.sessionId === getSessionId() && !isSessionExpired(activeSession)) {
        showSite();
        return;
      }
    }
  }
  showLogin();
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(loginForm);
  const username = String(formData.get("username") || "").trim().toLowerCase();
  const password = String(formData.get("password") || "").trim();
  const user = ALLOWED_USERS[username];

  if (!user || user.password !== password) {
    loginError.textContent = "Nama pengguna atau kata sandi tidak sesuai.";
    loginPassword.value = "";
    loginPassword.focus();
    return;
  }

  if (isAdminLoginMode && user.role !== "admin") {
    loginError.textContent = "Akun ini tidak memiliki akses admin.";
    loginPassword.value = "";
    loginPassword.focus();
    return;
  }

  const activeSession = getActiveSession(username);
  if (activeSession && !isSessionExpired(activeSession) && activeSession.username === username && activeSession.sessionId !== getSessionId()) {
    loginError.textContent = "Username ini sedang digunakan pada perangkat atau browser lain.";
    loginPassword.value = "";
    loginPassword.focus();
    return;
  }

  sessionStorage.setItem(AUTH_SESSION_KEY, username);
  localStorage.setItem(getActiveSessionKey(username), JSON.stringify({
    username,
    sessionId: getSessionId(),
    lastActivity: Date.now(),
  }));
  showSite();
});

passwordToggle.addEventListener("click", () => {
  const isVisible = loginPassword.type === "text";
  loginPassword.type = isVisible ? "password" : "text";
  passwordToggle.textContent = isVisible ? "Lihat" : "Sembunyi";
  passwordToggle.setAttribute("aria-label", isVisible ? "Perlihatkan kata sandi" : "Sembunyikan kata sandi");
  passwordToggle.setAttribute("aria-pressed", String(!isVisible));
});

// Listener baru untuk Opsi 2
studentLoginBtn.addEventListener("click", () => {
  const username = "siswa";
  sessionStorage.setItem(AUTH_SESSION_KEY, username);
  localStorage.setItem(getActiveSessionKey(username), JSON.stringify({
    username,
    sessionId: getSessionId(),
    lastActivity: Date.now(),
  }));
  showSite();
});

adminToggleBtn.addEventListener("click", () => {
  setAdminLoginMode(true);
});

adminBackButton.addEventListener("click", () => {
  setAdminLoginMode(false);
});

logoutButton.addEventListener("click", () => {
  showLogin();
});

// Aktivitas pengguna memperpanjang sesi; tanpa aktivitas selama 15 menit sesi berakhir.
["pointerdown", "keydown", "scroll", "touchstart"].forEach((eventName) => {
  document.addEventListener(eventName, recordActivity, { passive: true });
});

window.addEventListener("storage", (event) => {
  if (!event.key?.startsWith(ACTIVE_SESSION_KEY_PREFIX)) return;
  const username = sessionStorage.getItem(AUTH_SESSION_KEY);
  if (username === "siswa") return; // bypass siswa dari storage event listener
  const activeSession = getActiveSession(username);
  if (username && (!activeSession || activeSession.sessionId !== getSessionId())) {
    showLogin("Sesi Anda berakhir karena akun ini digunakan di tempat lain.");
  }
});

window.setInterval(() => {
  const username = sessionStorage.getItem(AUTH_SESSION_KEY);
  const activeSession = getActiveSession(username);
  if (!username) return;
  if (isSessionExpired(activeSession)) {
    endIdleSession();
  } else if (username !== "siswa" && (!activeSession || activeSession.sessionId !== getSessionId())) {
    showLogin("Sesi Anda berakhir karena akun ini digunakan di tempat lain.");
  }
}, SESSION_REFRESH_MS);

/* ==========================================================================
   ADMIN PANEL EVENT LISTENERS & CRUD FUNCTIONS
   ========================================================================== */

function renderAdminAnnouncements() {
  const adminAnnouncementList = document.getElementById("adminAnnouncementList");
  if (!adminAnnouncementList) return;
  
  adminAnnouncementList.innerHTML = announcements.map((item, index) => `
    <div class="admin-list-item">
      <div class="admin-item-content">
        <h5 class="admin-item-title">${escapeHtml(item.title)}</h5>
        <div class="admin-item-meta">${escapeHtml(item.date)}</div>
      </div>
      <div class="admin-item-actions">
        <button class="admin-btn-action admin-btn-edit" onclick="editAnnouncement(${index})" title="Edit" type="button">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4z"></path>
          </svg>
        </button>
        <button class="admin-btn-action admin-btn-delete" onclick="deleteAnnouncement(${index})" title="Hapus" type="button">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
        </button>
      </div>
    </div>
  `).join("");
}

window.editAnnouncement = function(index) {
  const item = announcements[index];
  if (!item) return;
  
  editingAnnouncementIndex = index;
  const form = document.getElementById("newAnnouncementForm");
  if (!form) return;
  
  form.date.value = item.date;
  form.title.value = item.title;
  form.body.value = item.body;
  
  const header = form.querySelector("h4");
  if (header) header.textContent = "Edit pengumuman";
  
  const submitBtn = form.querySelector("button[type='submit']");
  if (submitBtn) submitBtn.textContent = "Simpan Perubahan";
  
  let cancelBtn = form.querySelector(".admin-btn-cancel");
  if (!cancelBtn) {
    cancelBtn = document.createElement("button");
    cancelBtn.type = "button";
    cancelBtn.className = "admin-btn-cancel";
    cancelBtn.textContent = "Batal Edit";
    cancelBtn.onclick = window.cancelEditAnnouncement;
    form.querySelector(".admin-form-buttons") 
      ? form.querySelector(".admin-form-buttons").appendChild(cancelBtn)
      : form.appendChild(cancelBtn);
  }
};

window.cancelEditAnnouncement = function() {
  editingAnnouncementIndex = -1;
  const form = document.getElementById("newAnnouncementForm");
  if (!form) return;
  
  form.reset();
  
  const header = form.querySelector("h4");
  if (header) header.textContent = "Tambah pengumuman";
  
  const submitBtn = form.querySelector("button[type='submit']");
  if (submitBtn) submitBtn.textContent = "Tambah pengumuman";
  
  const cancelBtn = form.querySelector(".admin-btn-cancel");
  if (cancelBtn) cancelBtn.remove();
};

window.deleteAnnouncement = function(index) {
  if (confirm("Apakah Anda yakin ingin menghapus pengumuman ini?")) {
    announcements.splice(index, 1);
    localStorage.setItem(ANNOUNCEMENTS_STORAGE_KEY, JSON.stringify(announcements));
    renderAnnouncements();
    renderAdminAnnouncements();
    
    if (editingAnnouncementIndex === index) {
      window.cancelEditAnnouncement();
    } else if (editingAnnouncementIndex > index) {
      editingAnnouncementIndex--;
    }
  }
};

function renderAdminGallery() {
  const adminGalleryList = document.getElementById("adminGalleryList");
  if (!adminGalleryList) return;
  
  adminGalleryList.innerHTML = gallery.map((item, index) => {
    const preview = item.emoji || "📸";
    return `
      <div class="admin-list-item">
        <div class="admin-item-content">
          <h5 class="admin-item-title">${escapeHtml(item.caption)}</h5>
          <div class="admin-item-meta">${escapeHtml(preview)}</div>
        </div>
        <div class="admin-item-actions">
          <button class="admin-btn-action admin-btn-edit" onclick="editGallery(${index})" title="Edit" type="button">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4z"></path>
            </svg>
          </button>
          <button class="admin-btn-action admin-btn-delete" onclick="deleteGallery(${index})" title="Hapus" type="button">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
          </button>
        </div>
      </div>
    `;
  }).join("");
}

window.editGallery = function(index) {
  const item = gallery[index];
  if (!item) return;
  
  editingGalleryIndex = index;
  const form = document.getElementById("newGalleryForm");
  if (!form) return;
  
  form.caption.value = item.caption;
  form.image.value = item.image || "";
  form.emoji.value = item.emoji || "";
  form.color.value = item.color || "#7fa8a3";
  
  const header = form.querySelector("h4");
  if (header) header.textContent = "Edit galeri";
  
  const submitBtn = form.querySelector("button[type='submit']");
  if (submitBtn) submitBtn.textContent = "Simpan Perubahan";
  
  let cancelBtn = form.querySelector(".admin-btn-cancel");
  if (!cancelBtn) {
    cancelBtn = document.createElement("button");
    cancelBtn.type = "button";
    cancelBtn.className = "admin-btn-cancel";
    cancelBtn.textContent = "Batal Edit";
    cancelBtn.onclick = window.cancelEditGallery;
    form.querySelector(".admin-form-buttons")
      ? form.querySelector(".admin-form-buttons").appendChild(cancelBtn)
      : form.appendChild(cancelBtn);
  }
};

window.cancelEditGallery = function() {
  editingGalleryIndex = -1;
  const form = document.getElementById("newGalleryForm");
  if (!form) return;
  
  form.reset();
  
  const header = form.querySelector("h4");
  if (header) header.textContent = "Tambah galeri";
  
  const submitBtn = form.querySelector("button[type='submit']");
  if (submitBtn) submitBtn.textContent = "Tambah galeri";
  
  const cancelBtn = form.querySelector(".admin-btn-cancel");
  if (cancelBtn) cancelBtn.remove();
};

window.deleteGallery = function(index) {
  if (confirm("Apakah Anda yakin ingin menghapus foto/galeri ini?")) {
    gallery.splice(index, 1);
    localStorage.setItem(GALLERY_STORAGE_KEY, JSON.stringify(gallery));
    renderGallery();
    renderAdminGallery();
    
    if (editingGalleryIndex === index) {
      window.cancelEditGallery();
    } else if (editingGalleryIndex > index) {
      editingGalleryIndex--;
    }
  }
};

const newAnnouncementForm = document.getElementById("newAnnouncementForm");
if (newAnnouncementForm) {
  newAnnouncementForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(newAnnouncementForm);
    const date = formData.get("date").trim();
    const title = formData.get("title").trim();
    const body = formData.get("body").trim();
    
    if (editingAnnouncementIndex === -1) {
      announcements.unshift({ date, title, body });
    } else {
      announcements[editingAnnouncementIndex] = { date, title, body };
    }
    
    localStorage.setItem(ANNOUNCEMENTS_STORAGE_KEY, JSON.stringify(announcements));
    renderAnnouncements();
    renderAdminAnnouncements();
    window.cancelEditAnnouncement();
  });
}

const newGalleryForm = document.getElementById("newGalleryForm");
if (newGalleryForm) {
  newGalleryForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(newGalleryForm);
    const caption = formData.get("caption").trim();
    const image = formData.get("image").trim();
    const emoji = formData.get("emoji").trim();
    const color = formData.get("color");
    
    const item = { caption, image, emoji, color };
    
    if (editingGalleryIndex === -1) {
      gallery.unshift(item);
    } else {
      gallery[editingGalleryIndex] = item;
    }
    
    localStorage.setItem(GALLERY_STORAGE_KEY, JSON.stringify(gallery));
    renderGallery();
    renderAdminGallery();
    window.cancelEditGallery();
  });
}

initAuthentication();
