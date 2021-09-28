import * as pulumi from '@pulumi/pulumi'
import * as path from 'path'

import {DynamicResource} from './dynamic-resource'

export = async () => {
  const dynamicResource = new DynamicResource('dynamic-resource', {})
}
