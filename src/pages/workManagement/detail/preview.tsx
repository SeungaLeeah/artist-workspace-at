import React, {useEffect, useState} from 'react';
import MainLayout from "../../../layouts/mainLayout";

interface PreviewProps {
    editorValue?: string;
}

interface PreviewComponent extends React.FC<PreviewProps> {
    getLayout?: (page: React.ReactNode) => React.ReactNode;
}

const Preview: PreviewComponent = () => {
    const [editorContent, setEditorContent] = useState<string>('');
    useEffect(() => {
        console.log(window.opener ,'window.opener ')
        if (window.opener && window.opener.editorValue) {
            setEditorContent(window.opener.editorValue);
        }
    }, []);

    return (
        <div className={"w-100"}>
            <div className="preview pd-20" dangerouslySetInnerHTML={{ __html: editorContent  }} />
        </div>
    );
};

Preview.getLayout = function getLayout(page: React.ReactNode) {
    return <MainLayout showHeader={false}>{page}</MainLayout>;
};

export default Preview;
