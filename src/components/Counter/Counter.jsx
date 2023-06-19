import React, { useEffect, useState } from 'react';
import './Counter.css';
import { Controler } from './Controls';


export const Counter = () => {
  const [value, setValue] = useState(0);

  const hadlerIncrement = () => {
    setValue(prevValue => prevValue + 1);
  };

  const handlerDescrement = () => {
    setValue(prevValue => prevValue - 1);
  };

  useEffect(()=>{
    console.log('useEffect')
  },[value])

  return (
    <div className="Counter">
      <span className="Counter_value">{value}</span>

      <Controler
        onIncrement={hadlerIncrement}
        onDecrement={handlerDescrement}
      />
    </div>
  );
};






// class Counter extends Component {

//   state = {
//     value: this.props.initialValue,
//   };

//   //   hadlerIncrement = () => {
//   //     this.setState({
//   //       value: 8, // перезаписали значение
//   //     });
//   //   };

//   hadlerIncrement = () => {
//     this.setState(prevState => ({
//       value: prevState.value + 1,
//     }));
//   };

//   handlerDescrement = () => {
//     this.setState(prevState => ({
//       value: prevState.value - 1,
//     }));
//   };

//   render() {
//     return (
//       <div className="Counter">
//         <span className="Counter_value">{this.state.value}</span>

//         <Controler
//           onIncrement={this.hadlerIncrement}
//           onDecrement={this.handlerDescrement}
//         />
//       </div>
//     );
//   }
// }

// export default Counter;
