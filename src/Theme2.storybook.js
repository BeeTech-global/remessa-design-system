import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import SvgDefs from './SvgDefs'
import TopHeaderNav from './TopHeaderNav'

const Hero = () => (
  <header className="Hero" style={{ backgroundImage: 'url(https://cdn2.hubspot.net/hubfs/3381861/remessa-lp/bitcoin/bg-hero-desk-hd.jpg)' }}>
    <div className="Hero-container container">
      <div className="row">
        <div className="col-md-6">
          <h1 className="Hero-title">Como receber dinheiro do exterior</h1>
          <p className="Hero-lead">Só na Remessa Online você transfere para a sua conta quando quiser e aproveita as altas da cotação para fazer seu dinheiro valer muito mais!</p>
        </div>
      </div>
    </div>
  </header>
)

class WidgetSimulator extends Component {
  componentDidMount() {
    window.addEventListener('message', event => {
      if (event.origin !== 'http://localhost:4000') {
        return
      }

      if (event.data.type === 'SUBMIT_INBOUND_LOGGED_USER') {
        window.location.href = '/app/novo-recebimento'
        return
      }
      if (event.data.type === 'SUBMIT_INBOUND_LOGGED_USER') {
        window.location.href = '/#entrar'
      }
    }, false)
  }

  render() {
    return (
      <div className="container SimulatorWidget">
        <div className="SimulatorWidget-wrapper">
          <iframe
            src="https://remessa-web-ro-338-widget.herokuapp.com/widget-simulador-recebimento"
            className="SimulatorWidget-iframe"
            title="Simule seu Recebimento"
            allowTransparency
            scrolling="no"
          />
        </div>
      </div>
    )
  }
}

