import Navbar from './components/Navbar';
import Posts from './components/Posts';
import AdComponent from './adComponent';

function homePage() {
  return (
    <div>
      <Navbar/>
      <AdComponent/>
      <Posts />
      <br/>
    </div>
  );
}


export default homePage;