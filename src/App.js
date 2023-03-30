import logo from './logo.svg';
import './App.css';
import ProfilePhoto from './Component/profile/ProfilePhoto'
import Address from './Component/profile/Address'
import FullName from './Component/profile/FullName'

function App() {
  return (
    <div className="App bg-light">
      {/* import componnenent */}
      <ProfilePhoto/>
      <FullName/>
      <Address/>
   
    </div>
  );
}

export default App;
