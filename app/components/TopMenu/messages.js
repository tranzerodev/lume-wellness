/*
 * TopMenu Messages
 *
 * This contains all the text for the TopMenu component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.TopMenu';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the TopMenu component!',
  },
});
