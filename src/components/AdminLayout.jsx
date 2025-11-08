import { Routes, Route } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'
import AdminOverview from './AdminOverview'
import { ClientsPage, EmployeesPage, ProjectsPage, TasksPage, InvoicesPage } from './AdminPages'
import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function AdminLayout() {
  const [stats, setStats] = useState({ clients: 0, projects: 0, tasks: 0, invoices: 0 })

  useEffect(() => {
    Promise.all([
      fetch(`${API_BASE}/api/clients`).then(r => r.json()).catch(() => []),
      fetch(`${API_BASE}/api/projects`).then(r => r.json()).catch(() => []),
      fetch(`${API_BASE}/api/tasks`).then(r => r.json()).catch(() => []),
      fetch(`${API_BASE}/api/invoices`).then(r => r.json()).catch(() => []),
    ]).then(([c, p, t, i]) => setStats({ clients: c.length, projects: p.length, tasks: t.length, invoices: i.length }))
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-black">
      <AdminNavbar />
      <Routes>
        <Route index element={<AdminOverview stats={stats} />} />
        <Route path="clients" element={<ClientsPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="tasks" element={<TasksPage />} />
        <Route path="invoices" element={<InvoicesPage />} />
        <Route path="employees" element={<EmployeesPage />} />
      </Routes>
    </div>
  )
}
