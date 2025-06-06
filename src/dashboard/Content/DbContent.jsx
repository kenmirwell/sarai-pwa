import DataTable from 'react-data-table-component';
import { columns } from './columns';
import UsersData from './usersData';

const DbContent = () => {
  return (
		<div className="bg-[#f9f9f9] pt-[30px]">
			<div className="max-w-[1200px] px-[50px] mx-auto">
				<div className={`w-[100%] h-[100vh]`}>
					<div className="pt-[30px]">
						<div className="shadow-md rounded-md overflow-hidden">
							<DataTable
								highlightOnHover
								columns={
									columns({
										// columnId: columnId,
										// setColumnId: (e) => handleColumnAction(e)
									})
								}
								data={UsersData}
								striped //how to customized this
								theme={null}
								pagination
								// onRowClicked={row => setColumnId(row.id)}
								// 	conditionalRowStyles={conditionalRowStyles}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
  )
}

export default DbContent