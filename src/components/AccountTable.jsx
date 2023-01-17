const AccountTable = ({newList})=> {
    
    return (
        <table className="table table-success table-striped table-hover">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
               {newList}
     
     </tbody>
        </table>
    )
}
export default AccountTable;