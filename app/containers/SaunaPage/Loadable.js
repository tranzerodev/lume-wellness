/**
 *
 * Asynchronously loads the component for SaunaPage
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
