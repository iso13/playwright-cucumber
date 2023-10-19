// Defining global types provides a global definition of frequently used types, they would be accessible through our global framework
export type PageId = string;
export type ElementKey = string;
export type ElementLocator = string;
export type PageElementMappings = Record<
  PageId,
  Record<ElementKey, ElementLocator>
>;
export type MockPayloadMappings = Record<string, string>;
export type PagesConfig = Record<PageId, Record<string, string>>;
export type HostsConfig = Record<string, string>;
export type ErrorsConfig = ErrorConfig[];
export type MocksConfig = Record<string, string>;

export type GlobalVariables = { [key: string]: string };
export type EmailsConfig = Record<string, string>;

export type ErrorConfig = {
  originalErrMsgRegexString: string;
  parsedErrMsg: string;
};

export type GlobalConfig = {
  pageElementMappings: PageElementMappings;
  mockPayloadMappings: MockPayloadMappings;
  hostsConfig: HostsConfig;
  pagesConfig: PagesConfig;
  errorsConfig: ErrorsConfig;
  emailsConfig: EmailsConfig;
  mocksConfig: MocksConfig;
};
