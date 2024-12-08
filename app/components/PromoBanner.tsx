
import Link from 'next/link'

export default function PromoBanner() {
    return (
        <div className="bg-black text-white text-center py-2 px-4">
            <p className="text-sm">
                Sign up and get 20% off to your first order.{' '}
                <Link href="/signup" className="underline font-semibold">
                    Sign Up Now
                </Link>
            </p>
        </div>
    )
}

