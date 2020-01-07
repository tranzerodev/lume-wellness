/**
 *
 * Asynchronously loads the component for NavDot
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
