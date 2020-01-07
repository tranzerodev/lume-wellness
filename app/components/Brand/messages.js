/*
 * Brand Messages
 *
 * This contains all the text for the Brand component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Brand';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Brand component!',
  },
});
