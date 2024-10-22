import React from 'react'

export default function page() {
    return (
        <div className="min-h-screen bg-white text-white p-8">
            {/* Profile Section */}
            <section className="max-w-4xl mx-auto bg-black rounded-lg shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4">Profile</h2>
                <div className="flex items-center space-x-6">
                    {/* User Image */}
                    <div className="relative">
                        <img
                            src="/images-landing/Logo-rounded.png"
                            alt="User profile"
                            className="h-32 w-32 rounded-full object-cover border-4 border-white"
                        />
                        <button className="absolute bottom-0 right-0 bg-gray-700 hover:bg-gray-600 p-2 rounded-full text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 9.75h.008v.008h-.008V9.75zM10.5 4.5h3a2.25 2.25 0 012.25 2.25v0a.75.75 0 00.75.75h.75a.75.75 0 01.75.75v6.75a2.25 2.25 0 01-2.25 2.25H8.25A2.25 2.25 0 016 15.75v-6.75a.75.75 0 01.75-.75h.75a.75.75 0 00.75-.75v0A2.25 2.25 0 0110.5 4.5z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 12.75l-2.25-2.25M8.25 9.75l2.25 2.25"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            {/* Personal Information Section */}
            <section className="max-w-4xl mx-auto bg-black rounded-lg shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
                <div className="text-left">
                    <p className="text-white mb-2">
                        <strong>Name:</strong> John Doe
                    </p>
                    <p className="text-white mb-2">
                        <strong>Gender:</strong> Male
                    </p>
                    <p className="text-white mb-2">
                        <strong>Email:</strong> john.doe@example.com
                    </p>
                    <p className="text-white mb-2">
                        <strong>Phone:</strong> +91 578937957
                    </p>
                    <p className="text-white mb-2">
                        <strong>Location:</strong> 123,samta colony
                    </p>
                </div>
            </section>

            {/* Order Details Section */}
            <section className="max-w-4xl mx-auto bg-black rounded-lg shadow-lg p-6 mb-8">

                <div className="col-span-2 bg-white text-black rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">Your Orders</h2>

                    <div className="border-b border-gray-300 pb-4 mb-4">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="font-semibold">Order #123456</p>
                                <p className="text-sm">Placed on: October 21, 2024</p>
                                <p className="text-sm">Status: Delivered</p>
                            </div>
                            <button className="bg-black text-white py-1 px-4 rounded-lg hover:bg-gray-800">View Details</button>
                        </div>
                    </div>


                    <div className="border-b border-gray-300 pb-4 mb-4">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="font-semibold">Order #654321</p>
                                <p className="text-sm">Placed on: September 18, 2024</p>
                                <p className="text-sm">Status: Shipped</p>
                            </div>
                            <button className="bg-black text-white py-1 px-4 rounded-lg hover:bg-gray-800">View Details</button>
                        </div>
                    </div>



                    <div className="border-b border-gray-300 pb-4 mb-4">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="font-semibold">Order #654321</p>
                                <p className="text-sm">Placed on: September 18, 2024</p>
                                <p className="text-sm">Status: Shipped</p>
                            </div>
                            <button className="bg-black text-white py-1 px-4 rounded-lg hover:bg-gray-800">View Details</button>
                        </div>
                    </div>


                    <div className="border-b border-gray-300 pb-4 mb-4">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="font-semibold">Order #654321</p>
                                <p className="text-sm">Placed on: September 18, 2024</p>
                                <p className="text-sm">Status: Shipped</p>
                            </div>
                            <button className="bg-black text-white py-1 px-4 rounded-lg hover:bg-gray-800">View Details</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}
