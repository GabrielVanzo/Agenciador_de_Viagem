import profileImage from '../images/profileImage.png'

const Biography = () => {
 return (
  <section className="biography">
    <img
      src={ profileImage }
      alt="Vinícius Guerra"
      className='profileImage'
    />
    <div>
      <p className='titleProfile'>Quem será o seu mentor?</p>
      <p className='contentProfile'>
        Meu nome é Vinicius Guerra, sou empresário e Mentor do método Agenciador 10x.
        Nos últimos 3 anos eu fiz mais de R$ 3 MILHÕES apenas em vendas de Pacotes Aéreos.
        E hoje, além de aumentar cada dia mais o faturamento da minha Agência de Viagem, eu ajudo pessoas como Você a fazer o que eu faço!
        Já são dezenas de mentorados que usam a minha Metodologia para venderem pacotes aéreos aumentando assim as suas vendas, e agora o próximo a ter acesso a isso será você.
      </p>
    </div>
  </section>
 )
}

export default Biography;
