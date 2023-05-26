import warrantySeal from '../images/warrantySeal.png'

const ThirdMain = () => {
  return (
    <section className="thirdMain">
      <p className='titleThirdMain'>Não leu tudo? Vou Resumir para Você...</p>
      <p className='contentThirdMain'>
        Se a ideia de ser um Agente de Viagem de Sucesso e aumentar
        50% das suas vendas é uma meta boa para você… <br />
        <br />
        Eu realmente acredito que adquirir essa mentoria é uma decisão
        inteligente. <br />
        <br />
        A proposta é simples e clara: Estou apresentando uma oportunidade
        de você gerar lucros reais como Agente de Viagem!
      </p>
      <hr className='sessionDiv' />
      <p className='titleThirdMain'>Em quanto tempo eu irei receber meu acesso?</p>
      <p className='contentThirdMain'>
        Logo após a aprovação do seu pagamento, você irá
        receber no seu e-mail de compra os seus dados de acesso. <br />
        <br />
        Após o recebimento do e-mail iremos marcar o melhor horário
        para a nossa mentoria… <br />
      </p>
      <hr className='sessionDiv' />
      <p className='titleWarranty'>VOCÊ NÃO TEM NADA A PERDER!</p>
      <div className='containerWarranty'>
        <p className='contentThirdMain'>
          <b>O PRODUTO TEM GARANTIA INCONDICIONAL DE 7 DIAS</b> <br />
          <br />
          Se por <b>qualquer motivo</b> você não ficar satisfeito ou não se
          adaptar, basta entrar em contato com a minha equipe dentro do
          prazo de <b>7 dias e solicitar o reembolso</b> do valor investido. <br />
          <br />
          <b>Você receberá de volta cada centavo que pagou.</b> <br />
          <br />
          Eu estou tirando <b>todo o risco das suas mãos</b> e colocando nas minhas. <br />
          <br />
          <b>Faça sua inscrição agora mesmo e veja com seus próprios olhos.</b>
        </p>
        <img
          src={ warrantySeal }
          alt="Selo de Garantia de 7 dias"
          className='warrantySeal'
        />
      </div>
    </section>
  )
}

export default ThirdMain;
