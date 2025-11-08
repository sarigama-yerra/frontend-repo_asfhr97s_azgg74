import { Users, Briefcase, ListChecks, FileText, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const StatCard = ({ icon: Icon, label, value, to }) => (
  <Link to={to} className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-5 flex items-center justify-between transition">
    <div className="flex items-center gap-4">
      <div className="p-3 rounded-xl bg-white/10 text-white"><Icon size={20} /></div>
      <div>
        <div className="text-slate-400 text-sm">{label}</div>
        <div className="text-white text-2xl font-semibold">{value}</div>
      </div>
    </div>
    <ArrowRight className="text-slate-400 group-hover:translate-x-1 transition" size={18} />
  </Link>
)

export default function AdminOverview({ stats }) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold text-white mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Users} label="Clients" value={stats.clients} to="/admin/clients" />
        <StatCard icon={Briefcase} label="Projects" value={stats.projects} to="/admin/projects" />
        <StatCard icon={ListChecks} label="Tasks" value={stats.tasks} to="/admin/tasks" />
        <StatCard icon={FileText} label="Invoices" value={stats.invoices} to="/admin/invoices" />
      </div>
    </section>
  )
}
