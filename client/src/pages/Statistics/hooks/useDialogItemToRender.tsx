import styled from 'styled-components'
import { DialogStep, OptionToPrint } from '..'
import { Select } from '../../../components/Select'
import { DialogConfig } from '../../InspectionList/hooks/useDialogItemToRender'
import { useCallback } from 'react'

interface ItempOtion {
  value: string
  label: string
}

interface SelectOptionToExportProps {
  items: ItempOtion[]
  handleValueChange: (newValue: OptionToPrint) => void
  defaultValue?: string
}

function SelectOptionToExport({
  items,
  handleValueChange,
  defaultValue,
}: SelectOptionToExportProps) {
  return (
    <Select.Root
      defaultValue={defaultValue || undefined}
      onValueChange={handleValueChange}
    >
      <Select.Trigger className="SelectTrigger">
        <Select.Value placeholder="Selecione..." />
        <Select.Icon style={{ marginTop: '4px' }} className="SelectIcon">
          <Select.ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          className="SelectContent"
          position="popper"
          align="end"
          sideOffset={2}
        >
          <Select.Viewport className="SelectViewport">
            <Select.Group>
              {items.map((option) => (
                <Select.Item key={option.value} value={option.value}>
                  <Select.ItemText>{option.label}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`

interface DialogItemToRenderProps {
  dialogStep: DialogStep
  handleGraphicPrint: any
  handleUpdateDialogControlled: (open: boolean) => void
  handleItensPrint: any
  handleAllPrint: any
  hasSubtypes: boolean
  setOptionToPrint: React.Dispatch<React.SetStateAction<OptionToPrint>>
  optionToPrint: OptionToPrint
}

export function useDialogItemToRender({
  dialogStep,
  handleGraphicPrint,
  handleUpdateDialogControlled,
  handleItensPrint,
  hasSubtypes,
  handleAllPrint,
  optionToPrint,
  setOptionToPrint,
}: DialogItemToRenderProps) {
  const OPTIONS_TO_EXPORT = [
    {
      value: 'export_graphic',
      label: hasSubtypes ? 'Exportar gráficos' : 'Exportar gráfico',
    },
    { value: 'export_items', label: 'Exportar itens' },
    { value: 'export_all', label: 'Exportar tudo' },
  ]

  const handleExportGraphic = useCallback(async () => {
    await handleGraphicPrint()
    handleUpdateDialogControlled(false)
    setOptionToPrint('')
  }, [handleGraphicPrint, handleUpdateDialogControlled, setOptionToPrint])

  const handleExportItems = useCallback(async () => {
    await handleItensPrint()
    handleUpdateDialogControlled(false)
    setOptionToPrint('')
  }, [handleItensPrint, handleUpdateDialogControlled, setOptionToPrint])

  const handleExportAll = useCallback(async () => {
    await handleAllPrint()
    handleUpdateDialogControlled(false)
    setOptionToPrint('')
  }, [handleAllPrint, handleUpdateDialogControlled, setOptionToPrint])

  const OPTIONS_TO_PRINT_FUNCTION = [
    {
      value: 'export_graphic',
      action: handleExportGraphic,
    },
    { value: 'export_items', action: handleExportItems },
    { value: 'export_all', action: handleExportAll },
  ]

  function handleChangeOptionInSelect(value: OptionToPrint) {
    setOptionToPrint(value)
  }

  function handlePrintOption() {
    const option = OPTIONS_TO_PRINT_FUNCTION.find(
      (option) => option.value === optionToPrint,
    )

    if (option && option.action) return option.action()

    return undefined
  }

  const dialogConfig: DialogConfig = {
    export_files: {
      title: 'Exportar dados',
      component: (
        <Container>
          <SelectOptionToExport
            items={OPTIONS_TO_EXPORT}
            handleValueChange={handleChangeOptionInSelect}
          />
        </Container>
      ),
      description:
        'Escolha a opção de exportação desejada. O resultado será um arquivo PDF, a exportação pode demorar um pouco.',
      width: '31rem',
      buttonConfig: [
        {
          id: 'back',
          label: 'Voltar',
          variant: 'secondary',
          action: () => {
            handleUpdateDialogControlled(false)
            setOptionToPrint('')
          },
        },
        {
          id: 'export',
          label: 'Exportar',
          variant: 'primary',
          action: async () => handlePrintOption(),
          disabled: !optionToPrint,
        },
      ],
    },
  }

  const dialogItemToRender = dialogConfig[dialogStep]

  return {
    dialogItemToRender,
  }
}
