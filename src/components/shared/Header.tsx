import { useAuth } from "../../contexts/AuthContext"

export default function Header(){
    const {isAuthenticated,logout} = useAuth();
    const handleLogout = ()=>{
        logout();
    }

    return (
        <header className="bg-white shadow-sm fixed top-0 left-0 right-0 w-full z-10 h-15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
            <h1 className="font-bold text-blue-600">Quiz App</h1>
            </div>
            <div className="flex items-center">
                {isAuthenticated &&
                <button
                className="bg-red-500 text-stone-500 py-1 px-3 rounded-md hover:bg-red-600 text-sm"
                onClick={handleLogout}
                >
                Logout
                </button>}
            </div>
        </div>
        </div>
    </header>
  )
}