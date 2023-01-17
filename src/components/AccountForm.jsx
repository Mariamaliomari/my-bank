

const AccountForm = ({addTransaction})=>{

    
    return (
        <form className="row p-3" onSubmit={(e)=>{
            e.preventDefault()
            // alert("Submitted")
          const transaction ={
           
            "date": e.target.date.value,
            "description":e.target.description.value,
            "category": e.target.category.value,
            "amount": e.target.amount.value
          } 
          addTransaction(transaction)
        
        }}>
            <div className="col-3">
                <input name="date"  className="form-control form-control-sm" type="date"  placeholder="date" aria-label=".form-control-sm example"/>
            </div>
            <div className="col-3">
                <input name="description" className="form-control form-control-sm" type="text" placeholder="Description" aria-label=".form-control-sm example"/>
            </div>
            <div className="col-3">
                <input name="category"  className="form-control form-control-sm" type="text" placeholder="Category" aria-label=".form-control-sm example"/>
            </div>
            <div className="col-3">
                <input name="amount"  className="form-control form-control-sm" type="number" placeholder="Amount" aria-label=".form-control-sm example"/>
            </div>
            <div className="col-3 mx-auto p-3">
                <button className="btn btn-sm btn-success mx-auto" type="submit">Add Transaction</button>
            </div>
        </form>
    )
}
export default AccountForm