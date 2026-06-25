import {
  ApiBlueprint,
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
  constructor(private readonly fetchApi: typeof fetchApiRef.T) {}

  async load(): Promise<TechRadarLoaderResponse> {
    const response = await this.fetchApi.fetch('/tech-radar.json');

    if (!response.ok) {
      throw new Error(`Failed to load tech radar data: ${response.status}`);
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
        deps: { fetchApi: fetchApiRef },
        factory: ({ fetchApi }) => new StaticTechRadarApi(fetchApi),
      }),
    ),
});

export const techRadarDataModule = createFrontendModule({
  pluginId: 'app',
  extensions: [techRadarApi],
});
