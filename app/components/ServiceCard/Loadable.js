/**
 *
 * Asynchronously loads the component for ServiceCard
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
