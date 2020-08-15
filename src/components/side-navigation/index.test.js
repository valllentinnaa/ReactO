import React from 'react'
import renderer from 'react-test-renderer'
import SideNavigation from './SideNavigation'
import TestingEnvironment from '../../test-utils/router'
import getNavigation from '../../utils/navigation'

describe('Navigation Component', () => {

    it('return authenticated routes from getNavigation', () => {
        const links = getNavigation({
            loggedIn: true,
            id: '123'
        });

        const authLinks = [
            {
                title: "Dashboard",
                link: "/dashboard"
            },
            {
                title: "Articles",
                link: "/articles"
            },
            {
                title: "Add your article",
                link: `/articles/new`
            },
            {
                "link": "/profile/123",
                "title": "Profile",
            },
        ]

        expect(links).toStrictEqual(authLinks)
    })

    it('should render authenticated routes', () => {
        const tree = renderer.create(
            <TestingEnvironment value={{
                user: {
                    loggedIn: true,
                    id: '123'
                }
            }}>
                <SideNavigation/>
            </TestingEnvironment>
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('should render non-authenticated routes', () => {
        const tree = renderer.create(
            <TestingEnvironment value={{
                user: {
                    loggedIn: false
                }
            }}>
                <SideNavigation/>
            </TestingEnvironment>
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })
})