const data =[
    {
      name: "Bob",
      age: 24
    },
    {
      name: "Alice",
      age: 21
    }
  ]
var arraydata=(data)=>{
    const[{age},{name}]=data;
    console.log(`${name}'s age ${age}.`);
}
arraydata(data);