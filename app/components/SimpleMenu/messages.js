/*
 * SimpleMenu Messages
 *
 * This contains all the text for the SimpleMenu component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.SimpleMenu';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the SimpleMenu component!',
  },
});
