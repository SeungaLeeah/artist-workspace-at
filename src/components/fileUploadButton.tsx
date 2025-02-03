// components/FileUploadButton.tsx

import React, { ChangeEvent } from 'react';

interface FileUploadButtonProps {
    onFileChange: (files: FileList | null) => void;
}

const FileUploadButton: React.FC<FileUploadButtonProps> = ({ onFileChange }) => {
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        console.log('파일이 선택되었습니다:', files);
        onFileChange(files);
    };

    return (
        <div>
            <label>
                <input
                    type="file"
                    onChange={handleFileChange}
                />
            </label>
        </div>
    );
};

export default FileUploadButton;
