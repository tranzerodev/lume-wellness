/*
 * BlogPage Messages
 *
 * This contains all the text for the BlogPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.BlogPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the BlogPage container!',
  },
});
