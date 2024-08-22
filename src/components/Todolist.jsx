import React, { useState } from 'react'

export const Todolist = () => {
  const [inputvalue, setInputValue] = useState('');
    const [list, setList]=useState([]);
    const [toggle, setToggle] = useState(true)
    const [editItem, setEditItem] = useState()
    // console.log(list)

    const Changehandler =(e)=>{setInputValue(e.target.value)}
//.................... vipul..............
  // const submithandle=(event)=>{
  //      event.preventDefault()
  //      const valueToCheck = inputvalue || '';
  //      console.log(valueToCheck, "cgvbnjmk,")
       
  //      if (valueToCheck.trim() !== '') { 
  //       const allinputdata= {id: new Date().getTime().toString(), name:inputvalue}
  //       console.log(allinputdata)
  //       setList([...list, allinputdata]);
  //       setInputValue(''); 
        
  //   }else if(valueToCheck && !toggle){
  //     // console.log(valueToCheck,"dfsgfdg")
  //     // setList(list.map((elem)=>{
  //     //   if(elem.id === editItem){
  //     //     return {...elem, name:inputvalue}
  //     //   }
  //     //   return elem
  //     // }));
  //     // setToggle(true)
  //     // setInputValue('')
  //     // setEditItem(null)
  //     alert(`nkvnfbnkjb nvk n ${list}`)
  //   }
  //   else {
  //       alert('Please enter a value');
  //   }
     
  //   }
//.................... vipul..............

  const submithandle = (event) => {
    event.preventDefault()
    const valueToCheck = inputvalue || '';

    if (valueToCheck.trim() !== '') {
      if (editItem) {
        setList(list.map((elem) => {
          if (elem.id === editItem) {
            return { ...elem, name: inputvalue }
          }
          return elem
        }));
        setToggle(true)
        setInputValue('')
        setEditItem(null)
      } else {
        const allinputdata = { id: new Date().getTime().toString(), name: inputvalue }
        setList([...list, allinputdata]);
        setInputValue('');
      }
    } else {
      alert('Please enter a value');
    }
  }

    const deleteHandler=(index)=>{

        console.log(list,'delete')
        const updateditems = list.filter((elem)=>{
          return index != elem.id ;
        });
        setList(updateditems)
    }
    
    const editHandler=(id)=>{
    let  newEditItem = list.find((elem)=>{
      return elem.id === id
    })
    console.log(newEditItem)
    setToggle(false)
    setInputValue(newEditItem.name)
    setEditItem(id)
      }

   
    
  

  return (
    <div>
        <form action="" onSubmit={submithandle}>
            <input type="text" value={inputvalue}  onChange={Changehandler} placeholder="Enter Your list............"/>
            {toggle ? <button>Add</button>: <button>Edit</button>}
        </form>

        <ul>
            {/* {list} */}
            {list.map((todo)=>{
                return <li onSelect={deleteHandler} id={todo.id}><p>{todo.name}</p><button onClick={()=>{deleteHandler(todo.id)}}>Delete</button><button onClick={()=>{editHandler(todo.id)}}>Edit</button><button>Copy</button></li>
            })}
        </ul>
    </div>
  )
}
