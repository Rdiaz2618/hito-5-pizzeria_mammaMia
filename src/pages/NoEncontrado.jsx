import { Link } from 'react-router-dom';

const NoEncontrado = () => {
  return (
    <main className="pagina-no-encontrada">
      <section className="tarjeta-formulario text-center">
        <h2>404</h2>
        <p>La página que buscas no existe o fue movida.</p>
        <Link className="btn btn-dark" to="/">
          Volver al inicio
        </Link>
      </section>
    </main>
  );
};

export default NoEncontrado;
