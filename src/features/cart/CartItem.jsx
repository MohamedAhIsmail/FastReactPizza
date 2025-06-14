import { useSelector } from "react-redux";

import { formatCurrency } from "../../utils/helpers";
import { getCurrentQuantityById } from "./cartSlice";
import DeleteItem from "./DeleteItem";
import UpdateCartQuantity from "./UpdateCartQuantity";

function CartItem({ item }) {
  const { id, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(id));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        {/* <Button type="small" onClick={handelDeleteItem}>Delete</Button> */}
        <UpdateCartQuantity pizzaId={id} currentQuantity={currentQuantity} />

        <DeleteItem id={id} />
      </div>
    </li>
  );
}

export default CartItem;
