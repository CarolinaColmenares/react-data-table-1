import './App.css';
import DataTable from 'react-data-table-component';

const data = [
  {
    id: 1,
    name: 'Carol',
    age: 25
  },
  {
    id: 2,
    name: 'Yzcar',
    age: 29
  },
  {
    id: 3,
    name: 'Charlene',
    age: 50
  }
]

const columns = [
  {
    name: 'ID',
    selector: row => row.id
  },
  {
    name: 'NAME',
    selector: row => row.name
  },
  {
    name: 'AGE',
    selector: row => row.age
  },
]


function App() {
  return (
    <div className="App">
      <h1>Hola Mundo</h1>
      <DataTable
        columns={columns}
        data={data}
      />
    </div>
  );
}

export default App;
