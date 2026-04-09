import Navigation from './routes/navigation/navigation.component';
 import {Routes,Route} from 'react-router-dom';
import Home from './routes/home/home.component';
import Signin from './routes/signin/signin.component';





const Shop = () => {
  return <h1> I am the shop page</h1>
}



const App = () => {
  return (
   <Routes>
       <Route path='/' element={<Navigation />}>
      <Route index path='/' element={<Home />}/>
      <Route path='shop' element={<Shop />}/>
        <Route path='signin' element={<Signin />}/>
     </Route>
  </Routes>
  );
};

export default App;