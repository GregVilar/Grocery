function Item({ itemList, onDeleteItem, onCheckedItem }) {
  return (
    <div className="todo darker-todo">
      <li className="todo-item">{itemList.quantity + " " + itemList.name}</li>

      <button className="delete-btn" onClick={() => onDeleteItem(itemList.id)}>
        <i className="fas fa-trash"></i>
      </button>
      <button className="check-btn" onClick={() => onCheckedItem(itemList.id)}>
        {itemList.isChecked ? "Check" : <i className="fas fa-check"></i>}
      </button>
    </div>
  );
}

export default Item;
