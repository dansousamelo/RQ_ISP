import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { HeaderProvider } from './contexts/HeaderContext'
import { Form } from './pages/Form'
import { CreateCheklist } from './pages/HomePage/components/CreateChecklist'
import { ManagementChecklist } from './pages/HomePage/components/ManagementChecklist'
import { InpectionList } from './pages/InspectionList'
import { PrivateRoute } from './components/PrivateRoute'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Router>
        <HeaderProvider>
          <Routes>
            <Route path="/" element={<CreateCheklist />} />
            <Route path="/list" element={<ManagementChecklist />} />
            <Route path="/form" element={<Form />} />
            <Route
              path="/inspection/list"
              element={<PrivateRoute element={<InpectionList />} />}
            />
          </Routes>
        </HeaderProvider>
      </Router>
    </ThemeProvider>
  )
}
