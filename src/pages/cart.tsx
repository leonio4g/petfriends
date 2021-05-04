import { MdRemoveCircleOutline, MdAddCircleOutline,MdDelete } from 'react-icons/md'
import { useCart } from '../hooks/useCart';

import styles from '../styles/cart.module.scss'
import { formatPrice } from '../util/format';

export default function Cart() {

  const { cart } = useCart();

  const cartFormatted = cart.map(product => ({
    ...product,
    priceFormatted: formatPrice(product.price),
    subTotal: formatPrice(product.price * product.amount)
  }))

  const total =
    formatPrice(
      cart.reduce((sumTotal, product) => {
        return sumTotal + product.price * product.amount;
      }, 0)
    )

  return (
    <div className={styles.cartContainer} >
      <table>
        <thead>
          <tr>
          <th aria-label="product label" />
          <th>PRODUTO</th>
          <th>QTD</th>
          <th>SUBTOTAL</th>
          <th aria-label="delete icon" />
          </tr>
        </thead>
        <tbody>
          {cartFormatted.map(product => (
            <tr>
            <td>
              <img src={product.image} alt={product.title}/>
            </td>
            <td>
              <strong>{product.title}</strong>
              <span>{product.priceFormatted}</span>
            </td>
            <td>
              <div>
                <button>
                  <MdRemoveCircleOutline />
                </button>
                <input type="text"
                readOnly
                value={product.amount}
                />
                <button>
                  <MdAddCircleOutline />
                </button>
              </div>
            </td>
            <td>
              <strong>{product.subTotal}</strong>
            </td>
            <td>
              <button>
                <MdDelete />
              </button>
            </td>
          </tr>
          ))}
        </tbody>
      </table>

      <footer>
        <button type="button" >Finalizar Pedido</button>

        <div className={styles.cartTotal} >
          <span>TOTAL</span>
          <strong>{total}</strong>
        </div>
      </footer>
    </div>
    
  );
}