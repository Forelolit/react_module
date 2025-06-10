import { Footer } from '@modules/footer'
import { Header } from '@modules/header'

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
