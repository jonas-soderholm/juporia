export default function TermsSection({ title, content }) {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-slate-600 leading-relaxed text-sm">{content}</p>
    </div>
  );
}
