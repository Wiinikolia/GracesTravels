import Navbar1 from './components/Navbar';
import Posts from './components/Posts';
import AdComponent from './adComponent';

function homePage() {
  return (
    <div>
      <Navbar1/>
      <AdComponent/>
      <Posts />
      <br/>
    </div>
  );
}


export default homePage;