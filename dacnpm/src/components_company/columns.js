import { format } from 'date-fns'

export const COLUMNS = [
  {
    Header: 'Vietnamese',
    Footer: 'Vietnamese',
    accessor: 'Vietnamese',
    // disableFilters: true,
    sticky: 'left'
  },
  {
    Header: 'Bana',
    Footer: 'Bana',
    accessor: 'Bana',
    sticky: 'left'
  },
  {
    Header: 'Type',
    Footer: 'Type',
    accessor: 'Type',
    sticky: 'left'
  },
  {
    Header: 'Binh Dinh',
    Footer: 'Binh Dinh',
    accessor: 'Binh Dinh'
  },
  {
    Header: 'Kon Tum',
    Footer: 'Kon Tum',
    accessor: 'Kon Tum'
  },
  {
    Header: 'Gia Lai',
    Footer: 'Gia Lai',
    accessor: 'Gia Lai'
   
  },
  // {
  //   Header: 'Email',
  //   Footer: 'Email',
  //   accessor: 'email'
  // },
  // {
  //   Header: 'Age',
  //   Footer: 'Age',
  //   accessor: 'age'
  // },
]

export const GROUPED_COLUMNS = [
  {
    Header: 'Cnumber',
    Footer: 'Cnumber',
    accessor: 'Cnumber'
  },
  {
    Header: 'Name',
    Footer: 'Name',
    columns: [
      {
        Header: 'Name',
        Footer: 'Name',
        accessor: 'first_name'
      },
      {
        Header: 'Last Name',
        Footer: 'Last Name',
        accessor: 'last_name'
      }
    ]
  },
  {
    Header: 'Info',
    Footer: 'Info',
    columns: [
      // {
      //   Header: 'Edate',
      //   Footer: 'Edate',
      //   accessor: 'date_of_birth'
      // },
      {
        Header: 'Address',
        Footer: 'Address',
        accessor: 'Address'
      },
      {
        Header: 'Phone',
        Footer: 'Phone',
        accessor: 'phone'
      }
    ]
  }
]
