import findContext from '../_util/findContext';

export default ( selector, context ) => findContext( context ).querySelector( selector );
