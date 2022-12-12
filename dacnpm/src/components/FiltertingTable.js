import React, { useMemo, useEffect, useState } from 'react'
import { useTable, useFilters, useGlobalFilter } from 'react-table'

import { COLUMNS } from './columns'
import './table.css'
import { GlobalFilter } from './GlobalFilter'
import { ColumnFilter } from './ColumnFilter'
import axios from 'axios';

export const FilteringTable = () => {
  // const handleCallBackData = async () => {
  //   axios({
  //     method: 'get',
  //     url: 'http://localhost:3001/api/list_banaWords',
  //   })
  //   .then(res => {
  //     const formatObject = {
  //       '_id': null,
  //       'Vietnamese': null,
  //       'Bahnaric': null,
  //       'PoS': null,
  //       'BinhDinh': null,
  //       'KonTum': null,
  //       'GiaLai': null
  //     }
  //     const formatedArrayObject = res.data.message.map((obj) => {
  //       return Object.assign(formatObject, obj);
  //     })
  //     console.log(formatedArrayObject);
  //     return formatedArrayObject;
  //   })
  // } 
  const columns = useMemo(() => COLUMNS, [])
  // const data = useMemo(() => MOCK_DATA , []); 
  // const data = useMemo(() => handleCallBackData , []); 
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
    footerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter
  } = useTable(
    {
      columns,
      data,
      defaultColumn
    },
    useFilters,
    useGlobalFilter
  )

  const { globalFilter } = state

  return (
    <>
      {/* <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} /> */}
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
