 import React from "react"
 import Provider from "./Provider"
 import MyContext from "./Context"
 import  "./App.css"

 const App2=()=>{
   return(
     <MyContext.Consumer>
       { 
      
        
         
            (value)=>(   // use () instead of {} becuase it will be autuomatically called
           <div>
             <h2>App2</h2>
            <h2>The name is {value.data.name}</h2>
            <h2>The id is {value.data.id}</h2>
            <h2>The status is {value.data.accept}</h2>
            <button onClick={value.isMissionAccepted}>Check the status</button>
           </div>
            )
         


         
          
       }
     </MyContext.Consumer>
   )
 }

 const App1=()=>{
   return(
     <div>
       <h2>App1</h2>
          <App2/>
     </div>
   
     )
 }
 const App=()=>{
   return(
   <div>
     <h1>Context Api</h1>
    <Provider>
    <App1/> 
  </Provider>
  </div>  
)

  
 }


 

export default App;
