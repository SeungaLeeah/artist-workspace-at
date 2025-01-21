import React from 'react';
import MainLayout from "../../layouts/mainLayout";

const index = () => {
    return (
        <div>
            workManagement
        </div>
    );
};
index.getLayout = function getLayout(page: React.ReactNode) {
    return <MainLayout showHeader={true}>{page}</MainLayout>;
};
export default index;
