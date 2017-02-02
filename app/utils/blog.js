import { API_URL } from '../../config/';
import request     from 'superagent';

module.exports = {

    buildBlogImageUrl: (imageUrl) => {
        return `${API_URL}/static/blog/graphics/${imageUrl}`;
    },

    formatCategoryTitle: (category) => {
        // Remove - and make following letter uppercase
        let categoryTitle = category.replace(/-([a-z0-9])/ig, ( all, letter ) => {
            return ` ${ letter.toUpperCase() }`;
        });
        // Make first letter uppercase
        return categoryTitle.charAt(0).toUpperCase() + categoryTitle.substring(1, categoryTitle.length);
    },

    getBlog: () => {
        return new Promise((resolve, reject) => {
            request
    			.get(`${API_URL}/api/blog/`)
    			.end((err, res) => {
    				if (err) {
    					reject(err);
    				}

                    let response;
                    try {
                        response = res && res.text ? JSON.parse(res.text) : '';
                    } catch (error) {
                        reject('Error parsing JSON: ' + error);
                    }

    				if (typeof response === 'object') {
                        resolve(response);
    				} else {
    					reject('An unexpected error occurred');
    				}
    			});
        });
    },

    getBlogCategory: (category) => {
        return new Promise((resolve, reject) => {
            request
    			.get(`${API_URL}/api/blog/category/${category}`)
    			.end((err, res) => {
    				if (err) {
    					reject(err);
    				}

                    let response;
                    try {
                        response = res && res.text ? JSON.parse(res.text) : '';
                    } catch (error) {
                        reject('Error parsing JSON: ' + error);
                    }

    				if (typeof response === 'object') {
                        resolve(response);
    				} else {
    					reject('An unexpected error occurred');
    				}
    			});
        });
    },

    getBlogPost: (category, postFragment) => {
        return new Promise((resolve, reject) => {
            request
    			.get(`${API_URL}/api/blog/post/${category}/${postFragment}`)
    			.end((err, res) => {
    				if (err) {
    					reject(err);
    				}

                    let response;
                    try {
                        response = res && res.text ? JSON.parse(res.text) : '';
                    } catch (error) {
                        reject('Error parsing JSON: ' + error);
                    }

    				if (typeof response === 'object') {
                        resolve(response);
    				} else {
    					reject('An unexpected error occurred');
    				}
    			});
        });
    }

};
