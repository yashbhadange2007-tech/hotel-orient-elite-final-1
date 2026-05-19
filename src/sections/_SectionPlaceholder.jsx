import SectionShell from "../components/layout/SectionShell";

export default function SectionPlaceholder({ id, name, purpose }) {
  return (
    <SectionShell
      id={id}
      eyebrow="Hotel experience"
      title={name}
      description={purpose}
      className="min-h-[60vh]"
    />
  );
}
