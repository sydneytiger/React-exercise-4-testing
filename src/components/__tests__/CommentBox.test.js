import React from 'react';
import CommentBox from 'components/CommentBox';
import { mount } from 'enzyme';

describe('<CommentBox />', () => {
  let wrapper;
  const txtSelector = 'textarea#txtComment';
  const btnSelector = 'button#btnSubmit';

  beforeEach(() => {
    wrapper = mount(<CommentBox />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should has a textarea and a button', () => {
    expect(wrapper.find(txtSelector).length).toEqual(1);
    expect(wrapper.find(btnSelector).length).toEqual(1);
  });

  describe('test textarea', () => {
    const txtChangeEvent = { target: { value: 'testing value' } };

    beforeEach(() => {
      wrapper.find(txtSelector).simulate('change', txtChangeEvent);
      wrapper.update();
    });

    it('has a textarea that user can type in', () => {
      // find the textarea element
      // simulate a 'change' event
      // provide a fake event object
      // force the component to update
      // assert textarea value 

      // not suggest to do that
      // const txt = wrapper.find(selector);
      // txt.simulate('change', fakeEvent);
      // As after wrapper.upate(), the 'txt' value is incorrect.
      expect(wrapper.find(txtSelector).prop('value')).toEqual('testing value');
    });

    it('should empty textarea after submit', () => {
      expect(wrapper.find(txtSelector).prop('value')).toEqual('testing value');

      wrapper.find('form').simulate('submit');
      wrapper.update();

      expect(wrapper.find(txtSelector).prop('value')).toEqual('');
    });
  });
});

