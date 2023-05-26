import logoFooter from '../images/logoFooter.png'
import logoGVStudio from '../images/logoGVStudio.png'

const Footer = () => {
  return (
    <footer>
      <img src={ logoFooter } alt="Logo Agenciador de Viagem" />
      <section>
        <span className='copyright'>Todos os direitos reservados 2023 © • Desenvolvido por</span>
        <img src={ logoGVStudio } alt="Logo GV Studio" />
      </section>
    </footer>
    
  )
}

export default Footer;
