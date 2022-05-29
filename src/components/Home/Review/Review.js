import React from "react";
import { Card } from "react-bootstrap";
import "./Review.css";

const Review = () => {
  return (
    <div className="my-5">
      <h1 className="text-center mb-4">
        Our <span style={{ color: "#10b377" }}>Upcoming </span>Product!
      </h1>
      <div className="container">
        <div className="row ms-4">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <Card style={{ width: "20rem" }} className="card-area">
              <Card.Img variant="top" src="https://tinyurl.com/y2es829x" />
              <Card.Body>
                <Card.Title>Hiking Backpack-1</Card.Title>
                <Card.Text>
                  <p>
                    whenever you step into the backcountry, even on day hikes,
                    is a good habit. True, on a routine trip you may use only a
                    few of them or none at all. It’s when something goes awry
                    that you’ll truly appreciate the value of carrying these
                    items that could be essential to your survival.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <Card style={{ width: "20rem" }} className="card-area">
              <Card.Img variant="top" src="https://tinyurl.com/p52tmp74" />
              <Card.Body>
                <Card.Title>Hiking Backpack-2</Card.Title>
                <Card.Text>
                  <p>
                    whenever you step into the backcountry, even on day hikes,
                    is a good habit. True, on a routine trip you may use only a
                    few of them or none at all. It’s when something goes awry
                    that you’ll truly appreciate the value of carrying these
                    items that could be essential to your survival.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <Card style={{ width: "20rem" }} className="card-area">
              <Card.Img variant="top" src="https://tinyurl.com/2c2phc7m" />
              <Card.Body>
                <Card.Title>Hiking Backpack-3</Card.Title>
                <Card.Text>
                  <p>
                    whenever you step into the backcountry, even on day hikes,
                    is a good habit. True, on a routine trip you may use only a
                    few of them or none at all. It’s when something goes awry
                    that you’ll truly appreciate the value of carrying these
                    items that could be essential to your survival.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
