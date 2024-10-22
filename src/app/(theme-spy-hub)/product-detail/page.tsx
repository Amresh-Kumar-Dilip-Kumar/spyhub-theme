import { ItemCard } from '@/components/theme-spy-hub-components/Card';
import React from 'react'


const items = [
    {
        href: "#",
        img: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        name: 'asdf',
        price: "1234"
    },
    {
        href: "#",
        img: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        name: 'asdf',
        price: "1234"
    },
    {
        href: "#",
        img: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        name: 'asdf',
        price: "1234"
    },
    {
        href: "#",
        img: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        name: 'asdf',
        price: "1234"
    },]
export default function page() {

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <div>
                    <img
                        src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        alt="SanDisk Ultra 64 GB MicroSDXC"
                        className="w-full h-auto object-cover"
                    />
                </div>


                <div className="space-y-4">
                    <h1 className="text-2xl font-semibold">
                        SanDisk Ultra 64 GB MicroSDXC Class 10 140 MB/s Memory Card
                    </h1>

                    <div className="text-2xl font-bold text-gray-800">
                        Rs. 600.00
                    </div>

                    <div className="text-gray-500">
                        Shipping calculated at checkout.
                    </div>


                    <div className="flex items-center space-x-2">
                        <label htmlFor="quantity" className="font-semibold">
                            Quantity
                        </label>
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            defaultValue="1"
                            min="1"
                            className="border border-gray-300 rounded-md w-16 text-center"
                        />
                    </div>


                    <div className="space-y-2">
                        <button className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600">
                            Add to cart
                        </button>
                        <button className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-900">
                            Buy it now
                        </button>
                    </div>

                    <div className="text-gray-600">
                        Ideal storage for Android smartphones and tablets. Up to 140MB/s transfer speeds to move up to 1000 photos per minute. Load apps faster with A1-rated performance. Class 10 for Full HD video recording and playback. Compatible with SanDisk MobileMate USB 3.0 microSD card reader.
                    </div>
                </div>
            </div>

            <div className="mt-16">
                <h2 className="text-xl font-semibold mb-4">Related Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {items.map((x, i) => <ItemCard x={x} key={i} />)}
                    {/* <div className="border border-gray-200 rounded-md p-4">
                        <img
                            src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            alt="Spy WiFi Power Bank H10"
                            className="w-full h-auto object-cover"
                        />
                        <h3 className="text-sm font-semibold mt-2">Spy WiFi Power Bank H10</h3>
                        <div className="text-gray-800 font-bold">Rs. 6,000.00</div>
                    </div>

                    <div className="border border-gray-200 rounded-md p-4">
                        <img
                            src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            alt="Spyhub Button Camera"
                            className="w-full h-auto object-cover"
                        />
                        <h3 className="text-sm font-semibold mt-2">Spyhub Button Camera</h3>
                        <div className="text-gray-800 font-bold">Rs. 1,200.00</div>
                    </div>

                    <div className="border border-gray-200 rounded-md p-4">
                        <img
                            src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            alt="Spy Goggle Camera"
                            className="w-full h-auto object-cover"
                        />
                        <h3 className="text-sm font-semibold mt-2">Spy Goggle Camera</h3>
                        <div className="text-gray-800 font-bold">Rs. 4,200.00</div>
                    </div>

                    <div className="border border-gray-200 rounded-md p-4">
                        <img
                            src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            alt="Spy All Out/Good Night Camera"
                            className="w-full h-auto object-cover"
                        />
                        <h3 className="text-sm font-semibold mt-2">Spy All Out/Good Night Camera</h3>
                        <div className="text-gray-800 font-bold">Rs. 6,500.00</div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}





