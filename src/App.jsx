import { useState } from 'react'
import data from "./data.js"
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count)
    if(count<=0){
      return amount = 1
    }
    
    if(count>8){
      return amount = 8
    }
    
    setText(data.slice(0,amount))
  }
  return (
    <>
      <section className='section-center'>
        <h3>Tired of Boring Lorem Ipsum</h3>
        <form className='lorem-ipsum' onSubmit={handleSubmit}>
          <label htmlFor='noOfPara' >
            Paragraph:
          </label>
          <input 
          type='number' 
          name='noOfPara' 
          id='noOfPara' 
          value={count}
          onChange={(e)=> setCount(e.target.value
          )}></input>
          <button className='btn' type="submit">Generate</button>
        </form>
        <article className='lorem-text'>
          {text.map((item, index) => {
            return(
              <p key={index}>{item}</p>
            )
          })}
        </article>
      </section>
    </>
  )
}

export default App
