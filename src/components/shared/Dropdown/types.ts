export type TOption = {
  id: number;
  value: string;
};

export type TDropdownProps = {
  title: string;
  options: TOption[];
};

export type TExpandedProps = {
  $expanded: boolean;
};
