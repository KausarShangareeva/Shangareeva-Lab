import { useState } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import ProductList from './components/ProductList/ProductList'
import Reviews from './components/Reviews/Reviews'
import OrderForm from './components/OrderForm/OrderForm'
import Footer from './components/Footer/Footer'
import ProductModal from './components/ProductModal/ProductModal'

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState('')
  const [modalProduct, setModalProduct] = useState(null)

  function handleSelectProduct(name) {
    setSelectedProduct(name)
    document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  function scrollToProducts() {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Header />
      <Hero onOrder={scrollToProducts} />
      <ProductList onOpenModal={setModalProduct} onSelect={handleSelectProduct} />
      <Reviews />
      <OrderForm selectedProduct={selectedProduct} onSelectProduct={setSelectedProduct} />
      <Footer />
      <ProductModal
        product={modalProduct}
        onClose={() => setModalProduct(null)}
        onOrder={handleSelectProduct}
      />
    </>
  )
}
