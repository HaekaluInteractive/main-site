export default function ServicesGrid(){
  const services = ['Publishing & Strategy','Press & PR','Music Licensing','Community & Launch','Distribution','Multi-media Integration']
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {services.map(s => <div key={s} className="p-4 bg-[#071a2b] rounded">{s}</div>)}
    </div>
  )
}
