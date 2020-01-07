/*
 * Subtitle Messages
 *
 * This contains all the text for the Subtitle component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Subtitle';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Subtitle component!',
  },
});
