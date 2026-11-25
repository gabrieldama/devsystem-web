import { useEffect, useState } from "react";
import "../Styles/Abstracts/Pessoas.scss";
import axios from "axios";

export default function Pessoas() {

const [pessoas, setPessoas] = useState([]);
const [pagina, setPagina] = useState(1);

useEffect(() => {
    axios.get("http://localhost:3000/pessoas")
        .then(res => {
            setPessoas(res.data);
        })
}, [])

    // Configuração da pagina
    const itensPorPagina = 6;

    // Calcula o indicie inicial dos registros da pagina atual
    const inicio = (pagina - 1) * itensPorPagina;

    // Calcula o indice final dos registros da pagina atual
    const fim = inicio + itensPorPagina;

    // Separa os registros que serão exibidos na pagina atual
    const pessoasPagina = pessoas.slice(inicio, fim);

    // CAlcula a quantidade total de páginas
    const totalPaginas = Math.ceil(pessoas.length / itensPorPagina);

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
                {pessoasPagina.map(({id, nome, email, telefone}) => (
                    <tr key={id}>
                        <td>{id}</td>
                        <td>{nome}</td>
                        <td>{email}</td>
                        <td>{telefone}</td>
                    </tr>
                ))}
            </tbody>
        </table>

        <section>
            <button onClick={() => setPagina(pagina - 1)} disabled={pagina === 1}>
                Anterior
            </button>

            <span>
                {" "}
                {pagina} de {totalPaginas}{" "}
            </span>

            <button onClick={() => setPagina(pagina + 1)}
                disabled={pagina === totalPaginas}>
                Próximo
            </button>
        </section>
    </main>
  )
}
