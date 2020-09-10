/**
 * Created by kor on 06/05/15.
 */
import YAMLException from './exception';


export { load, loadAll, safeLoad, safeLoadAll, LoadOptions } from './loader';
export { dump, safeDump } from './dumper';

export { YAMLException };

export * from './yamlAST';

export type Error = YAMLException;

function deprecated(name) {
  return function() {
    throw new Error('Function ' + name + ' is deprecated and cannot be used.');
  };
}

export * from './scalarInference';
