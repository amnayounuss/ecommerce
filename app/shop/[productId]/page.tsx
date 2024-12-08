import Image from 'next/image'

import { Star, Heart } from 'lucide-react'

export default function ProductPage() {
    const product = {
        name: 'One Life Graphic T-shirt',
        price: 260,
        originalPrice: 300,
        description: 'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
        rating: 4.5,
        reviews: 451,
    }

    const relatedProducts = [
        { id: 1, name: 'Hello', price: 120, originalPrice: 140, image: '/product1.png' },
        { id: 2, name: 'Graphic T-shirt B', price: 110, originalPrice: 130, image: '/product2.png' },
        { id: 3, name: 'Graphic T-shirt C', price: 150, originalPrice: 180, image: '/product3.png' },
        { id: 4, name: 'Graphic T-shirt D', price: 90, originalPrice: 100, image: '/product4.png' },
    ]

    return (
        <div className="container mx-auto px-4 py-36">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                    {/* Main Product Image */}
                    <Image
                        src="/image1.png"
                        alt="Product Image"
                        width={600}
                        height={600}
                        className="rounded-lg"
                    />

                    {/* Thumbnail Images */}
                    <div className="grid grid-cols-4 gap-4 mt-4">
                        {[
                            '/thumb1.png', // Replace with actual thumbnail image paths
                            '/thumb2.png',
                            '/thumb3.png',
                           
                        ].map((thumb, index) => (
                            <div key={index} className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                                <Image
                                    src={thumb}
                                    alt={`Thumbnail ${index + 1}`}
                                    width={150}
                                    height={150}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="md:w-1/2">
                    <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                    <div className="flex items-center mb-4">
                        <div className="flex mr-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} size={20} className="text-yellow-400 fill-current" />
                            ))}
                        </div>
                        <span className="text-gray-600">({product.reviews} Reviews)</span>
                    </div>
                    <div className="flex items-center mb-6">
                        <span className="text-3xl font-bold mr-2">${product.price}</span>
                        <span className="text-gray-500 line-through">${product.originalPrice}</span>
                        <span className="ml-2 bg-red-500 text-white px-2 py-1 text-sm rounded">
                            -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                        </span>
                    </div>
                    <p className="mb-6">{product.description}</p>
                    <div className="mb-6">
                        <h3 className="font-bold mb-2">Select Colors</h3>
                        <div className="flex space-x-2">
                            {['bg-black', 'bg-white border', 'bg-blue-500', 'bg-red-500'].map((color) => (
                                <button key={color} className={`w-8 h-8 rounded-full ${color}`}></button>
                            ))}
                        </div>
                    </div>
                    <div className="mb-6">
                        <h3 className="font-bold mb-2">Choose Size</h3>
                        <div className="flex space-x-2">
                            {['Small', 'Medium', 'Large', 'X-Large'].map((size) => (
                                <button key={size} className="border rounded-md px-4 py-2">
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <button className="bg-black text-white px-8 py-3 rounded-full flex-grow">
                            Add to Cart
                        </button>
                        <button className="border border-black px-4 py-3 rounded-full">
                            <Heart />
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-20">
                <h2 className="text-2xl font-bold mb-8">You might also like</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {relatedProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    )
}

function ProductCard({ product }: { product: { name: string, price: number, originalPrice: number, image: string } }) {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="aspect-square bg-gray-200 relative">
                <Image src={product.image} alt={product.name} layout="fill" objectFit="cover" />
            </div>
            <div className="p-4">
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <div className="flex items-center mb-2">
                    <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} size={16} className="text-yellow-400 fill-current" />
                        ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">4.5/5</span>
                </div>
                <div className="flex items-center">
                    <span className="font-bold mr-2">${product.price}</span>
                    <span className="text-gray-500 line-through">${product.originalPrice}</span>
                </div>
            </div>
        </div>
    )
}
