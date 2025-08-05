import Upp from "./apper.js";
import Post from "./post.js";
import "./chalng.css";
import BOTOU from "./boutountag.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Upp />

          <Post />
          <Post />
          <Post />
          <Post />
        </div>
        <BOTOU />
      </header>
    </div>
  );
}

export default App;
