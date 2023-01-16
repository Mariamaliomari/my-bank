const AccountTable = ({list})=> {
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
                {
                list.map((item, index)=>{
                        return(
                            <tr key={index}>
                                <td>{item.date}</td>
                                <td>{item.description}</td>
                                <td>{item.category}</td>
                                <td>{item.amount}</td>
                            </tr>
                        )
                  })
                }
            </tbody>
        </table>
    )
}
export default AccountTable;