import React, { useEffect } from 'react';

function WatchListBtn({ watchList, setWatchList, movie }) {

  useEffect(() => {
    function saveWatchListLocal() {
      localStorage.setItem('watchList', JSON.stringify(watchList));
    }
    
    saveWatchListLocal();
  }, [watchList]);

  function addToWatchList(movie) {
    var exist = false;

    if (watchList.length > 0) 
    {
      watchList.map(listItem => {
        if (listItem.movie.id === movie.id)
          return exist = true;
        else
          return exist = false;
      });
    }
    else
      setWatchList([...watchList, { movie }]);

    if (!exist) 
    {
      setWatchList([...watchList, { movie }]);
    }
  }

  return (
    <div className="watchListBtn">
      <button onClick={() => addToWatchList(movie)}><i className="fa fa-heart"></i></button>
    </div>
  )
}

export default WatchListBtn;