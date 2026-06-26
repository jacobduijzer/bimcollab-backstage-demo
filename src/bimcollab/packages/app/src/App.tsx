import { createApp } from '@backstage/frontend-defaults';
import techRadarPlugin from '@backstage-community/plugin-tech-radar/alpha';
import catalogPlugin from '@backstage/plugin-catalog/alpha';
import { authModule } from './modules/auth';
import { navModule } from './modules/nav';
import { techRadarDataModule } from './modules/techRadar';

export default createApp({
  features: [catalogPlugin, techRadarPlugin, authModule, techRadarDataModule, navModule],
});
