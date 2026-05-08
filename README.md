# 👥 React User Management with API Integration

A responsive, production-deployed React application that fetches real user data from a REST API and provides a full-featured management interface — including search, sorting, pagination, and detailed modal views.

🔗 **Live Demo:** [react-user-management-with-api-inte.vercel.app](https://react-user-management-with-api-inte.vercel.app/)

---

## 📌 Project Overview

Built with React + Vite, this application demonstrates real-world frontend skills:
- Consuming a live REST API and rendering dynamic data
- Building reusable, component-driven UI
- Implementing common product features: search, sort, paginate, modal
- Deploying to production on Vercel with CI/CD via GitHub

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔍 Search | Filter users by name in real time |
| ↕️ Sorting | Sort table columns ascending & descending |
| 📄 Pagination | Navigate through users page by page |
| 🪟 Modal Popup | Click any user to view full details |
| 📱 Responsive Design | Works across desktop and mobile |
| 🚀 Live Deployment | Auto-deployed on every push via Vercel |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React (Vite) | Frontend framework & build tool |
| JavaScript (ES6+) | Core language |
| CSS | Styling & responsive layout |
| REST API (JSONPlaceholder) | Live user data source |
| Git & GitHub | Version control |
| Vercel | Production deployment & CI/CD |

---

## 📁 Project Structure

```
React-User-Management-with-API-Integration/
│
├── public/                  # Static assets
├── screenshots/             # App screenshots
├── src/                     # Source code
│   ├── components/          # Reusable React components
│   ├── App.jsx              # Root component
│   └── main.jsx             # Entry point
├── index.html               # HTML template
├── package.json             # Dependencies
└── vite.config.js           # Vite configuration
```

---

## 🌐 API Used

User data is fetched from the free public REST API:

```
GET https://jsonplaceholder.typicode.com/users
```

---

## 🚀 How to Run Locally

### 1. Clone the repository
```bash
git clone https://github.com/Ravula-sandhya/React-User-Management-with-API-Integration.git
cd React-User-Management-with-API-Integration
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```

### 4. Open in browser
```
http://localhost:5173
```

---

## 📦 Deployment

This project is live and auto-deployed on **Vercel**.

- 🔗 Production URL: [react-user-management-with-api-inte.vercel.app](https://react-user-management-with-api-inte.vercel.app/)
- Every push to the `main` branch triggers an automatic production build
- Zero-downtime deployments with instant rollback support

---

## 🔮 Future Improvements

- [ ] Add/Edit/Delete user functionality (CRUD)
- [ ] Connect to a real backend with Spring Boot + MySQL
- [ ] JWT-based login and authentication
- [ ] Dark mode toggle
- [ ] Unit tests with React Testing Library

---

## 👩‍💻 Author

**Sandhya Ravula**
- GitHub: [@Ravula-sandhya](https://github.com/Ravula-sandhya)
- LinkedIn: [linkedin.com/in/sandhya-ravula](https://linkedin.com/in/sandhya-ravula)
- Email: ravulasandhya45@gmail.com

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
