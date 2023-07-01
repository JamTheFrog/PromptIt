import React from 'react'
import Feed from '@components/Feed'

const Home = () => {
  return (
    <div className='w-full flex-center flex-col'>
        <h1 className='head_text text-center'>Discover and share</h1>
        <br  className='max-md:hidden'/>
        <span className='orange_gradient text-center'> Prompts that power AI</span>
        <p className='desc text-center'>PromptIT is an opensource AI prompting tool for modern world to discover, create  and share creative prompts</p>
        <Feed/>
    </div>
  )
}

export default Home