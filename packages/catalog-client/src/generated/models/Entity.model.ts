/*
 * Copyright 2024 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * NOTE: This class is auto generated, do not edit the class manually.
 */
import { EntityMeta } from '../models/EntityMeta.model';
import { EntityRelation } from '../models/EntityRelation.model';

/**
 * The parts of the format that's common to all versions/kinds of entity.
 */
export interface Entity {
  /**
   * The relations that this entity has with other entities.
   */
  relations?: Array<EntityRelation>;
  /**
   * A type representing all allowed JSON object values.
   */
  spec?: { [key: string]: any };
  metadata: EntityMeta;
  /**
   * The high level entity type being described.
   */
  kind: string;
  /**
   * The version of specification format for this particular entity that this is written against.
   */
  apiVersion: string;
}
