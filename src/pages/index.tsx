
import { MdAddShoppingCart } from 'react-icons/md';
import { Category } from '../components/Category';

import styles from './home.module.scss'

export default function Home() {
  return (
    <>
    <Category />
    <ul className={styles.productList} >
      <li>
        <img src="https://www.petlove.com.br/images/products/218040/large/Shampoo_Coveli_Previn_1612078.jpg?1577379920" alt="shampo pet"/>
        <strong>Shampo Previn</strong>
        <span>R$ 20,00</span>
        <button type="button" >
          <div>
            <MdAddShoppingCart />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src="https://www.petlove.com.br/images/products/218040/large/Shampoo_Coveli_Previn_1612078.jpg?1577379920" alt="shampo pet"/>
        <strong>Shampo Previn</strong>
        <span>R$ 20,00</span>
        <button type="button" >
          <div>
            <MdAddShoppingCart />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src="https://www.petlove.com.br/images/products/218040/large/Shampoo_Coveli_Previn_1612078.jpg?1577379920" alt="shampo pet"/>
        <strong>Shampo Previn</strong>
        <span>R$ 20,00</span>
        <button type="button" >
          <div>
            <MdAddShoppingCart />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src="https://www.petlove.com.br/images/products/218040/large/Shampoo_Coveli_Previn_1612078.jpg?1577379920" alt="shampo pet"/>
        <strong>Shampo Previn</strong>
        <span>R$ 20,00</span>
        <button type="button" >
          <div>
            <MdAddShoppingCart />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src="https://www.petlove.com.br/images/products/218040/large/Shampoo_Coveli_Previn_1612078.jpg?1577379920" alt="shampo pet"/>
        <strong>Shampo Previn</strong>
        <span>R$ 20,00</span>
        <button type="button" >
          <div>
            <MdAddShoppingCart />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
     </ul>
    </>
  )
}
