import {
  ApiBlueprint,
  configApiRef,
  createApiFactory,
  createFrontendModule,
  fetchApiRef,
} from '@backstage/frontend-plugin-api';
import {
  type TechRadarApi,
  techRadarApiRef,
} from '@backstage-community/plugin-tech-radar';
import type { TechRadarLoaderResponse } from '@backstage-community/plugin-tech-radar-common';

class StaticTechRadarApi implements TechRadarApi {
  constructor(
    private readonly configApi: typeof configApiRef.T,
    private readonly fetchApi: typeof fetchApiRef.T,
  ) {}

  async load(): Promise<TechRadarLoaderResponse> {
    const url = this.configApi.getOptionalString('techRadar.url') ?? '/tech-radar.json';
    const response = await this.fetchApi.fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to load tech radar data from ${url}: ${response.status}`);
    }

    const data = (await response.json()) as TechRadarLoaderResponse;

    return {
      ...data,
      entries: data.entries.map(entry => ({
        ...entry,
        timeline: entry.timeline.map(snapshot => ({
          ...snapshot,
          date: new Date(snapshot.date),
        })),
      })),
    };
  }
}

const techRadarApi = ApiBlueprint.make({
  name: 'tech-radar-data',
  params: defineParams =>
    defineParams(
      createApiFactory({
        api: techRadarApiRef,
        deps: { configApi: configApiRef, fetchApi: fetchApiRef },
        factory: ({ configApi, fetchApi }) => new StaticTechRadarApi(configApi, fetchApi),
      }),
    ),
});

export const techRadarDataModule = createFrontendModule({
  pluginId: 'app',
  extensions: [techRadarApi],
});
