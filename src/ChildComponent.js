function Table({data}) {

   

    return (
        <>
        <table border="1px" cellPadding="20px" cellSpacing="0">
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
            </tr>
            {
                data.map((product) => (
                    <tr>
                        <td>{product.name}</td>
                        <td>{product.age}</td>
                        <td>{product.email}</td>
                    </tr>
                    )
                )
            }
        </table>
        <br /> 
        <button type="submit" >Clear</button>
        </>
    )
}

export default Table;