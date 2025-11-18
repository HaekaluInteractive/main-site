'use client'
import { useState } from 'react'

export default function SubmissionForm(){
  const [status, setStatus] = useState('')
  async function handleSubmit(e:any){
    e.preventDefault()
    const data = {
      studio: e.target.studio.value,
      email: e.target.email.value,
      description: e.target.description.value,
      demo: e.target.demo.value
    }
    const res = await fetch('/api/submit-game', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(data)
    })
    const json = await res.json()
    setStatus(json.success ? 'Submitted' : 'Error')
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
      <input name="studio" className="w-full p-3 rounded bg-[#0d1a2b]" placeholder="Studio name" required />
      <input name="email" type="email" className="w-full p-3 rounded bg-[#0d1a2b]" placeholder="Contact email" required />
      <input name="demo" className="w-full p-3 rounded bg-[#0d1a2b]" placeholder="Demo link" />
      <textarea name="description" className="w-full p-3 rounded bg-[#0d1a2b]" placeholder="Game description" rows={5} required />
      <div>
        <button className="px-5 py-2 bg-haekaGold text-black rounded">Submit Your Game</button>
      </div>
      {status && <div className="text-sm mt-2">{status}</div>}
    </form>
  )
}
