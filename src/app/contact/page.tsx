type ContactInfo = {
  value: string
  type: "Email" | "Phone" | "Github",
  href: string
}

const contacts: ContactInfo[] = [
  { value: "mhmmdkenno@gmail.com", type: "Email", href: "mailto:mhmmdkenno@gmail.com" },
  { value: "+9055510211822", type: "Phone", href: "tel:+9055510211822" },
  { value: "github.com/muhammedkenno", type: "Github", href: "https://github.com/muhammedkenno" },
]


export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white p-10">
      <h1 className="text-4xl font-bold text-blue-400 mb-4">Contact Me 📞</h1 >
      <p className="text-gray-300 mb-10 max-w-xl">
        U can reach me through the following channels:
      </p>
      <div className="flex flex-col gap-4">
        {contacts.map((contact) => (
          <div
            key={contact.value}
            className="bg-gray-800 rounded-xl p-5 flex items-center gap-4"
          >
            <span className="text-lg font-medium">{contact.type}:</span>
            <a
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              {contact.value}
            </a>
          </div>
        ))}
      </div>
    </main>
  )
}