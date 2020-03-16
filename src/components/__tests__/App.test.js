import React from 'react';
import ReactDom from 'react-dom';

import App from '../App';

it('shows a CommentBox', () =>{
    const div= document.createElement('div');
    ReactDom.render(<App/>, div); /* Renders app component inside created div */

    /* Look inside div and see if comment Box exists*/
    expect(div.innerHTML).toContain('Comment Box');

    ReactDom.unmountComponentAtNode(div);
});