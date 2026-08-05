import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { SUBJECTS } from '../data/subjects';
import { SEARCH_INDEX, type SearchDoc } from '../lib/searchIndex';

type MatchKind = 'title' | 'heading' | 'body';

interface Result {
  doc: SearchDoc;
  kind: MatchKind;
  headingId?: string;
  headingText?: string;
  snippet?: string;
}

const SNIPPET_RADIUS = 60;

function buildSnippet(body: string, index: number, queryLen: number): string {
  const start = Math.max(0, index - SNIPPET_RADIUS);
  const end = Math.min(body.length, index + queryLen + SNIPPET_RADIUS);
  const prefix = start > 0 ? '…' : '';
  const suffix = end < body.length ? '…' : '';
  return `${prefix}${body.slice(start, end)}${suffix}`;
}

function matchDoc(doc: SearchDoc, q: string): Result | null {
  if (doc.title.toLowerCase().includes(q)) {
    return { doc, kind: 'title' };
  }
  const heading = doc.headings.find((h) => h.text.toLowerCase().includes(q));
  if (heading) {
    return { doc, kind: 'heading', headingId: heading.id, headingText: heading.text };
  }
  const bodyLower = doc.body.toLowerCase();
  const idx = bodyLower.indexOf(q);
  if (idx !== -1) {
    return { doc, kind: 'body', snippet: buildSnippet(doc.body, idx, q.length) };
  }
  return null;
}

const KIND_RANK: Record<MatchKind, number> = { title: 0, heading: 1, body: 2 };

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(() => searchParams.get('q') ?? '');
  const [subjectFilter, setSubjectFilter] = useState(() => searchParams.get('subject') ?? 'All');
  const [unitFilter, setUnitFilter] = useState<number | 'All'>(() => {
    const u = searchParams.get('unit');
    return u ? parseInt(u, 10) : 'All';
  });
  const navigate = useNavigate();

  // Sync state -> URL so the current search stays deep-linkable (no read-back, avoids a loop)
  useEffect(() => {
    const params = new URLSearchParams();
    if (query) params.set('q', query);
    if (subjectFilter !== 'All') params.set('subject', subjectFilter);
    if (unitFilter !== 'All') params.set('unit', String(unitFilter));
    setSearchParams(params, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, subjectFilter, unitFilter]);

  const subjectChips = useMemo(() => {
    const present = new Set(SEARCH_INDEX.map((d) => d.subjectSlug));
    return SUBJECTS.filter((s) => present.has(s.slug));
  }, []);

  const unitChips = useMemo(() => {
    if (subjectFilter === 'All') return [];
    return Array.from(new Set(
      SEARCH_INDEX.filter((d) => d.subjectSlug === subjectFilter).map((d) => d.unit),
    )).sort((a, b) => a - b);
  }, [subjectFilter]);

  const pool = useMemo(() => SEARCH_INDEX.filter((d) =>
    (subjectFilter === 'All' || d.subjectSlug === subjectFilter) &&
    (unitFilter === 'All' || d.unit === unitFilter),
  ), [subjectFilter, unitFilter]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    let matches: Result[];
    if (q) {
      matches = [];
      for (const doc of pool) {
        const m = matchDoc(doc, q);
        if (m) matches.push(m);
      }
    } else if (subjectFilter !== 'All' || unitFilter !== 'All') {
      // Browse mode: chips alone, no query — list everything in the filtered pool.
      matches = pool.map((doc) => ({ doc, kind: 'title' as const }));
    } else {
      matches = [];
    }
    matches.sort((a, b) =>
      KIND_RANK[a.kind] - KIND_RANK[b.kind] ||
      a.doc.subjectName.localeCompare(b.doc.subjectName) ||
      a.doc.unit - b.doc.unit,
    );
    return matches;
  }, [query, pool, subjectFilter, unitFilter]);

  const groups = useMemo(() => {
    const out: { subjectName: string; color: string; items: Result[] }[] = [];
    for (const r of results) {
      const last = out[out.length - 1];
      if (last && last.subjectName === r.doc.subjectName) {
        last.items.push(r);
      } else {
        out.push({ subjectName: r.doc.subjectName, color: r.doc.color, items: [r] });
      }
    }
    return out;
  }, [results]);

  const goTo = (r: Result) => {
    const path = `/${r.doc.subjectSlug}/units/${r.doc.unit}`;
    navigate(r.kind === 'heading' && r.headingId ? `${path}#${r.headingId}` : path);
  };

  const selectSubject = (slug: string) => {
    setSubjectFilter(slug);
    setUnitFilter('All');
  };

  return (
    <div className="search-page">
      <div className="search-topnav">
        <Link to="/" className="hub-back">← Home</Link>
      </div>

      <div className="search-header">
        <h1 className="hub-title">Search</h1>
        <p className="search-subtitle">Search across every subject's unit content.</p>
      </div>

      <input
        className="search-input"
        type="text"
        autoFocus
        placeholder="Search for a topic, term, or section…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="search-filters">
        <div className="search-chip-row">
          <button
            type="button"
            className={`search-chip${subjectFilter === 'All' ? ' search-chip--active' : ''}`}
            onClick={() => selectSubject('All')}
          >
            All classes
          </button>
          {subjectChips.map((s) => (
            <button
              key={s.slug}
              type="button"
              data-color={s.color}
              className={`search-chip${subjectFilter === s.slug ? ' search-chip--active' : ''}`}
              onClick={() => selectSubject(s.slug)}
            >
              {s.name}
            </button>
          ))}
        </div>

        {subjectFilter !== 'All' && unitChips.length > 0 && (
          <div className="search-chip-row">
            <button
              type="button"
              className={`search-chip${unitFilter === 'All' ? ' search-chip--active' : ''}`}
              onClick={() => setUnitFilter('All')}
            >
              All units
            </button>
            {unitChips.map((u) => (
              <button
                key={u}
                type="button"
                className={`search-chip${unitFilter === u ? ' search-chip--active' : ''}`}
                onClick={() => setUnitFilter(u)}
              >
                Unit {u}
              </button>
            ))}
          </div>
        )}
      </div>

      {!query.trim() && subjectFilter === 'All' && unitFilter === 'All' && (
        <p className="search-empty">Type to search, or pick a class to browse its units.</p>
      )}
      {(query.trim() || subjectFilter !== 'All' || unitFilter !== 'All') && results.length === 0 && (
        <p className="search-empty">No matches{query.trim() ? ` for "${query.trim()}"` : ''}.</p>
      )}

      <div className="search-results">
        {groups.map((group) => (
          <div key={group.subjectName} className="search-result-group" data-color={group.color}>
            <h2 className="search-result-group-title">{group.subjectName}</h2>
            {group.items.map((r) => (
              <button
                key={`${r.doc.subjectSlug}-${r.doc.unit}-${r.kind}-${r.headingId ?? ''}`}
                type="button"
                className="search-result-row"
                onClick={() => goTo(r)}
              >
                <span className="search-result-title">
                  Unit {r.doc.unit}: {r.doc.title}
                  {r.kind === 'heading' && <span className="search-result-heading"> — {r.headingText}</span>}
                </span>
                {r.kind === 'body' && r.snippet && (
                  <span className="search-result-snippet">{r.snippet}</span>
                )}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
