import {useState} from "react";
import "./App.css";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function App() {
  const [movieContent, setMovieContent] = useState({
    title : '',
    content : ''
  })
  
  const [viewConetent, setViewContent] = useState([]);

  const getValue = e => {
    const { name, value } = e.target;
    setMovieContent({
      ...movieContent,
      [name]:  value
    })
    console.log(movieContent);
  }

  return (
    <div className="App">
      <h1>Movie Review</h1>
      <div className='movie-container'>
        {viewConetent.map(element => 
          <div>
            <h2>{element.title}</h2>
            <div>
              {element.content}
            </div>
          </div>
        )}
      </div>
      <div className='form-wrapper'>
        <input className="title-input" type='text' placeholder='제목' name="title" onChange={getValue} />
        <CKEditor
          editor={ClassicEditor}
          data=""
          onReady={editor => {
            // You can store the "editor" and use when it is needed.
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
            setMovieContent({
              ...movieContent,
              content:data
            })
            console.log(movieContent);
          }}
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
        />
      </div>
      <button 
      className="submit-button"
      onClick={() => {
        setViewContent(viewConetent.concat({...movieContent}));
      }
      }>입력</button>
    </div>
  );
}

export default App;