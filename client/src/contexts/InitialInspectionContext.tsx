import { ReactNode, useCallback, useState } from 'react'
import { createContext, useContext } from 'use-context-selector'

export type InspectionChecklistType = 'privacyRequirement' | 'userStory'

export interface SecondStepData {
  name: string
  responsable: string
  email: string
  participants: string
  record_link: string
}

export type ActiveUploadTab = 'upload_documents' | 'documents'

export type Files = {
  name: string
  url: string
  s3Name: string
}[]

interface InitialInspectionContextType {
  activeStep: number
  updateNextActiveStep: () => void
  inspectionChecklistType: InspectionChecklistType
  updateInspectionChecklistType: (value: InspectionChecklistType) => void
  secondStepData: SecondStepData
  updateSecondStepData: (data: SecondStepData) => void
  updatePreviousActiveStep: () => void
  activeTab: ActiveUploadTab
  updateActiveTabOnUpload: (value: ActiveUploadTab) => void
  filesUploaded: Files
  setFilesUploaded: React.Dispatch<React.SetStateAction<Files>>
  setActiveStep: React.Dispatch<React.SetStateAction<number>>
  clearInitialInspectionContext: () => void
}

interface InitialInspectionProviderProps {
  children: ReactNode
}

export const InitialInspectionContext = createContext(
  {} as InitialInspectionContextType,
)

export function InitialInspectionProvider({
  children,
}: InitialInspectionProviderProps) {
  const [activeStep, setActiveStep] = useState<number>(0)

  const [inspectionChecklistType, setInspectionChecklistType] =
    useState<InspectionChecklistType>('privacyRequirement')

  const [activeTab, setActiveTab] =
    useState<ActiveUploadTab>('upload_documents')
  const [filesUploaded, setFilesUploaded] = useState<Files>([])

  const [secondStepData, setSecondStepData] = useState({} as SecondStepData)

  const updateNextActiveStep = useCallback(() => {
    setActiveStep((value) => value + 1)
  }, [])

  const updatePreviousActiveStep = useCallback(() => {
    setActiveStep((value) => value - 1)
  }, [])

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

  const clearInitialInspectionContext = useCallback(() => {
    setActiveStep(0)
    setInspectionChecklistType('privacyRequirement')
    setActiveTab('upload_documents')
    setFilesUploaded([])
    setSecondStepData({} as SecondStepData)
  }, [])

  return (
    <InitialInspectionContext.Provider
      value={{
        updateNextActiveStep,
        activeStep,
        inspectionChecklistType,
        updateInspectionChecklistType,
        secondStepData,
        updateSecondStepData,
        updatePreviousActiveStep,
        activeTab,
        updateActiveTabOnUpload,
        filesUploaded,
        setFilesUploaded,
        setActiveStep,
        clearInitialInspectionContext,
      }}
    >
      {children}
    </InitialInspectionContext.Provider>
  )
}

export function useInitialInspectionContext() {
  return useContext(InitialInspectionContext)
}
