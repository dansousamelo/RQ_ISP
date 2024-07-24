import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { QueryClient, QueryClientProvider } from 'react-query'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { HeaderProvider } from './contexts/HeaderContext'
import { InitialInspectionProvider } from './contexts/InitialInspectionContext'
import { LoggedInspectionProvider } from './contexts/LoggedInspection'
import { Form } from './pages/Form'
import { InpectionList } from './pages/InspectionList'
import { PrivateRoute } from './components/PrivateRoute'
import { CreateCheklist } from './pages/CreateChecklist'
import { ManagementChecklist } from './pages/ManagementChecklist'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.min.css'
import { Inspection } from './pages/Inspection'
import PdfViewer from './pages/PdfViewer'
import { Statistics } from './pages/Statistics'
import { PageNotFound } from './pages/PageNotFound'
import { CookieConsent } from './components/CookieConsent'

export const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <Router>
          <InitialInspectionProvider>
            <LoggedInspectionProvider>
              <HeaderProvider>
                <Routes>
                  <Route path="/" element={<CreateCheklist />} />
                  <Route path="/list" element={<ManagementChecklist />} />
                  <Route path="/form" element={<Form />} />

                  <Route
                    path="/inspection/list/:userId"
                    element={<PrivateRoute element={<InpectionList />} />}
                  />
                  <Route
                    path="/inspection/:id/:name/:type/:userId/statistics"
                    element={<PrivateRoute element={<Statistics />} />}
                  />
                  <Route
                    path="/inspection/:id/:userId"
                    element={<PrivateRoute element={<Inspection />} />}
                  />

                  <Route
                    path="/inspection/:id/:pdf/:amountOfItens/:idMark/:userId/:inspectionId/:documentId/mark"
                    element={<PrivateRoute element={<PdfViewer />} />}
                  />
                  <Route path="*" element={<PageNotFound />} />
                </Routes>
              </HeaderProvider>
            </LoggedInspectionProvider>
          </InitialInspectionProvider>
        </Router>
        <CookieConsent />
      </ThemeProvider>
    </QueryClientProvider>
  )
}
