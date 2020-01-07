/**
 *
 * Asynchronously loads the component for MassagePage
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
