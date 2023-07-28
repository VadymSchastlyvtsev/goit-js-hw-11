
function createMarcup(arr) {
    return arr
    .map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) => {
      `<a href="${largeImageURL}" class="gallery-link">
         <img src="${webformatURL}" alt="${tags}" loading="lazy" width="400"/>
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
      </a>`
    }).join('');
}

export {createMarcup};