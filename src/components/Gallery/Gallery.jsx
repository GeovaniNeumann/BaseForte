import { useState } from 'react'
import styles from './Gallery.module.css'

const services = [
  {
    id: 1,
    title: 'Galpões Industriais',
    description: 'Estruturas robustas e planejadas para indústrias de médio e grande porte, com vãos livres e pé-direito elevado.',
    category: 'Industrial',
    image: '/3.webp', // Caminho direto para a pasta public
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="8" y="28" width="48" height="28" rx="1"/>
        <path d="M4 28L32 8l28 20"/>
        <rect x="24" y="36" width="16" height="20"/>
        <rect x="12" y="34" width="10" height="10"/>
        <rect x="42" y="34" width="10" height="10"/>
      </svg>
    ),
    features: ['Vãos livres até 30m', 'Pé-direito personalizado', 'Estrutura 100% pré-moldada']
  },
  {
    id: 2,
    title: 'Centros de Distribuição',
    description: 'Soluções logísticas com grande área de armazenagem, docas e fluxo otimizado para operações eficientes.',
    category: 'Logística',
    image: '/2.webp',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="24" width="56" height="32" rx="1"/>
        <path d="M4 24L32 4l28 20"/>
        <rect x="8" y="40" width="14" height="16"/>
        <rect x="26" y="40" width="12" height="16"/>
        <rect x="44" y="40" width="12" height="16"/>
        <line x1="18" y1="32" x2="46" y2="32"/>
      </svg>
    ),
    features: ['Área ampla e modular', 'Estrutura para empilhadeiras', 'Piso de alta resistência']
  },
  {
    id: 3,
    title: 'Armazéns Agrícolas',
    description: 'Estruturas projetadas para armazenamento de grãos, fertilizantes e insumos com proteção contra intempéries.',
    category: 'Agrícola',
    image: '/1.webp',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="10" y="26" width="44" height="30" rx="1"/>
        <path d="M6 26L32 10l26 16"/>
        <rect x="18" y="38" width="10" height="18"/>
        <rect x="36" y="38" width="10" height="18"/>
        <path d="M10 36h44"/>
        <circle cx="23" cy="43" r="2"/>
        <circle cx="41" cy="43" r="2"/>
      </svg>
    ),
    features: ['Ventilação natural', 'Proteção contra umidade', 'Estrutura durável']
  },
  {
    id: 4,
    title: 'Galpões Comerciais',
    description: 'Espaços versáteis para comércios, showrooms e lojas, com fachada moderna e acabamento personalizado.',
    category: 'Comercial',
    image: '/1.webp',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="6" y="20" width="52" height="36" rx="2"/>
        <path d="M6 20L32 6l26 14"/>
        <rect x="14" y="36" width="36" height="20"/>
        <rect x="26" y="30" width="12" height="10"/>
        <line x1="6" y1="30" x2="58" y2="30"/>
      </svg>
    ),
    features: ['Fachada personalizável', 'Acabamento premium', 'Iluminação natural']
  },
  {
    id: 5,
    title: 'Estruturas Mistas',
    description: 'Solução híbrida combinando concreto pré-moldado com cobertura metálica para máxima eficiência.',
    category: 'Industrial',
    image: '/2.webp',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="8" y="30" width="48" height="26" rx="1"/>
        <path d="M4 30L32 8l28 22"/>
        <line x1="20" y1="30" x2="20" y2="56"/>
        <line x1="32" y1="30" x2="32" y2="56"/>
        <line x1="44" y1="30" x2="44" y2="56"/>
        <rect x="22" y="40" width="20" height="16"/>
      </svg>
    ),
    features: ['Custo-benefício', 'Montagem rápida', 'Versatilidade de uso']
  },
  {
    id: 6,
    title: 'Galpões com Mezanino',
    description: 'Aproveitamento máximo do espaço vertical com estrutura para mezanino, ideal para escritórios e estoque.',
    category: 'Comercial',
    image: '/3.webp',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="8" y="26" width="48" height="30" rx="1"/>
        <path d="M4 26L32 6l28 20"/>
        <line x1="8" y1="42" x2="56" y2="42"/>
        <rect x="14" y="44" width="12" height="12"/>
        <rect x="38" y="44" width="12" height="12"/>
        <rect x="20" y="28" width="24" height="14"/>
      </svg>
    ),
    features: ['2x mais área útil', 'Estrutura reforçada', 'Flexibilidade de layout']
  },
]

const categories = ['Todos', 'Industrial', 'Logística', 'Comercial', 'Agrícola']

export default function Gallery() {
  const [active, setActive] = useState('Todos')
  const [selected, setSelected] = useState(null)

  const filtered = active === 'Todos' ? services : services.filter(s => s.category === active)

  return (
    <section id="servicos" className={styles.gallery}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>O que fazemos</span>
          <h2 className={styles.title}>
            Nossas<br /><em>Soluções</em>
          </h2>
          <p className={styles.sub}>
            Oferecemos estruturas de concreto pré-moldado sob medida para as necessidades do seu negócio.
          </p>
        </div>

        <div className={styles.filters}>
          {categories.map(c => (
            <button
              key={c}
              className={`${styles.filter} ${active === c ? styles.filterActive : ''}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filtered.map(service => (
            <div
              key={service.id}
              className={styles.item}
              onClick={() => setSelected(service)}
            >
              {/* Imagem de fundo */}
              <div className={styles.itemImage}>
                <img src={service.image} alt={service.title} />
              </div>
              <div className={styles.itemOverlay} />
              <div className={styles.itemBg}>{service.icon}</div>
              <div className={styles.itemContent}>
                <span className={styles.itemCat}>{service.category}</span>
                <h3 className={styles.itemTitle}>{service.title}</h3>
                <p className={styles.itemDesc}>{service.description}</p>
              </div>
              <div className={styles.itemHover}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                  <line x1="11" y1="8" x2="11" y2="14"/>
                  <line x1="8" y1="11" x2="14" y2="11"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <p>Tem um projeto em mente?</p>
          <a
            href={`https://wa.me/5541998060564?text=Olá! Gostaria de saber mais sobre as soluções da Base Firme.`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
          >
            Fale com um especialista
          </a>
        </div>
      </div>

      {/* Modal com detalhes do serviço */}
      {selected && (
        <div className={styles.modal} onClick={() => setSelected(null)}>
          <div className={styles.modalCard} onClick={e => e.stopPropagation()}>
            <div className={styles.modalImg}>
              <img src={selected.image} alt={selected.title} />
              <div className={styles.modalSvg}>{selected.icon}</div>
            </div>
            <div className={styles.modalBody}>
              <span className={styles.modalCat}>{selected.category}</span>
              <h3 className={styles.modalTitle}>{selected.title}</h3>
              <p className={styles.modalDesc}>{selected.description}</p>
              
              <div className={styles.modalFeatures}>
                <h4>Diferenciais:</h4>
                <ul>
                  {selected.features.map((feature, i) => (
                    <li key={i}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <a
                href={`https://wa.me/5541998060564?text=Olá! Me interessei pelo serviço "${selected.title}" e quero um orçamento.`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.modalBtn}
              >
                Solicitar Orçamento
              </a>
            </div>
            <button className={styles.modalClose} onClick={() => setSelected(null)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  )
}