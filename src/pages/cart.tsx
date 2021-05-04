import { MdRemoveCircleOutline, MdAddCircleOutline,MdDelete } from 'react-icons/md'

export default function Cart(){
  return (
    <div>
      <div>
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
          <tr>
            <td>imagem</td>
            <td>
              <strong>title</strong>
              <span>price</span>
            </td>
            <td>
              <div>
                <button>
                  <MdRemoveCircleOutline />
                </button>
                <input type="text"/>
                <button>
                  <MdAddCircleOutline />
                </button>
              </div>
            </td>
            <td>
              <strong>SubTotal</strong>
            </td>
            <td>
              <button>
                <MdDelete />
              </button>
            </td>
          </tr>
        </tbody>
      </div>
    </div>
  );
}