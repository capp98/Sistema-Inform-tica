import styles from '/styles/layout.module.css';

export default function Layout({ children }) {
  return (
    <>
      <main className="">
        <nav className={styles.nav}>
          <a href="declaracoes/residencia">Declaração de Residência</a>
          <a href="/curriculo">Currículo</a>
        </nav>
        <main>{children}</main>
      </main>
    </>
  );
}
