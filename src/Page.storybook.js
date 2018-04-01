import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import SvgDefs from './SvgDefs'

const TopHeaderNav = () => (
  <div className="TopHeaderNav">
    <nav className="container TopHeaderNav-container">
      <div className="row">
        <div className="col-md-12">
          <a href="https://remessaonline.com.br" title="Voltar para Home">
            <svg>
              <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#remessa-logo" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  </div>
)

const Hero = () => (
  <header className="Hero" style={{ backgroundImage: 'url(https://cdn2.hubspot.net/hubfs/3381861/remessa-lp/bitcoin/bg-hero-desk-hd.jpg)' }}>
    <div className="Hero-container container">
      <div className="row">
        <div className="col-md-6">
          <h1 className="Hero-title">Como comprar Bitcoin</h1>
          <p className="Hero-lead">Dicas da Remessa Online para ajudar você em investimentos e compras no mercado Bitcoin.</p>
        </div>
      </div>
    </div>
  </header>
)

const ValueProposals = () => (
  <section className="ValueProposals u-arrow-after">
    <div className="container ValueProposals-container">
      <div className="row">
        <div className="col-md-4 ValueProposals-item">
          <figure className="ValueProposals-icon">
            <svg>
              <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-create-bank-account" />
            </svg>
          </figure>
          <h2 className="ValueProposals-title">Criar conta Bitcoin</h2>
          <p className="ValueProposals-description">Poucos passos para investir em Bitcoin! Veja como abrir uma conta de investimentos no exterior para compra e venda de Bitcoin.</p>
        </div>
        <div className="col-md-4 ValueProposals-item">
          <figure className="ValueProposals-icon">
            <svg>
              <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-hat-and-wand" />
            </svg>
          </figure>
          <h2 className="ValueProposals-title">Investir em Bitcoin é fácil</h2>
          <p className="ValueProposals-description">Aumente seus ganhos investindo na moeda que mais valoriza no mundo. Comece a investir em Bitcoin!</p>
        </div>
        <div className="col-md-4 ValueProposals-item">
          <figure className="ValueProposals-icon">
            <svg>
              <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-operation-consulting" />
            </svg>
          </figure>
          <h2 className="ValueProposals-title">A melhor cotação</h2>
          <p className="ValueProposals-description">Depois de abrir sua conta, fale com a gente e aproveite as melhores cotações para fechamento do câmbio das suas compras de Bitcoin.</p>
        </div>
      </div>
    </div>
  </section>
)

const StepByStep = () => (
  <section className="StepByStep">
    <div className="container">
      <h2 className="StepByStep-title">Passo a passo para comprar Bitcoin</h2>
      <ol>
        <li>
          <figure>
            <svg>
              <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-create-bank-account-2" />
            </svg>
          </figure>
          <div className="StepByStep-description">
            <h3 className="StepByStep-description-title">
              Abrir uma conta de investimentos no exterior
            </h3>
            <p>
              Em algumas corretoras o processo é simples,
              basta ter o passaporte e um comprovante de residência.
            </p>
            <p>
              <a
                href="https://www.remessaonline.com.br/abertura-de-conta-de-investimento-no-exterior"
                title="Veja nossa página sobre abertura de conta de investimento no exterior."
                target="_blank"
              >
                Veja nossa página sobre abertura de conta de investimento no exterior.
              </a>
            </p>
          </div>
        </li>
        <li>
          <figure>
            <svg>
              <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-register" />
            </svg>
          </figure>
          <div className="StepByStep-description">
            <h3 className="StepByStep-description-title">
              Cadastro na Remessa Online
              </h3>
            <p>
              Faça o cadastro em menos de 5 minutos e agilize o
              câmbio para seus investimentos em Bitcoin.
            </p>
          </div>
        </li>
        <li>
          <figure>
            <svg>
              <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-globe" />
            </svg>
          </figure>
          <div className="StepByStep-description">
            <h3 className="StepByStep-description-title">Transferências Internacionais</h3>
            <p>
              Faça o cadastro em menos de 5 minutos e agilize o
              câmbio para seus investimentos em Bitcoin.
            </p>
          </div>
        </li>
        <li>
          <figure>
            <svg>
              <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-bitcoin-logo" />
            </svg>
          </figure>
          <div className="StepByStep-description">
            <h3 className="StepByStep-description-title">Investir em Bitcoin</h3>
            <p>
              Agora é só comprar Bitcoin! A legislação nacional ainda não regula o mercado de Bitcoin, porém você pode usar uma conta de investimento no exterior para adquirir, vender ou investir na moeda que mais valoriza no mundo.
            </p>
          </div>
        </li>
      </ol>
    </div>
  </section>
)

const ContactBox = () => (
  <section className="ContactBox">
    <div className="ContactBox-box">
      <h2 className="heading-h3">Abra sua conta no exterior e fale com a gente!</h2>
      <div className="row justify-content-md-center u-m-b">
        <div className="col-sm-12 col-md-7">
          <span className="btn-wrapper -block">
            <a
              href="https://www.remessaonline.com.br#cadastrar"
              className="btn btn-bg-blue"
              title="Cadastrar na Remessa Online"
            >
              Cadastrar na Remessa Online
            </a>
          </span>
        </div>
      </div>
      <p>
        A Remessa Online atua apenas com o fechamento do câmbio
        para suas remessas para o exterior,
        não se responsabilizando pelos seus investimentos ou rentabilidade.
      </p>
    </div>
  </section>
)

