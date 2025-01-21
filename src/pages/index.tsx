import React from 'react';
import Login from "./Login/login";
import MainLayout from "../layouts/mainLayout";

const index = () => {
    return (
        <div>
            <Login/>
        </div>
    );
};
index.getLayout = function getLayout(page: React.ReactNode) {
    return <MainLayout showHeader={false}>{page}</MainLayout>;
};
export default index;
