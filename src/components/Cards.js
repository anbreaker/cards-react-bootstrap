import React from 'react';
import { Card } from './Card';
import img1 from '../assets/img/image1.jpg';
import img2 from '../assets/img/image2.jpg';
import img3 from '../assets/img/image3.jpg';

export const Cards = () => {
  const cards = [
    {
      id: 1,
      title: 'rootdevs',
      image: img1,
      url: 'https://rootdevs.es',
      text:
        "Hi there, I'm anbreaker A industrial mechanic convinced that the web was his fate. I'm learning to create web experiences and programing in Javascript or Python.",
    },
    {
      id: 2,
      title: 'egestion',
      image: img2,
      url: 'https://www.egestion.xyz',
    },
    {
      id: 3,
      title: 'rootdevs',
      image: img3,
      url: 'https://rootdevs.xyz',
    },
  ];

  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, url, id, text }) => (
          <div className="col-md-4" key={id}>
            <Card title={title} imgSource={image} text={text} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
};
