import { useEffect, useState } from 'react'
import DataTable from './DataTable'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function useFetchList(endpoint) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    setLoading(true)
    fetch(`${API_BASE}${endpoint}`)
      .then((r) => r.json())
      .then((d) => { if (mounted) setData(d) })
      .finally(() => mounted && setLoading(false))
    return () => { mounted = false }
  }, [endpoint])

  return { data, loading, setData }
}

export function ClientsPage() {
  const { data, loading } = useFetchList('/api/clients')
  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'contact_name', label: 'Contact' },
    { key: 'email', label: 'Email' },
    { key: 'status', label: 'Status' },
  ]
  return (
    <Section title="Clients" loading={loading}>
      <DataTable columns={columns} data={data} />
    </Section>
  )
}

export function EmployeesPage() {
  const { data, loading } = useFetchList('/api/employees')
  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role' },
    { key: 'availability', label: 'Availability' },
  ]
  return (
    <Section title="Team" loading={loading}>
      <DataTable columns={columns} data={data} />
    </Section>
  )
}

export function ProjectsPage() {
  const { data, loading } = useFetchList('/api/projects')
  const columns = [
    { key: 'name', label: 'Project' },
    { key: 'status', label: 'Status' },
    { key: 'budget', label: 'Budget' },
    { key: 'due_date', label: 'Due' },
  ]
  return (
    <Section title="Projects" loading={loading}>
      <DataTable columns={columns} data={data} />
    </Section>
  )
}

export function TasksPage() {
  const { data, loading } = useFetchList('/api/tasks')
  const columns = [
    { key: 'title', label: 'Title' },
    { key: 'status', label: 'Status' },
    { key: 'priority', label: 'Priority' },
    { key: 'due_date', label: 'Due' },
  ]
  return (
    <Section title="Tasks" loading={loading}>
      <DataTable columns={columns} data={data} />
    </Section>
  )
}

export function InvoicesPage() {
  const { data, loading } = useFetchList('/api/invoices')
  const columns = [
    { key: 'number', label: 'Number' },
    { key: 'status', label: 'Status' },
    { key: 'currency', label: 'Currency' },
    { key: 'due_date', label: 'Due' },
  ]
  return (
    <Section title="Invoices" loading={loading}>
      <DataTable columns={columns} data={data} />
    </Section>
  )
}

function Section({ title, loading, children }) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        {loading && <span className="text-slate-400 text-sm">Loading…</span>}
      </div>
      {children}
    </section>
  )
}
