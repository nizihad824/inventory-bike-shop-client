import React, { useState } from "react";

function AddItems({ onAddItem }) {
  console.log(onAddItem);

  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [details, setDetails] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (typeof onAddItem === "function") {
      onAddItem({ name, imgUrl, details, price,quantity });
    }

    fetch("http://localhost:5000/addItems", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ name, imgUrl, details, price,quantity }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Item added successfully");
        }
      })
      .catch((er) => console.error(er));

    setName("");
    setImgUrl("");
    setDetails("");
    setPrice("");
    setQuantity("")
  };

  return (
    <div className="hero  bg-sky-200 py-16">
    <div className="hero-content w-1/2 flex-col lg:flex-row-reverse ">
     
      <div className="card flex-shrink-0 w-full max-w-sm shadow-4xl bg-white">
        <div className="card-body">
          <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-1">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-black font-semibold shadow-xl">Name</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name of the bike"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-black font-semibold shadow-xl">Image URL</span>
              </label>
              <input
                type="text"
                value={imgUrl}
                onChange={(e) => setImgUrl(e.target.value)}
                placeholder="Insert image url"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-black font-semibold shadow-xl">Details</span>
              </label>
              <input
                type="text"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Details about the bike"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-black font-semibold shadow-xl">Quantity</span>
              </label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="Quantity"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-black font-semibold shadow-xl">Price</span>
              </label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full  py-3">
              <button className="btn btn-primary">Add Bike</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default AddItems;
