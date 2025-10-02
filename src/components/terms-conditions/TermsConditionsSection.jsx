import { policies } from "../../constant/data";

export default function TermsConditionsSection() {
  return (
    <main className="max-w-3xl mx-auto px-6 pb-12 space-y-8">
      {policies.map((policy, idx) => (
        <div key={idx} className="space-y-3">
          <h2 className="text-xl font-bold">{policy.title}</h2>

          {policy.description && (
            <p className="text-gray-700">{policy.description}</p>
          )}

          {policy.items && (
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              {policy.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </main>
  );
}
