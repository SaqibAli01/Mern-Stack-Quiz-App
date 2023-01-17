import React, { useEffect, useState } from 'react'
import { getServerData } from './helper/Helper'

export default function ResultTable() {

	const [data, setData] = useState([]);
	useEffect(()=>{
		getServerData(`http://localhost:8000/api/results`, (res) =>{
			setData(res);
		})
	},[data])



// console.log(data)


  return (
    <>

<div className='main_class'>
<table>

	<caption>Result</caption>
	<thead>
		<tr>
			<th>Name</th>
			<th>Attemps</th>
			<th>Obtain Marks</th>
			<th>Total Marks</th>
			<th>Result</th>
			
		</tr>
	</thead>
	<tbody>
		{/* {!data ? <div>No Data Found</div> : ""} */}
	
		{
			data.map((v, i) =>{
				// console.log(v.userName);
				// console.log(v.attempts);
				// console.log(v.points);
				// console.log(v.archived);
				return <tr key={i}>
					<td>{v.userName }</td>
					<td>{v.attempts || 0 }</td>
					<td>{v.points || 0 }</td>
					<td>{v.archived || ""}</td>
					<td>{v.archived || ""}</td>

				</tr>
			})
		}
		
		{/* <tr>
			<td data-label="Projeto">Saqib Ali</td>
			<td data-label="Descrição">03</td>
			<td data-label="Administrador">20</td>
			<td data-label="Criado">50</td>
			<td data-label="Aplicações">Passed</td>
		</tr> */}
	
		
	</tbody>
</table>

</div>

    </>
  )
}
