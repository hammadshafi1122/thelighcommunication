import  Header  from './Header'
import Footer from './Footer'
function Layout({children}) {
  return (
     <div className="h-screen">
    <Header/>


      <main className="">
        <div className=" ">
          {children}
        </div>
      </main>

      <Footer />

    </div>
  )
}

export default Layout
