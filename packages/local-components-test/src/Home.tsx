/* eslint-disable no-console */
import TableRow from '@material-ui/core/TableRow';
import { Table, TableBodyCell, TableProps } from '@rws-air/webcomponents';
import React, { FC, Fragment } from 'react';
import css from 'styles/modules/app.module.scss';
import SaveIcon from '@material-ui/icons/Save';
import SearchIcon from '@material-ui/icons/Search';

interface DataForTableType {
  name: string;
  email: string;
  id: number;
}

const dataForTable: DataForTableType[] = [
  { name: 'Robin Hood', email: 'robin.hood@winked.com', id: 23456789 },
  { name: 'Steve Jobs', email: 'steve.jobs@apple.com', id: 1 },
  { name: 'Darth Vader', email: 'darth.vader@thedeathstart.com', id: 9876 },
  { name: 'Kaladin Stormblessed', email: 'kaladin.stormblessed@thearmy.com', id: 567890 },
  { name: 'John Geary', email: 'john.geary@thelostfleet.com', id: 567890 },
  { name: 'Robin Hood', email: 'robin.hood@winked.com', id: 23456789 },
  { name: 'Steve Jobs', email: 'steve.jobs@apple.com', id: 1 },
  { name: 'Steve Jobs', email: 'steve.jobs@apple.com', id: 1 },
  { name: 'Darth Vader', email: 'darth.vader@thedeathstart.com', id: 9876 },
  { name: 'Steve Jobs', email: 'steve.jobs@apple.com', id: 1 },
  { name: 'Kaladin Stormblessed', email: 'kaladin.stormblessed@thearmy.com', id: 567890 },
  { name: 'Steve Jobs', email: 'steve.jobs@apple.com', id: 1 },
  { name: 'Robin Hood', email: 'robin.hood@winked.com', id: 23456789 },
  { name: 'Steve Jobs', email: 'steve.jobs@apple.com', id: 1 },
  { name: 'Darth Vader', email: 'darth.vader@thedeathstart.com', id: 9876 }
];

const dataTableHeaderMapping: Map<string, string> = new Map()
  .set('name', 'name')
  .set('email', 'email')
  .set('id', 'id');

const rowsPerPage = 5;
const page = 0;

const propsForTable: TableProps = {
  onsearchclear: () => console.log('cleared the search'),
  onsearchinput: () => console.log('got some search input'),
  onRequestSort: () => console.log('A sort was requested'),
  tooltipplacement: 'top',
  order: 'asc',
  orderby: 'name',
  rowsPerPage,
  rowsPerPageOptions: [ 2, 4, 5, 10 ],
  page,
  onChangePage: () => console.log('changed page'),
  onChangeRowsPerPage: () => console.log('changed rows per page'),
  headers: [
    { label: Array.from(dataTableHeaderMapping.keys())[0] },
    { label: Array.from(dataTableHeaderMapping.keys())[1] },
    { label: Array.from(dataTableHeaderMapping.keys())[2], numeric: true }
  ],
  headermapping: dataTableHeaderMapping,
  rowcount: dataForTable.length,
  labels: {
    labelpaginationof: 'of',
    labelrowsperpage: 'Rows per page',
    searchplaceholderlabel: 'Search...',
    tooltiplabel: 'Sorteren',
  },
  tableqas: {
    header: 'table-header',
    headerRow: 'table-header-row',
    pagination: 'table-pagination',
    table: 'table',
    toolbar: 'table-toolbar',
    headerCell: 'table-header-cell',
    tableBody: 'table-body',
  },
  tablebodycontent: (
    <Fragment>
      {dataForTable
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map(row => (
          <TableRow hover tabIndex={-1} key={Math.random()} className={css.tableRow} data-qa='sample-table-body-row' >
            <TableBodyCell content={row.name} />
            <TableBodyCell content={row.email} />
            <TableBodyCell content={row.id} />
          </TableRow>
        ))
      }
    </Fragment>
  ),
  tablecss: {
    table: [ css.customTable, css.customTable ],
    tableToolbar: [ css.customTableToolbar ],
  },
  paperElevation: 1,
  showBottomPagination: true,
  showTopPagination: true,
  extraIcons: [
    {
      icon: <SaveIcon className={css.svgIcon} />,
      clickEvent: () => console.log('void'),
    },
    {
      icon: <SearchIcon className={css.svgIcon} />,
      clickEvent: () => console.log('void'),
    },
    {
      icon: <SearchIcon className={css.svgIcon} />,
      clickEvent: () => console.log('void'),
    },
    {
      icon: <SearchIcon className={css.svgIcon} />,
      clickEvent: () => console.log('void'),
    },
    {
      icon: <SearchIcon className={css.svgIcon} />,
      clickEvent: () => console.log('void'),
    },
    {
      icon: <SearchIcon className={css.svgIcon} />,
      clickEvent: () => console.log('void'),
    }
  ],
};


const Home: FC = () => {
  return (
    <Fragment>
      <Table {...propsForTable} />
    </Fragment>
  );
};

export default Home;