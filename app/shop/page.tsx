
import Link from 'next/link'
import Image from 'next/image'
import { Star, ChevronDown } from 'lucide-react'

export default function ShopPage() {
    const products = [
        { id: 1, name: 'Gradient Graphic T-shirt', price: 145, originalPrice: 242, rating: 3.5 },
        { id: 2, name: 'Black Striped T-shirt', price: 120, originalPrice: 150, rating: 4.0 },
        { id: 3, name: 'Checkered Shirt', price: 180, rating: 4.5 },
        // Add more products...
    ]

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Casual</h1>
                <div className="flex items-center">
                    <span className="mr-2">Showing 1-10 of 100 Products</span>
                    <button className="flex items-center border rounded px-3 py-2">
                        Sort by: Most Popular <ChevronDown className="ml-2" />
                    </button>
                </div>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
                <div>
                    <h2 className="text-xl font-bold mb-4">Filters</h2>
                    <div className="space-y-4">
                        <FilterSection title="T-shirts" />
                        <FilterSection title="Shorts" />
                        <FilterSection title="Shirts" />
                        <FilterSection title="Hoodie" />
                        <FilterSection title="Jeans" />
                    </div>
                    <div className="mt-6">
                        <h3 className="font-semibold mb-2">Price</h3>
                        {/* Add price range slider here */}
                    </div>
                    <div className="mt-6">
                        <h3 className="font-semibold mb-2">Colors</h3>
                        <div className="flex flex-wrap gap-2">
                            {['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500'].map((color) => (
                                <button key={color} className={`w-6 h-6 rounded-full ${color}`}></button>
                            ))}
                        </div>
                    </div>
                    <div className="mt-6">
                        <h3 className="font-semibold mb-2">Size</h3>
                        <div className="grid grid-cols-3 gap-2">
                            {['XX-Small', 'X-Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large', '3X-Large', '4X-Large'].map((size) => (
                                <button key={size} className="border rounded px-2 py-1 text-sm">
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="mt-6">
                        <h3 className="font-semibold mb-2">Dress Style</h3>
                        <div className="space-y-2">
                            {['Casual', 'Formal', 'Party', 'Gym'].map((style) => (
                                <label key={style} className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    {style}
                                </label>
                            ))}
                        </div>
                    </div>
                    <button className="mt-8 w-full bg-black text-white py-2 rounded-full">
                        Apply Filter
                    </button>
                </div>
                <div className="md:col-span-3">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {products.map((product) => (
                            <Link href={`/shop/${product.id}`} key={product.id}>
                                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                                    <div className="aspect-square bg-gray-200 relative">
                                        <Image src="/product1.png" alt={product.name} layout="fill" objectFit="cover" />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-semibold mb-2">{product.name}</h3>
                                        <div className="flex items-center mb-2">
                                            <div className="flex">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <Star key={star} size={16} className={`${star <= product.rating ? 'text-yellow-400' : 'text-gray-300'} fill-current`} />
                                                ))}
                                            </div>
                                            <span className="ml-2 text-sm text-gray-600">{product.rating}/5</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="font-bold mr-2">${product.price}</span>
                                            {product.originalPrice && (
                                                <span className="text-gray-500 line-through">${product.originalPrice}</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="mt-8 flex justify-center">
                        <button className="mx-1 px-3 py-1 border rounded">Previous</button>
                        {[1, 2, 3, '...', 8, 9, 10].map((page, index) => (
                            <button
                                key={index}
                                className={`mx-1 px-3 py-1 border rounded ${page === 1 ? 'bg-black text-white' : ''}`}
                            >
                                {page}
                            </button>
                        ))}
                        <button className="mx-1 px-3 py-1 border rounded">Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function FilterSection({ title }: { title: string }) {
    return (
        <div className="flex items-center justify-between">
            <span>{title}</span>
            <ChevronDown size={20} />
        </div>
    )
}

