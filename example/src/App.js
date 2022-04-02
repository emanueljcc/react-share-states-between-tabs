import React, { useState, useEffect } from 'react'
import useShareStatesBetweenTabs from 'react-share-states-between-tabs'

const ITEMS = [
  {
    id: 1,
    name: 'Product 1',
    value: 100
  },
  {
    id: 2,
    name: 'Product 2',
    value: 200
  },
  {
    id: 3,
    name: 'Product 3',
    value: 300
  },
  {
    id: 4,
    name: 'Product 4',
    value: 400
  },
  {
    id: 5,
    name: 'Product 5',
    value: 500
  },
  {
    id: 6,
    name: 'Product 6',
    value: 600
  },
  {
    id: 7,
    name: 'Product 7',
    value: 700
  },
  {
    id: 8,
    name: 'Product 8',
    value: 800
  },
  {
    id: 9,
    name: 'Product 9',
    value: 900
  },
  {
    id: 10,
    name: 'Product 10',
    value: 1000
  }
]

const App = () => {
  /**
   * Choose whatever name you want for the variable and its set,
   * example: const [example, setExample] = useShareStatesBetweenTabs('example', 'Hello world')
   */
  const [items, setItems] = useShareStatesBetweenTabs('items', [])

  const [total, setTotal] = useState(0)

  const handleClick = (e, id) => {
    e.preventDefault()
    const isExist = items.some((it) => it.id === id)

    if (!isExist) {
      const itemsTemp = ITEMS.filter((item) => item.id === id)
      const result = [...items, ...itemsTemp]
      setItems(result)
    }
  }

  const handleRemove = (e, id) => {
    e.preventDefault()
    const itemsTemp = items.filter((item) => item.id !== id)
    setItems(itemsTemp)
  }

  useEffect(() => {
    const tot = items.reduce((prev, curr) => prev + curr.value, 0)
    setTotal(tot)
  }, [items])

  return (
    <div className='container-into'>
      <div className='container'>
        {ITEMS.map((item, i) => (
          <div key={i} className='card'>
            <span>{item.name}</span>
            <span>$ {item.value}</span>
            <button onClick={(e) => handleClick(e, item.id)}>ADD</button>
          </div>
        ))}
      </div>

      <div className='cart'>
        <h2>ITEMS:</h2>
        {items &&
          items.map((item, i) => (
            <div key={i} className='card'>
              <span>{item.name}</span>
              <span>$ {item.value}</span>
              <button onClick={(e) => handleRemove(e, item.id)}>REMOVE</button>
            </div>
          ))}
        <h2>$ {total}</h2>
      </div>
    </div>
  )
}

export default App
