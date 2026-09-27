import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import HomePage from './pages/HomePage/HomePage.jsx'
import CatalogPage from './pages/CatalogPage/CatalogPage.jsx'
import RegisterPage from './pages/RegisterPage/RegisterPage.jsx'
import LoginPage from './pages/LoginPage/LoginPage.jsx'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout></Layout>}>
        <Route index element={<HomePage></HomePage>}></Route>
        <Route path='catalog' element={<CatalogPage></CatalogPage>}></Route>
        <Route path='register' element={<RegisterPage></RegisterPage>}></Route>
        <Route path='login' element={<LoginPage></LoginPage>}></Route>
      </Route>
    </Routes>
  )
}