import React from "react";

// Minimal resource type for demonstration
export interface Resource {
  id: string;
  name: string;
  description?: string;
  url?: string;
}

export interface ResourcesProps {
  resources: Resource[];
  title?: string;
  showDescriptions?: boolean;
}

export const Resources: React.FC<ResourcesProps> = ({
  resources,
  title = "Resources",
  showDescriptions = true,
}) => (
  <section>
    <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>{title}</h2>
    <ul style={{ listStyle: "none", padding: 0 }}>
      {resources.map((r) => (
        <li key={r.id} style={{ marginBottom: "1.5rem" }}>
          <a href={r.url} target="_blank" rel="noopener noreferrer" style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
            {r.name}
          </a>
          {showDescriptions && r.description && (
            <div style={{ color: "#666", marginTop: ".25rem" }}>{r.description}</div>
          )}
        </li>
      ))}
    </ul>
  </section>
);

export default Resources;
