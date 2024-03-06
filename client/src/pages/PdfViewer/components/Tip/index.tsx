import { Component } from 'react'

interface State {
  compact: boolean
  text: string
  emoji: string
}

interface Props {
  onConfirm: (comment: { text: string; emoji: string }) => void
  onOpen: () => void
  onUpdate?: () => void
  idMark: string
}

export class Tip extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      compact: true,
      text: props.idMark,
      emoji: '',
    }
  }

  componentDidUpdate(nextProps: Props, nextState: State) {
    const { onUpdate } = this.props

    if (onUpdate && this.state.compact !== nextState.compact) {
      onUpdate()
    }
  }

  render() {
    const { onConfirm, onOpen } = this.props
    const { compact, text, emoji } = this.state

    return (
      <div className="Tip">
        {compact ? (
          <div
            className="Tip__compact"
            onClick={() => {
              onOpen()
              this.setState({ compact: false })
            }}
          >
            Adicionar marcação
          </div>
        ) : (
          <form
            className="Tip__card"
            onSubmit={(event) => {
              event.preventDefault()
              onConfirm({ text, emoji })
            }}
          >
            <div style={{ marginBottom: '16px' }}>
              <span style={{ fontWeight: '500' }}>
                Número do item da inspeção
              </span>
            </div>
            <div>
              <textarea
                placeholder="Digite o número do seu item"
                autoFocus
                value={text}
                onChange={(event) => {
                  const onlyNumbers = event.target.value.replace(/[^0-9]/g, '')
                  this.setState({ text: onlyNumbers })
                }}
                ref={(node) => {
                  if (node) {
                    node.focus()
                  }
                }}
              />
            </div>
            <div>
              <input type="submit" value="Avançar" />
            </div>
          </form>
        )}
      </div>
    )
  }
}

export default Tip
