import { useState } from 'react'
import styles from './Gallery.module.css'

const items = [
  {
    id: 1,
    title: 'Galpão Industrial',
    desc: 'Estrutura pré-moldada 40x80m',
    category: 'Industrial',
    bg: 'linear-gradient(135deg, #1a3a6b 0%, #2d4a7a 100%)',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1">
        <rect x="8" y="28" width="48" height="28" rx="1"/>
        <path d="M4 28L32 8l28 20"/>
        <rect x="24" y="36" width="16" height="20"/>
        <rect x="12" y="34" width="10" height="10"/>
        <rect x="42" y="34" width="10" height="10"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Centro Logístico',
    desc: 'Pé-direito alto, vão livre amplo',
    category: 'Logística',
    bg: 'linear-gradient(135deg, #0f1e46 0%, #1a3a6b 100%)',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1">
        <rect x="4" y="24" width="56" height="32" rx="1"/>
        <path d="M4 24L32 4l28 20"/>
        <rect x="8" y="40" width="14" height="16"/>
        <rect x="26" y="40" width="12" height="16"/>
        <rect x="44" y="40" width="12" height="16"/>
        <line x1="18" y1="32" x2="46" y2="32"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Armazém Comercial',
    desc: 'Fachada moderna com painéis',
    category: 'Comercial',
    bg: 'linear-gradient(135deg, #1e4d9b 0%, #2563c9 100%)',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1">
        <rect x="6" y="20" width="52" height="36" rx="2"/>
        <path d="M6 20L32 6l26 14"/>
        <rect x="14" y="36" width="36" height="20"/>
        <rect x="26" y="30" width="12" height="10"/>
        <line x1="6" y1="30" x2="58" y2="30"/>
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Galpão Agroindustrial',
    desc: 'Resistência a intempéries',
    category: 'Agroindustrial',
    bg: 'linear-gradient(135deg, #162d52 0%, #1a3a6b 100%)',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1">
        <rect x="10" y="26" width="44" height="30" rx="1"/>
        <path d="M6 26L32 10l26 16"/>
        <rect x="18" y="38" width="10" height="18"/>
        <rect x="36" y="38" width="10" height="18"/>
        <path d="M10 36h44"/>
        <circle cx="23" cy="43" r="2"/>
        <circle cx="41" cy="43" r="2"/>
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Estrutura Mista',
    desc: 'Concreto + cobertura metálica',
    category: 'Industrial',
    bg: 'linear-gradient(135deg, #0d1f3c 0%, #1e4d9b 100%)',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1">
        <rect x="8" y="30" width="48" height="26" rx="1"/>
        <path d="M4 30L32 8l28 22"/>
        <line x1="20" y1="30" x2="20" y2="56"/>
        <line x1="32" y1="30" x2="32" y2="56"/>
        <line x1="44" y1="30" x2="44" y2="56"/>
        <rect x="22" y="40" width="20" height="16"/>
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Galpão com Mezanino',
    desc: 'Aproveitamento vertical máximo',
    category: 'Comercial',
    bg: 'linear-gradient(135deg, #1a3a6b 0%, #1e4d9b 100%)',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1">
        <rect x="8" y="26" width="48" height="30" rx="1"/>
        <path d="M4 26L32 6l28 20"/>
        <line x1="8" y1="42" x2="56" y2="42"/>
        <rect x="14" y="44" width="12" height="12"/>
        <rect x="38" y="44" width="12" height="12"/>
        <rect x="20" y="28" width="24" height="14"/>
      </svg>
    ),
  },
]

const categories = ['Todos', 'Industrial', 'Logística', 'Comercial', 'Agroindustrial']

export default function Gallery() {
  const [active, setActive] = useState('Todos')
  const [selected, setSelected] = useState(null)

  const filtered = active === 'Todos' ? items : items.filter(i => i.category === active)

  return (
    <section id="galeria" className={styles.gallery}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>Portfólio</span>
          <h2 className={styles.title}>
            Nossas<br /><em>Estruturas</em>
          </h2>
          <p className={styles.sub}>
            Projetos desenvolvidos com tecnologia pré-moldada de alta performance para os mais variados segmentos.
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
          {filtered.map(item => (
            <div
              key={item.id}
              className={styles.item}
              style={{ background: item.bg }}
              onClick={() => setSelected(item)}
            >
              <div className={styles.itemBg}>{item.icon}</div>
              <div className={styles.itemOverlay} />
              <div className={styles.itemContent}>
                <span className={styles.itemCat}>{item.category}</span>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemDesc}>{item.desc}</p>
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
            href={`https://wa.me/5541998060564?text=Olá! Vi o portfólio da Base Firme e gostaria de um orçamento.`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
          >
            Solicite seu Orçamento
          </a>
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div className={styles.modal} onClick={() => setSelected(null)}>
          <div className={styles.modalCard} onClick={e => e.stopPropagation()}>
            <div className={styles.modalImg} style={{ background: selected.bg }}>
              <div className={styles.modalSvg}>{selected.icon}</div>
            </div>
            <div className={styles.modalBody}>
              <span className={styles.modalCat}>{selected.category}</span>
              <h3 className={styles.modalTitle}>{selected.title}</h3>
              <p className={styles.modalDesc}>{selected.desc}</p>
              <a
                href={`https://wa.me/5541998060564?text=Olá! Me interessei no projeto "${selected.title}" e quero um orçamento similar.`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.modalBtn}
              >
                Quero um projeto similar
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
