import React, { useEffect, useState } from 'react';
import { Header, Layout, PageContainer } from '@test/components';
import { FlowChart } from '@test/visualizations';
import { routes } from '../config/routes';
import { createNavButtons } from '../config/helpers';
import axios from 'axios';

interface DagProps {
}

const DagViewer: React.FC<DagProps> = () => {
    const [data, setData] = useState([]);

    return (
        <Layout title="Test UI" subTitle="Dag Viewer" extra={createNavButtons(routes)}>
            <PageContainer>
                <Header size="small">A Flow Chart</Header>
                <FlowChart />

                <Header size="small">Some JSON Data</Header>
                {data.slice(0, 10).map((row, i) => <div key={`row.athlete ${i}`}>{row.athlete}</div>)}
            </PageContainer>
        </Layout>
    )
}
export default DagViewer;