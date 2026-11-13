interface PageHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function PageHeader({ label, title, subtitle }: PageHeaderProps) {
  const [num, ...rest] = label.split(" ");
  return (
    <div className="pageHeaderWrap">
      <div className="sectionLabel">
        <span>{num}</span> {rest.join(" ")}
      </div>
      <h1>{title}</h1>
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </div>
  );
}
