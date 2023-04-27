
import { createElement } from 'react';

export const Title = ({
    size, text
}) => {
 return createElement (size, { className : 'title-container' }, text);
};
