/**
 *
 * Asynchronously loads the component for ServiceImage
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
