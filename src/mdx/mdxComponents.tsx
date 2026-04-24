import type { ComponentPropsWithoutRef } from "react";

function DataTable(props: ComponentPropsWithoutRef<"table">) {
  return <table className={`data-table ${props.className ?? ""}`.trim()} {...props} />;
}

function UlNotes(props: ComponentPropsWithoutRef<"ul">) {
  return <ul className={`notes-list ${props.className ?? ""}`.trim()} {...props} />;
}

export const mdxComponents = {
  table: DataTable,
  ul: UlNotes,
};
