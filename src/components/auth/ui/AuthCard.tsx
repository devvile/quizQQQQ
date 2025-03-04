import React from "react";
import { Card } from "primereact/card";

interface AuthCardPros{
    children:React.ReactNode
}

const AuthCard:React.FC<AuthCardPros> = ({children})=>{
    return <Card className="w-80">
        {children}
    </Card>
}

export default AuthCard;