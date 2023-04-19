
const ShowData = (props) => {

    return(
    <div>
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Adress</th>
                    <th>SSN</th>
                </tr>  
            </thead>
            <tbody>

            {props.data.map((row) => {
                    return(
                        <tr key={row.ssn}>
                            <td>{row.firstName}</td>
                            <td>{row.lastName}</td>
                            <td>{row.address}</td>
                            <td>{row.ssn}</td>
                        </tr>
                    )
                })}
            </tbody>

        </table>
    </div>
    )
}

export default ShowData