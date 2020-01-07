/*
 * Description Messages
 *
 * This contains all the text for the Description component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Description';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Description component!',
  },
});
