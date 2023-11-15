import { useHeaderContext } from '../../contexts/HeaderContext'
import { AddIcon } from './components/Icons/AddIcon'
import { ListIcon } from './components/Icons/ListIcon'
import { IconItem, isAddId, isListId } from './interfaces'
import * as S from './styles'

export function HeaderWithoutAuth() {
  const { activeIcon, handleIconClick } = useHeaderContext()

  const icons: IconItem[] = [
    {
      id: 'add',
      icon: (
        <AddIcon
          id="add"
          onClick={() => handleIconClick('add')}
          isActive={isAddId(activeIcon)}
        />
      ),
    },
    {
      id: 'list',
      icon: (
        <ListIcon
          id="list"
          onClick={() => handleIconClick('list')}
          isActive={isListId(activeIcon)}
        />
      ),
    },
  ]

  return (
    <S.StyledHeader>
      <S.Title>RQ_ISP</S.Title>
      <S.IconContainer>
        {icons.map(({ id, icon }) => (
          <S.ClickableIcon key={id} onClick={() => handleIconClick(id)}>
            {icon}
          </S.ClickableIcon>
        ))}
      </S.IconContainer>
    </S.StyledHeader>
  )
}
