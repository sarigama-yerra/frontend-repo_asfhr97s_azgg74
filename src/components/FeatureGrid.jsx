import { Users, FileText, Receipt, CalendarCheck, KanbanSquare, Timeline } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Client CRM',
    desc: 'Centralize briefs, approvals, feedback and contact history with rich profiles and portals.',
  },
  {
    icon: Receipt,
    title: 'Invoicing & Payments',
    desc: 'Create quotes, send invoices, track status and get paid faster with automated reminders.',
  },
  {
    icon: FileText,
    title: 'Project Docs',
    desc: 'Manage scopes, SOWs, scripts and deliverables with versioning and quick share links.',
  },
  {
    icon: KanbanSquare,
    title: 'Task Boards',
    desc: 'Plan shoots and edits with Kanban, assignees, checklists, file attachments and due dates.',
  },
  {
    icon: CalendarCheck,
    title: 'Scheduling',
    desc: 'Resource calendars for crew, rooms and gear. Sync with Google/Apple calendars.',
  },
  {
    icon: Timeline,
    title: 'Timelines',
    desc: 'Visual pre/post timelines to map from brief to delivery with milestones and dependencies.',
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Everything your studio runs on</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            A connected toolkit for client management, employee ops, projects, tasks, timelines and billing—wrapped in a delightful, modern UI.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/15">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-white/10 border border-white/20 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-white font-medium">{title}</h3>
              </div>
              <p className="mt-3 text-white/70 text-sm leading-relaxed">{desc}</p>
              <div className="mt-5">
                <a href="#get-started" className="text-sm text-cyan-300 hover:text-cyan-200">Learn more →</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle_at_10%_10%,rgba(255,255,255,0.06),transparent_40%),radial-gradient(circle_at_90%_20%,rgba(255,255,255,0.05),transparent_40%)]" />
    </section>
  );
}
