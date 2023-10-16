import React, { useState } from 'react'
import {
    collection,
    addDoc
} from "firebase/firestore";
import { db } from '../../firebase/firebase.config';

const ContactForm = () => {
    const [contactInfo, setContactInfo] = useState({
        name: '',
        email: '',
        content: ''
    })

    const contactRef = collection(db, "contact_form")

    const handleAddContact = async (e) => {
        e.preventDefault()
        if(contactInfo.content.trim().length<=3 || contactInfo.email.trim().length<=3 || contactInfo.name.trim().length<=3) {
        
        alert('Vui long nhap them thong tin')
        return 
        }
        try {
            const response = await addDoc(contactRef, contactInfo)
            if (response) {
                alert('Cam on ban da dong gop')
                setContactInfo(
                    {
                        name: '',
                        email: '',
                        content: ''
                    }
                )
            }
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <div className='w-screen bg-slate-300 py-10'>
            <div className='w-1/2 mx-auto my-3 bg-white rounded-[20px] px-[100px] py-3'>

            
            <form action="" >
                <h1>Liên hệ với chúng tôi</h1>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div class="sm:col-span-4">
                        <label for="username" className="block text-sm font-medium leading-6 text-gray-900">Họ tên</label>
                        <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">

                                <input
                                    onChange={(e) => setContactInfo(
                                        {
                                            ...contactInfo,
                                            name: e.target.value
                                        }
                                    )}
                                    value={contactInfo.name}
                                    type="text" name="username" id="username" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Name" />
                            </div>
                        </div>
                    </div>

                    <div className="sm:col-span-4">
                        <label for="username" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                        <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">

                                <input
                                    onChange={(e) => setContactInfo(
                                        {
                                            ...contactInfo,
                                            email: e.target.value
                                        }
                                    )}
                                    value={contactInfo.email}
                                    type="text" name="email" id="email" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Email" />
                            </div>
                        </div>
                    </div>

                    <div className="col-span-full">
                        <label for="about" className="block text-sm font-medium leading-6 text-gray-900">Nội dung</label>
                        <div className="mt-2">
                            <textarea
                                onChange={(e) => setContactInfo(
                                    {
                                        ...contactInfo,
                                        content: e.target.value
                                    }
                                )}
                                value={contactInfo.content}

                                id="about" name="about" rows="3" className="block resize-none w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                        </div>
                        <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
                    </div>
                </div>
            </form>

            <button
                onClick={(e) => handleAddContact(e)}
                className="inline-flex items-center justify-center px-5 py-3 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px] my-4 mx-auto">
                Submit
            </button>
            </div>
        </div>
    )
}

export default ContactForm