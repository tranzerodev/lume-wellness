/*
 * Demo Messages
 *
 * This contains all the text for the Demo container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Demo';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Demo container!',
  },
});
