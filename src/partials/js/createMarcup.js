
// export default 
function createMarcup(arr) {
  // console.log(webformatURL);
  return arr
  .map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads,}) => {
    return `<li>
    <a href="${largeImageURL}" class="gallery-link">
       <img src="${webformatURL}" alt="${tags}" loading="lazy" width="300"/>
      <div class="info">
        <p class="info-item">
          <b>Likes</b>
          ${likes}
        </p>
        <p class="info-item">
          <b>Views</b>
          ${views}
        </p>
        <p class="info-item">
          <b>Comments</b>
          ${comments}
        </p>
        <p class="info-item">
          <b>Downloads</b>
          ${downloads}
        </p>
      </div>
    </a>
    </li>
    `
  }).join('');
}

export {createMarcup}

