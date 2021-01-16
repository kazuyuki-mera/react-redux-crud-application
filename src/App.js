import React from 'react';

// class App extends Component {
//   render() {
//     return (
//       <>
//         <label htmlFor="bar">bar</label>
//         <input
//           id="bar"
//           type="text"
//           onChange={() => {
//             console.log('I am Changed.');
//           }}
//         />
//       </>
//     );
//   }
// }

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
    </div>
  );
};

const Cat = () => {
  return <div>Meaow!</div>;
};

export default App;
