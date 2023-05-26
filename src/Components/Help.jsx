import logoWhatsBtn from '../images/logoWhatsBtn.png'

const Help = () => {
  return (
    <section className="help">
      <button
        className="btnHelp"
        onClick={() => {
          let target = document.getElementById('titlePrices')
          target.scrollIntoView({ behavior: 'smooth' })
        }}
      >
        OK, ME CONVENCEU
      </button>
      <p className='contentHelp'>Precisa de alguma ajuda?</p>
      <p className='contentHelp'>Se você tiver qualquer dúvida ou precisar de ajuda, nós temos uma equipe de suporte pronta para te atender.</p>
      <a href="https://api.whatsapp.com/send?phone=5514998770703">
        <button className='btnWhats'>
          <img
            src={ logoWhatsBtn }
            alt="Logo Whats"
            className='whatsIcon'
          />
          Chamar no Whatsapp
        </button>
      </a>
      
    </section>
  )
}

export default Help;
