export default function ProjectStructure() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Generated Project Structure</h2>
      <div className="bg-gray-800 rounded-lg p-6 max-w-2xl mx-auto">
        <pre className="text-left text-green-400 overflow-x-auto">
          <code>{`my-turbo-app/
├── apps/
│   ├── web/            # Frontend (Next.js)
│   ├── http-server/    # Backend (Express)
│   ├── ws-server/      # WebSocket server (Express)
├── packages/
│   ├── db/             # Database setup (PostgreSQL/MongoDB)
├── turbo.json          # Turbo Repo config
├── package.json        # Root package.json
└── README.md`}</code>
        </pre>
      </div>
    </section>
  )
}

