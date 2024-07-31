import React, { createContext, useState } from "react";
import Button from './Button';
import Datas from './Data';
import Input from './Input'

const Btnval = createContext();
const App = () => {
  const [val, setVal] = useState("")
  return (
    <>
    
      <div className="container">
            <h1 className="h">CALCULATOR</h1>
        <div className="calc">
            <Btnval.Provider value={{ val, setVal }}>
             <div className="in">
              <Input />
             </div>
          <div className="btn">
              {Datas.map((value) => {
                return (<Button
                  keys={value.id}
                  btn={value.val} />)
              })}
          </div>
            </Btnval.Provider>
        </div>
      </div>
    </>
  )
}
export default App;
export { Btnval };