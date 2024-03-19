import { ReactNode, useCallback, useState } from 'react'
import { createContext, useContext } from 'use-context-selector'
import { useDialogControlled } from '../components/DialogControlled'

export type InspectionChecklistType = 'privacyRequirement' | 'userStory'

export interface SecondStepData {
  name: string
  responsable: string
  email: string
  participants: string
  record_link: string
}

export type ActiveUploadTab = 'upload_documents' | 'documents'

type Files = {
  name: string
  url: string
  s3Name: string
}[]

export type InspectionDialog =
  | 'first_step'
  | 'second_step'
  | 'third_step'
  | 'delete_inspection'
  | 'logout'
  | ''

interface LoggedInspectionContextType {
  inspectionChecklistType: InspectionChecklistType
  updateInspectionChecklistType: (value: InspectionChecklistType) => void
  secondStepData: SecondStepData
  updateSecondStepData: (data: SecondStepData) => void
  activeTab: ActiveUploadTab
  updateActiveTabOnUpload: (value: ActiveUploadTab) => void
  filesUploaded: Files
  setFilesUploaded: React.Dispatch<React.SetStateAction<Files>>
  dialogInspectionStep: InspectionDialog
  setDialogInspectionStep: React.Dispatch<
    React.SetStateAction<InspectionDialog>
  >
  isDialogControlledOpen: boolean
  handleUpdateDialogControlled: (open: boolean) => void
  clearLoggedInspectionContext: () => void
  setSecondStepData: React.Dispatch<React.SetStateAction<SecondStepData>>
}

interface LoggedInspectionProviderProps {
  children: ReactNode
}

export const LoggedInspectionContext = createContext(
  {} as LoggedInspectionContextType,
)

export function LoggedInspectionProvider({
  children,
}: LoggedInspectionProviderProps) {
  const [inspectionChecklistType, setInspectionChecklistType] =
    useState<InspectionChecklistType>('privacyRequirement')

  const [activeTab, setActiveTab] =
    useState<ActiveUploadTab>('upload_documents')
  const [filesUploaded, setFilesUploaded] = useState<Files>([])

  const [secondStepData, setSecondStepData] = useState({} as SecondStepData)

  const [dialogInspectionStep, setDialogInspectionStep] =
    useState<InspectionDialog>('')

  const updateInspectionChecklistType = useCallback(
    (value: InspectionChecklistType) => {
      setInspectionChecklistType(value)
    },
    [],
  )

  const updateActiveTabOnUpload = useCallback((value: ActiveUploadTab) => {
    setActiveTab(value)
  }, [])

  const updateSecondStepData = useCallback((data: SecondStepData) => {
    setSecondStepData({ ...data })
  }, [])

  const { handleUpdateDialogControlled, isDialogControlledOpen } =
    useDialogControlled()

  const clearLoggedInspectionContext = useCallback(() => {
    setInspectionChecklistType('privacyRequirement')
    setActiveTab('upload_documents')
    setFilesUploaded([])
    setSecondStepData({} as SecondStepData)
    setDialogInspectionStep('')
  }, [])

  return (
    <LoggedInspectionContext.Provider
      value={{
        inspectionChecklistType,
        updateInspectionChecklistType,
        secondStepData,
        updateSecondStepData,
        activeTab,
        updateActiveTabOnUpload,
        filesUploaded,
        setFilesUploaded,
        dialogInspectionStep,
        setDialogInspectionStep,
        handleUpdateDialogControlled,
        isDialogControlledOpen,
        setSecondStepData,
        clearLoggedInspectionContext,
      }}
    >
      {children}
    </LoggedInspectionContext.Provider>
  )
}

export function useLoggedInspectionContext() {
  return useContext(LoggedInspectionContext)
}
