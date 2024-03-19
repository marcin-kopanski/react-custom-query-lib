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
