import React, { useCallback } from 'react';
import Particles from "react-particles";
import Footer from "../components/ui/footer";
import Header from "../components/ui/header";
import { loadFull } from "tsparticles";
import particlesOptions from "../particles.json";


function TermsOfUse() {

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
                                <a class="ml-1 text-sm font-medium text-gray-400 hover:text-yellow-400 md:ml-2 dark:text-gray-400 dark:hover:text-white">Terms Of Use</a>
                            </div>
                        </li>
                    </ol>
                </nav>
                <h2 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-white md:text-4xl dark:text-white">Terms Of Use</h2>
                <h5 class="mb-4 text-lg font-bold text-white dark:text-white">Effective Date: 03/09/2023</h5>
                <h6 class="mb-4 text-lg font-bold text-white dark:text-white">1. Acceptance of Terms</h6>
                <p class="mb-4 text-gray-400 dark:text-gray-400">By accessing or using the services provided by NextierLab, you agree to comply with and be bound by these Terms of Use. If you do not agree to these terms, please do not use our services.</p>
                <h6 class="mb-4 text-lg font-bold text-white dark:text-white">2. Use of Services</h6>
                <p class="mb-3 text-gray-400 dark:text-gray-400">You must use our services only for lawful purposes and in accordance with these Terms of Use.</p>
                <p class="mb-3 text-gray-400 dark:text-gray-400">You are responsible for maintaining the confidentiality of your account credentials.</p>
                <p class="mb-3 text-gray-400 dark:text-gray-400">We reserve the right to modify or terminate our services at any time without notice.</p>
                <h6 class="mb-4 text-lg font-bold text-white dark:text-white">3. User Content</h6>
                <p class="mb-3 text-gray-400 dark:text-gray-400">You are solely responsible for any content you submit to our platform, including text, images, or any other materials.</p>
                <p class="mb-3 text-gray-400 dark:text-gray-400">By submitting content, you grant us a non-exclusive, worldwide, royalty-free, irrevocable, sub-licensable, and transferable license to use, reproduce, distribute, prepare derivative works of, and display the content.</p>
                <h6 class="mb-4 text-lg font-bold text-white dark:text-white">4. Intellectual Property</h6>
                <p class="mb-4 text-gray-400 dark:text-gray-400">Our platform and its original content, features, and functionality are owned by NextierLab and are protected by international copyright, trademark, and other intellectual property laws.</p>
                <p class="mb-4 text-gray-400 dark:text-gray-400">You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any content on our platform without our written consent.</p>
                <h6 class="mb-4 text-lg font-bold text-white dark:text-white">5. Privacy</h6>
                <p class="mb-4 text-gray-400 dark:text-gray-400">Our Privacy Policy governs the collection, use, and sharing of your personal information. By using our services, you consent to the practices described in the Privacy Policy.</p>
                <h6 class="mb-4 text-lg font-bold text-white dark:text-white">6. Termination</h6>
                <p class="mb-4 text-gray-400 dark:text-gray-400">We reserve the right to terminate or suspend your account and access to our services at our sole discretion, without notice, for conduct that we believe violates these Terms of Use or is harmful to other users or us.</p>
                <h6 class="mb-4 text-lg font-bold text-white dark:text-white">7. Limitation of Liability</h6>
                <p class="mb-4 text-gray-400 dark:text-gray-400">We are not liable for any damages or losses resulting from your use of our services. We provide our services "as is" without any warranties.</p>
                <h6 class="mb-4 text-lg font-bold text-white dark:text-white">8. Governing Law</h6>
                <p class="mb-4 text-gray-400 dark:text-gray-400">These Terms of Use are governed by and construed in accordance with the laws of Administrative Judicial System of Morocco, without regard to its conflict of law principles.</p>
                <h6 class="mb-4 text-lg font-bold text-white dark:text-white">9. Changes to Terms</h6>
                <p class="mb-4 text-gray-400 dark:text-gray-400">We may update these Terms of Use from time to time. Any changes will be effective immediately upon posting on our platform.</p>
                <h6 class="mb-4 text-lg font-bold text-white dark:text-white">10. Contact Us</h6>
                <p class="mb-4 text-gray-400 dark:text-gray-400">If you have any questions or concerns about these Terms of Use, please contact us at support@nextierlab.co.</p>
            </div>

            <Footer />
        </div>

    );
}

export default TermsOfUse