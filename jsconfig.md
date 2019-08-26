##Absolute imports

### tredition approach
1. create **.evn** file in project root
2. add the config below:
```javascript
NODE_PATH=src/
```


### latest approach
1. create **jsconfig.json** file in project root
2. add the config below:
```json
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": [
    "src"
  ]
}
```

[Reference website](https://create-react-app.dev/docs/importing-a-component#absolute-imports)

### How do I use it
Now in component, you can do 
```javascript
import CommentBox from 'componenets/CommentBox'  **NEW**

import CommentBox from './componenets/CommentBox'  **OLD**
```