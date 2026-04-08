import { useContext } from 'react';
import { MyContext } from './context/Index.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.css'

import Stage1 from './components/Stage_One';
import Stage2 from './components/Stage_Two';



const App = () => {
  const context =useContext(MyContext);

  return(
    <div className="wrapper">
      <div className="center-wrapper">
        <h1>Who pays the bill</h1>
        {
          context.stage === 1?
          <Stage1/>
          :
          <Stage2/>
        }

      </div>

    </div>
  )
}
export default App;