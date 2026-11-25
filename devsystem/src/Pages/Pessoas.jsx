import { useEffect, useState } from "react";
import "../Styles/Abstracts/Pessoas.scss";
import axios from "axios";

export default function Pessoas() {

const [pessoas, setPessoas] = useState([]);

useEffect(() => {
    axios.get("http://localhost:3000/pessoas")
        .then(res => {
            setPessoas(res.data);
        })
}, [])

    useEffect(() => {
        console.log(pessoas);
    }, [pessoas])
  return (
    <main className="pessoas">
        <h1>Lista de Pessoas</h1>

        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Telefone</th>
                </tr>
            </thead>
            <tbody>
                {pessoas.map(({id, nome, email, telefone}) => (
                    <tr key={id}>
                        <td>{id}</td>
                        <td>{nome}</td>
                        <td>{email}</td>
                        <td>{telefone}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </main>
  )
}
