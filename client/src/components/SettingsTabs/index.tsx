import React, { ComponentProps, useState } from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import { TabItem } from './TabItem'
import * as S from './styles'

type TabType = {
  value: string
  title: string
  content: () => React.JSX.Element
}

export type SettingsProps = ComponentProps<typeof S.TabRoot>

export interface SettingsTabsProps extends SettingsProps {
  tabItems: TabType[]
  color?: string
  size?: 'sm'
  onTabChange?: (tab: any) => void
  activeTab?: string
}

export function SettingsTabs({
  tabItems,
  color,
  size,
  activeTab,
  onTabChange,
}: SettingsTabsProps) {
  const [currentTab, setCurrentTab] = useState(tabItems[0].value)
  const active = activeTab || currentTab

  return (
    <S.TabRoot value={active} onValueChange={onTabChange || setCurrentTab}>
      <S.TabList>
        {tabItems.map((tab) => (
          <TabItem
            key={tab.value}
            value={tab.value}
            title={tab.title}
            isSelected={active === tab.value}
            customColor={color}
            size={size}
          />
        ))}
      </S.TabList>
      <React.Fragment>
        {tabItems.map((tab) => (
          <Tabs.Content key={tab.value} value={tab.value}>
            <S.WrapperContent>{tab.content()}</S.WrapperContent>
          </Tabs.Content>
        ))}
      </React.Fragment>
    </S.TabRoot>
  )
}

SettingsTabs.displayName = 'SettingsTabs'
