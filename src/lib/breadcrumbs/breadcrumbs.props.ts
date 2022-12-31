interface DataInterface {
  label: string;
  path?: string;
  params?: object
}

export interface BreadcrumbProps {
  breadcrumbsData: DataInterface[]
}
