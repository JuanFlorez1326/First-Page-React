import './Main1.css'

export const Main = () => {
    return (
        <>
            <main className="divMain1">
                <h1>Pagina en React.js</h1>
                <h3>Algunas Caracteristicas de React</h3>
                <ul className="classLista">
                    <li>Es una libreria de Javascript.</li>
                    <li>Funciona en un elemento llamado Virtual DOM.</li>
                    <li>Renderiza solamente los componentes que necesita.</li>
                    <li>La utilizacion de los Hooks facilita su logica Front-End.</li>
                </ul>
            </main>
        </>
    );
}