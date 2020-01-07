/**
 *
 * Asynchronously loads the component for Demo
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
