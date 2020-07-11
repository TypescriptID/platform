import {
  SchematicTestRunner,
  UnitTestTree,
} from '@angular-devkit/schematics/testing';
import * as path from 'path';
import { Schema as SchemaOptions } from './schema';
import { createWorkspace } from '../../../schematics-core/testing';

describe('Component store ng-add Schematic', () => {
  const schematicRunner = new SchematicTestRunner(
    '@ngrx/component-store',
    path.join(__dirname, '../collection.json')
  );
  const defaultOptions: SchemaOptions = {
    skipPackageJson: false,
  };

  let appTree: UnitTestTree;

  beforeEach(async () => {
    appTree = await createWorkspace(schematicRunner, appTree);
  });

  it('should update package.json', () => {
    const options = { ...defaultOptions };

    const tree = schematicRunner.runSchematic('ng-add', options, appTree);
    const packageJson = JSON.parse(tree.readContent('/package.json'));

    expect(packageJson.dependencies['@ngrx/component-store']).toBeDefined();
  });

  it('should skip package.json update', () => {
    const options = { ...defaultOptions, skipPackageJson: true };

    const tree = schematicRunner.runSchematic('ng-add', options, appTree);
    const packageJson = JSON.parse(tree.readContent('/package.json'));

    expect(packageJson.dependencies['@ngrx/component-store']).toBeUndefined();
  });
});
