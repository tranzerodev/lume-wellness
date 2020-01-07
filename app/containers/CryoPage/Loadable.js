/**
 *
 * Asynchronously loads the component for CryoPage
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
