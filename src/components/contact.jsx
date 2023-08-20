import React from 'react'
import { useState } from 'react';
import $ from 'jquery'
import Notification from './ui/notification.jsx'

function Contact() {

  const [email, setEmail] = useState('');
  const [loading] = useState(false);
  const [firstname, setFirstname] = useState('');
  const [showNotification, setShowNotification] = useState(false);


  $('#mc-embedded-subscribe-form').submit(function (e) {
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: 'https://gmail.us12.list-manage.com/subscribe/post-json?u=e015cdb807a0ae0293a62f612&amp;id=02d3213972&amp;f_id=003941e0f0',
      data: $(this).serialize()
    });

  })

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (email.trim() === '' || firstname.trim() === '') {
      return; 
    }

    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 4000); 
  };


  return (

    <section class="scroll-smooth bg-black/40">

      <div class="py-12 px-4 mx-auto max-w-screen-lg lg:py-10 lg:px-3">
        <div class="mx-auto max-w-screen-md sm:text-center">
          <h2 class="mb-4 text-3xl tracking-tight font-extrabold text-gray-200 sm:text-4xl dark:text-white">Exclusive Bonuses Await: Subscribe Early for NextierLab's Grand Launch!</h2>
          <p class="mx-auto mb-8 max-w-2xl text-left font-light text-gray-400 md:mb-12 sm:text-xl dark:text-gray-400">Subscribe now to our newsletter for early access and receive special bonuses when NextierLab, the ultimate e-commerce growth platform, officially launches. Don't miss out on this opportunity to get ahead!</p>
        </div>


        <form onSubmit={handleFormSubmit} action="https://gmail.us12.list-manage.com/subscribe/post-json?u=e015cdb807a0ae0293a62f612&amp;id=02d3213972&amp;f_id=003941e0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
          <div class="items-center mx-auto space-y-8 max-w-screen-sm sm:space-y-0">
            <div class="relative mb-6">
              <label for="firstname" class="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First Name</label>
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" viewBox="10 1 79 100" fill="#6B7280" width="20"><path d="M50,56.4539146c-17.7785301,0-32.7222214,12.7120171-35.7229996,29.9626808C24.4555798,93.4134903,36.7602959,97.5,50,97.5  s25.5444183-4.0865097,35.7229996-11.0834045C82.7222214,69.1659317,67.7785339,56.4539146,50,56.4539146z"/><path d="M50,48.0548019c12.5611038,0,22.7697983-10.2087517,22.7697983-22.7698574C72.7697983,12.7237778,62.5611038,2.5,50,2.5  S27.2302036,12.7237778,27.2302036,25.2849445C27.2302036,37.8460503,37.4388962,48.0548019,50,48.0548019z"/></svg>
              </div>
              <input type="text" name="FNAME" class="p-3 pl-10 peer w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your first name" value={firstname} onChange={e => setFirstname(e.target.value)} required />
            </div>

            <div>
              <div class="relative mb-6">
                <label for="email" class="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                </div>
                <input type="email" name="EMAIL" class="p-3 pl-10 peer w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} required />
              </div>
            </div>

            <div>
              <button type="submit" class="lg:w-96 mb-2 py-3 px-5 w-full rounded-lg text-sm font-medium text-center text-black border-yellow-300 cursor-pointer bg-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:ring-yellow-400 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" isLoading={loading}>Subscribe</button>
            </div>

          </div>
          <div class="mb-12 lg:w-96 mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">We care about the protection of your data. <a href="https://nextierlab.tiiny.site/" class="font-medium text-yellow-300 dark:text-primary-500 hover:underline" target="_blank" rel="noreferrer">Read our Privacy Policy</a>.</div>
        </form>


      </div>

      {showNotification && <Notification />}

    </section>

  )
}

export default Contact

//