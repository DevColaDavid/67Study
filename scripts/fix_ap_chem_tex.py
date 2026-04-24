#!/usr/bin/env python3
"""Brace TeX in AP Chemistry unit HTML for MathJax (reduce double-subscript / ambiguous scripts)."""
from pathlib import Path

UNITS = Path(__file__).resolve().parent.parent / "ap-chemistry" / "units"

# Longer / more specific first
REPLACEMENTS = [
    (r"[\mathrm{HA}]_\mathrm{eq}", r"[\mathrm{HA}]_{\mathrm{eq}}"),
    (r"E^\circ_\mathrm{cell}", r"E^{\circ}_{\mathrm{cell}}"),
    (r"[\mathrm{H_3O^+}]", r"[{\mathrm{H}_3\mathrm{O}}^{+}]"),
    (r"\mathrm{H_3O^+ + OH^- \to 2H_2O}", r"{\mathrm{H}_3\mathrm{O}}^{+} + \mathrm{OH}^{-} \to 2\,\mathrm{H_2O}"),
    (r"\mathrm{SO_4^{2-}}", r"{\mathrm{SO}}_4^{2-}"),
    (r"\mathrm{CO_3^{2-}}", r"{\mathrm{CO}}_3^{2-}"),
    (r"\mathrm{H_3O^+}", r"{\mathrm{H}_3\mathrm{O}}^{+}"),
    (r"\mathrm{NO_3^-}", r"{\mathrm{NO}}_3^{-}"),
    (r"\mathrm{NO_2^-}", r"{\mathrm{NO}}_2^{-}"),
    (r"\mathrm{NH_4^+}", r"{\mathrm{NH}}_4^{+}"),
    (r"\mathrm{CH_3COO^-}", r"{\mathrm{CH_3COO}}^{-}"),
    (r"\mathrm{Fe_2(SO_4)_3}", r"{\mathrm{Fe}}_{2}\bigl(\mathrm{SO}_{4}\bigr)_{3}"),
    (r"\mathrm{Ca(OH)_2}", r"{\mathrm{Ca}}\bigl(\mathrm{OH}\bigr)_{2}"),
    (r"K\(_\mathrm{sp}\)", r"K\(_{\mathrm{sp}}\)"),
    (r"SO_4^{2-}", r"{\mathrm{SO}}_4^{2-}"),
    (r"CO_3^{2-}", r"{\mathrm{CO}}_3^{2-}"),
    (r"E_\mathrm{cell}", r"E_{\mathrm{cell}}"),
    (r"m_\mathrm{total}", r"m_{\mathrm{total}}"),
    (r"m_\mathrm{A}", r"m_{\mathrm{A}}"),
    (r"m_\mathrm{component}", r"m_{\mathrm{component}}"),
    (r"M_\mathrm{molar}", r"M_{\mathrm{molar}}"),
    (r"M_\mathrm{empirical}", r"M_{\mathrm{empirical}}"),
    (r"M_\mathrm{product}", r"M_{\mathrm{product}}"),
    (r"n_\mathrm{limiting}", r"n_{\mathrm{limiting}}"),
    (r"M_\mathrm{acid}", r"M_{\mathrm{acid}}"),
    (r"M_\mathrm{HCl}", r"M_{\mathrm{HCl}}"),
    (r"Z_\mathrm{eff}", r"Z_{\mathrm{eff}}"),
    (r"K_\mathrm{sp}", r"K_{\mathrm{sp}}"),
    (r"P_\mathrm{total}", r"P_{\mathrm{total}}"),
    (r"P_\mathrm{real}", r"P_{\mathrm{real}}"),
    (r"P_\mathrm{ideal}", r"P_{\mathrm{ideal}}"),
    (r"T_\mathrm{K}", r"T_{\mathrm{K}}"),
    (r"P_\mathrm{H_2}", r"P_{\mathrm{H_2}}"),
    (r"P_\mathrm{I_2}", r"P_{\mathrm{I_2}}"),
    (r"P_\mathrm{HI}", r"P_{\mathrm{HI}}"),
    (r"\Delta H_\mathrm{rxn}", r"\Delta H_{\mathrm{rxn}}"),
]

# Second pass: group polyatomic formulas so subscripts/superscripts are not stacked on the wrong atom
# (avoids MathJax "double subscript" / ambiguous bonding to N vs O in NO3, etc.)
NORMALIZE = [
    (r"{\mathrm{NO}}_3^{-}", r"({\mathrm{NO}_3})^{-}"),
    (r"{\mathrm{NO}}_2^{-}", r"({\mathrm{NO}_2})^{-}"),
    (r"{\mathrm{SO}}_4^{2-}", r"({\mathrm{SO}_4})^{2-}"),
    (r"{\mathrm{CO}}_3^{2-}", r"({\mathrm{CO}_3})^{2-}"),
    (r"{\mathrm{NH}}_4^{+}", r"({\mathrm{NH}_4})^{+}"),
]


def main() -> None:
    for path in sorted(UNITS.glob("unit*.html")):
        t = path.read_text(encoding="utf-8")
        orig = t
        for old, new in REPLACEMENTS:
            t = t.replace(old, new)
        for old, new in NORMALIZE:
            t = t.replace(old, new)
        if t != orig:
            path.write_text(t, encoding="utf-8")
            print(f"updated: {path.name}")


if __name__ == "__main__":
    main()
