import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-dom";
import './App.css'
import axios from 'axios';
import { Form } from '../Form/Form';

// function App() {
//   // const [count, setCount] = useState(0)

//   // const [array, setArray]= useState([]);

//   // const fetchAPI = async () => {
//   //   const response = await axios.get('http://127.0.0.1:8080/api/users');
//   //   console.log(response.data.users);
//   //   setArray(response.data.users);
//   // };

//   // useEffect(() => {
//   //   fetchAPI();
//   // }, [])

//   return (
//     <>
//       <h1>Vite + React</h1>
//       {/* <div className="card">
//         {
//           array.map((user, index) => (
//             <div key={index}>
//               <span>{user}</span>
//               <br/>
//             </div>
//           ))
//         }
//       </div> */}
//     </>
//   )
// }

// export default App;

const App = () => {
  return (
    // <Router>
    //   {/* <Background /> */}
    //   <Routes>
    //     <Route path="/" element={<MainPage />} />
    //   </Routes>
    // </Router>
    <Form />
  );
};

export default App;