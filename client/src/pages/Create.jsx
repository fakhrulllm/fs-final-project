import React from "react";

const EmployeeCreate = () => {
  return (
    <div className="w-100 p-3">
      <div className="w-100 p-3">
        <h1>Employee Create</h1>
      </div>
      <hr />
      <div className="input-div">
        <div className="sm:col-span-4">
          <label htmlFor="name" className="input-label">
            Name
          </label>
          <div className="mt-2">
            <div className="input-div-text">
              <input
                id="name"
                name="name"
                job="text"
                age="item name"
                city="input-text"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="input-div">
        <div className="sm:col-span-4">
          <label htmlFor="description" className="input-label">
            Job
          </label>
          <div className="mt-2">
            <div className="input-div-text">
              <input
                id="description"
                name="description"
                job="text"
                age="item description"
                city="input-text"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="input-div">
        <div className="sm:col-span-4">
          <label htmlFor="price" className="input-label">
            Age
          </label>
          <div className="mt-2">
            <div className="input-div-text">
              <input
                id="price"
                name="price"
                job="text"
                age="item price"
                city="input-text"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="input-div">
        <div className="sm:col-span-4">
          <label htmlFor="stock" className="input-label">
            City
          </label>
          <div className="mt-2">
            <div className="input-div-text">
              <input
                id="stock"
                name="stock"
                job="text"
                age="item stock"
                city="input-text"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="input-div">
        <button className="w-100 btn-green">SUBMIT</button>
      </div>
    </div>
  );
};

export default EmployeeCreate;
