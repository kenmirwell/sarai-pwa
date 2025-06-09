export const coursesColumns = (props) => {        
    const column = [
        {
            name: 'ID',
            sortable: true,
		        reorder: true,
            selector: (row => {
                // console.log("row title", row)
                return row.id
            }),
        },
        {
            name: 'title',
            sortable: true,
		        reorder: true,
            selector: (row => {
                // console.log("row title", row)
                return row.title
            }),
        },
        {
            name: 'description',
            sortable: true,
		        reorder: true,
            selector: (row => {
                // console.log("row title", row)
                return row.description
            }),
        },
        {
            name: 'category',
            sortable: true,
		        reorder: true,
            selector: (row => {
                // console.log("row title", row)
                return row.category
            }),
        },
    ];

    return column;
}