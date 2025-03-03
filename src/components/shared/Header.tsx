export default function Header(){
    return (
        <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
            <h1 className="text-xl font-bold text-blue-600">Quiz App</h1>
            </div>
            <div className="flex items-center">
                <span className="mr-4 text-gray-700">Welcome</span>
                <button
                className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 text-sm"
                >
                Logout
                </button>
            </div>

        </div>
        </div>
    </header>
  )
}