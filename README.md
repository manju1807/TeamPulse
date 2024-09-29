# 🚀 Teampulse - Next.js 14 Admin Dashboard Starter Template

**Teampulse** is a sophisticated dashboard UI template built using Next.js and Shadcn UI. It provides a robust starting point for creating powerful admin interfaces with modern web technologies.

## 🌟 Key Features

* 📊 Comprehensive dashboard with analytics cards and recharts graphs
* 👥 User management with Tanstack tables (client-side searching, pagination)
* 👨‍💼 Employee management with Tanstack tables (server-side searching, pagination)
* 📝 Multi-step dynamic forms for profile management
* 📋 Kanban board for task management with drag-and-drop functionality
* 🔐 Authentication support with NextAuth (social and email logins)
* 📁 File uploading capabilities with Uploadthing and dropzone
* 🎨 Sleek UI components from Shadcn-ui
* 📱 Responsive design for various devices

## 🛠️ Built With

* ⚡ **Next.js 14** - React framework with App Router
* 🦾 **TypeScript** - Typed superset of JavaScript
* 🎨 **Tailwind CSS** - Utility-first CSS framework
* 🧩 **Shadcn-ui** - Re-usable components built with Radix UI and Tailwind CSS
* 🔍 **Zod** - TypeScript-first schema validation
* 🗃️ **Zustand** - State management
* 🔐 **NextAuth.js** - Authentication for Next.js
* 📤 **Uploadthing** - File uploading solution
* 📊 **Tanstack Table** - Headless UI for building powerful tables
* 📝 **React Hook Form** - Performant, flexible and extensible forms
* 🧹 **ESLint** - Pluggable JavaScript linter
* 🐶 **Husky** - Git hooks made easy
* 💅 **Prettier** - Opinionated code formatter

## 📄 Pages

1. **Signup**: Authentication with NextAuth, supporting social and email logins
2. **Dashboard**: Analytics cards with recharts graphs
3. **Users**: Tanstack table with user details, client-side searching, and pagination
4. **Users/new**: User form with Uploadthing for file uploading (dropzone included)
5. **Employee**: Tanstack table with server-side searching and pagination
6. **Profile**: Multi-step dynamic forms using react-hook-form and Zod for validation
7. **Kanban Board**: Drag-and-drop task management board using dnd-kit and Zustand
8. **Not Found**: Custom 404 page at the root level

## 🚀 Getting Started

Follow these steps to get Teampulse up and running on your local machine:

1. Clone the repository:
git clone <https://github.com/YourUsername/teampulse.git>

2. Navigate to the project directory and install dependencies:
cd teampulse
npm install

3. Create a `.env.local` file by copying the example:
cp env.example.txt .env.local

4. Add the required environment variables to the `.env.local` file.

5. Start the development server:
npm run dev

You should now be able to access Teampulse at `http://localhost:3000`.

---

Created with ❤️ by Manjunath R

🎞️ Data provided by TMDB API.
