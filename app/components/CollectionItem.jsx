import { Link }        from 'react-router'
import React           from 'react'
import { scrollToTop } from '../utils/scroll'

const CollectionItem = ({ description, image, tagline, title, url }, context) => {

    return (
		<figure className="collection-item">
            <Link className="collection-item-link"
                  onClick={ scrollToTop }
                  to={ url }>
                <img src={ image } className="collection-item-image" />

                <figcaption>
                    <h6 className="collection-item-tagline">
                        { tagline }
                    </h6>
                    <h5>{ title }</h5>
                    <p className="collection-item-description"
                       dangerouslySetInnerHTML={{ __html: description }}>
                    </p>
                    <span>
                        More &rarr;
                    </span>
                    <button className="button button-inflate">More &rarr;</button>
                </figcaption>
            </Link>

            <div className="border-box-left"></div>
            <div className="border-box-top"></div>
            <div className="border-box-right"></div>
            <div className="border-box-bottom"></div>
        </figure>
	);

};

export default CollectionItem;
