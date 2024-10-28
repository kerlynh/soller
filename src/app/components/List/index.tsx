interface ListProps {
  className: string;
  link: string;
  label: string;
}

export function List({ className, link, label }: ListProps) {
  return (
    <li className={className}>
      <a href={link}>{label}</a>
    </li>
  );
}
