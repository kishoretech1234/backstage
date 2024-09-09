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

import {
  ApiBlueprint,
  createApiFactory,
  createExtensionInput,
} from '@backstage/frontend-plugin-api';
import { formFieldsApiRef } from './ref';
import { ScaffolderFormFieldsApi } from './types';
import { FormFieldBlueprint, FormFieldExtensionData } from '../blueprints';

class DefaultScaffolderFormFieldsApi implements ScaffolderFormFieldsApi {
  constructor(private readonly formFields: FormFieldExtensionData[] = []) {}
  getFormFields() {
    return this.formFields;
  }
  addFormField(formField: FormFieldExtensionData) {
    this.formFields.push(formField);
  }
}

/**
 * @public
 */
export const FormFieldsApi = ApiBlueprint.makeWithOverrides({
  name: 'form-fields',
  inputs: {
    formFields: createExtensionInput([FormFieldBlueprint.dataRefs.formField]),
  },
  factory(originalFactory, { inputs }) {
    const formFields = inputs.formFields.map(e =>
      e.get(FormFieldBlueprint.dataRefs.formField),
    );

    return originalFactory({
      factory: createApiFactory({
        api: formFieldsApiRef,
        deps: {},
        factory: () => new DefaultScaffolderFormFieldsApi(formFields),
      }),
    });
  },
});
