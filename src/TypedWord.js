import { AiFillCloseCircle } from 'react-icons/ai';

const TypedWord = ({enteredWord,index,removeId}) =>{
    return (
            <p className='black-box sameLine'>{enteredWord}
            <button className='sameLine closeButton' onClick={()=>removeId(index)}><AiFillCloseCircle/></button>
            </p>
    )
}

export default TypedWord