import {
  PieceAuth,
  Property,
  createPiece,
} from '@activepieces/pieces-framework';
import { getTickets } from './lib/actions/get-tickets';
import { getContactFromID } from './lib/actions/get-contact-from-id';
import { getTicketStatus } from './lib/actions/get-ticket-status';
import { createCustomApiCallAction } from '@activepieces/pieces-common';

export const freshdeskAuth = PieceAuth.CustomAuth({
  props: {
    base_url: Property.ShortText({
      displayName: 'Base URL',
      description: 'Enter the base URL',
      required: true,
    }),
    access_token: Property.ShortText({
      displayName: 'API Token',
      description: 'Enter the API token',
      required: true,
    }),
  },
  description: `Get the API token by visiting your profile settings and clicking View API key`,
  required: true,
});

export const freshdesk = createPiece({
  displayName: 'Freshdesk',
  logoUrl: 'https://cdn.activepieces.com/pieces/freshdesk.png',
  authors: ['buttonsbond'],
  auth: freshdeskAuth,
  actions: [
    getTickets,
    getContactFromID,
    getTicketStatus,
    createCustomApiCallAction({
      baseUrl: (auth) => (auth as { base_url: string }).base_url,
      auth: freshdeskAuth,
      authMapping: (auth) => ({
        Authorization: (auth as { access_token: string }).access_token,
      }),
    }),
  ],
  triggers: [],
});
