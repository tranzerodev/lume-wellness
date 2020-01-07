/*
 * Title Messages
 *
 * This contains all the text for the Title component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Title';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Title component!',
  },
});
