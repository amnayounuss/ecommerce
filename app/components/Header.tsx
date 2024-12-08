
import Link from 'next/link'
import { Search, ShoppingCart, User } from 'lucide-react'

export default function Header() {
    return (
        <header className="bg-white border-b">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">
                    <img src="SHOP.CO.png" alt="SHOP.CO Logo" className="h-4" />
                </Link>
                <nav className="hidden md:flex space-x-6">
                    
                    <Link href="/shop" className="hover:text-gray-600">
                        Shop
                        
                    </Link>
                    
                    
                    <Link href="/on-sale" className="hover:text-gray-600">
                        On Sale
                    </Link>
                    <Link href="/new-arrivals" className="hover:text-gray-600">
                        New Arrivals
                    </Link>
                    <Link href="/brands" className="hover:text-gray-600">
                        Brands
                    </Link>
                </nav>
                <div className="flex items-center space-x-4">
                    <div className="relative hidden md:block">
                        <input
                            type="text"
                            placeholder="Search for products..."
                            className="border rounded-full pl-10 pr-4 py-2 w-64"
                        />
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    </div>
                    <button className="p-2">
                        <ShoppingCart size={24} />
                    </button>
                    <button className="p-2">
                        <User size={24} />
                    </button>
                </div>
            </div>
        </header>
    )
}

