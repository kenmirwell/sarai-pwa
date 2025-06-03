import DataTable from 'react-data-table-component';
import { columns } from './columns';

const DbContent = () => {
  return (
      <div className={`w-[100%] pt-[20px] pl-[50px] pr-[20px] h-[100vh] overflow-y-scroll bg-[#376251]`}>
					<div className="mb-[20px]">
						<input 
							className={`bg-[#f2f2f2] w-[100%] py-[10px] pr-[10px] pl-[20px] $text-[#ffffff]`} type="text" placeholder="Enter Keyword" 
							// value={searchTerm}
        			// 		onChange={(e) => setSearchTerm(e.target.value)}
						/>
					</div>
					<DataTable
						highlightOnHover
						columns={
							columns({
								// columnId: columnId,
								// setColumnId: (e) => handleColumnAction(e)
							})
						}
						data={[]}
						striped //how to customized this
						theme={null}
						pagination
						// onRowClicked={row => setColumnId(row.id)}
  					// 	conditionalRowStyles={conditionalRowStyles}
					/>
				</div>
  )
}

export default DbContent