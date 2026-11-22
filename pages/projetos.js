import { useState } from "react";
import PortfolioLayout from "../components/PortfolioLayout";
import styles from "../styles/Home.module.css";
const projects = [
  {
    name: "Bora Banda",
    field: "Música",
    status: "Beta no ar",
    group: "Música",
    art: "banda",
    image: "bora-banda.svg",
    text: "Do ensaio ao palco, a banda tem um lugar para combinar datas, organizar o repertório e decidir a ordem das músicas do próximo show.",
  },
  {
    name: "Prontuário",
    field: "Saúde",
    status: "Protótipo local",
    group: "Saúde e perícia",
    art: "clinica",
    image: "prontuario.webp",
    text: "Uma ferramenta para o médico acompanhar a história de cada paciente no Mac e comparar exames, avaliações e medicações ao longo das consultas.",
  },
  {
    name: "Olha Meu Trampo",
    field: "Comunicação",
    status: "Em testes",
    group: "Audiovisual",
    art: "trampo",
    image: "olha-meu-trampo.svg",
    text: "Um pequeno negócio envia uma foto do que faz pelo WhatsApp. O projeto explora como transformar esse material em um vídeo curto que o dono pode revisar.",
  },
  {
    name: "VídeoPronto IA",
    field: "Audiovisual",
    status: "Protótipo funcional",
    group: "Audiovisual",
    art: "video",
    image: "videopronto.svg",
    text: "Um editor de vídeo falado para Mac. A partir da gravação, identifica pausas e tomadas repetidas, monta os cortes e prepara as legendas para revisão.",
  },
];

function ProjectArt({ art, image }) {
  return (
    <div className={`${styles.art} ${styles[art]}`} aria-hidden="true">
      <img src={`/portfolio/${image}`} alt="" loading="lazy" />
    </div>
  );
}

const areas = ["Todos", "Saúde e perícia", "Música", "Audiovisual"];
export default function Projetos() {
  const [selected, setSelected] = useState("Todos");
  const showFeature = selected === "Todos" || selected === "Saúde e perícia";
  const visible = projects.filter(
    (project) => selected === "Todos" || project.group === selected
  );
  const total = visible.length + Number(showFeature);
  return (
    <PortfolioLayout path="/projetos" title="Projetos — Vini Marques">
      <section id="projetos" aria-labelledby="trabalhos">
        <h1 className={styles.sectionTitle} id="trabalhos">
          Projetos selecionados
        </h1>
        <p className={styles.projectsIntro}>
          Desenvolvo ferramentas para quem cuida de pessoas, faz música e
          trabalha com vídeo.
        </p>
        <div
          role="group"
          aria-label="Filtrar projetos por área"
          className={styles.filters}
        >
          {areas.map((area) => (
            <button
              key={area}
              type="button"
              aria-pressed={area === selected}
              onClick={() => setSelected(area)}
            >
              {area}
            </button>
          ))}
        </div>
        <span role="status" className={styles.srOnly}>
          {total} {total === 1 ? "projeto visível" : "projetos visíveis"}
        </span>

        {showFeature && (
          <article className={styles.feature}>
            <div className={styles.featureCopy}>
              <p className={styles.label}>Perícia médica judicial</p>
              <h2>
                Lente <em>Pericial</em>
              </h2>
              <p>
                Da entrevista ao laudo, o perito pode conferir de onde veio cada
                resposta. O assistente prepara um rascunho a partir da
                transcrição, e o médico revisa e assina.
              </p>
              <span className={styles.status}>Versão em testes</span>
            </div>
            <div className={styles.optics} aria-hidden="true">
              <img
                alt=""
                src="/portfolio/lente-marca.webp"
                width="210"
                height="210"
              />
            </div>
          </article>
        )}
        <div key={selected} className={styles.grid}>
          {visible.map(({ name, field, status, text, art, image }) => (
            <article key={name} className={styles.card}>
              <ProjectArt art={art} image={image} />
              <div className={styles.meta}>
                <span>{field}</span>
                <span className={styles.status}>{status}</span>
              </div>
              <h2>{name}</h2>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
    </PortfolioLayout>
  );
}
