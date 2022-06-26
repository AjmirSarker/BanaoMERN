import MainBanner from './components/MainBanner';
import MyModal from './components/MyModal';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import UserPost from './components/UserPost';
import AllCards from './components/AllCards';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainBanner></MainBanner>
      <UserPost />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8">
            <AllCards />
          </div>
          <div className="d-sm-none d-md-block col-md-4">
            <Sidebar />
          </div>
        </div>
      </div>
      <MyModal />
    </div>
  );
}

export default App;
