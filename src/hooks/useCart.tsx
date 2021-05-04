import { useContext, createContext, useState, ReactNode } from "react";
import { api } from "../services/api";
import { toast } from 'react-toastify'

interface CartProviderProps {
  children: ReactNode;
}

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  amount: number;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

interface CartContextData {
  cart: Product[];
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  //updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData)


export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<Product[]>(() => {

    const storagedCart = localStorage.getItem('@PetFriends:cart');

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }
    return [];
  });


  const addProduct = async (productId: number) => {
    try {
      const upCart = [...cart];
      const productExists = upCart.find(product => product.id === productId);

      const stock = await api.get(`/stock/${productId}`);

      const stockAmount = stock.data.amount;
      const currentAmount = productExists ? productExists.amount : 0;
      const amount = currentAmount + 1;

      if (amount > stockAmount) {
        toast.error('Quantidade solicitada fora de estoque');
        return;
      }

      if (productExists) {
        productExists.amount = amount;
      } else {
        const product = await api.get(`/products/${productId}`);

        const newProduct = {
          ...product.data,
          amount: 1
        }
        upCart.push(newProduct);
      }
      setCart(upCart)
      

    } catch {
      toast.error('Erro na adição do produto');
    }
  };

  const removeProduct = (productId: number) => {
    try {
      const upCart = [...cart];
      const productIn = upCart.findIndex(product => product.id === productId);

      if (productIn >= 0) {
        upCart.splice(productIn, 1);
        setCart(upCart);
        localStorage.setItem('@PetFriends:cart', JSON.stringify(upCart))
      } else {
        throw Error();
      }
    } catch {
      toast.error('Erro na remoção do produto');
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext);

  return context;
}