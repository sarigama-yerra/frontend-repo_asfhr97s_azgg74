import { LayoutDashboard, Users, FileText, Briefcase, ListChecks, UserCog } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

export default function AdminNavbar() {
  const location = useLocation()
  const linkBase = 'text-slate-300 hover:text-white transition'
  const active = 'text-white'

  const NavLink = ({ to, icon: Icon, label }) => (
    <Link to={to} className={`flex items-center gap-2 px-3 py-2 rounded-lg ${location.pathname === to ? active : linkBase}`}>
      <Icon size={18} />
      <span className="hidden sm:inline">{label}</span>
    </Link>
  )

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-white">
          <LayoutDashboard size={20} />
          <span className="font-semibold">Studio Admin</span>
        </Link>
        <nav className="flex items-center gap-1">
          <NavLink to="/admin" icon={LayoutDashboard} label="Dashboard" />
          <NavLink to="/admin/clients" icon={Users} label="Clients" />
          <NavLink to="/admin/projects" icon={Briefcase} label="Projects" />
          <NavLink to="/admin/tasks" icon={ListChecks} label="Tasks" />
          <NavLink to="/admin/invoices" icon={FileText} label="Invoices" />
          <NavLink to="/admin/employees" icon={UserCog} label="Team" />
        </nav>
      </div>
    </header>
  )
}
