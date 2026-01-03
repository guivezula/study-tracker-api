interface IFilter {
    limit: number;
    page: number;
};

export type Filter<T, U = IFilter, K extends keyof U = keyof U> = Partial<T & Pick<U, K>>;