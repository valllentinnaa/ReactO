import React from 'react'
import renderer from 'react-test-renderer'
import PageLayout from '.'
import TestingEnvironment from '../../test-utils/router'
jest.mock('../header', () => 'Header');
jest.mock('../side-navigation/SideNavigation', () => 'SideNavigation');
jest.mock('../Footer', () => 'Footer');

describe('PageLayout Component', () => {
  it('should render pagelayout component', () => {
  
    
    const tree = renderer.create(
      <TestingEnvironment value={{
        user: {
          loggedIn: true,
          id: '123'
        }
      }}>
        <PageLayout />
      </TestingEnvironment>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})