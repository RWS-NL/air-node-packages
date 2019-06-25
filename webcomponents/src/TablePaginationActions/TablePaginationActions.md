# Usage of TableBodyCell component:

**Examples:**

```tsx
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import EditIcon from '@material-ui/icons/Create';
import { TableBodyCell } from '@rws-air/webcomponents';

<Table>
    <TableBody>
        <TableRow>
            <TableBodyCell content='cell content'/>
            <TableBodyCell content={
                <IconButton>
                    <EditIcon color='primary'/>
                </IconButton>
            }/>
        </TableRow>
    </TableBody>
</Table>
```

```jsx
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import EditIcon from '@material-ui/icons/Create';
import { TableBodyCell } from '@rws-air/webcomponents';

<Table>
    <TableBody>
        <TableRow>
            <TableBodyCell content='cell content'/>
            <TableBodyCell content={
                <IconButton>
                    <EditIcon color='primary'/>
                </IconButton>
            }/>
        </TableRow>
    </TableBody>
</Table>
```