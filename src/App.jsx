import { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import MainBox from './components/MainBox'
import Style from './css/App.module.css'

function App() {
  const [count, setCount] = useState(0)

  let [toggle, setToggle] = useState(true);
  return (
    <>
      <div className={Style.layout}>
          <Navbar setToggle={ setToggle} toggle={toggle} />
      </div>
          <div className={Style.mainlayout}>
            <div>
                 <Sidebar toggle={ toggle} />
            </div>
             <div>
            <MainBox/>
            </div>
          </div>
    </>
  )
}

export default App
