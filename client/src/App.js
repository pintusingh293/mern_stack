import {useState} from "react";


function App() {
  const [form,setForm] = useState({
    amount:"",
    description:"",
    date:"",
  })
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:4000/transaction",{
      method:"POST",
      body:form,
    })
    console.log(res);
  }
  const handleInput = (e) => {
    e.preventDefault();
    setForm({...form,[e.target.name]:e.target.value})
  }
  return (
    <div >
      <form onSubmit={handleSubmit}>
        <input type="number" name="amount" value={form.amount} onChange={handleInput} placeholder="Enter Transaction Amount"/>
        <input type="text" name="description" value={form.description} onChange={handleInput} placeholder="Enter Description"/>
        <input type="date" placeholder="Date" value={form.date} onChange={handleInput} name="date"/>
        <button type="submit" >Submit</button>
      </form>
    </div>
  );
}

export default App;
