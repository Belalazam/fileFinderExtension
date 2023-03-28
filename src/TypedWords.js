import TypedWord from "./TypedWord"


const TypedWords = ({enteredWords,removeId}) =>{
    return (
        <div>
            {enteredWords.map((enteredWord,index) => {
                return (
                        <TypedWord enteredWord={enteredWord} index={index} removeId={removeId}/>
                )
            })}

        </div>
    )
}
export default TypedWords