import { PROJECT_STATIC_ASSET_URL } from '../../config/';

module.exports = {

    buildProjectImageURL: (uri) => {
        if (uri) {
            return `${PROJECT_STATIC_ASSET_URL}/${uri}`;
        }
        return '';
    }

}
