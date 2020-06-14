import React,{useState, useContext} from 'react';
import {GlobalContext} from '../context/Globalstate'
export const AddTransaction=()=>{

    let [text,setText]=useState('');
    let [amount,setAmount]=useState(0);

    const {addTransaction}=useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTrascation={
            id:Math.floor(Math.random()*1000000),
            text,
            amount:+amount
        }

        addTransaction(newTrascation);
    }

    return(
        <>
            <h3>Add new transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">
                        Text
                    </label>
                    <input value={text} onChange={(e)=> setText(e.target.value)} type="text" id="text" placeholder="Enter text...">
                    
                    </input>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount<br/>
                        (negetive - expense, positive - expense)
                    </label>
                    <input value={amount} onChange={(e)=> setAmount(e.target.value)} type="number" id="amount" required placeholder="Enter amount...">
                    
                    </input>
                </div>
                <button onClick={onSubmit} className="btn">Add transaction</button>
            </form>
        </>
    )
}