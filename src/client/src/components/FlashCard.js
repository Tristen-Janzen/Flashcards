import React, {useState, useEffect, useRef} from 'react'

export default function FlashCard({flashcard}) {
    const [flip,setFlip] = useState(false)
    const [height, setHeight]= useState('initial')

    const frontEl = useRef()
    const backEl = useRef()

    function setMaxHeight(){
        const frontHeight = frontEl.current.getBoundingClientRect().height
        const backHeight = backEl.current.getBoundingClientRect().height
        setHeight( Math.max(frontHeight,backHeight,100))
    }

    useEffect(()=>{
        window.addEventListener('resize',setMaxHeight)
        return () => window.removeEventListener('resize',setMaxHeight)
    }, [])

    useEffect(setMaxHeight, [flashcard.question,flashcard.answer])
    return (
        <div
            className = {`card ${flip ? 'flip': ''}`} 
            onClick ={ () => setFlip(!flip)}
            style = {{height: height}}
        >
            <div className= "front" ref ={frontEl}>
                {flashcard.question}
            </div>
            
            <div className ="back" ref ={backEl}>{flashcard.answer}</div>
        </div>
    )
}
