import React from 'react'

type ItemCardProps = {
    x: {
        href: string,
        img: string,
        name: string,
        price: string
    }
}

export function ItemCard({ x }: ItemCardProps) {
    return <>
        <a href={x.href} className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
            <img
                alt="Product Image"
                src={x.img}
                className="h-56 w-full rounded-md object-cover"
            />
            <div className="mt-2">
                <dl>
                    <div>
                        <dd className="text-sm text-gray-500">{x.price}</dd>
                    </div>
                    <div>
                        <dd className="font-medium">{x.name}</dd>
                    </div>
                </dl>
            </div>
        </a>
    </>
}