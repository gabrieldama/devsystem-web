import "../Styles/Abstracts/Pessoas.scss";

export default function Pessoas() {
  return (
    <main className="container">
        <h1>Lista de Pessoas</h1>

        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>444</td>
                    <td>John Doe</td>
                    <td>john.doe@example.com</td>
                </tr>
            </tbody>
        </table>
    </main>
  )
}
