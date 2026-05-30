import styles from './About.module.css'

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: 'Projeto Personalizado',
    desc: 'Cada galpão é projetado conforme a necessidade específica do cliente, atendendo normas técnicas e maximizando o aproveitamento do espaço.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'Estrutura de Concreto',
    desc: 'Peças produzidas em fábrica com rigoroso controle de qualidade, garantindo resistência superior e uniformidade estrutural.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Montagem Ágil',
    desc: 'A pré-fabricação reduz drasticamente o tempo de montagem em obra, minimizando custos e acelerando sua operação.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Alta Durabilidade',
    desc: 'O concreto pré-moldado oferece durabilidade de décadas com baixíssima necessidade de manutenção, sendo resistente a intempéries.',
  },
]

export default function About() {
  return (
    <section id="sobre" className={styles.about}>
      <div className={styles.topAccent} />

      <div className="container">
        {/* Primeira linha: Imagem + Texto lado a lado */}
        <div className={styles.splitLayout}>
          <div className={styles.imageSide}>
            <div className={styles.imageWrapper}>
              <img src="/about.webp" alt="Estrutura Base Firme" className={styles.aboutImage} />
              <div className={styles.imageBadge}>
                <span>A sua parceira em pré-montados</span>
              </div>
            </div>
          </div>

          <div className={styles.contentSide}>
            <span className={styles.eyebrow}>Quem Somos</span>
            <h2 className={styles.title}>
              A BASE que seu<br />
              negócio precisa
            </h2>
            <div className={styles.accent} />
            <p className={styles.lead}>
              A <strong>Base Firme</strong> nasce com o compromisso de entregar soluções construtivas eficientes e duráveis. Especializada em galpões industriais e comerciais com estrutura pré-moldada de concreto, unimos tecnologia, rapidez e custo-benefício.
            </p>
            <p className={styles.body}>
              Nossos projetos são desenvolvidos com engenharia de ponta, garantindo que cada estrutura seja montada com precisão e dentro do prazo acordado. Do projeto à entrega, você conta com total transparência e suporte especializado.
            </p>
            <a
              href={`https://wa.me/5541998060564?text=Olá! Quero saber mais sobre a Base Firme.`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Fale com nosso time
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Grid de features */}
        <div className={styles.grid}>
          {features.map((f, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardIcon}>{f.icon}</div>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Banner CTA */}
        <div className={styles.banner}>
          <div className={styles.bannerContent}>
            <p className={styles.bannerText}>Pronto para começar seu projeto?</p>
            <h3 className={styles.bannerTitle}>Solicite um orçamento sem compromisso</h3>
          </div>
          <a
            href={`https://wa.me/5541998060564?text=Olá! Gostaria de solicitar um orçamento para um galpão pré-moldado.`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.bannerBtn}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488"/>
            </svg>
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}