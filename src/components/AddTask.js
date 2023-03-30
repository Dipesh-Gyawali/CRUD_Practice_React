import React from 'react'

export const AddTask = ({tasklist, setTasklist}) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const date = new Date();

    const newTask = {
      id: date.getTime(),
      name: e.target.inp.value,
      time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
    }
    setTasklist([...tasklist, newTask]);
    e.target.inp.value="";
  }


  return (
    <section className='addTask'>
        <form onSubmit={handleSubmit}>
            <input type="text" name="inp" autoComplete='off' placeholder='add task' maxLength="25"/>
            <button type='submit'>Add</button>
        </form>
    </section>
  )
}
