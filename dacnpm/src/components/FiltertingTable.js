import React, { useMemo, useEffect, useState } from 'react'
import { useTable, useFilters, useGlobalFilter } from 'react-table'

import { COLUMNS } from './columns'
import './table.css'
import { ColumnFilter } from './ColumnFilter'
import axios from 'axios';

export const FilteringTable = () => {
  
  const columns = useMemo(() => COLUMNS, [])
  const [data, setData] = useState([]);

  useEffect(() => {
    if (data.length === 0) {
      axios({
        method: 'get',
        url: 'http://localhost:3001/api/list_banaWords',
      })
      .then(res => {
        console.log(res.data.message);
        setData(res.data.message);
      })
    .catch(e => console.log(e));
    }
  }, [data]);

  const defaultColumn = React.useMemo(
    () => ({
      Filter: ColumnFilter
    }),
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable(
    {
      columns,
      data,
      defaultColumn
    },
    useFilters,
    useGlobalFilter
  )

 

  return (
    <>
      
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>
                  {column.render('Header')}
                  <div>{column.canFilter ? column.render('Filter') : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
