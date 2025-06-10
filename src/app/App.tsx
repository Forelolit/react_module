import '@app/styles/global.scss'

import { Home } from '@pages/index'

import { AppLayout } from './layout'

function App() {
  return (
    <>
      <AppLayout>
        <Home />
      </AppLayout>
    </>
  )
}

export default App
