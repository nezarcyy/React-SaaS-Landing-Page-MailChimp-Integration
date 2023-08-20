
function Notification() {


    return (
        
            <div
                id="notification"
                className="animate-fade-left animate-twice animate-duration-[2000ms] animate-ease-in-out animate-alternate animate-fill-both
    fixed flex items-center w-full max-w-xs p-4 space-x-2 text-gray-500 bg-black rounded-lg shadow right-5 bottom-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
                role="alert"
            >
                <div className="text-sm font-normal">
                    You're in! Thanks for subscribing!
                </div>
                <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g fill="#facb3b">
                        <path d="M24 47C36.7025 47 47 36.7025 47 24C47 11.2975 36.7025 1 24 1C11.2975 1 1 11.2975 1 24C1 36.7025 11.2975 47 24 47Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M33.8147 33.2268C31.0513 35.5049 27.5814 36.7508 24 36.7508C20.4186 36.7508 16.9487 35.5049 14.1853 33.2268" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M19.6941 21.4036C19.3229 20.568 18.7172 19.8581 17.9506 19.3598C17.184 18.8616 16.2893 18.5963 15.375 18.5963C14.4607 18.5963 13.566 18.8616 12.7994 19.3598C12.0328 19.8581 11.4271 20.568 11.0559 21.4036" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
                        <path d="M36.9441 21.4036C36.5729 20.568 35.9672 19.8581 35.2006 19.3598C34.434 18.8616 33.5393 18.5963 32.625 18.5963C31.7107 18.5963 30.816 18.8616 30.0494 19.3598C29.2828 19.8581 28.6771 20.568 28.3059 21.4036" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
                    </g>
                </svg>
            </div>

    );
}

export default Notification;
