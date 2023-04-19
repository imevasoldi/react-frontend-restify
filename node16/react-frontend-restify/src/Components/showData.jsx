import { useState } from 'react'

import viteLogo from '/vite.svg'
import reactLogo from './../assets/react.svg'


const ShowData = (props) => {
    const [count, setCount] = useState(0)

    // console.log(props)
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
                    // const explode = row.payment_date.split("/");
                    // var month = nameMonths[0][explode[1]];
                    // var year = explode[2];
                    return(
                        <tr key={row.ssn}>
                            <td>{row.firstName}</td>
                            <td>{row.lastName}</td>
                            <td>{row.address}</td>
                            <td>{row.ssn}</td>
                            {/* <td>{changeStatus(row.status)} {row.status==true ? 'Firmado' : 'Pendiente'}</td>
                            <td>{changeSignature(row.status, year, month)}</td> */}
                        </tr>
                    )
                })}
            </tbody>

        </table>
    </div>
    )
}

export default ShowData