import React from "react";
import { Card } from "primereact/card";

interface AuthCardPros{
    children:React.ReactNode;
    title:string;
}

const AuthCard:React.FC<AuthCardPros> = ({children, title})=>{
    return <Card className="w-90">
                <h2 className="text-2xl font-bold text-center mb-3">{title}</h2>
        {children}
    </Card>
}

export default AuthCard;