import { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const Editor = () => {
    const [editorValue, setEditorValue] = useState('');

    const handleChange = (value: string) => {
        setEditorValue(value);
        console.log(value,'value')
    };

    const modules = {
        toolbar: [
            [{ header: '1' }, { header: '2' }, { header: '3' }, { header: '4' },{ header: '5' }, { header: '6' }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['bold', 'italic', 'underline'],
            ['link', 'image'],
            ['blockquote'],
            [{ align: [] }],
        ],
    };

    return (
        <div className={'w-100'}>
            <ReactQuill
                value={editorValue}
                onChange={handleChange}
                modules={modules}
            />
            <h2>미리보기</h2>
            <div
                className="preview"
                dangerouslySetInnerHTML={{__html: editorValue}}
            />
        </div>
    );
};

export default Editor;
