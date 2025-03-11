import estilos from './footer.module.css';

export default function Footer() {
  return (
    <footer className={estilos.Footer}>
      <small>
        &copy; {new Date().getFullYear()} - Site desenvolvido por 
        <a 
          href="https://github.com/wellmendes25" 
          target="_blank" 
          rel="noopener noreferrer"
        > W.M</a>
      </small>
    </footer>
  );
}
