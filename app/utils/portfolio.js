import { API_URL } from '../../config/';
import request     from 'superagent';

module.exports = {

    getPortfolio: (isResume = false) => {
        const param = isResume ? '?format=resume' : ''
        return new Promise((resolve, reject) => {
            request
    			.get(`${API_URL}/api/portfolio/${param}`)
    			.end((err, res) => {
    				if (err) {
    					reject(err);
    				}

                    let items;
                    try {
                        items = res && res.text ? JSON.parse(res.text) : '';
                    } catch (error) {
                        reject('Error parsing JSON: ' + error);
                    }

    				if (Array.isArray(items)) {
                        resolve(items);
    				} else {
    					reject('An unexpected error occurred');
    				}
    			});
        });
    },

    getPortfolioItem: (uri) => {
        return new Promise((resolve, reject) => {
            request
    			.get(`${API_URL}/api/portfolio/item/${uri}`)
    			.end((err, res) => {
                    // Not found
                    if (!res) {
                        const notFound = new Error('Invalid portfolio item');
                        notFound.status = 404;
                        reject(notFound);
                    }

    				if (err) {
    					reject(err);
    				}

                    let projectData;
                    try {
                        projectData = res && res.text ? JSON.parse(res.text) : '';
                    } catch (error) {
                        reject('Error parsing JSON: ' + error);
                    }

    				if (typeof projectData === 'object') {
                        resolve(projectData);
    				} else {
                        // TODO - 404 handling
    					reject('An unexpected error occurred');
    				}
    			});
        });
    }

};
