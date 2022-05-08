import React, { useEffect, useState } from "react";
import Service from "../../Shared/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className="container mx-auto px-4">
        <div>
          <h1 className="text-4xl font-bold text-blue-700 text-center py-3">
            PACKAGES
          </h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <Service key={index} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
