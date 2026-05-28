import { LocalizedText } from "@/components/LocalizedText"

type ContactInfo = {
  value: string
  type: "Email" | "Phone" | "Github"
  typeAr: string
  href: string
}

const contacts: ContactInfo[] = [
  { value: "mhmmdkenno@gmail.com", type: "Email", typeAr: "البريد", href: "mailto:mhmmdkenno@gmail.com" },
  { value: "+9055510211822", type: "Phone", typeAr: "الهاتف", href: "tel:+9055510211822" },
  { value: "github.com/muhammedkenno", type: "Github", typeAr: "جيت هاب", href: "https://github.com/muhammedkenno" },
]

export default function ContactPage() {
  return (
    <main className="py-14">
      <div className="mx-auto max-w-5xl px-6">
        <section className="glass-card rounded-4xl border border-slate-800/80 p-10 mb-10">
          <LocalizedText
            tag="p"
            className="text-sm uppercase tracking-[0.32em] text-sky-300/70 mb-3"
            en="Let’s connect"
            ar="لنتواصل"
          />
          <LocalizedText
            tag="h1"
            className="text-5xl font-semibold tracking-tight text-white sm:text-6xl mb-6"
            en="Reach out for collaborations, feedback, or ideas."
            ar="تواصل معي للتعاون أو الملاحظات أو الأفكار."
          />
          <LocalizedText
            tag="p"
            className="max-w-3xl text-slate-300 leading-8"
            en="Send me an email or click a profile link to see more projects. I enjoy connecting with people who care about modern design and strong execution."
            ar="أرسل لي رسالة عبر البريد أو اضغط رابط حساب لرؤية مشاريع أكثر. أحب التواصل مع من يهتم بالتصميم العصري والتنفيذ القوي."
          />
        </section>

        <div className="grid gap-5 md:grid-cols-2">
          {contacts.map((contact) => (
            <a
              key={contact.value}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-3xl border border-slate-800/70 p-6 transition-transform hover:-translate-y-1"
            >
              <LocalizedText
                tag="p"
                className="text-sm uppercase tracking-[0.24em] text-slate-400"
                en={contact.type}
                ar={contact.typeAr}
              />
              <p className="mt-4 text-lg font-semibold text-white">{contact.value}</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}