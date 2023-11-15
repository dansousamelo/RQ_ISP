import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext, useContext } from 'use-context-selector'
import { useLocation, useNavigate } from 'react-router-dom'
import { isListId } from '../components/HeaderWithoutAuth/interfaces'

export type ChecklistType = 'add' | 'list'

interface HeaderContextType {
  activeIcon: ChecklistType
  hasAddAnimation: boolean
  handleIconClick: (id: ChecklistType) => void
}

interface HeaderProviderProps {
  children: ReactNode
}

export const HeaderContext = createContext({} as HeaderContextType)

const typeToRouteMapping = {
  add: '/',
  list: '/list',
}

const routeToTypeMapping: { [key: string]: ChecklistType } = {
  '/': 'add',
  '/list': 'list',
  '/form': 'add',
}

export function HeaderProvider({ children }: HeaderProviderProps) {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const initialActiveIcon = routeToTypeMapping[pathname] || 'add'
  const [activeIcon, setActiveIcon] = useState<ChecklistType>(initialActiveIcon)
  const [hasAddAnimation, setHasAddAnimation] = useState(false)

  const handleIconClick = useCallback(
    (id: ChecklistType) => {
      setActiveIcon(id)
      const route = typeToRouteMapping[id]
      if (route) {
        navigate(route)
      }
    },
    [navigate],
  )

  const handleAddAnimation = useCallback(() => {
    setHasAddAnimation(true)
  }, [])

  useEffect(() => {
    const route = routeToTypeMapping[pathname]

    if (route !== activeIcon) setActiveIcon(route)

    if (isListId(activeIcon)) handleAddAnimation()
  }, [pathname, activeIcon, handleAddAnimation])

  return (
    <HeaderContext.Provider
      value={{
        activeIcon,
        hasAddAnimation,
        handleIconClick,
      }}
    >
      {children}
    </HeaderContext.Provider>
  )
}

export function useHeaderContext() {
  return useContext(HeaderContext)
}
