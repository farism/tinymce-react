import React from 'react'
import ReactDOM from 'react-dom'
import { Editor } from '@tinymce/tinymce-react'
import tinymce from 'tinymce/tinymce'
import 'tinymce/themes/modern/theme'
import 'tinymce/plugins/paste'
import 'tinymce/plugins/link'

require.context(
  'file-loader?name=[path][name].[ext]&context=node_modules/tinymce!tinymce/skins',
  true,
  /.*/
);

tinymce.init({
  selector: '#tiny',
  plugins: ['paste', 'link'],
})

ReactDOM.render(<Editor />, document.getElementsByTagName('body')[0])
