import { createElement, Fragment, useMemo, type ReactNode } from "react";

const SAFE_TAGS = new Set([
  "a",
  "abbr",
  "b",
  "blockquote",
  "br",
  "code",
  "div",
  "em",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "hr",
  "i",
  "img",
  "li",
  "math",
  "mi",
  "mn",
  "mo",
  "mrow",
  "msup",
  "msub",
  "msqrt",
  "mfrac",
  "mtext",
  "ol",
  "p",
  "pre",
  "section",
  "small",
  "svg",
  "span",
  "strong",
  "sub",
  "sup",
  "table",
  "tbody",
  "td",
  "th",
  "thead",
  "text",
  "tr",
  "u",
  "ul",
  "line",
  "path",
  "circle",
  "rect",
  "polygon",
  "polyline",
  "g",
  "defs",
  "marker",
]);

const SAFE_ATTRS = new Set([
  "alt",
  "aria-label",
  "aria-hidden",
  "cx",
  "cy",
  "class",
  "colspan",
  "d",
  "fill",
  "font-family",
  "font-size",
  "height",
  "id",
  "href",
  "marker-end",
  "marker-mid",
  "marker-start",
  "markerheight",
  "markerunits",
  "markerwidth",
  "orient",
  "points",
  "preserveaspectratio",
  "r",
  "refx",
  "refy",
  "rel",
  "rowspan",
  "scope",
  "src",
  "stroke",
  "stroke-width",
  "style",
  "target",
  "text-anchor",
  "title",
  "viewbox",
  "width",
  "x",
  "x1",
  "x2",
  "xmlns",
  "y",
  "y1",
  "y2",
]);

function isSafeUrl(value: string) {
  const trimmedValue = value.trim().toLowerCase();
  if (!trimmedValue) {
    return false;
  }
  return (
    trimmedValue.startsWith("http://") ||
    trimmedValue.startsWith("https://") ||
    trimmedValue.startsWith("/") ||
    trimmedValue.startsWith("#")
  );
}

function styleStringToObject(styleValue: string) {
  return styleValue
    .split(";")
    .map((part) => part.trim())
    .filter(Boolean)
    .reduce<Record<string, string>>((styleObject, part) => {
      const [rawKey, ...rawValue] = part.split(":");
      if (!rawKey || rawValue.length === 0) {
        return styleObject;
      }
      const cssKey = rawKey.trim();
      const cssValue = rawValue.join(":").trim();
      if (!cssKey || !cssValue) {
        return styleObject;
      }
      const camelKey = cssKey.replace(/-([a-z])/g, (_, letter: string) => letter.toUpperCase());
      styleObject[camelKey] = cssValue;
      return styleObject;
    }, {});
}

function sanitizeAttr(name: string, value: string) {
  const normalizedName = name.toLowerCase();
  if (!SAFE_ATTRS.has(normalizedName) || normalizedName.startsWith("on")) {
    return undefined;
  }
  if ((normalizedName === "href" || normalizedName === "src") && !isSafeUrl(value)) {
    return undefined;
  }
  return value;
}

function toReactNode(node: ChildNode, key: string): ReactNode {
  if (node.nodeType === Node.TEXT_NODE) {
    return node.textContent ?? "";
  }
  if (node.nodeType !== Node.ELEMENT_NODE) {
    return null;
  }
  const element = node as HTMLElement;
  const tagName = element.tagName.toLowerCase();
  if (!SAFE_TAGS.has(tagName)) {
    return createElement(
      Fragment,
      { key },
      Array.from(element.childNodes).map((childNode, index) =>
        toReactNode(childNode, `${key}-${index}`),
      ),
    );
  }

  const props: Record<string, unknown> = { key };
  for (const attr of element.attributes) {
    const safeValue = sanitizeAttr(attr.name, attr.value);
    if (safeValue === undefined) {
      continue;
    }
    if (attr.name.toLowerCase() === "class") {
      props.className = safeValue;
    } else if (attr.name.toLowerCase() === "style") {
      props.style = styleStringToObject(safeValue);
    } else if (attr.name === "viewBox") {
      props.viewBox = safeValue;
    } else {
      props[attr.name] = safeValue;
    }
  }

  if (tagName === "a" && props.target === "_blank") {
    const relValue = typeof props.rel === "string" ? props.rel : "";
    props.rel = relValue.includes("noreferrer") ? relValue : `${relValue} noreferrer`.trim();
  }

  const children = Array.from(element.childNodes).map((childNode, index) =>
    toReactNode(childNode, `${key}-${index}`),
  );
  return createElement(tagName, props, ...children);
}

export function HtmlSanitizedContent({ htmlText }: { htmlText: string }) {
  const parsedNodes = useMemo(() => {
    if (typeof window === "undefined") {
      return [];
    }
    const doc = new DOMParser().parseFromString(htmlText, "text/html");
    return Array.from(doc.body.childNodes).map((node, index) => toReactNode(node, `html-${index}`));
  }, [htmlText]);

  return <>{parsedNodes}</>;
}
