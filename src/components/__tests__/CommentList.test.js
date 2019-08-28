import React from 'react';
import Root from 'Root';
import { mount } from 'enzyme';
import CommentList from 'components/CommentList';

describe('<CommentList />', () => {
  let wrapper;
  const initialState = { comments: ['comment 1', 'comment 2', 'comment 3'] };

  beforeEach(() => {
    wrapper = mount(<Root initState={initialState}><CommentList /></Root>);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should show one li element per comment', () => {
    expect(wrapper.find('li').length).toEqual(3);
  });

  it('should show all commetns', () => {
    const text = wrapper.render().text();
    expect(text).toContain('comment 1');
    expect(text).toContain('comment 2');
    expect(text).toContain('comment 3');
  });

});