interface ArchitectureFlowProps {
  steps: string[];
}

export default function ArchitectureFlow({ steps }: ArchitectureFlowProps) {
  return (
    <ol className="my-8 flex flex-wrap items-center gap-x-3 gap-y-3 text-sm" aria-label="Simplified architecture">
      {steps.map((step, index) => (
        <li key={step} className="flex items-center gap-3">
          <span className="font-medium">{step}</span>
          {index < steps.length - 1 && (
            <span aria-hidden="true" className="text-accent">
              →
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}
