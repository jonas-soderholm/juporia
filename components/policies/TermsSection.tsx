interface TermsSectionProps {
  title: string;
  content: string;
}

export default function TermsSection({ title, content }: TermsSectionProps) {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="leading-relaxed text-sm">{content}</p>
    </div>
  );
}
