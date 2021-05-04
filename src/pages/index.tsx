
import { useEffect, useState } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { Category } from '../components/Category';
import { useCart } from '../hooks/useCart';
import { api } from '../services/api';
import { formatPrice } from '../util/format';

import styles from './home.module.scss'

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ProductFormatted extends Product {
  priceFormatted: string;
}

interface CartItemsAmount {
  [key: number]: number;
}

export default function Home() {

  const { addProduct, cart } = useCart();

  const [products, setProducts] = useState<ProductFormatted[]>([])

  const cartItemsAmount = cart.reduce((sumAmount, product) => {
    const newSumAmount = {...sumAmount};
    newSumAmount[product.id] = product.amount;

    return newSumAmount;
}, {} as CartItemsAmount)

  useEffect(() => {
    async function loadProducts(){
      const response = await api.get('products')

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price)
    }))
    setProducts(data)
    }
    loadProducts()
  },[])

  function handleAddProduct(id: number) {
    addProduct(id);
  }

  return (
    <>
    <Category />
    <ul className={styles.productList} >
      {products.map(product => (
        <li key={product.id} >
        <img src={product.image} alt={product.title}/>
        <strong>{product.title}</strong>
        <span>{product.priceFormatted}</span>
        <button 
        type="button" 
        onClick={() => handleAddProduct(product.id)} 
        >
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
            {cartItemsAmount[product.id] || 0}
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      ))}
     </ul>
    </>
  )
}
