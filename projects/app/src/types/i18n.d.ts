import 'i18next';
import common from '../../i18n/en/common.json';
import dataset from '../../i18n/en/dataset.json';
import app from '../../i18n/en/app.json';
import file from '../../i18n/en/file.json';
import publish from '../../i18n/en/publish.json';

export interface I18nNamespaces {
  common: typeof common;
  dataset: typeof dataset;
  app: typeof app;
  file: typeof file;
  publish: typeof publish;
}

export type I18nNsType = (keyof I18nNamespaces)[];

declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
    defaultNs: 'common';
    resources: I18nNamespaces;
  }
}
