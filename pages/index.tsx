import type {NextPage} from 'next';

import {PageLayout, SeoLayout} from '~/components';
import {DashboardMetaSettings} from '~/constants';
import {DashboardContainer} from '~/containers';

const DashboardPage: NextPage = () => (
  <SeoLayout
    title={DashboardMetaSettings.title}
    metaDescription={DashboardMetaSettings.description}>
    <PageLayout>
      <DashboardContainer />
    </PageLayout>
  </SeoLayout>
);

export default DashboardPage;
