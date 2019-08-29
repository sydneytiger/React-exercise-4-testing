import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

let wrapper;

beforeEach(() => {
  wrapper = mount(<Root><App /></Root>)
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [
      { name: 'comment 1' },
      { name: 'comment 2' },
      { name: 'comment 3' }
    ]
  });
});

afterEach(() => {
  moxios.uninstall();
  wrapper.unmount();
});

it('should fetch a list of comments and display them', (done) => {
  // attempt to render the entire app


  // find the fetch button and click it
  wrapper.find('button#btnFetch').simulate('click');

  // Expect to find a list of comments
  moxios.wait(() => {
    wrapper.update(); // at this moment, moixos has return mock data then we explictly get the element update with the return data
    expect(wrapper.find('li').length).toEqual(3);
    done(); // a call back funciton tell jest the test is done.
    // without a call back jest will ignore the setTimeout function and
    // run to the end of test suite then consider it as success
  });

});
