import { useState } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import ProductList from './components/ProductList/ProductList'
import Reviews from './components/Reviews/Reviews'
import OrderForm from './components/OrderForm/OrderForm'
import Footer from './components/Footer/Footer'

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState('')

  function handleSelectProduct(name) {
    setSelectedProduct(name)
    document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  function scrollToOrder() {
    document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  function scrollToProducts() {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Header />
      <Hero onOrder={scrollToProducts} />
      <ProductList onSelect={handleSelectProduct} />
      <Reviews />
      <OrderForm selectedProduct={selectedProduct} onSelectProduct={setSelectedProduct} />
      <Footer />
    </>
  )
}
