import React from 'react';
import PropTypes from 'prop-types';

export const Card = ({ ...props }) => {
  const { title, imgSource, url, text } = props;
  const textDefault =
    'Lorem fistrum por la gloria de mi madre a gramenawer la caidita fistro ahorarr papaar papaar te voy a borrar el cerito por la gloria de mi madre ese que llega papaar papaar.';

  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="card-body text-light">
        <div className="overflow">
          <img src={imgSource} alt="" className="card-img-top" />
        </div>
        <h4 className="card-title mt-3">{title}</h4>
        <p className="card-text text-secondary">{text ? text : textDefault}</p>
        <a
          href={url}
          className="btn btn-outline-secondary border-1"
          target="_blank"
          rel="noreferrer">
          Go to this website
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  imageSource: PropTypes.string,
  text: PropTypes.string,
};
