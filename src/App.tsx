import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Layout from "./Layout.tsx";
import Page1 from "./components/pages/Page1.tsx";
import Page2 from "./components/pages/Page2.tsx";
import Page3 from "./components/pages/Page3.tsx";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                { index: true, element: <Page1 /> },
                { path: "page2", element: <Page2 /> },
                { path: "page3", element: <Page3 /> },
                { path: "*", element: <h2>404 Not Found</h2> },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
