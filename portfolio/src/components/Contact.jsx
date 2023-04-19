import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#4f3b78] flex justify-center items-center p-4'>
      <form action='https://getform.io/f/77836680-93ca-4a52-ae1d-3b178c88953b' method ='POST' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-6'>
            <p className='text-4xl inline sm:text-5xl border-b-4 border-[#c8d679] py-1 text-[#f6e5e5]'>Contact</p>
            <p className='py-4 mt-2 text-[#f6e5e5]'>// Submit the form below or email me @ Weissm09@gmail.com</p>
        </div>
        <input className='bg-[#e7e9c7]' type='text' placeholder='Name' name='name'></input>
        <input className='my-4 p-2 bg-[#e7e9c7]' type='email' placeholder='Email' name='email'></input>
        <textarea className='p-2 bg-[#ece3f7]' name='message' rows='10' placeholder='Message'></textarea>
        <button className='text-[#f6e5e5] border-2 bg-[#363b4e] hover:bg-[#c8d679] hover:text-[#363b4e] border-[#c8d679] px-4 py-3 my-8 mx-auto flex flex-center'>Send</button>
      </form>
    </div>
  )
}

export default Contact
