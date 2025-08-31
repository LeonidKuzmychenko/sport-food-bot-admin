import "./AdminTable.css";
import type { Column } from "../data/Column.tsx";

type AdminTableProps<T> = {
    data: T[];
    columns: Column<T>[];
    onView?: (row: T) => void;
    onEdit?: (row: T) => void;
    onDelete?: (row: T) => void;
};

export default function AdminTable<
    T extends { id: string | number }
>({
      data,
      columns,
      onView,
      onEdit,
      onDelete,
  }: AdminTableProps<T>) {
    return (
        <div className="admin-table-container">
            <table className="admin-table">
                <thead>
                <tr>
                    {columns.map((col) => (
                        <th key={String(col.key)}>{col.label}</th>
                    ))}
                    {(onEdit || onDelete || onView) && <th>Actions</th>}
                </tr>
                </thead>
                <tbody>
                {data.length === 0 ? (
                    <tr>
                        <td
                            colSpan={columns.length + 1}
                            style={{ textAlign: "center" }}
                        >
                            No data
                        </td>
                    </tr>
                ) : (
                    data.map((row) => (
                        <tr key={row.id}>
                            {columns.map((col) => (
                                <td key={String(col.key)}>
                                    {col.render
                                        ? col.render(row[col.key], row)
                                        : String(row[col.key])}
                                </td>
                            ))}
                            {(onEdit || onDelete || onView) && (
                                <td className="actions">
                                    {onView && (
                                        <button
                                            className="btn btn-view"
                                            onClick={() => onView(row)}
                                        >
                                            View
                                        </button>
                                    )}
                                    {onEdit && (
                                        <button
                                            className="btn btn-edit"
                                            onClick={() => onEdit(row)}
                                        >
                                            Edit
                                        </button>
                                    )}
                                    {onDelete && (
                                        <button
                                            className="btn btn-delete"
                                            onClick={() => onDelete(row)}
                                        >
                                            Delete
                                        </button>
                                    )}
                                </td>
                            )}
                        </tr>
                    ))
                )}
                </tbody>
            </table>
        </div>
    );
}
