import React from "react";
import GalleryItemStyles from "sass/components/galleryItem.module.scss";

const GalleryItem = ({ src, alt }) => (
  <figure className={GalleryItemStyles.gallery__item}>
    <img src={src} alt={alt} className={GalleryItemStyles.gallery__photo} />
  </figure>
);

export default GalleryItem;
