// ContactPage.jsx
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope } from "react-icons/fa";
import { IoIosPin } from "react-icons/io";


const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    // You can integrate with an API or email service here
    alert("Thank you for reaching out! We'll get back to you soon.")
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <>
      <div id='contact' className='min-h-screen bg-[#2E8B57] py-16 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-3xl uppercase font-bold border-[#A3D9A5] border-l-4 pl-2 text-white my-10'
          >
            Get in Touch
          </motion.h2>

          <div className='flex justify-between md:flex-row flex-col items-start gap-10'>
            {/* Contact Info */}
            <motion.div
              className='bg-[#A3D9A5] flex-1 md:flex-1/3 p-8 shadow-md'
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className='text-2xl lil-bord uppercase font-semibold text-white mb-6'>
                Find Us Here
              </h3>
              <p className='flex md:items-start gap-2 text-gray-700 md:text-xl mb-4'>
                <IoIosPin className='text-2xl md:text-xl' />
                <p>Waagner Biro Straße 47/1 Graz 8020, Austria</p>
              </p>
              <p className='text-gray-700 flex items-center gap-2 md:text-xl'>
                <FaEnvelope />
                <a
                  href='mailto:team@lumiatech-group.com'
                  className=''
                >
                  team@lumiatech-group.com
                </a>
              </p>
            </motion.div>
            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              className='bg-[#A3D9A5] w-full md:flex-1/2 p-8 shadow-md space-y-6'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Name
                </label>
                <input
                  type='text'
                  name='name'
                  value={form.name}
                  onChange={handleChange}
                  required
                  className='w-full border-b border-white px-4 py-2 outline-none'
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Email
                </label>
                <input
                  type='email'
                  name='email'
                  value={form.email}
                  onChange={handleChange}
                  required
                  className='w-full border-b border-white px-4 py-2 outline-none'
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Subject
                </label>
                <input
                  type='text'
                  name='subject'
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className='w-full border-b border-white px-4 py-2 outline-none'
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Message
                </label>
                <textarea
                  name='message'
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                  className='w-full border-b border-white px-4 py-2 outline-none'
                ></textarea>
              </div>

              <div>
                <button
                  type='submit'
                  className='w-full bg-[#2E8B57] uppercase cursor-pointer text-white font-medium py-2 hover:bg-green-700 transition-colors'
                >
                  Submit
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
