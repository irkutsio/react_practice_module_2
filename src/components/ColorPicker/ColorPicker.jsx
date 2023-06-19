import { useState } from 'react';
import './ColorPicker.css';

export const ColorPicker = ({ options }) => {
  const [activeOptionIdx, setActiveOptionIdx] = useState(0);

  const { label } = options[activeOptionIdx];

  const makeOptionsClassName = index => {
    const optionsClasses = ['ColorPicker_option'];
    if (index === activeOptionIdx) {
      optionsClasses.push('ColorPicker_option--active');
    }
    return optionsClasses.join(' ');
  };

  return (
    <div className="ColorPicker">
      <h2 className="ColorPicker_title">Color Picker</h2>
      <p>Color:{label}</p>
      <div className="ColorPicker_list">
        {options.map(({ label, hex }, index) => (
          <button
            type="button"
            key={label}
            className={makeOptionsClassName(index)}
            onClick={() => setActiveOptionIdx(index)}
            style={{
              backgroundColor: hex,
            }}
          ></button>
        ))}
      </div>
    </div>
  );
};

// export class ColorPicker extends Component {
//   state = {
//     activeOptionIdx: 0,
//     // activeOptionIdx: '',
//   };

//   setActiveIdx = index => {
//     this.setState({ activeOptionIdx: index });
//   };

//   makeOptionsClassName = index => {
//     const optionsClasses = ['ColorPicker_option'];
//     if (index === this.state.activeOptionIdx) {
//       optionsClasses.push('ColorPicker_option--active');
//     }

//     return optionsClasses.join(' ');
//   };

//   render() {
//     const { activeOptionIdx } = this.state;
//     const { options } = this.props;

//     const { label } = options[activeOptionIdx];
//     //вычисляемое свойство на базе state

//     return (
//       <div className="ColorPicker">
//         <h2 className="ColorPicker_title">Color Picker</h2>
//         <p>Color: {label}</p>
//         <div className="ColorPicker_list">
//           {this.props.options.map(({ label, hex }, index) => (
//             <button
//               type="button"
//               key={label}
//               className={this.makeOptionsClassName(index)}
//               onClick={() => this.setActiveIdx(index)}
//               style={{
//                 backgroundColor: hex,
//               }}
//             ></button>
//           ))}
//         </div>
//       </div>
//     );
//   }
