import React from "react";

export type Column<T> = {
    key: keyof T;          // ключ объекта из данных
    label: string;         // заголовок колонки
    render?: (value: any, row: T) => React.ReactNode; // кастомный рендер
};