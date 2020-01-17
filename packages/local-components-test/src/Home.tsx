/* eslint-disable no-console */
import TableRow from '@material-ui/core/TableRow';
import {
  Table,
  TableBodyCell,
  TableProps,
  Modal,
  Button,
  ConfirmationModal,
  FloatingActionButton
} from '@rws-air/webcomponents';
import React, { FC, Fragment, useState } from 'react';
import css from 'styles/modules/app.module.scss';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

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

const dataTableHeaderMapping: Map<string, string> = new Map([
  ['id', 'id'],
  ['name', 'name'],
  ['email', 'email'],
  ['action', 'action']
]);

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
  rowsPerPageOptions: [2, 4, 5, 10],
  page,
  onChangePage: () => console.log('changed page'),
  onChangeRowsPerPage: () => console.log('changed rows per page'),
  headers: [
    { label: Array.from(dataTableHeaderMapping.keys())[0], numeric: true },
    { label: Array.from(dataTableHeaderMapping.keys())[1] },
    { label: Array.from(dataTableHeaderMapping.keys())[2] },
    { label: Array.from(dataTableHeaderMapping.keys())[3], isActionButtonCell: true }
  ],
  headermapping: dataTableHeaderMapping,
  rowcount: dataForTable.length,
  labels: {
    labelPaginationOf: 'of',
    labelRowsPerPage: 'Rows per page',
    searchplaceholderlabel: 'Search...',
    tooltiplabel: 'Sorteren'
  },
  tableqas: {
    header: 'table-header',
    headerRow: 'table-header-row',
    pagination: 'table-pagination',
    table: 'table',
    toolbar: 'table-toolbar',
    headerCell: 'table-header-cell',
    tableBody: 'table-body'
  },
  tablebodycontent: (
    <Fragment>
      {dataForTable.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
        <TableRow hover tabIndex={-1} key={Math.random()} className={css.tableRow} data-qa='sample-table-body-row'>
          <TableBodyCell content={row.name} />
          <TableBodyCell content={row.email} />
          <TableBodyCell content={row.id} />
          <TableBodyCell
            content={
              <IconButton onClick={undefined} data-qa='edit-user-button' color='primary'>
                <DeleteIcon />
              </IconButton>
            }
          />
        </TableRow>
      ))}
    </Fragment>
  ),
  tablecss: {
    table: [css.customTable, css.customTable],
    tableToolbar: [css.customTableToolbar]
  },
  paperElevation: 1,
  showBottomPagination: true,
  showTopPagination: true,
  extraIcons: [
    {
      icon: <SearchIcon className={css.svgIcon} />,
      clickEvent: () => console.log('void'),
      disabled: true
    },
    {
      icon: <SearchIcon className={css.svgIcon} />,
      clickEvent: () => console.log('void')
    },
    {
      icon: <SearchIcon className={css.svgIcon} />,
      clickEvent: () => console.log('void')
    },
    {
      icon: <SearchIcon className={css.svgIcon} />,
      clickEvent: () => console.log('void')
    },
    {
      icon: <SearchIcon className={css.svgIcon} />,
      clickEvent: () => console.log('void')
    },
    {
      icon: <SearchIcon className={css.svgIcon} />,
      clickEvent: () => console.log('void')
    }
  ]
};

const Divider = () => <div style={{ margin: '4vh', height: '4vh' }}></div>;

const Home: FC = () => {
  const [open, setOpen] = useState(false);
  const [confirmationOpen, setConfirmationOpen] = useState(false);

  const toggleModal = () => setOpen(!open);
  const toggleConfirmationModal = () => setConfirmationOpen(!open);

  return (
    <Fragment>
      <Modal
        topic='Woopdiedoo'
        modalqas={{
          modal: 'modal',
          content: 'content',
          title: 'title'
        }}
        dialogContent={<div>Herp Derp</div>}
        open={open}
        closeAction={toggleModal}
      />
      <ConfirmationModal
        closeAction={toggleConfirmationModal}
        okButtonText='OK'
        cancelButtonText='CANCEL'
        modalType='warning'
        confirmAction={console.log}
        dialogContent={<div>HERP DERP</div>}
        open={confirmationOpen}
        topic='Confirmation Modal Test'
      />
      <Button
        onClick={toggleModal}
        label='CLICK ME TO OPEN TEST MODAL'
        variant='contained'
        color='primary'
        style={{ float: 'left' }}
      />
      <Button
        onClick={toggleConfirmationModal}
        label='CLICK ME TO OPEN CONFIRMATION TEST MODAL'
        variant='contained'
        color='primary'
        style={{ float: 'left' }}
      />
      <Divider />
      <Table {...propsForTable} />
      <FloatingActionButton tooltipContent='test' icon={<SearchIcon />} onClick={console.log} />
    </Fragment>
  );
};

export default Home;
