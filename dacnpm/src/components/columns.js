import { format } from 'date-fns'

export const COLUMNS = [
  {
    Header: 'Bahnaric',
   
    accessor: 'Bahnaric',
    // disableFilters: true,
    sticky: 'left'
  },
  {
    Header: 'Binh Dinh',
    
    accessor: 'BinhDinh',
    sticky: 'left'
  },
  {
    Header: 'Gia Lai',
   
    accessor: 'GiaLai',
    sticky: 'left'
  },
  {
    Header: 'Kon Tum',
   
    accessor: 'KonTum'
  },
  {
    Header: 'Type',
   
    accessor: 'PoS'
  },
  
  {
    Header: 'Vietnamese',
   
    accessor: 'Vietnamese'
  },
]

// export const GROUPED_COLUMNS = [
//   {
//     Header: 'SSN',
//     Footer: 'SSN',
//     accessor: 'SSN'
//   },
//   {
//     Header: 'Name',
//     Footer: 'Name',
//     columns: [
//       {
//         Header: 'First Name',
//         Footer: 'First Name',
//         accessor: 'first_name'
//       },
//       {
//         Header: 'Last Name',
//         Footer: 'Last Name',
//         accessor: 'last_name'
//       }
//     ]
//   },
//   {
//     Header: 'Info',
//     Footer: 'Info',
//     columns: [
//       // {
//       //   Header: 'Date of Birth',
//       //   Footer: 'Date of Birth',
//       //   accessor: 'date_of_birth'
//       // },
//       {
//         Header: 'Address',
//         Footer: 'Address',
//         accessor: 'Address'
//       },
//       {
//         Header: 'Phone',
//         Footer: 'Phone',
//         accessor: 'phone'
//       }
//     ]
//   }
// ]
