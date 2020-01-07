/**
 *
 * Asynchronously loads the component for Img
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
