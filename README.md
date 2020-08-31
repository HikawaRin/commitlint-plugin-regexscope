# Commitlint Plugin Regexscope  

A commitlint pulgin that supports only check regex match scope parts  

## Getting Started  

```shell
npm install --save-dev commitlint-plugin-regexscope
```  

And confighure `commitlint.config.js` to use regexscope plugin.  

```javascript
module.exports = {
    plugins: ['commitlint-plugin-regexscope'],
    rules: {
        'regexscope': [2, 'always', {
            pattern: '', 
            clean: null, 
            enum: [
                'core',
                'ui'
            ],
            case: 'lower-case'
        }]
    }
}
```

## `options: RegexScopeOptions`  

- `pattern?: string | RegExp`  
    - specify substring which you want to check 
    - default: `` 
- `clean?: string | RegExp`  
    - clean your substring to match enum 
    - default: `null`  
- `enum?: string[]` 
    - conditon: `regex matched subscope` is found in `enum`
    - default: `[]`
- `case?: string`  
    - condition: `scope` is in `case`  
    - default: `lower-case`  
