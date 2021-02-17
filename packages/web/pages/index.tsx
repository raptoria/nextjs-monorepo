import React from 'react';
import { Layout, PageContainer } from '@test/components';
import { routes } from '../config/routes';
import { createNavButtons } from '../config/helpers';

const Index = () => {
    return (
        <Layout title="Test UI" extra={createNavButtons(routes)}>
            <PageContainer>Some content here</PageContainer>
        </Layout>
    )
}
export default Index;