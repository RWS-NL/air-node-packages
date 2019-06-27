### Usage of the TableHeaderCell component:

**Examples:**

```tsx
import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { TableHeaderCell } from '@rws-air/webcomponents';

<Table>
    <TableHead>
        <TableRow>
              <TableHeaderCell
                  key={header.label}
                  header={header}
                  orderBy={props.orderBy}
                  order={props.order || 'asc'}
                  tooltiplabel={'sort'}
                  onRequestSort={props.onRequestSort} />
        </TableRow>
    </TableHead>
</Table>
```