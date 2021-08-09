import React, {useContext} from 'react'
import {InputContext} from '../../context/context'

function Inputs() {
 
    const {grocery, handleOnChange, handleOnSubmit}= useContext(InputContext)
      

    return (
        <div>
            <form  onSubmit={handleOnSubmit}>
                <input 
                type="text"
                placeholder = "add a grocery"
                value ={grocery}
                onChange={(e)=> handleOnChange (e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            
        </div>
    )
}

export default Inputs;
