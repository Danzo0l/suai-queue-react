import compose from 'compose-function';
import { withRouter } from '@src/app/providers/with-router.tsx';
import { withStore } from '@src/app/providers/with-store';

export const withProviders = compose(withRouter, withStore);
