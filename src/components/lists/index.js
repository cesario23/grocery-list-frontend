import React, {useContext} from 'react'
import ListContext from '../../context/context'

function Lists() {
    const { handleDelete} = useContext(ListContext)
    return (
        <div>
            <h2>Grocery Lists</h2>
            <ul>
                {
                    groceryArray.map((grocery,index) =>{
                        return(
                            <li key={index}>
                                <button onClick={() => handleDelete(index)}>Delete</button>
                                <span>{grocery}</span>
                            </li>
                        )
                    })
                }
            </ul>

        </div>
    )
}

export default Lists;
;