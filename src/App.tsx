import { Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import { Categories } from './pages/Categories'
import { HomeProducts } from './pages/HomeProducts'

function App() {
  return (
    <>
      <Header />
      <main>
        {/* Create your routes here. Don't forget to install the router package! */}
        <Routes>
          <Route index element = {<Navigate to= '/products'/>} />
          <Route  path='/products' element = {<HomeProducts />}/>
          <Route path='/categories' element = {<Categories />}/>
        </Routes>
      </main>
    </>
  )
}

export default App
