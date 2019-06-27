### Usage of the TableToolbar component:

**Examples:**

```tsx
import React from 'react';
import { TableToolbar } from '@rws-air/webcomponents';

<TableToolbar
      searchPlaceholderLabel={'Search...'}
      onSearchInput={() => console.log('Got some search input')}
      onSearchClear={() => console.log('Cleared the search')}
/>
```

```jsx
import React from 'react';
import { TableToolbar } from '@rws-air/webcomponents';

<TableToolbar
      searchPlaceholderLabel={'Search...'}
      onSearchInput={() => console.log('Got some search input')}
      onSearchClear={() => console.log('Cleared the search')} 
/>
```