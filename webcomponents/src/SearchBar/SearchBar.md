### Usage of the SearchBar component:

**Examples:**

```tsx
import React from 'react'; 
import { SearchBar } from '@rws-air/webcomponents'; 
import SearchIcon from '@material-ui/icons/Search'; 

<SearchBar
  data-qa='table-search-bar'
  placeholder={ `Search...` }
  onChange={() => console.log('changed!')}
  onCancelSearch={() => console.log('Canceled Search!')}
  searchIcon={<SearchIcon />}
/>
```

```jsx
import React from 'react'; 
import { SearchBar } from '@rws-air/webcomponents'; 
import SearchIcon from '@material-ui/icons/Search'; 

<SearchBar
  data-qa='table-search-bar'
  placeholder={ `Search...` }
  onChange={() => console.log('changed!')}
  onCancelSearch={() => console.log('Canceled Search!')}
  searchIcon={<SearchIcon />}
/>
```

