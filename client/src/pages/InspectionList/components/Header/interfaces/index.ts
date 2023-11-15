export function isListId(id: string): id is 'list' {
  return id === 'list'
}

export function isAddId(id: string): id is 'add' {
  return id === 'add'
}
