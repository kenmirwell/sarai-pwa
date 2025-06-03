import { useState, useEffect, useRef } from "react"
import DataTable, { createTheme } from 'react-data-table-component';

export const columns = (props) => {        
    const column = [
        {
            name: 'Email',
            sortable: true,
		    reorder: true,
            selector: (row => {
                // console.log("row title", row)
                return row.email_address
            }),
        },
        {
            name: 'First Name',
            sortable: true,
		    reorder: true,
            selector: (row => {
                // console.log("row title", row)
                return row.first_name
            }),
        },
        {
            name: 'Middle Name',
            selector: (row => {
                // console.log("row title", row)
                return row.middle_name
            }),
        },
        {
            name: 'Last Name',
            sortable: true,
		    reorder: true,
            selector: (row => {
                // console.log("row title", row)
                return row.last_name
            }),
        },
        {
            name: 'Time In',
            sortable: true,
		    reorder: true,
            selector: (row => {
                return row.time_in ? new Date(row.time_in).toLocaleString() : ''
            }),
        },
        {
            name: 'Time Out',
            sortable: true,
		    reorder: true,
            selector: (row => {
                return row.time_out ? new Date(row.time_out).toLocaleString() : ''
            }),
        },
        // {
        //     name: 'Action',
        //     width: "",
        //     center: 1,
        //     cell: ((row, index, column, id) => {
        //         const timeStamped = new Date().toISOString();

        //         const popupRef = useRef();

        //         const handleElipsis = () => {
        //             props.setColumnId(row.id)
        //             console.log("row", row)
        //         }

        //         const handleUpdate = async (id, newData) => {
        //             try {
        //                 await updateItem(id, newData)
        //             // Optional: show toast or confirmation
        //             } catch (error) {
        //                 console.error('Update failed:', error)
        //             }
        //         }

        //         const handleLogs = (email, logType) => {
        //             if(logType === "in") {
        //                 handleUpdate(email, {time_in: timeStamped})
        //             } else if(logType === "out") {
        //                 handleUpdate(email, {time_out: timeStamped})
        //             } else if(logType === "del-in") {
        //                 handleUpdate(email, {time_in: null})
        //             } else if(logType === "del-out") {
        //                 handleUpdate(email, {time_out: null})
        //             }

        //             handleElipsis()
        //         }

        //         useEffect(() => {
        //             const handleClickOutside = (event) => {
        //               if (popupRef.current && !popupRef.current.contains(event.target)) {
        //                 props.setColumnId(null);
        //               }
        //             };
                
        //             document.addEventListener('mousedown', handleClickOutside);
                    
        //             return () => {
        //               document.removeEventListener('mousedown', handleClickOutside);
        //             };
        //           }, [props.columnId]);
                
    
        //         return (
        //             <div className="h-[100%] w-[50%] relative">
        //                 <div onClick={handleElipsis} className="h-[100%] w-[100%] flex justify-center items-center">
        //                     <p className="text-[16px] cursor-pointer h-[100%] w-[100%] flex justify-center items-center pb-[5px]">...</p>
        //                 </div>
        //                 {
        //                     props.columnId === row.id && 
        //                         <div ref={popupRef} className="absolute w-[200px] right-[20px] bottom-[-20px] bg-[#ffffff] shadow py-[10px] z-[9]">
        //                             <div onClick={() => handleLogs(row.email_address, "in")} className="hover:bg-[#d0d0d0] w-[100%] py-[10px] px-[15px]"> 
        //                                 <p className="text-[#000000]">Time In</p>
        //                             </div>
        //                             <div onClick={() => handleLogs(row.email_address, "out")} className="hover:bg-[#d0d0d0] w-[100%] py-[10px] px-[15px]"> 
        //                                 <p className="text-[#000000]">Time Out</p>
        //                             </div>
        //                             <div onClick={() => handleLogs(row.email_address, "del-in")} className="hover:bg-[#d0d0d0] w-[100%] py-[10px] px-[15px]"> 
        //                                 <p className="text-[#000000]">Delete Time In</p>
        //                             </div>
        //                             <div onClick={() => handleLogs(row.email_address, "del-out")} className="hover:bg-[#d0d0d0] w-[100%] py-[10px] px-[15px]"> 
        //                                 <p className="text-[#000000]">Delete Time Out</p>
        //                             </div>
        //                         </div>
        //                 }
        //             </div>
        //         )
        //     })
        // },
    ];

    return column;
}

createTheme('boehringer', {
    text: {
      primary: '#dbdbdb',
      secondary: '#dbdbdb',
    },
    background: {
      default: '#08312a',
    },
    context: {
      background: '#cb4b16',
      text: '#dbdbdb',
    },
    striped: {
        text: '#dbdbdb',
        default: '#093931', // <--- customize this striped row color
      },
    divider: {
      default: '#dbdbdb',
    },
    highlightOnHover: {
        default: '#00e47c',
    },
    action: {
      button: '#dbdbdb',
      hover: 'rgba(0,0,0,.08)',
      disabled: 'rgba(0,0,0,.12)',
    },
    pagination: {
        default: "#dbdbdb"
    }
  });


  