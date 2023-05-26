import logoHeader from '../images/LogoHeader.png'

const Header = () => {
  return (
    <section className="header">
      <img src={logoHeader} alt="Agenciador de Viagem" />
      <br />
      <h1 className='title'>
        Aumente Suas Vendas Em Até 50% <br />
        Mentoria Personalizada de 30 minutos <br />
      </h1>
      <h4 className='subtitle'>
        <u>Você terá acesso a estratégias que utilizo no dia a dia da minha agência,<br />
        para ser um Agenciador de Sucesso</u>
      </h4>
      <h4 className='subtitle2'>
        VOCÊ ESTÁ APENAS 30 MINUTOS DE TRANSFORMAR SEUS RESULTADOS!
      </h4>
      <br />
      <button
        className='btnHeader'
        onClick={() => {
          let target = document.getElementById('titlePrices')
          target.scrollIntoView({ behavior: 'smooth' })
        }}
      >
        GARANTIR MINHA VAGA!
      </button>

    </section>
  )

};

export default Header;