const GradientSection = () => (
  <section className="GradientSection clearfix">
    <WidgetSimulator />
    <div className="container ShowCaseDemo">
      <div className="row justify-content-center">
        <h2 className="col-md-8 ShowCaseDemo-title text-center">
          Tenha o controle da sua vida financeira global na sua mão!
        </h2>
      </div>

      <div className="ShowCaseDemo-item row justify-content-center">
        <div className="col-md-4 order-2 order-md-2">
          <div className="row justify-content-center">
            <div className="col-11">
              <h3 className="ShowCaseDemo-subtitle">Qualquer tipo de recebimento do exterior</h3>
              <p className="ShowCaseDemo-text">
                Transfira rendimentos de investimentos,
                receba salários, serviços e Google AdSense ou qualquer outro valor.
              </p>
            </div>
          </div>

        </div>
        <div className="col-md-4 order-1">
          <figure className="ShowCaseDemo-figure">
            <img
              src="https://cdn2.hubspot.net/hubfs/3381861/remessa-lp/inbound/RM-iPhone-white_naturezas.png"
              alt="Celular visualizando as naturezas disponíveis do Remessa Online"
            />
          </figure>
        </div>
      </div>

      <div className="ShowCaseDemo-item row justify-content-center ShowCaseDemo-item--odd">
        <div className="col-md-4 order-2 order-md-1">
          <div className="row justify-content-center">
            <div className="col-11">
              <h3 className="ShowCaseDemo-subtitle">Aguarde a melhor cotação para transferir</h3>
              <p className="ShowCaseDemo-text">
                Aqui seu dinheiro vale mais!
                Conclua a transferência para a sua conta no Brasil quando a cotação estiver em alta.
              </p>
            </div>
          </div>

        </div>
        <div className="col-md-4 order-1">
          <figure className="ShowCaseDemo-figure">
            <img
              src="https://cdn2.hubspot.net/hubfs/3381861/remessa-lp/inbound/RM-resgate-online.png"
              alt="Exemplo de visualização de extrato Remessa Online"
            />
          </figure>
        </div>
      </div>

      <div className="ShowCaseDemo-item row justify-content-center">
        <div className="col-md-4 order-2 order-md-2">
          <div className="row justify-content-center">
            <div className="col-11">
              <h3 className="ShowCaseDemo-subtitle">Pague XX% menos em suas remessas</h3>
              <p className="ShowCaseDemo-text">
                A menores taxas e spread do mercado!
                Compare e conquiste a independência dos bancos na hora de receber no Brasil.
              </p>
            </div>
          </div>

        </div>
        <div className="col-md-4 order-1 ShowCaseDemo-testimonial">
          <div className="row justify-content-center">
            <div className="col-11">
              <a
                href="https://www.facebook.com/fernando.campos.395/posts/1618483728170090:0"
                target="_blank"
                className="testimonials__box"
                title="Veja o depoimento de Fernando Joly Campos"
                rel="nofollow noopener noreferrer"
                tabIndex="-1"
              >
                <p>Processo de envio de remessa para o exterior muito simples e intuitivo.</p>
                <svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#fa-external" /></svg>
                <figure>
                  <span
                    style={{
                      backgroundImage: "url('https://scontent-gru2-1.xx.fbcdn.net/v/t1.0-9/13669053_1239504192734714_271504565630511343_n.jpg?oh=54c17113660e4fbaabfa61ab5e51cf3a&amp;oe=5AA876A7')"
                    }}
                  />
                </figure>
              </a>
              <small className="testimonials__author">
                <strong>Fernando Joly Campos</strong>
                <span>18/06/2017</span>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const AdvantagesSection = () => (
  <section className="AdvantagesSection">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-10 col-md-12">
          <h2 className="AdvantagesSection-title">Veja como é fácil receber no Brasil via Remessa Online</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3 AdvantagesSection-item">
          <figure className="justify-content-center align-items-center">
            <svg style={{ height: '11.2rem' }}><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-aguardando-historia" /></svg>
          </figure>
          <p>Crie sua operação! Recebimentos de salários e serviços tem aprovação em até 3 dias úteis.</p>
        </div>
        <div className="col-md-3 AdvantagesSection-item">
          <figure className="justify-content-center align-items-center">
            <svg style={{ height: '10.1rem' }}><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-recebimento-08" /></svg>
          </figure>
          <p>Envie o comprovante da transferência internacional acessando a plataforma.</p>
        </div>
        <div className="col-md-3 AdvantagesSection-item">
          <figure className="justify-content-center align-items-center">
            <svg style={{ height: '10.6rem' }}><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-recebimento-19" /></svg>
          </figure>
          <p>Você será informado quando identificarmos o valor da transferência internacional.</p>
        </div>
        <div className="col-md-3 AdvantagesSection-item">
          <figure className="justify-content-center align-items-center">
            <svg style={{ height: '8.8rem' }}><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-recebimento-21" /></svg>
          </figure>
          <p>Aguarde a melhor cotação para o câmbio e transfira para sua conta quando desejar!</p>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-4">
          <span className="btn-wrapper -block">
            <a href="#" className="btn btn-bg-primary" title="Receber Dinheiro">Receber Dinheiro</a>
          </span>
        </div>
      </div>
    </div>
  </section>
)

const Footer = () => (
  <footer className="footer">
    <section className="footer__remessa">
      <div className="container">
        <svg className="footer__remessa__logo">
          <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#logo-remessa" />
        </svg>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <p className="text-center">A Remessa Online transformou as transferências internacionais em algo simples, rápido e econômico para você e para sua empresa. Aproveite toda a segurança e economia da plataforma e conte sempre com nosso atendimento especializado para resolver qualquer dúvida.</p>
          </div>
        </div>
        <div className="footer__remessa__social">
          <a href="https://www.facebook.com/remessaonline/" target="_blank" title="Veja o Facebook do Remessa Online">
            <svg>
              <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-facebook-2" />
            </svg>
          </a>
        </div>
        <div className="row justify-content-center">
          <ul className="col-md-7 footer__remessa__contact-opts">
            <li>
              <a href="https://api.whatsapp.com/send?phone=5511992805882" title="Whatsapp: 11 9280-5882" target="_blank">
                <svg className="icon">
                  <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#fa-whatsapp" />
                </svg>
                Whatsapp: 11 99280-5882
              </a>
            </li>
            <li>
              <a href="mailto:remessa@remessaonline.com.br" title="Entre em contato com a Remessa Online">
                <svg className="icon">
                  <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#fa-envelope-o" />
                </svg>
                remessa@remessaonline.com.br
              </a>
            </li>
            <li>
              <a href="tel:+551142804659" title="Ligue para a Remessa Online" target="_blank">
                <svg className="icon">
                  <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#fa-phone" />
                </svg>
                11 4280-4659
              </a>
            </li>
            {/*<li>
              <a href="javascript:$zopim &amp;&amp; $zopim.livechat.window.show();" title="Atendimento das 9h às 18h">
                <svg className="icon">
                  <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#fa-clock-o" />
                </svg>
                Atendimento das 9h às 18h
              </a>
            </li>*/}
            <li className="-location">
              <a href="https://www.google.com.br/maps/place/Condom%C3%ADnio+Alameda+Campinas+-+Av.+Brg.+Faria+Lima,+1355+-+Jardim+Paulistano,+S%C3%A3o+Paulo+-+SP,+01452-002/@-23.5695793,-46.6934645,17z/data=!3m1!4b1!4m5!3m4!1s0x94ce576c1789d77b:0xa9da3b124e30b610!8m2!3d-23.5695842!4d-46.6912758?hl=pt-BR" title="Av. Brg. Faria Lima, 1355 - Jardim Paulistano - São Paulo/SP" target="_blank">
                <svg className="icon">
                  <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-pin" />
                </svg>
                Av. Brg. Faria Lima, 1355, 19º andar - Jardim Paulistano - São Paulo/SP
              </a>
            </li>
            <li className="-award">
              <a href="http://www.bcb.gov.br/rex/IAMC/Port/correspondentes/correspondentes.asp" target="_blank" title="Somos autorizados pelo Banco Central">
                <svg className="icon">
                  <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-award" />
                </svg>
                <span>
                  Correspondente cambial autorizado
                  <span className="-central">
                    {' '} pelo Banco Central
                    <svg className="footer__chevron-right">
                      <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#fa-chevron-right" />
                    </svg>
                  </span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section className="footer__copyright">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            Copyright &copy; 2018, Remessa Online.
            <span className="visible-xs-block visible-sm-block visible-md-inline visible-lg-inline">Todos os direitos reservados.</span>
          </div>
          <nav className="col-md-6">
            <span><a href="https://www.remessaonline.com.br/termos-de-uso" title="Termos de Uso">Termos de Uso</a></span>
          </nav>
        </div>
      </div>
    </section>
  </footer>
)

storiesOf('Theme 2', module)
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
    <GradientSection key="3" />,
    <AdvantagesSection key="4" />,
    <Footer key="5" />
  ]
))
