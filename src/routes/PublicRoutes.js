import Homepage from '../views/pages/site/Homepage'
import TermsOfService from '../views/pages/site/TermsOfService'
import { routes } from './index'
import PrivacyPolicy from "../views/pages/site/PrivacyPolicy";

export const PublicRoutes = [
    { 'component': Homepage, 'link': routes.Homepage, 'exact': true },
    { 'component': TermsOfService, 'link': routes.TermsOfService},
    { 'component': PrivacyPolicy, 'link': routes.PrivacyPolicy}
]