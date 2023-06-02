// import Counter from './Counter/Counter';
// import { Dropdown } from './Dropdown/Dropdown';
// import { ColorPicker } from './ColorPicker/ColorPicker';
import { ToDoList } from "./ToDo/ToDo";


export const App = () => {
  return (
    <div>
      {/* <Dropdown /> */}
      {/* <Counter initialValue={0}/> */}
      {/* <ColorPicker options={colorPickerOption} /> */}
      <ToDoList/>
    </div>
  );
};

const colorPickerOption = [
  { hex: '#FFA07A', label: 'pink' },
  { hex: '#00FF00', label: 'green' },
  { hex: '#9400D3', label: 'violet' },
  { hex: '#4169E1', label: 'blue' },
  { hex: '#8B0000', label: 'red' },
];
