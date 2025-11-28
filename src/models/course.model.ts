export interface ICourse {
    id: string;
    title: string;
    description: string | null;
    createdAt: Date;
    updatedAt: Date;
}

export interface ICourseFilter {
  title: string;
  page: number;
  limit: number;
}

export interface ICourseResponse {
  data: ICourse[];
  total: number;
}