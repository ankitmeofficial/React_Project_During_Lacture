import "./App.css";
import ShowImg from "./Conponents/ShowImg";

function App() {
  return (
    <div className="App">
      <div className="largeContainer">
        {/* <ShowImg bgColor="red" style={{backgroundColor:'red'}} title= "react tutorial "/>
          <ShowImg bgColor="blue" style={{backgroundColor:'blue'}} title="node.js tutorial "/> */}

        <ShowImg
          title="about alian"
          channel="crazy xyx"
          view="120k"
          time="1 month ago"
        />
        <ShowImg
          title="Animal"
          channel="carryminati"
          view="200k"
          time="5 month ago"
        />
        <ShowImg
          title="react full course"
          channel="stydy with me "
          view="12k"
          time="10 month ago"
        />
      </div>
    </div>
  );
}
export default App;
