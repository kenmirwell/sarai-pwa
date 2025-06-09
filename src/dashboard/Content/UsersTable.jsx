import React, { useState, useEffect } from "react"
import DataTable from 'react-data-table-component';
import { columns } from './columns';
import { getUsers} from '../../supabaseService';

const UsersTable = ({}) => {
	const [tableData, setTableData] = useState([])
	const [selected, setSelected] = useState(null)

	useEffect(() => {
			getUsers().then(res => setTableData(res))
	}, [])

	const handleSelected = () => {
		
	}

	return (
		<div className="bg-[#f9f9f9] pt-[30px]">
			<div className="max-w-[1200px] px-[50px] mx-auto">
				<div  className="flex w-[100%]">
					<h6 className="font-[600] text-[24px]">Users</h6>
				</div>
				<div className={`w-[100%] h-[100vh]`}>
					<div className="pt-[30px]">
						<div className="shadow-md rounded-md overflow-hidden">
							<DataTable
								highlightOnHover
								columns={columns()}
								data={tableData}
								striped //how to customized this
								theme={null}
								pagination
								onRowClicked={row => setSelected(row.id)}
								// 	conditionalRowStyles={conditionalRowStyles}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default UsersTable;