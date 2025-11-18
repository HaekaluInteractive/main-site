export default function ContactPage(){
  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
      <p className="mb-6 text-gray-300">Partnerships, press, or artist licensing — reach out.</p>
      <form className="space-y-4">
        <input className="w-full p-3 rounded bg-[#0d1a2b]" placeholder="Name" />
        <input className="w-full p-3 rounded bg-[#0d1a2b]" placeholder="Email" />
        <textarea className="w-full p-3 rounded bg-[#0d1a2b]" placeholder="Message" rows={6} />
        <button className="px-6 py-3 bg-haekaGold text-black font-semibold rounded">Send</button>
      </form>
    </section>
  )
}
