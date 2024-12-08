import Image from 'next/image'
import Link from 'next/link'
import { Star } from 'lucide-react'

// Interfaces for Data Types
interface Product {
    id: number
    name: string
    price: number
    originalPrice: number
    image: string
}

interface Testimonial {
    id: number
    name: string
    feedback: string
    rating: number
}

// Main Home Component
export default function Home() {
    // Sample Data
    const products: Product[] = [
        { id: 1, name: 'T-SHIRT WITH TAPE DETAILS', price: 120, originalPrice: 140, image: '/product1.png' },
        { id: 2, name: 'SKINNY FIT JEANS', price: 220, originalPrice: 250, image: '/product2.png' },
        { id: 3, name: 'CHECKERED SHIRT', price: 320, originalPrice: 360, image: '/product31.png' },
        { id: 4, name: 'SLEEVE STRIPED T-SHIRT', price: 100, originalPrice: 120, image: '/product4.png' },
    ]

    // New Products specifically for Top Selling
    const topSellingProducts: Product[] = [
        { id: 5, name: 'DENIM JACKET', price: 180, originalPrice: 200, image: '/product5.png' },
        { id: 6, name: 'LEATHER BOOTS', price: 150, originalPrice: 180, image: '/product6.png' },
        { id: 7, name: 'SUMMER DRESS', price: 140, originalPrice: 170, image: '/product7.png' },
        { id: 8, name: 'WINTER COAT', price: 220, originalPrice: 260, image: '/product8.png' },
    ]

    const testimonials: Testimonial[] = [
        { id: 1, name: 'John Doe', feedback: 'Amazing quality and fast delivery!', rating: 5 },
        { id: 2, name: 'Jane Smith', feedback: 'The clothes fit perfectly. Highly recommend!', rating: 4.5 },
        { id: 3, name: 'Michael Brown', feedback: 'Affordable and stylish clothing.', rating: 4 },
    ]

    return (
        <div >
            {/* Hero Section */}
            <section
                className="bg-[#F2F0F1] py-16 md:py-24 text-black"
                style={{
                    backgroundImage: "url('/banner.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="container mx-auto px-4 bg">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h1 className="text-4xl md:text-6xl mb-6 font-black font-integral">
                                FIND CLOTHES THAT MATCH YOUR STYLE
                            </h1>
                            <p className="mb-8 text-[15px] text-textcolor">
                                Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                            </p>
                            <Link
                                href="/shop"
                                className="bg-black text-white px-16 py-4 rounded-full text-sm inline-block"
                            >
                                Shop Now
                            </Link>
                            <div className="grid grid-cols-3 gap-4 mt-12">
                                <StatCard title="200+" subtitle="International Brands" />
                                <StatCard title="2,000+" subtitle="High-Quality Products" />
                                <StatCard title="30,000+" subtitle="Happy Customers" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Brand Section */}
            <section className="bg-black py-8">
                <div className="container mx-auto flex justify-center space-x-36">
                    {['versace.png', 'zara.png', 'gucci.png', 'prada.png', 'calvinklein.png'].map((logo, index) => (
                        <img key={index} src={`/${logo}`} alt={`${logo.split('.')[0]} Logo`} className="h-6" />
                    ))}
                </div>
            </section>

            {/* New Arrivals Section */}
            <ProductSection title="NEW ARRIVALS" products={products} />

            {/* Top Selling Section */}
            <ProductSection title="TOP SELLING" products={topSellingProducts} /> {/* Pass topSellingProducts here */}

            {/* Browse by Dress Style */}
            <section className="py-16 bg-white">
                <div className="container mx-auto py-12 px-4 bg-gray-200 rounded-3xl shadow-md">
                    {/* Title Section */}
                    <div className="text-center py-6">
                        <h2 className="text-5xl font-black">BROWSE BY DRESS STYLE</h2>
                    </div>

                    {/* Cards Section */}
                    <div className="flex flex-wrap justify-between gap-2 p-16 ">
                        {[
                            { style: 'Casual', image: '/casual.png' },
                            { style: 'Formal', image: '/formal.png' },
                            { style: 'Party', image: '/party.png' },
                            { style: 'Gym', image: '/gym.png' },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center border border-gray-200 rounded-lg overflow-hidden shadow-sm"
                            >
                                <div className="flex items-center justify-center">
                                    <img
                                        src={item.image}
                                        alt={item.style}
                                        className="max-w-full max-h-full"
                                    />
                                </div>
                              
                            </div>
                        ))}
                    </div>
                </div>
            </section>





            {/* Testimonials Section */}
            <section className="py-36 bg-white">
                <div className="container mx-auto px-4 mt-[-150px]">
                    <h2 className="text-5xl font-black mb-8">OUR HAPPY CUSTOMERS</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial) => (
                            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

// Product Section Component
interface ProductSectionProps {
    title: string
    products: Product[]
}

function ProductSection({ title, products }: ProductSectionProps) {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-black mb-8 justify-center text-center">{title}</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Link href="/shop" className="text-lg font-semibold rounded-full border border-gray-300 px-20 py-3 inline-block shadow-sm hover:shadow-md transition-all">
                        View All
                    </Link>
                </div>
            </div>
        </section>
    )
}

// Product Card Component
interface ProductCardProps {
    product: Product
}

function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="aspect-square bg-gray-200 relative">
                <Image src={product.image} alt={product.name} layout="fill" objectFit="cover" />
            </div>
            <div className="p-4">
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <div className="flex items-center mb-2">
                    <Star size={16} className="text-yellow-400 fill-current" />
                    <Star size={16} className="text-yellow-400 fill-current" />
                    <Star size={16} className="text-yellow-400 fill-current" />
                    <Star size={16} className="text-yellow-400 fill-current" />
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

// Testimonial Card Component
interface TestimonialCardProps {
    testimonial: Testimonial
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
    return (
        <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <div className="flex">
                        {[...Array(Math.floor(testimonial.rating))].map((_, index) => (
                            <Star key={index} size={16} className="text-yellow-400 fill-current" />
                        ))}
                    </div>
                </div>
            </div>
            <p className="text-gray-600">{`"${testimonial.feedback}"`}</p>
        </div>
    )
}

// Stat Card Component
interface StatCardProps {
    title: string
    subtitle: string
}

function StatCard({ title, subtitle }: StatCardProps) {
    return (
        <div className="text-center">
            <p className="text-3xl font-bold">{title}</p>
            <p className="text-sm">{subtitle}</p>
        </div>
    )
}
