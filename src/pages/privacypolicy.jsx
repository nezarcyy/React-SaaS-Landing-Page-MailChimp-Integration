import React, { useCallback } from 'react';
import Particles from "react-particles";
import Footer from "../components/ui/footer";
import Header from "../components/ui/header";
import { loadFull } from "tsparticles";
import particlesOptions from "../particles.json";


function PrivacyPolicy() {

    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (

        <div className="bg-black/80">
            <Particles options={particlesOptions} init={particlesInit} />
            <Header />

            <div className='lg:ml-36 lg:mr-36'>
                <nav class="flex mb-4" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-3">
                        <li class="inline-flex items-center">
                            <a href="/" class="inline-flex items-center text-sm font-medium text-gray-400 hover:text-yellow-400 dark:text-gray-400 dark:hover:text-white">
                                <svg class="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                </svg>
                                Home
                            </a>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <svg class="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <a class="ml-1 text-sm font-medium text-gray-400 hover:text-yellow-400 md:ml-2 dark:text-gray-400 dark:hover:text-white">Privacy Policy</a>
                            </div>
                        </li>
                    </ol>
                </nav>
                <h2 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-white md:text-4xl dark:text-white">Privacy Policy</h2>
                <h5 class="mb-4 text-lg font-bold text-white dark:text-white">Effective Date: 03/09/2023</h5>
                <h6 class="mb-4 text-lg font-bold text-white dark:text-white">1. Introduction</h6>
                <p class="mb-4 text-gray-400 dark:text-gray-400">Welcome to NextierLab. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and share your personal information when you access or use our services. By using NextierLab, you consent to the practices described in this Privacy Policy.</p>
                <h6 class="mb-4 text-lg font-bold text-white dark:text-white">2. Information We Collect</h6>
                <p class="mb-1 font-bold text-gray-100 dark:text-gray-400">Personal Information:</p>
                <p class="mb-3 text-gray-400 dark:text-gray-400">We may collect personal information, such as your name, email address, and contact details, when you register or use our services.</p>
                <p class="mb-1 font-bold text-gray-100 dark:text-gray-400">Usage Information:</p>
                <p class="mb-3 text-gray-400 dark:text-gray-400">We collect information about how you use our platform, such as your interactions, preferences, and browsing activities.</p>
                <p class="mb-1 font-bold text-gray-100 dark:text-gray-400">Device and Log Information:</p>
                <p class="mb-3 text-gray-400 dark:text-gray-400">We may automatically collect information about your device and how you access our platform, including your IP address, browser type, and operating system.</p>
                <h6 class="mb-4 text-lg font-bold text-white dark:text-white">3. How We Use Your Information</h6>
                <p class="mb-3 font-bold text-gray-100 dark:text-gray-400">We use your information for various purposes, including:</p>
                <p class="mb-3 text-gray-400 dark:text-gray-400">Providing and improving our services.</p>
                <p class="mb-3 text-gray-400 dark:text-gray-400">Personalizing your experience.</p>
                <p class="mb-3 text-gray-400 dark:text-gray-400">Communicating with you.</p>
                <p class="mb-3 text-gray-400 dark:text-gray-400">Analyzing usage patterns and trends.</p>
                <p class="mb-4 text-gray-400 dark:text-gray-400">Ensuring the security and integrity of our platform.</p>
                <h6 class="mb-4 text-lg font-bold text-white dark:text-white">4. Data Security</h6>
                <p class="mb-4 text-gray-400 dark:text-gray-400">We take reasonable measures to protect your data. However, please be aware that no security measures are perfect, and we cannot guarantee the security of your information.</p>
                <h6 class="mb-4 text-lg font-bold text-white dark:text-white">5. Sharing Your Information</h6>
                <p class="mb-4 text-gray-400 dark:text-gray-400">We may share your information with third parties only in specific circumstances, such as when required by law or when necessary to provide our services.</p>
                <h6 class="mb-4 text-lg font-bold text-white dark:text-white">6. Your Choices</h6>
                <p class="mb-4 text-gray-400 dark:text-gray-400">You have certain rights regarding your personal information, including the right to access, correct, or delete your data. You can contact us at support@nextierlab.co to exercise these rights.</p>
                <h6 class="mb-4 text-lg font-bold text-white dark:text-white">7. Changes to this Privacy Policy</h6>
                <p class="mb-4 text-gray-400 dark:text-gray-400">We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. The most current version of the Privacy Policy will always be available on our website.</p>
                <h6 class="mb-4 text-lg font-bold text-white dark:text-white">8. Contact us</h6>
                <p class="mb-4 text-gray-400 dark:text-gray-400">If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at support@nextierlab.co.</p>







                
                
                
            </div>

            <Footer />
        </div>

    );
}

export default PrivacyPolicy