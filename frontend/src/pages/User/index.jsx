import { useEffect, useState } from 'react'
import { getUsers } from "../../api/users.jsx"

function User() {
    const [conteudo, setConteudo] = useState(<>Carregando</>)

    async function TranformaEmLista() {
        const todosUsers = await getUsers()

        return todosUsers.map(user =>
            <div key={user.id}>
                <label > {user.nome} </label>
                <label > {user.email}</label>
                <div className='actions'>
                    <button>Alterar</button>
                    <button>Deletar</button>
                </div>
            </div>
        )
    }

    useEffect(() => {
        async function carregar() {
            setConteudo(
                await TranformaEmLista()
            )
        }
        carregar()
    }, [])

    return 
}

export default User
