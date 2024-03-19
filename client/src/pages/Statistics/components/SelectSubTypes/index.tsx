import { Select } from '../../../../components/Select'

interface ItempOtion {
  value: string
  label: string
}

interface SelectSubTypesProps {
  items: ItempOtion[]
  handleValueChange: (newValue: string) => void
  defaultValue?: any
}

export function SelectSubTypes({
  items,
  handleValueChange,
  defaultValue,
}: SelectSubTypesProps) {
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
