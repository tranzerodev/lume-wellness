/*
 * Editable Messages
 *
 * This contains all the text for the Editable component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Editable';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Editable component!',
  },
});
