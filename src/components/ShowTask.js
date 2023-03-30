import React from 'react'

export const ShowTask = ({tasklist, setTasklist}) => {
    
    return (
    <section className='showTask'>
        <div className='head'>
            <div>
                <span className='title'>Todo</span>
                <span className='count'>{tasklist.length}</span>
            </div>
            <button className='clearAll' onClick={() => setTasklist([])}>Clear All</button>
        </div>
        <ul>
            { tasklist.map((todo) => (
                            <li key={todo.id}>
                            <p>
                                <span className='name'>{todo.name}</span>
                                <span className='time'>{todo.time}</span>
                            </p>
                            <i className='bi bi-pencil-square'></i>
                            <i className='bi bi-trash'></i>
                        </li>
            ))}

        </ul>
    </section>
  )
}
