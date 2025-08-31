import type {Column} from "../../data/Column.tsx";
import AdminTable from "../AdminTable.tsx";

type User = {
    id: number;
    name: string;
    email: string;
    role: string;
};

const users: User[] = [
    {id: 1, name: "Alice", email: "alice@example.com", role: "Admin"},
    {id: 2, name: "Bob", email: "bob@example.com", role: "User"},
    {id: 3, name: "Charlie", email: "charlie@example.com", role: "User"},
    {id: 4, name: "Diana", email: "diana@example.com", role: "Manager"},
    {id: 5, name: "Ethan", email: "ethan@example.com", role: "User"},
    {id: 6, name: "Fiona", email: "fiona@example.com", role: "Editor"},
    {id: 7, name: "George", email: "george@example.com", role: "Admin"},
    {id: 8, name: "Hannah", email: "hannah@example.com", role: "User"},
    {id: 9, name: "Ian", email: "ian@example.com", role: "User"},
    {id: 10, name: "Julia", email: "julia@example.com", role: "Manager"},
    {id: 11, name: "Kevin", email: "kevin@example.com", role: "Editor"},
    {id: 12, name: "Laura", email: "laura@example.com", role: "User"},
    {id: 13, name: "Michael", email: "michael@example.com", role: "Admin"},
    {id: 14, name: "Nina", email: "nina@example.com", role: "User"},
    {id: 15, name: "Oscar", email: "oscar@example.com", role: "Manager"},
    {id: 16, name: "Paula", email: "paula@example.com", role: "User"},
    {id: 17, name: "Quentin", email: "quentin@example.com", role: "Editor"},
    {id: 18, name: "Rachel", email: "rachel@example.com", role: "User"},
    {id: 19, name: "Sam", email: "sam@example.com", role: "Admin"},
    {id: 20, name: "Tina", email: "tina@example.com", role: "User"},
    {id: 21, name: "Umar", email: "umar@example.com", role: "User"},
    {id: 22, name: "Vera", email: "vera@example.com", role: "Manager"},
    {id: 23, name: "Will", email: "will@example.com", role: "Editor"},
    {id: 24, name: "Xenia", email: "xenia@example.com", role: "User"},
    {id: 25, name: "Yann", email: "yann@example.com", role: "User"},
    {id: 26, name: "Zara", email: "zara@example.com", role: "Admin"},
    {id: 27, name: "Adam", email: "adam@example.com", role: "User"},
    {id: 28, name: "Bella", email: "bella@example.com", role: "Editor"},
    {id: 29, name: "Carl", email: "carl@example.com", role: "User"},
    {id: 30, name: "Daisy", email: "daisy@example.com", role: "Manager"},
    {id: 31, name: "Elliot", email: "elliot@example.com", role: "User"},
    {id: 32, name: "Faith", email: "faith@example.com", role: "User"}
]

const columns: Column<User>[] = [
    {key: "name", label: "Name"},
    {key: "email", label: "Email"},
    {key: "role", label: "Role"},
];

export default function Page3() {
    return (
        <div>
            <h2>Users</h2>
            <AdminTable
                data={users}
                columns={columns}
                onEdit={(user) => alert("Edit " + user.name)}
                onDelete={(user) => alert("Delete " + user.name)}
            />
        </div>
    );
}
