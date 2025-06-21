// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { McpDemoProject } from '../client';

export abstract class APIResource {
  protected _client: McpDemoProject;

  constructor(client: McpDemoProject) {
    this._client = client;
  }
}
