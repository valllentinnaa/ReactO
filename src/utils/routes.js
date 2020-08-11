import React from "react";

import Login from '../pages/Login';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideNavigation from "../components/SideNavigation";
import Register from "../pages/Register";
import Articles from "../pages/Articles";
import Places from "../pages/Places";
import CreateArticle from "../pages/CreateArticle";
import EditArticle from "../pages/EditArticle";
import CreatePlace from "../pages/CreatePlace";
import PricePlans from "../pages/PricePlans";
import Dashboard from "../pages/Dashboard";
import Contacts from "../pages/Contacts";
import Place from "../components/Place";

const Layout = props => (
    <>
        <Header/>
        <div className="body-container">
            <SideNavigation/>
            {props.children}
        </div>
        <Footer/>
    </>
);


const routes = [
    {
        path: '/',
        main: () => <Login/>
    },
    {
        path: '/register',
        main: () => <Register/>
    },
    {
        path: '/demo',
        main: () => <Layout>
            <Dashboard/>
        </Layout>
    },
    {
        path: '/contacts',
        main: () => <Layout>
            <Contacts/>
        </Layout>
    },
    {
        path: '/articles',
        main: () => <Layout>
            <Articles/>
        </Layout>
    },
    {
        path: '/articles/new',
        main: () => <Layout>
            <CreateArticle/>
        </Layout>
    },
    {
        path: '/articles/edit',
        main: () => <Layout>
            <EditArticle/>
        </Layout>
    },
    {
        path: '/places',
        main: () => <Layout>
            <Places/>
        </Layout>
    },
    {
        path: '/places/new',
        main: () => <Layout>
            <CreatePlace/>
        </Layout>
    },
    {
        path: '/plans',
        main: () => <Layout>
            <PricePlans/>
        </Layout>
    },
    {
        path: '/dashboard',
        main: () => <Layout>
            <Dashboard/>
        </Layout>
    },
    {
        path: '/articles/:id',
        main: () => <Layout>
            <EditArticle/>
        </Layout>
    },
    {
        path: '/place/:id',
        main: () => {
            return <Layout>
                <Place/>
            </Layout>
        }
    },
];

export default routes;