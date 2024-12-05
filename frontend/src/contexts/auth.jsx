import React, { createContext, useState, useEffect } from "react"
import api from "../services/api"
import { Navigate } from "react-router-dom"

export const AuthContext = createContext()

export function AuthProvider({children}) {
    const [user, setUser] = useState(null)

    // verificar se já existe um login salvo no localstorage

    useEffect(() => {
        const dadosToken = localStorage.getItem('@Auth:token')
        const dadosUser = JSON.parse(localStorage.getItem('@Auth:user') || "[]")

        if (dadosUser && dadosToken) {
            setUser(dadosUser)
            api.defaults.headers.common["Authorization"] = `Bearer ${dadosToken}`;

        }
    }, [])
    

    async function login(email, senha){
        const response = await api.post('/usuario/autenticacao',{
            email, 
            senha
        })

        if(response.data.error){
            alert(response.data.error)
        } else {
            setUser(response.data.body.user)
            api.defaults.headers.common["Authorization"] = `Bearer ${response.data.body.token}`
            localStorage.setItem("@Auth:token", response.data.body.token)
            localStorage.setItem("@Auth:user", JSON.stringify(response.data.body.user))

        }
    }

    function logout(){
        setUser(null)
        localStorage.clear()
        delete api.defaults.headers.common["Authorization"]; // Remove o token do cabeçalho
        
        return <Navigate to="/" />
    }

    async function updateUser(data){
       try {
            const response = await api.put(`http://localhost:3001/usuario/alterar/${user.id_user}`, data)

            if(response.data.success){
                const newData = response.data.body[0]
                setUser(newData)
                localStorage.setItem('@Auth:user', JSON.stringify(newData))
                alert(response.data.message)
                
            } else {
                alert(response.data.message)
            }
       } catch(error){
            console.error("Erro ao atualizar usuário:", error);
            if(error.response){
                alert(`Erro: ${error.response.data.message}`)
            }
       }

    }
    return (
        // .Provider = prover dados para outra parte da aplicação
        <AuthContext.Provider value={{user, login, logout, updateUser}} >
            {children}
        </AuthContext.Provider>
    )
}