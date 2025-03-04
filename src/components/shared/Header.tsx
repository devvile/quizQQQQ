import { useAuth } from "../../contexts/AuthContext"
import AuthButton from "../auth/ui/AuthButton";

export default function Header(){
    const {currentUser,logOut} = useAuth();
    const handleLogout = ()=>{
        logOut();
    }

    return (
        <header className="bg-white shadow-sm fixed top-0 left-0 right-0 w-full z-10 h-15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
            <h1 className="font-bold text-blue-600">Quiz App</h1>
            </div>
            <div className="flex items-center">
                {currentUser &&
                <AuthButton
                    variant="secondary"
                    label="Log out"
                    onClick={handleLogout}
                >Sign out</AuthButton>}
            </div>
        </div>
        </div>
    </header>
  )
}