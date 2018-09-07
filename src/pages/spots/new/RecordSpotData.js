import React from 'react'

import Button from '../../../components/Button'
import Input from '../../../components/Input'
import Radio from '../../../components/Radio'
import Checkbox from '../../../components/Checkbox'

const RecordSpotData = ({ onSubmit }) => (
  <div className="new-spot__content">
    <div className="new-spot__container">
      <h1 className="new-spot__title">Ei, adicione as informações do seu pico</h1>

      <form className="new-spot__form" onSubmit={onSubmit}>
        <Input required id="name" label="Nome do pico" />

        <h3 className="new-spot__label">Esse pico é sugerido pra qual modalidade? Selecione as categorias.</h3>

        <Checkbox medium id="street" label="Street" />
        <Checkbox medium id="longboard" label="Longboard" />

        <h3 className="new-spot__label">É necessário pagar pra andar aí?, Marque uma opção.</h3>

        <Radio name="cost" id="paid" label="O acesso é pago" />
        <Radio name="cost" defaultChecked id="free" label="O acesso é gratuito" />

        <Button size="full" color="primary" className="new-spot__form__button">
          Salvar esse local
        </Button>
      </form>
    </div>
  </div>
)

export default RecordSpotData
