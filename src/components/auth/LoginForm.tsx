import { useAuth } from "../../contexts/AuthContext"
import { User } from "../../types";
import { useNavigate } from "react-router-dom";
import {Card} from "primereact/card"

export default function LoginForm(){
    const {isAuthenticated, login} = useAuth();
    const navigate = useNavigate();

    const handleAuthentication = ():void =>{
        const user:User = { name:"Patryrk", id:"1323", email:"stringgi"};
        login(user);
        navigate('/');
    }

    return <Card className="w-60  my-20 mx-auto ">
        <h2>Login form</h2>
        <h3>{isAuthenticated}</h3>
        <button onClick={handleAuthentication}>Login</button>
    </Card>
}