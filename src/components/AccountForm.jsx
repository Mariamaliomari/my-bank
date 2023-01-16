import React, {useEffect,useState} from "react"

const AccountForm = ({list, setList})=>{
    const [formData, setFormData] = useState({
        date:"",
        description:"",
        category:"",
        amount:""


        
    })
    const handleSubmit = (event)=> {
        event.preventDefault()
        
       setList(
        [
            ...list,
            formData
        ]
       )
    }
    // fetching transaction
    useEffect(() => {
        fetch("http:localhost:3000/transactions")
          .then((r) => r.json())
          .then((data) => setFormData(data)) //Setter activity for transaction after server response, this is the data in state when the app first loads
      }, [])

    const handleOnChange = (event) => {
        formData[event.target.name] = event.target.value
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }
    return (
        <form className="row p-3" onSubmit={handleSubmit}>
            <div className="col-3">
                <input name="date" onChange={handleOnChange} value={formData.date} className="form-control form-control-sm" type="date"  placeholder="date" aria-label=".form-control-sm example"/>
            </div>
            <div className="col-3">
                <input name="description" onChange={handleOnChange} value={formData.description} className="form-control form-control-sm" type="text" placeholder="Description" aria-label=".form-control-sm example"/>
            </div>
            <div className="col-3">
                <input name="category" onChange={handleOnChange} value={formData.category} className="form-control form-control-sm" type="text" placeholder="Category" aria-label=".form-control-sm example"/>
            </div>
            <div className="col-3">
                <input name="amount" onChange={handleOnChange} value={formData.amount} className="form-control form-control-sm" type="number" placeholder="Amount" aria-label=".form-control-sm example"/>
            </div>
            <div className="col-3 mx-auto p-3">
                <button className="btn btn-sm btn-success mx-auto" type="submit">Add Transaction</button>
            </div>
        </form>
    )
}
export default AccountForm