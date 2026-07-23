import logo from './logo.svg';
import { CalculateScore } from './Componenets/CalculateScore';

function App() {
  return (
    <div className>
     <CalculateScore Name={"Steeve"}
     School={"DNV Public School"}
     total={284}
     goal={3}></CalculateScore>
    </div>
  );
}

export default App;
