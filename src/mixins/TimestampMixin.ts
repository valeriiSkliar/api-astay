import {Constructor} from '@loopback/core';
import { DefaultCrudRepository, Entity } from '@loopback/repository';

export function TimestampMixin<T extends Entity, ID, Relations extends object>(
  BaseRepositoryClass: Constructor<DefaultCrudRepository<T, ID, Relations>>,
): Constructor<DefaultCrudRepository<T, ID, Relations>> {
  return class extends BaseRepositoryClass {
    async create(entity: T, options?: any): Promise<T> {
      // entity.createdAt = new Date(Date.now());

      return super.create(entity, options);
    }
  };
}
