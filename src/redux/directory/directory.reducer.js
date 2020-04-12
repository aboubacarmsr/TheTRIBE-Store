const INITIAL_STATE = {
  sections: [
    {
      title: 'accessoires',
      imageUrl: 'https://i.ibb.co/GctvxWK/hats.jpg',
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/qJc6SW7/jacket.jpg',
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/hXdYdts/shoes.jpg',
      id: 3,
      linkUrl: 'shop/sneakers'
    },
    {
      title: 'femmes',
      imageUrl: 'https://i.ibb.co/wy1Y25d/women.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
    {
      title: 'hommes',
      imageUrl: 'https://i.ibb.co/4tWf6Nt/vonecia-carswell-D3-HSYAUj-Vr-M-unsplash.jpg',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
