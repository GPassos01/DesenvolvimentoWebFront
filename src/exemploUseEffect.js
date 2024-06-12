import { useEffect } from "react";

export default function ExemploUseEffect(){
    useEffect(() => {
        alert("O componente montou!! ")

        // Mais código a ser executaco 1 única vez após o componente ser montado

        return 
    }, [])
}