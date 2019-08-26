import React from 'react';
import { shallow } from 'enzyme';

import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('shows a CommonetBox', () => {
    expect(wrapper.find(CommentBox).length).toEqual(1);
  });

  it('shows a CommonetList', () => {
    expect(wrapper.find(CommentList).length).toEqual(1);
  });
});