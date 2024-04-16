import Item from "./Item";

// const groceryData = [
//   { id: 1, quantity: "1", name: "Milk" },
//   { id: 2, quantity: "2", name: "HotDog" },
//   { id: 3, quantity: "3", name: "Veggies" },
// ];

function ItemList({ items, onDeleteItem, onCheckedItem }) {
  return (
    <div className="item-map">
      {items.map((item) => (
        <Item
          itemList={item}
          key={item.id}
          onDeleteItem={onDeleteItem}
          onCheckedItem={onCheckedItem}
        />
      ))}
    </div>
  );
}

export default ItemList;
