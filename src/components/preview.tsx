import React from "react";

interface PreviewProps {
    editorValue?: string | undefined;

}

const Preview: React.FC<PreviewProps> = ({
    editorValue ,
}) => {

    return (
        <div className={'w-100'}>
            <div
                className="preview"
                dangerouslySetInnerHTML={{__html: editorValue}}
            />
        </div>
    );
};

export default Preview;
