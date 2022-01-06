import React from 'react';
import { Breadcrumb as BreadcrumbAksara, BreadcrumbItem } from '@aksara-ui/react';
import { IconChevronRight } from '@aksara-ui/icons';
import { BreadcrumbContent } from 'interfaces/next';

interface BreadCrumbProps {
  items: BreadcrumbContent[]
}

const Breadcrumb: React.FC<BreadCrumbProps> = ({ items }) => {
  const arrTmp: React.ReactNode[] = [];
  items.map(item => {
    arrTmp.push(
      <BreadcrumbItem href={item.url}>{item.urlDisplay}</BreadcrumbItem>
    )
  })

  return (
    <BreadcrumbAksara
      items={arrTmp}
      separator={IconChevronRight}
    />
  )
}

export default Breadcrumb;
