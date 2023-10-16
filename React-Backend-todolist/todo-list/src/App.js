import "./App.css"; // Import the CSS file for styling
import Head from "./components/Head"; // Import the Head component
import ListItems from "./components/ListItems"; // Import the ListItems component

export default function App(props) {
  return (
    <>
      <Head /> {/* Render the Head component to display the header or title of the application */}
      <ListItems heading="List Items" /> {/* Render the ListItems component and pass a heading as a prop */}
    </>
  );
}
