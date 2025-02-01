import React from "react";
import MainLayout from "../../../layouts/mainLayout";

interface PreviewProps {
    editorValue?: string;
}

interface PreviewComponent extends React.FC<PreviewProps> {
    getLayout?: (page: React.ReactNode) => React.ReactNode;
}

const Preview: PreviewComponent = ({ editorValue }) => {
    return (
        <div className={"w-100"}>
            <div className="preview" dangerouslySetInnerHTML={{ __html: editorValue }} />
        </div>
    );
};

Preview.getLayout = function getLayout(page: React.ReactNode) {
    return <MainLayout showHeader={false}>{page}</MainLayout>;
};

export default Preview;
