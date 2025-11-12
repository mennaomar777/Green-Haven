# 🌿 Green Haven

**Green Haven** is a modern hotel management dashboard built with React, styled-components, and Supabase.  
It allows hotel staff to manage bookings, guests, rooms, and settings — all in one elegant and efficient interface.

---

## 🚀 Live Demo

🔗 [View the Live App on Vercel](https://your-vercel-link.vercel.app)

---

## 🛠️ Tech Stack

- **Frontend:** React, React Router, Styled Components, React Query
- **Backend:** Supabase (Auth + Storage)
- **State Management:** React Query + Context API
- **Styling:** styled-components + CSS variables
- **Form Handling:** React Hook Form
- **Data Visualization:** Recharts
- **Authentication:** Supabase Auth
- **Deployment:** Vercel

---

## 📦 Features

- 🧾 **Cabin Management:** Create, edit, delete, and duplicate cabins
- 👥 **Guest Management:** Manage guest data and check-in/out processes
- 📅 **Booking Management:** Handle active, upcoming, and past bookings
- ⚙️ **Settings Panel:** Customize pricing, minimum stay, and other hotel policies
- 📈 **Dashboard Analytics:** Visual insights into occupancy rate and revenue
- 🔐 **Authentication:** Secure login system using Supabase
- 🌓 **Dark Mode:** Switch between light and dark themes
- 📤 **Upload Images:** Store cabin photos directly to Supabase Storage

---

## 📁 Project Structure

````bash
src/
├── features/
│   ├── authentication/
│   ├── bookings/
│   ├── dashboard/
│   ├── cabins/
│   ├── settings/
│   └── check-in-out/
├── context/
├── services/
├── ui/
└── utils/


---

## ⚙️ Setup & Installation

Follow these steps to run the project locally:

```bash
# 1. Clone the repository
git clone https://github.com/mennaomar777/Green-Haven

# 2. Navigate into the project folder
cd green-haven

# 3. Install dependencies
npm install

# 4. Create a .env file and add your Supabase credentials
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_KEY=your-supabase-anon-key

# 5. Run the app
npm run dev
````

Then open [http://localhost:5173](http://localhost:5173) to view it in your browser.

---

## 🧠 Learnings

During this project, I learned:

- How to integrate Supabase with React for real-time data and authentication
- How to manage server state efficiently using React Query
- Building reusable UI components with styled-components
- Creating data-driven dashboards and visualizations
- Handling form validation and custom hooks effectively

---

## 🌟 Future Improvements

- Add user roles & permissions (Admin / Receptionist)
- Integrate notifications system
- Add mobile-friendly version for management on the go
- Improve analytics with more visual reports

---

## 👩‍💻 Author

**Menna Omar**  
Frontend Developer | React Enthusiast
