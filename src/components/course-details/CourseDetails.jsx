import React from 'react';
import { useLocation } from 'react-router-dom';
import './course_details.scss';

const CourseDetails = () => {
  const { state } = useLocation();
  const { title, duration, enrolledCount, courseImage, author } = state || {};

  return (
    <div className='course-info'>
      <div className='course-details'>
        <img src={courseImage} alt={title} className='course-image' />
        <h2 className='title'>{title}</h2>
        <p className='author'>By {author}</p>
        <div className='metadata'>
          <div>
            <strong>Course Duration:</strong> {duration}
          </div>
          <div>
            <strong>Total Students:</strong> {enrolledCount}
          </div>
        </div>
        <div className='description'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            eligendi architecto, exercitationem hic suscipit, repudiandae
            debitis quidem ab quo libero perspiciatis tenetur sequi! Rerum
            voluptatum voluptas vero adipisci, commodi quod?
          </p>
          <p>
            Repudiandae deserunt rem omnis facilis perspiciatis eveniet itaque
            in! Voluptatum eos, suscipit eaque eligendi corporis omnis neque
            ipsam fugit eius tempore exercitationem, laborum beatae ullam, et
            hic? Molestias, necessitatibus error.
          </p>
          <p>
            Voluptas doloremque corrupti, officiis fugiat earum, temporibus
            perspiciatis pariatur recusandae, assumenda similique ad? Optio
            rerum voluptatum asperiores dolores iste ipsa ex eos nesciunt
            officiis, eaque molestiae iure, laboriosam, esse ut.
          </p>
          <p>
            Voluptas doloremque corrupti, officiis fugiat earum, temporibus
            perspiciatis pariatur recusandae, assumenda similique ad? Optio
            rerum voluptatum asperiores dolores iste ipsa ex eos nesciunt
            officiis, eaque molestiae iure, laboriosam, esse ut.
          </p>
          <p>
            Voluptas doloremque corrupti, officiis fugiat earum, temporibus
            perspiciatis pariatur recusandae, assumenda similique ad? Optio
            rerum voluptatum asperiores dolores iste ipsa ex eos nesciunt
            officiis, eaque molestiae iure, laboriosam, esse ut.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
