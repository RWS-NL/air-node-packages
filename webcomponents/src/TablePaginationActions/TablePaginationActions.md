### Usage of the TablePaginationActions component:

**Examples:**

```tsx
import React from 'react'; 
import TablePagination from '@material-ui/core/TablePagination'; 
import { TablePaginationActions } from '@rws-air/webcomponents'; 

  <TablePagination
      labelRowsPerPage={'rows per page'}
      labelDisplayedRows={({from, to, count}) => `${from <= 9 ? ` 0${from} ` : from}-${to} of ${count}` }
      component='div'
      count={20}
      onChangePage={() => console.log('Changed Page!')}
      onChangeRowsPerPage={() => console.log('Changed amount of rows per page')}
      page={0}
      rowsPerPage={5}
      rowsPerPageOptions={[5, 10, 15, 20]}
      ActionsComponent={TablePaginationActions}
    />
```

```jsx
import React from 'react'; 
import TablePagination from '@material-ui/core/TablePagination'; 
import { TablePaginationActions } from '@rws-air/webcomponents'; 

  <TablePagination
      labelRowsPerPage={'rows per page'}
      labelDisplayedRows={({from, to, count}) => `${from <= 9 ? ` 0${from} ` : from}-${to} of ${count}` }
      component='div'
      count={20}
      onChangePage={() => console.log('Changed Page!')}
      onChangeRowsPerPage={() => console.log('Changed amount of rows per page')}
      page={0}
      rowsPerPage={5}
      rowsPerPageOptions={[5, 10, 15, 20]}
      ActionsComponent={TablePaginationActions}
    />
```

