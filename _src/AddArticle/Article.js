import React from 'react'
import './AddArticle.css'

const Article = () => {
  return (
    <div className='article'>
      <div className="title">
        <textarea className='title-one'  name="title" placeholder='Title...' id="" cols="1" rows="1"></textarea>
      </div>
      <div className="notes">
        <textarea className='note-one'  name="note" placeholder='Write Article here...' id="" cols="1" rows="1"></textarea>
      </div>
    </div>
  )
}

export default Article
