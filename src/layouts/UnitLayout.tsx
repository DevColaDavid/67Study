import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import type { TocItem } from "../data/toc";

export type UnitSwitcherLink = { to: string; label: string };

type UnitLayoutProps = {
  sidebarHeader: string;
  backTo: string;
  backLabel: string;
  unitSwitcherSummary: string;
  switcherLinks: readonly UnitSwitcherLink[];
  toc: TocItem[];
  children: ReactNode;
};

export function UnitLayout({
  sidebarHeader,
  backTo,
  backLabel,
  unitSwitcherSummary,
  switcherLinks,
  toc,
  children,
}: UnitLayoutProps) {
  return (
    <>
      <nav id="sidebar">
        <div className="sidebar-header">{sidebarHeader}</div>
        <div className="sidebar-owner">
          <Link className="sidebar-back-link" to={backTo}>
            {backLabel}
          </Link>
        </div>
        <details className="unit-switcher">
          <summary>{unitSwitcherSummary}</summary>
          {switcherLinks.map((item) => (
            <div className="toc-section" key={item.to}>
              <Link to={item.to}>{item.label}</Link>
            </div>
          ))}
        </details>
        {toc.map((item) => (
          <div className="toc-section" key={item.id}>
            <a href={`#${item.id}`}>{item.label}</a>
          </div>
        ))}
      </nav>
      <main id="main" style={{ maxWidth: 1100, margin: "0 auto" }}>
        {children}
      </main>
    </>
  );
}
