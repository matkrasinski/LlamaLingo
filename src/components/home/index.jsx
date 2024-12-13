import React from 'react'
import { getLevel} from '../../firebase/db'


const document = await getLevel("level_easy")

const Home = () => {
    console.log("lol", document)
    return (
        <div className='text-2xl font-bold pt-14'>This task is {document.name}, LOL</div>
    )
}

export default Home