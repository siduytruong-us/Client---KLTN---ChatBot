import React, { Component } from 'react';

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Button } from 'antd';

class WebEditor extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            dataEditor:null,
        }
    }
    

    componentDidMount() { 
        ClassicEditor
            .create( document.querySelector( '#editor' ) )
            .then( editor => {
                window.editor = editor;
                
                this.handleSaveButton(editor)
            } )
            .catch( err => {
                console.error( err.stack );
            } );

  
    }

    handleSaveButton() { 
        console.log(this.state.dataEditor);
    }

    render() {
        
        return (
            <div className="container" style={{ paddingTop: `100px`, paddingBottom: '100px' }}>
                <h2> Post Editor</h2>
                <CKEditor
                    editor={ ClassicEditor }
                    onInit={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        this.setState ({
                            dataEditor: editor.getData()
                        })
                    } }
                    onBlur={ editor => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ editor => {
                        console.log( 'Focus.', editor );
                    } }
                />
                <br/>
                <Button onClick= {this.handleSaveButton.bind(this) } className ="float-right">Done!</Button>
            </div>
        );
    }
}

export default WebEditor;