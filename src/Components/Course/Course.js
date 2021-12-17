import React, { useEffect, useState } from "react";
import "./Course.css";

const Course = () => {
  const [courses, setCourses] = useState([]);
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    fetch("./fakeData.JSON")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  const handelAddCourse = (crs) => {
    const courseInfo = [...cart, crs];
    setCart(courseInfo);

    const totalPrice = price + crs.price;
    setPrice(totalPrice);
  };
  return (
    <div className="course d-flex">
      <div className="all-course col-md-9">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {courses.map((crs) => (
            <div className="col" key={crs.id}>
              <div className="card h-100">
                <img src={crs.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{crs.name}</h5>
                  <p>instructor:{crs.instructor}</p>
                  <h6>${crs.price}</h6>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handelAddCourse(crs)}
                  >
                    Enrol Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col-md-3">
        <h3>enrol courses:{cart.length}</h3>
        {cart.map((pd) => (
          <ul>
            <li>Course Name:{pd.name}</li>
            <li>Instructor:{pd.instructor}</li>
            <li>Course Price:{pd.price}</li>
          </ul>
        ))}
        <h4>total price:{price}</h4>
      </div>
    </div>
  );
};

export default Course;
