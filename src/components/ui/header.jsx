function Header() {
    return (
<header>
    <nav class="bg-black border-gray-500 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a class="flex items-center">
                <img src="./nextierlab-logo.png" class="mr-3 h-6 sm:h-9" alt="Nextierlab Logo" />
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">NextierLab</span>
            </a>
            <div class="flex items-center lg:order-2">
                <a href="https://www.surveymonkey.com/r/5QQRNDC" class="text-white focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 focus:outline-none dark:focus:ring-primary-800" target="_blank" rel="noopener noreferrer">Give Feedback!</a>
            </div>

        </div>
    </nav>
</header>
    );
}

export default Header;