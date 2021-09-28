import fs from 'fs/promises'

import * as pulumi from '@pulumi/pulumi'

export interface Options {}

interface Inputs {}

class DynamicResourceProvider implements pulumi.dynamic.ResourceProvider {
  private name: string

  constructor(name: string) {
    this.name = name
  }
  async create(inputs: Inputs): Promise<pulumi.dynamic.CreateResult> {
    const id = Math.round(Math.random() * 1e9).toString()

    // ERROR here
    const files = await fs.readdir('.')

    return { id }
  }
}

export class DynamicResource extends pulumi.dynamic.Resource {
  constructor(name: string, args: Options, opts?: pulumi.CustomResourceOptions) {
    super(new DynamicResourceProvider(name), `pulumi-bug:dynamic-resource:${name}`, args, opts)
  }
}

