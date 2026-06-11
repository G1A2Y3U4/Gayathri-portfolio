import React, { useState } from 'react'

export default function Contact(){
  const [form, setForm] = useState({name:'', email:'', message:''})

  function submit(e){
    e.preventDefault()
    console.log('Contact message', form)
    alert('Message sent (demo)')
    setForm({name:'', email:'', message:''})
  }

  return (
    <section id="contact" className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <form onSubmit={submit} className="space-y-4 card-diff rounded-lg p-5">
            <label className="block">
              <span className="text-sm">Name</span>
              <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required className="w-full mt-1 p-2 rounded border bg-white dark:bg-gray-900" />
            </label>
            <label className="block">
              <span className="text-sm">Email</span>
              <input type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required className="w-full mt-1 p-2 rounded border bg-white dark:bg-gray-900" />
            </label>
            <label className="block">
              <span className="text-sm">Message</span>
              <textarea value={form.message} onChange={e=>setForm({...form, message:e.target.value})} required className="w-full mt-1 p-2 rounded border bg-white dark:bg-gray-900" rows="5" />
            </label>
            <button type="submit" className="px-4 py-2 bg-primary text-white rounded">Send Message</button>
          </form>

          <div className="grid gap-4 content-start">
            <div className="p-4 rounded-lg card-diff">
              <h4 className="font-semibold">Email</h4>
              <p>gayathrisankaran14@gmail.com</p>
            </div>
            <div className="p-4 rounded-lg card-diff">
              <h4 className="font-semibold">Location</h4>
              <p>Chennai, India</p>
            </div>
            <div className="p-4 rounded-lg card-diff">
              <h4 className="font-semibold">Profiles</h4>
              <p>LinkedIn / GitHub</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
