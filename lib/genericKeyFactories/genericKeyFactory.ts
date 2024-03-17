export interface GenericKey {
  baseName: string;
  type: string;
  name: string;
}

export class GenericKeyFactory {
  baseName: string;

  constructor(baseName: string) {
    this.baseName = baseName;
  }

  element(name: string): GenericKey {
    return { baseName: this.baseName, type: "element", name } as const;
  }

  list(name: string): GenericKey {
    return { baseName: this.baseName, type: "list", name } as const;
  }
}

// export const genericKeyFactory = (domain: string) => ({
//   base: { domain } as const,
//   list: () => ({ ...genericKeyFactory(domain).base, type: "list" }) as const,
//   element: () => ({ ...genericKeyFactory(domain).base, type: "element" }) as const,
// });
