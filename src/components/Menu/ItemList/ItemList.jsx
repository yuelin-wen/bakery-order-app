import React from "react";
import Card from "../../../UI/Card/Card";
import "./itemList.css";
import Item from "../Item/Item";
import { useEffect, useState } from "react";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      const res = await fetch(
        "https://food-order-project-e72b4-default-rtdb.firebaseio.com/meals.json"
      );

      if (!res.ok) {
        throw new Error("Something went wrong!");
      }

      const resData = await res.json();
      const loadedItems = [];
      for (const key in resData) {
        loadedItems.push({
          id: key,
          name: resData[key].name,
          description: resData[key].description,
          price: resData[key].price,
        });
      }
      setItems(loadedItems);
      setIsLoading(false);
    };
    try {
      fetchItems();
    } catch (error) {
      setIsLoading(false);
      setHttpError(error.message);
    }
  }, []);

  if (isLoading) {
    return (
      <section style={{ textAlign: "center", color: "white" }}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section style={{ textAlign: "center", color: "white" }}>
        <p>{httpError}</p>
      </section>
    );
  }
  const mealsList = items.map((meal) => (
    <Item
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <div className="meals">
      <Card>
        <ul> {mealsList}</ul>
      </Card>
    </div>
  );
};

export default ItemList;
