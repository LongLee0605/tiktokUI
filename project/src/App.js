import { publicRoutes } from '@/routes';
import { Fragment } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { DefaultLayout } from './components/Layout';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    {publicRoutes.map((item, index) => {
                        const Page = item.component;
                        let Layout = DefaultLayout;
                        if (item.layout) {
                            Layout = item.layout;
                        } else if (item.layout === null) {
                            Layout = Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={item.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                                Layout
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
