import React from 'react';
import MainLayout from "../../layouts/mainLayout";

const id = () => {
    return (
        <div>
            menuManagement
        </div>
    );
};
id.getLayout = function getLayout(page: React.ReactNode) {
    return <MainLayout showHeader={false}>{page}</MainLayout>;
};
export default id;
