import strategyIcon from '../images/engreIcon.png';
import mindIcon from '../images/cereIcon.png';
import moneyIcon from '../images/dinhIcon.png';

const SecondMain = () => {
  return (
    <section className='secondMain'>
      <p className="revelationTitle">Aqui está o que será REVELADO... </p>
      <section className='cardsContainer'>
        <div className='card-1'>
        <img 
          src={ strategyIcon }
          alt='Ícone de Estratégia'
          className='strategyIcon'
        />
        <p className='titleCard'>APRENDA AS ESTRATÉGIAS CERTAS:</p>
        <p className='contentCard'>
          Estratégias comprovadas para vender pacotes aéreos,
          <u> mesmo que você nunca trabalhou com turismo aéreo antes.</u>
        </p>
        </div>
        <div className='card-2'>
          <img 
          src={ mindIcon }
          alt='Ícone de Conhecimento'
          className='mindIcon'
          />
          <p className='titleCard'>SAIA NA FRENTE DA CONCORRÊNCIA:</p>
          <p className='contentCard'>
            As melhores práticas para se destacar da concorrência e
            <u> aumentar as vendas dos seus pacotes aéreos.</u>
          </p>
        </div>
        <div className='card-3'>
          <img
          src={ moneyIcon }
          alt='Ícone de Aumento de Vendas'
          className='moneyIcon'
          />
          <p className='titleCard'>AUMENTE SUAS VENDAS:</p>
          <p className='contentCard'>
          <u>Aprenda a vender pacotes aéreos de forma eficaz</u> e aumente
            o seu faturamento de forma significativa!
          </p>
        </div>
      </section>
      <hr />
      <p
        className='titlePrices'
        id='titlePrices'
      >
        ESCOLHA A MELHOR OFERTA PARA VOCÊ
      </p>
      <section className='cardsContainer'>
        <div className='card-price-1'>
          <p className='titlePriceCards'>PLANO BÁSICO</p>
          <p className='subtitlePriceCards'>(Para quem deseja apenas estar ao vivo)</p>
          <p className='priceCards'>R$ 10</p>
          <p className='paymentForm'>Pagamento Único</p>
          <p className='checkAvail'>
            ✔️ Acesso ao Workshop <br />
            “Como Começar a Vender <br />
            Pacotes Aéreos e Aumentar <br />
            Suas Vendas?”
          </p>
          <p className='noAvail'>❌ <s>Acesso a Gravação Vitalícia</s></p>
          <p className='noAvail'>
            ❌ <s>BÔNUS para os 20 primeiros: <br />
            Exercícios Práticos para você já <br />
            começar a aplicar e efetuar suas vendas <br />
            em tempo Recorde</s>
          </p>
          <a href="https://api.whatsapp.com/send?phone=5514998770703&text=Ol%C3%A1,%20gostaria
          %20de%20marcar%20um%20hor%C3%A1rio%20para%20a%20mentoria%20de%2010%20reais">
            <button className='btnPrice'>QUERO AGORA!</button>
          </a>
        </div>
        <div className='card-price-2'>
          <p className='titlePriceCards'>SUPER OFERTA <br /> VANTAJOSA</p>
          <p className='subtitlePriceCards'>(Ao Vivo + Gravação + Material Complementar)</p>
          <p className='priceCards'>R$ 19</p>
          <p className='paymentForm'>Pagamento Único</p>
          <p className='checkAvail'>
            ✔️ Acesso ao Workshop <br />
            “Como Começar a Vender <br />
            Pacotes Aéreos e AumentaR <br />
            Suas Vendas?”
          </p>
          <p className='checkAvail'>✔️ Acesso a Gravação Vitalícia</p>
          <p className='checkAvail'>
            ✔️ BÔNUS para os 20 primeiros: <br />
            Exercícios Práticos para você já <br />
            começar a aplicar e efetuar suas vendas <br />
            em tempo Recorde
          </p>
          <a href="https://api.whatsapp.com/send?phone=5514998770703&text=Ol%C3%A1,%20gostaria
          %20de%20marcar%20um%20hor%C3%A1rio%20para%20a%20mentoria%20de%2019%20reais">
            <button className='btnPrice'>VOU APROVEITAR!</button>
          </a>
        </div>
      </section>
    </section>
  )
}

export default SecondMain;

/* <span style={{ backgroundColor: 'purple' }}>❌</span> */