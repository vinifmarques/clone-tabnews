import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function PortfolioLayout({ path, title, children }) {
  return (
    <div className={styles.site}>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Conheça os projetos de Vini Marques em perícia médica, saúde, música e audiovisual, das primeiras versões aos produtos que já estão no ar."
        />
        <link rel="canonical" href={`https://vinimarques.dev.br${path}`} />
      </Head>
      <a className={styles.skip} href="#conteudo">
        Pular para o conteúdo
      </a>
      <header className={styles.header}>
        <Link
          className={styles.logo}
          aria-label="Vini Marques, início"
          href="/"
        >
          <b aria-hidden="true">▰</b> vini<span>marques</span>
          <small>.dev.br</small>
        </Link>
        <nav aria-label="Principal">
          <Link
            href="/projetos"
            aria-current={path === "/projetos" ? "page" : undefined}
          >
            Projetos
          </Link>
          <a href="#contato">Contato</a>
        </nav>
      </header>
      <main id="conteudo">{children}</main>
      <footer id="contato">
        <div>
          <p className={styles.label}>Contato</p>
          <h2>Vamos conversar?</h2>
        </div>
        <nav aria-label="Canais de contato" className={styles.contacts}>
          <a href="https://github.com/vinifmarques">
            GitHub <span aria-hidden="true">↗</span>
          </a>
          <a href="https://www.instagram.com/vini.mar.ques/">
            Instagram <span aria-hidden="true">↗</span>
          </a>
        </nav>
        <p className={styles.signoff} lang="en">
          the future is written in dust
        </p>
      </footer>
    </div>
  );
}
