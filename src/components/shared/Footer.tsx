export default function Footer(){ 
  return  <footer className="bg-white border-t shadow-xl  raised border-gray-200 w-full left-0 right-0 bottom-0">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Quiz App. All rights reserved.
        </p>
        </div>  
    </footer>
}