### Usage of the TablePagination component:

**Examples:**

```tsx
import React from 'react';
import { TablePagination } from '@rws-air/webcomponents';

   <TablePagination
          rowsPerPageOptions={tableRowsPerPage}
          rowsPerPage={props.rowsPerPage}
          page={props.page}
          count={props.rowCount}
          onChangePage={props.onChangePage}
          onChangeRowsPerPage={props.onChangeRowsPerPage}
          customClasses={css.tableTopPagination} 
    />
```

