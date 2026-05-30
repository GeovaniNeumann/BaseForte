import { useState } from 'react'
import styles from './Contact.module.css'

const WHATSAPP = '5541998060564'

const tiposObra = [
  'Galpão Industrial',
  'Centro de Distribuição',
  'Armazém Agrícola',
  'Galpão Comercial',
  'Outro',
]

export default function Contact() {
  const [form, setForm] = useState({
    nome: '',
    telefone: '',
    email: '',
    tipo: '',
    area: '',
    mensagem: '',
  })

  const [sent, setSent] = useState(false)

  const handle = e => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
  }

  const submit = e => {
    e.preventDefault()
    const msg = [
      `*Orçamento - Base Firme*`,
      `---`,
      `*Nome:* ${form.nome}`,
      form.telefone ? `*Telefone:* ${form.telefone}` : '',
      form.email ? `*E-mail:* ${form.email}` : '',
      form.tipo ? `*Tipo de obra:* ${form.tipo}` : '',
      form.area ? `*Área aproximada:* ${form.area} m²` : '',
      form.mensagem ? `*Mensagem:* ${form.mensagem}` : '',
    ].filter(Boolean).join('\n')

    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setSent(true)
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section id="contato" className={styles.contact}>
      <div className="container">
        <div className={styles.layout}>
          {/* Info side */}
          <div className={styles.info}>
            <span className={styles.eyebrow}>Fale Conosco</span>
            <h2 className={styles.title}>
              Solicite seu<br /><em>Orçamento</em>
            </h2>
            <p className={styles.desc}>
              Preencha o formulário e entraremos em contato pelo WhatsApp com a proposta ideal para o seu projeto.
            </p>

            <div className={styles.contacts}>
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactItem}
              >
                <div className={styles.contactIcon} style={{ background: '#25D366' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488"/>
                  </svg>
                </div>
                <div>
                  <span className={styles.contactLabel}>WhatsApp</span>
                  <span className={styles.contactValue}>(41) 9 9806-0564</span>
                </div>
              </a>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon} style={{ background: 'var(--blue)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <span className={styles.contactLabel}>Localização</span>
                  <span className={styles.contactValue}>Região de Curitiba, PR</span>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon} style={{ background: 'var(--blue-light)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <span className={styles.contactLabel}>Horário de Atendimento</span>
                  <span className={styles.contactValue}>Seg–Sex: 8h às 18h</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form side */}
          <div className={styles.formWrap}>
            {sent && (
              <div className={styles.successBanner}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                WhatsApp aberto! Finalize o envio pelo app.
              </div>
            )}

            <form className={styles.form} onSubmit={submit}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.label}>Nome completo *</label>
                  <input
                    className={styles.input}
                    type="text"
                    name="nome"
                    value={form.nome}
                    onChange={handle}
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Telefone</label>
                  <input
                    className={styles.input}
                    type="tel"
                    name="telefone"
                    value={form.telefone}
                    onChange={handle}
                    placeholder="(41) 9 0000-0000"
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>E-mail</label>
                <input
                  className={styles.input}
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handle}
                  placeholder="seu@email.com"
                />
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.label}>Tipo de obra</label>
                  <select
                    className={styles.input}
                    name="tipo"
                    value={form.tipo}
                    onChange={handle}
                  >
                    <option value="">Selecione...</option>
                    {tiposObra.map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Área aprox. (m²)</label>
                  <input
                    className={styles.input}
                    type="number"
                    name="area"
                    value={form.area}
                    onChange={handle}
                    placeholder="Ex: 500"
                    min="0"
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Mensagem</label>
                <textarea
                  className={`${styles.input} ${styles.textarea}`}
                  name="mensagem"
                  value={form.mensagem}
                  onChange={handle}
                  placeholder="Descreva seu projeto ou dúvidas..."
                  rows={4}
                />
              </div>

              <button type="submit" className={styles.submit}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488"/>
                </svg>
                Enviar pelo WhatsApp
              </button>

              <p className={styles.note}>
                Ao enviar, você será redirecionado para o WhatsApp com sua mensagem preenchida.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
