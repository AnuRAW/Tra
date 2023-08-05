import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../actions';
import { useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchData()); // Fetch the data in Detail component
  }, [dispatch]);

  const selectedItem = data.find(item => item.id === parseInt(id));

  if (!selectedItem) {
    return <div>Item not found</div>;
  }

  const handleClick = ()=>{
  let p = document.querySelectorAll('.p1');
  p.forEach(items=>{
    items.classList.toggle('hidden');
  })
}

  return (
    <div>
      <nav classname="navbar bg-body-tertiary">
        <div classname="container-fluid">
          <p classname="navbar-brand" href="#home">
            TravelMedia.in
          </p>
        </div>
      </nav>
      <h2>{selectedItem.title}</h2>
      <div className="card-detail">
      <div className="details">
      <img src={`https://picsum.photos/200?random=${selectedItem.id}`} alt={`Image for ${selectedItem.title}`} />
      <button className='detail-btn'onClick={handleClick}>Details</button>
      <button className='user-btn' onClick={handleClick}>User Info</button>
      <p className='p1'>{selectedItem.body}</p> 
      <p className='p1 hidden'>User ID: {selectedItem.userId}</p> 
      </div>
      </div>
    </div>
  );
}

export default Detail;