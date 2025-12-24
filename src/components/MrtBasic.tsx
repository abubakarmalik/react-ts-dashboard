import { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table';

//example data type
type Person = {
  name: string;
  email: string;
  phone: number;
  address: string;
  role: string;
};

//nested data is ok, see accessorKeys in ColumnDef below
const data: Person[] = [
  {
    name: 'Abubakar',
    email: 'abubakar@asapp.com',
    phone: 9230447855,
    address: '261 Erdman Ford',
    role: 'React Developer',
  },
  {
    name: 'Ali Raza',
    email: 'ali.raza@asapp.com',
    phone: 9231145678,
    address: '18 Canal View',
    role: 'Frontend Developer',
  },
  {
    name: 'Ahmed Khan',
    email: 'ahmed.khan@asapp.com',
    phone: 9232147890,
    address: '72 Model Town',
    role: 'Backend Developer',
  },
  {
    name: 'Usman Tariq',
    email: 'usman.tariq@asapp.com',
    phone: 9233345566,
    address: '45 Johar Block',
    role: 'Full Stack Developer',
  },
  {
    name: 'Hassan Ali',
    email: 'hassan.ali@asapp.com',
    phone: 9234456677,
    address: '90 Garden East',
    role: 'UI/UX Designer',
  },
  {
    name: 'Bilal Ahmed',
    email: 'bilal.ahmed@asapp.com',
    phone: 9235567788,
    address: '12 Bahria Town',
    role: 'React Developer',
  },
  {
    name: 'Ahsan Iqbal',
    email: 'ahsan.iqbal@asapp.com',
    phone: 9236678899,
    address: '33 Wapda Town',
    role: 'Node.js Developer',
  },
  {
    name: 'Fahad Malik',
    email: 'fahad.malik@asapp.com',
    phone: 9237789900,
    address: '54 Gulshan Block',
    role: 'Software Engineer',
  },
  {
    name: 'Saad Hussain',
    email: 'saad.hussain@asapp.com',
    phone: 9238890011,
    address: '67 North Nazimabad',
    role: 'React Developer',
  },
  {
    name: 'Zain Ul Abideen',
    email: 'zain.abideen@asapp.com',
    phone: 9239901122,
    address: '21 PECHS',
    role: 'Frontend Engineer',
  },
  {
    name: 'Hamza Sheikh',
    email: 'hamza.sheikh@asapp.com',
    phone: 9231012233,
    address: '88 DHA Phase 6',
    role: 'Next.js Developer',
  },
  {
    name: 'Adeel Mahmood',
    email: 'adeel.mahmood@asapp.com',
    phone: 9232123344,
    address: '10 Askari Housing',
    role: 'Backend Engineer',
  },
  {
    name: 'Noman Javed',
    email: 'noman.javed@asapp.com',
    phone: 9233234455,
    address: '99 Satellite Town',
    role: 'DevOps Engineer',
  },
  {
    name: 'Imran Latif',
    email: 'imran.latif@asapp.com',
    phone: 9234345566,
    address: '6 F-11 Markaz',
    role: 'System Engineer',
  },
  {
    name: 'Rizwan Akhtar',
    email: 'rizwan.akhtar@asapp.com',
    phone: 9235456677,
    address: '44 Blue Area',
    role: 'Product Manager',
  },
  {
    name: 'Shahzaib Noor',
    email: 'shahzaib.noor@asapp.com',
    phone: 9236567788,
    address: '77 G-9 Sector',
    role: 'QA Engineer',
  },
  {
    name: 'Danish Farooq',
    email: 'danish.farooq@asapp.com',
    phone: 9237678899,
    address: '29 I-8 Markaz',
    role: 'Automation Tester',
  },
  {
    name: 'Kashif Mehmood',
    email: 'kashif.mehmood@asapp.com',
    phone: 9238789900,
    address: '15 Township',
    role: 'Mobile App Developer',
  },
  {
    name: 'Talha Yousaf',
    email: 'talha.yousaf@asapp.com',
    phone: 9239890011,
    address: '58 Valencia Town',
    role: 'Software Architect',
  },
  {
    name: 'Muneeb Akram',
    email: 'muneeb.akram@asapp.com',
    phone: 9230901122,
    address: '101 Green Acres',
    role: 'Junior React Developer',
  },
];

const MrtBasic = () => {
  //should be memoized or stable
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: 'name',
        header: 'Name',
        size: 150,
      },
      {
        accessorKey: 'email',
        header: 'Email',
        size: 150,
      },
      {
        accessorKey: 'address',
        header: 'Address',
        size: 200,
      },
      {
        accessorKey: 'phone',
        header: 'Phone',
        size: 150,
      },
      {
        accessorKey: 'role',
        header: 'Role',
        size: 150,
      },
    ],
    [],
  );

  const table = useMaterialReactTable({
    columns,
    data,
    enableRowNumbers: true,
    enableColumnFilters: false,
    enableSorting: false,
    rowNumberDisplayMode: 'static',
  });

  return <MaterialReactTable table={table} />;
};

export default MrtBasic;
