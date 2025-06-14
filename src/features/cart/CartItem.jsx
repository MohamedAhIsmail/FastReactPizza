import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { deleteItem } from "./cartSlice";
import DeleteItem from "./DeleteItem";
import UpdateCartQuantity from "./UpdateCartQuantity";

function CartItem({ item }) {
  const { id, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        {/* <Button type="small" onClick={handelDeleteItem}>Delete</Button> */}
        <UpdateCartQuantity pizzaId={id}/>

        <DeleteItem id={id} />
      </div>
    </li>
  );
}

export default CartItem;
