import { Header } from './Header'
import Footer from './Footer'
function Layout({children}) {
  return (
     <div className="">

      <Header />

      <main className="">
        <div className="mx-auto ">
          {children}
        </div>
      </main>

      <Footer />

    </div>
  )
}

export default Layout
