import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-200 py-20">
            <div className="container mx-auto px-4 mt-[-160px]">
                {/* Banner Section */}
                <div className="bg-black text-white py-4 px-6 rounded-2xl shadow-lg flex flex-col md:flex-row justify-between items-center md:items-stretch">
                    {/* Text Section */}
                    <div className="mb-6 md:mb-0 md:w-1/3 flex items-center">
                        <h2 className="text-2xl md:text-3xl font-black">
                            STAY UPTO DATE ABOUT OUR LATEST OFFERS
                        </h2>
                    </div>

                    {/* Input and Button Section */}
                    <div className="flex flex-col items-center gap-4 md:w-1/2">
                        <div className="flex items-center bg-white text-black px-4 py-2 rounded-full shadow-md w-full md:w-auto">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-5 h-5 mr-2 text-gray-500"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16.5 12l-4.5 3-4.5-3m9 0l-4.5-3-4.5 3m9 0v7.5a2.25 2.25 0 01-2.25 2.25h-7.5A2.25 2.25 0 014.5 19.5V12m0 0L12 8.25m7.5 3.75L12 16.5"
                                />
                            </svg>
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="outline-none w-full text-sm md:text-base"
                            />
                        </div>
                        <button className="bg-white text-black font-bold px-10 py-2 rounded-full shadow-md hover:bg-gray-200">
                            Subscribe to Newsletter
                        </button>
                    </div>
                </div>


                {/* Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-10">
                    {/* SHOP.CO Info */}
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-2xl font-bold mb-4">SHOP.CO</h2>
                        <p className="mb-4 text-gray-600">
                            We have clothes that suits your style and which you're proud to
                            wear. From women to men.
                        </p>
                        <div className="flex space-x-4">
                            {/* Social media icons (add as needed) */}
                        </div>
                    </div>

                    {/* Links Section */}
                    <div>
                        <h3 className="font-bold mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-gray-600 hover:text-black">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/features"
                                    className="text-gray-600 hover:text-black"
                                >
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="/works" className="text-gray-600 hover:text-black">
                                    Works
                                </Link>
                            </li>
                            <li>
                                <Link href="/career" className="text-gray-600 hover:text-black">
                                    Career
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4">Help</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/support" className="text-gray-600 hover:text-black">
                                    Customer Support
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/delivery"
                                    className="text-gray-600 hover:text-black"
                                >
                                    Delivery Details
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-gray-600 hover:text-black">
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/privacy"
                                    className="text-gray-600 hover:text-black"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4">FAQ</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/account"
                                    className="text-gray-600 hover:text-black"
                                >
                                    Account
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/deliveries"
                                    className="text-gray-600 hover:text-black"
                                >
                                    Manage Deliveries
                                </Link>
                            </li>
                            <li>
                                <Link href="/orders" className="text-gray-600 hover:text-black">
                                    Orders
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/payments"
                                    className="text-gray-600 hover:text-black"
                                >
                                    Payments
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-16 pt-8 border-t">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-600 mb-4 md:mb-0">
                            Shop.co © 2000-2023, All Rights Reserved
                        </p>
                        <div className="flex space-x-4">
                            {/* Payment method icons (add as needed) */}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
