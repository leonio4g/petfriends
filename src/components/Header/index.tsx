import { MdShoppingBasket } from 'react-icons/md';
import { GiJumpingDog } from 'react-icons/gi'
import Link from 'next/link'
import styles from './styles.module.scss';
import { useCart } from '../../hooks/useCart';

export function Header(){

  const { cart } = useCart();
  const cartSize = cart.length;

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div className={styles.img} >
          <Link href="/" >
        <GiJumpingDog size={70} color="#fff" />
        </Link>
        </div>
        <div className={styles.nav}>
        <h1>Pet Friends Acessories</h1>
        <p>Avenida Rio Grande so sul, 1520. Estados | 58030-021 | João Pessoa - PB</p>
      </div>
      <Link href={'/cart'} >
      <div className={styles.cart}>
        <div>
        <strong>Meu Carrinho</strong>
        <span>
        {cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`}
        </span>
        
        </div>
        <MdShoppingBasket size={36} color="#fff" />
      </div>
        </Link>
    </div>
    </header>
  )
}