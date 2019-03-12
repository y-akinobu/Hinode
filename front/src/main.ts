import { hello } from './sub';
import ace from '../node_modules/ace-builds/src-min-noconflict/ace.js';

const message: string = 'Hello World';

hello(message);

(() => {
  var editor = ace.edit("editor");
  editor.setTheme("ace/theme/solarized_light");
  editor.getSession().setUseWrapMode(true);

  const myHeaders = new Headers({
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  });
  
  fetch('/test', {
    method: 'GET',
    headers: myHeaders
  }).then((responce: Response) => {
    if (responce.status >= 200 && responce.status < 300) {
      return responce.json()
    } else {
      throw new Error(`illegal status code: ${responce.status}`)
    }
  }).then((json: any) => {
    console.log(json)
    editor.setValue(json.text, -1)
  }).catch((err) => {
    console.log(err);
  });
})()