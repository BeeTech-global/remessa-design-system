import React from 'react'
import { storiesOf } from '@storybook/react'
import SvgDefs from '../../SvgDefs'

storiesOf('TopHeaderNav', module)
.addDecorator(story => (
  <div style={{ background: '#000', width: '100vw', height: '100vh' }}>
    <SvgDefs />
    {story()}
  </div>
))
.add('Overview', () => (
  <header className="TopHeaderNav">
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
  </header>
))
