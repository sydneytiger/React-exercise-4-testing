// The name of this file src/setupTests.js is very special because anytime jest
// starts up inside a project, it is going to look for this file insdie the
// src directory. If jest finds it, it is going to automatically execute it
// before any other code.

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

// Enzym API
// 1. Static render: Render the given component and return plain HTML
// 2. Shallow render: Render *just* the given component and none of its children
// 3. Full DOM render: Render the componenet and all of its children + let us modify it afterwards
// Now we have setup Enzyme. It becomes available for all test files.