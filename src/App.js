import Banner from "./components/Banner";
import Moodal from "./components/Moodal";
import Navbar from "./components/Navbar";
import Others from "./components/Others";
import Post from "./components/Post";
import PostCard from "./components/PostCard";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Post/>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8">
          <PostCard/>
          </div>
          <div className="d-sm-none d-md-block col-md-4">
            <Others/>
          </div>
        </div>
      </div>
      <Moodal/>
    </div>
  );
}

export default App;
