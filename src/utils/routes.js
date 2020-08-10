import Login from '../pages/Login';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideNavigation from "../components/SideNavigation";

import React from "react";
import Articles from "../pages/Articles";
import Places from "../pages/Places";
import CreateArticle from "../pages/CreateArticle";
import CreatePlace from "../pages/CreatePlace";
import PricePlans from "../pages/PricePlans";
import Dashboard from "../pages/Dashboard";
import Article from "../components/Article";
import Place from "../components/Place";

const Layout = props => (
    <>
        <Header/>
        <div className="container mt-5">
            <SideNavigation/>
            {props.children}
        </div>
        <Footer/>
    </>
);


const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Login/>
    },
    {
        path: '/demo',
        exact: true,
        main: () => <Layout>
            <Dashboard/>
        </Layout>
    },
    {
        path: '/articles',
        exact: true,
        main: () => <Layout>
            <Articles/>
        </Layout>
    },
    {
        path: '/articles/new',
        exact: true,
        main: () => <Layout>
            <CreateArticle/>
        </Layout>
    },
    {
        path: '/places',
        exact: false,
        main: () => <Layout>
            <Places/>
        </Layout>
    },
    {
        path: '/places/new',
        exact: false,
        main: () => <Layout>
            <CreatePlace/>
        </Layout>
    },
    {
        path: '/plans',
        exact: false,
        main: () => <Layout>
            <PricePlans/>
        </Layout>
    },
    {
        path: '/dashboard',
        exact: true,
        main: () => <Layout>
            <Dashboard/>
        </Layout>
    },
    {
        path: '/articles/:id',
        exact: false,
        main: () => <Layout>
            <Article/>
        </Layout>
    },
    {
        path: '/place/:id',
        exact: false,
        main: () => {
            return <Layout>
                <Place/>
            </Layout>
        }
    },
];

export default routes;