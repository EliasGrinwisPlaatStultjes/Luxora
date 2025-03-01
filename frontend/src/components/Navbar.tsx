import { ShoppingCart, Search, Menu, Heart, User } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="bg-white border-b sticky top-0 z-50">
            <div className="max-w-7xl mx-auto">
                {/* Upper Navbar */}
                <div className="px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-8">
                            <span className="text-3xl font-bold text-gray-900">LUXE</span>
                            <div className="hidden md:flex relative">
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    className="pl-10 pr-4 py-2 border border-gray-200 rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-gray-200"
                                />
                                <Search className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
                            </div>
                        </div>
                        <div className="flex items-center space-x-6">
                            <button className="hidden md:flex items-center space-x-2 text-gray-600 hover:text-gray-900">
                                <User className="h-5 w-5" />
                                <span>Account</span>
                            </button>
                            <button className="hidden md:flex items-center space-x-2 text-gray-600 hover:text-gray-900">
                                <Heart className="h-5 w-5" />
                                <span>Wishlist</span>
                            </button>
                            <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
                                <ShoppingCart className="h-5 w-5" />
                                <span className="hidden md:inline">Cart</span>
                                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">3</span>
                            </button>
                            <Menu className="h-6 w-6 text-gray-600 md:hidden cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}