const Faq = () => (
  <section className="Faq">
    <div className="container Faq-container">
      <h2>Dicas para contas de investimento no exterior</h2>
      <h3>O que considerar na hora de investir no exterior?</h3>
      <p>
        É importante pesquisar sobre a corretora de investimento no exterior em que você abrirá conta. Considerar o país em que ela está e sua legislação é importantíssimo para não cometer erros na hora de investir.
      </p>
      <hr />
      <h3>Que documentos são solicitados?</h3>
      <p>
        Para abrir a grande maioria das contas de investimento no exterior é necessário apenas o passaporte, comprovante de residência e uma carta do banco ou extrato de meses anteriores.
      </p>
      <hr />

      <h3>Como declarar Bitcoin no Imposto de Renda?</h3>
      <p>Investimentos entre R$ 1 mil e R$ 35 mil podem ser declarados como &quot;outros bens&quot;.</p>
      <p>Valores acima de R$ 35 mil necessitam recolher 15% de imposto sob o ganho de capital.</p>

      <p><strong>Guia para declarar:</strong></p>
      <ol>
        <li>Acesse o programa do IRPF</li>
        <li>Abra a opção &quot;Bens e direitos&quot; - ele fica dentro de &quot;Fichas da declaração&quot;</li>
        <li>Na área do código insira &quot;99 - Outros bens e direitos&quot;</li>
        <li>Na área &quot;Descrimina&ccedil;&atilde;o&quot; coloque o número de moedas que você tem</li>
        <li>Sempre declare o valor de aquisição das criptomoedas</li>
      </ol>
    </div>
  </section>
)

class TrustedCompany extends Component {
  componentDidMount() {
    const script = document.createElement("script");

    script.src = "https://d3643s33l1rfut.cloudfront.net/js/widget?w=BQYHDBEcXkJXR1xdRFRSW0ddUUE";
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    return (
      <section id="trusted-company">
        <div className="container">
          <h2>O que estão dizendo sobre nós</h2>
          <div className="trusted-company-wrapper">
            <div id="TRUSTEDCOMPANY_widget_103546">
              <script async src="https://d3643s33l1rfut.cloudfront.net/js/widget?w=BQYHDBEcXkJXR1xdRFRSW0ddUUE" />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

const Footer = () => (
  <footer className="Footer" itemScope itemType="http://schema.org/FinancialService">
    <link itemProp="url" href="https://www.remessaonline.com.br/" />
    <div className="container">
      <div className="Footer-backToTop">
        <a href="#" title="Voltar ao topo">
          <span>Voltar ao topo</span>
          <svg>
            <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#fa-angle-up" />
          </svg>
        </a>
      </div>

      <div className="Footer-row row">
        <div className="Footer-logo col-md-3">
          <a href="https://www.remessaonline.com.br" title="Voltar para Home">
            <svg>
              <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#remessa-logo" />
            </svg>
          </a>
        </div>
        <div className="Footer-address col-md-6">
          <address itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
            <span itemProp="streetAddress">Av. Brg. Faria Lima, nº 1355, 19º andar</span> - Jardim Paulistano - <span itemProp="addressLocality">São Paulo/SP - Brasil</span>
          </address>
        </div>
        <div className="Footer-socialIcon col-md-3">
          <a itemProp="sameAs" href="https://www.facebook.com/remessaonline/" target="_blank" rel="noopener noreferrer" title="Visite nosso Facebook">
            <svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-facebook" /></svg>
          </a>
          <a itemProp="sameAs" href="https://www.linkedin.com/company/remessaonline" target="_blank" rel="noopener noreferrer" title="Visite nosso LinkedIn">
            <svg>
              <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-linkedin" />
            </svg>
          </a>
        </div>
      </div>

      <hr />

      <small className="Footer-disclaimer">
        A Remessa Online é uma plataforma online com total segurança para seus clientes.

        Trabalhamos sempre dentro das normas do Banco Central do Brasil e com transparência e agilidade em todos os
        processos.

        <span itemProp="starRating" itemScope itemType="http://schema.org/Rating">
          A qualidade do nosso serviço pode ser atestado no
          <span itemProp="author" itemScope itemType="Organization"><span itemProp="name">Trusted Company</span></span>,
          onde mantemos uma nota de
          <span itemProp="ratingValue" content="4.8">4.8</span> de 5, e no alto
          nível e responsabilidade dos nossos especialistas.
        </span>

        A Remessa Online é uma plataforma da BeeTech, fintech especializada em criar soluções para o mercado de câmbio.

        Você pode nos encontrar no Banco Central com o CNPJ <span itemProp="identifier">20338931/0001-01</span> como
        <span itemProp="legalName">Bee Serviços de Assessoria Financeira Tecnologia LTDA</span>.
      </small>

      <small className="Footer-copyright">
        Copyright <time itemProp="copyrightYear" dateTime="2018">2018</time>,
        <strong itemProp="copyrightHolder" itemType="http://schema.org/Organization">
          <span itemProp="name">Remessa Online</span>
        </strong>
      </small>
    </div>
  </footer>
)

storiesOf('Page', module)
.addDecorator(story => (
  <main>
    <SvgDefs />
    {story()}
  </main>
))
.add('Overview', () => (
  [
    <TopHeaderNav key="1" />,
    <Hero key="2" />,
    <ValueProposals key="3" />,
    <StepByStep key="4" />,
    <ContactBox key="5" />,
    <Faq key="6" />,
    <TrustedCompany key="7" />,
    <Footer key="8" />
  ]
))
