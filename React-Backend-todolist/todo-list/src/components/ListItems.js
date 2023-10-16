import React from "react";
import TaskBar from "./TaskInput"; // Import the TaskBar component

export default function ListItems(props) {
  // Function to add a new todo item
  const addTodo = (title, desc) => {
    // Calculate the next available SNO for the new item
    let sno = listItems[listItems.length - 1].SNO + 1;
    // Create a new item object with title, description, and SNO
    let myItems = {
      SNO: sno,
      Title: title,
      Description: desc,
    };
    // Update the list of items with the new item
    setListitems([...listItems, myItems]);
  }

  // Initialize the list of items using the useState hook
  let [listItems, setListitems] = React.useState([
    {
      SNO: "1",
      Title: "Go to jym",
      Description: "Go to the gym to workout",
    },
    {
      SNO: "2",
      Title: "Go to Market",
      Description: "Go to the market to get some food",
    },
    {
      SNO: "3",
      Title: "Start coding",
      Description: "Do your coding practice and work hard to get a job",
    },
  ]);

  // Function to delete an item from the list
  const onDelete = (item) => {
    setListitems(
      listItems.filter((e) => {
        return e !== item;
      })
    );
  };

  // Generate a list of items to be displayed
  let items =
    listItems.length === 0 ? (
      <p>You have nothing to do.</p>
    ) : (
      listItems.map((item) => (
        <li key={item.SNO} style={{ backgroundColor: "white" }}>
          <h4 className="my-2">{item.Title}</h4>
          <p>{item.Description}</p>
          <button
            className="btn btn-danger my-3"
            onClick={() => onDelete(item)}
          >
            Delete
          </button>
        </li>
      ))
    );

  return (
    <>
      <TaskBar addTodo={addTodo} /> {/* Render the TaskBar component and pass the addTodo function as a prop */}
      <div className="container">
        <h2 className="text-center">{props.heading}</h2> {/* Display the heading from props */}
        <ul>{items}</ul> {/* Display the list of items */}
      </div>
    </>
  );
}
