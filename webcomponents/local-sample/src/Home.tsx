import React, { FC, Fragment } from 'react';
import css from 'styles/modules/app.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import EditIcon from '@material-ui/icons/Create';
import IconButton from '@material-ui/core/IconButton';
import TableRow from '@material-ui/core/TableRow';
import SearchIcon from '@material-ui/icons/Search';
import classnames from 'classnames';
import { Button, Logo, ActionBar, TableBodyCell, SearchBar } from '@rws-air/ui-components'

const Home: FC = () => {
  return (
    <Fragment>
      <div>
        <ActionBar title='ActionBar Title' buttonLabel='action-bar-button' buttonAction={() => console.log('test')} shouldHaveButton />
      </div>
      <div className={css.logo}>
        <Logo />
      </div>
      <div className={css.app}>
        <header className={css.header}>
          <Button variant='contained' color='primary' label='Contained Primary Button' onClick={() => console.log('Clicked Contained Primary Button')} />
          <Button variant='contained' color='secondary' label='Contained Secondary Button' onClick={() => console.log('Clicked Contained Secondary Button')} />
          <Button variant='outlined' color='primary' label='Outlined Primary Button' onClick={() => console.log('Clicked Outlined Primary Button')} />
          <Button variant='outlined' color='secondary' label='Outlined Secondary Button' onClick={() => console.log('Clicked Outlined Secondary Button')} />
        </header>
      </div>
      <div className={css.spacer}>
        <Table>
          <TableBody>
            <TableRow>
              <TableBodyCell content='cell content' />
              <TableBodyCell content={
                <IconButton>
                  <EditIcon color='primary' />
                </IconButton>
              } />
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className={css.spacer}>
        <SearchBar
          data-qa='table-search-bar'
          placeholder={`Search...`}
          onChange={() => console.log('changed!')}
          onCancelSearch={() => console.log('Canceled Search!')}
          searchIcon={<SearchIcon className={classnames(css.searchIconButton)} />}
        />
      </div>
    </Fragment>
  );
}

export default Home;
