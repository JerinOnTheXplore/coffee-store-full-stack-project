import React from 'react';

const AddCoffee = () => {

    const handleAddCoffee =e=>{
       e.preventDefault(); 
       const form = e.target;
       const formData = new FormData(form);
       const newCoffee=Object.fromEntries(formData.entries());
       console.log(newCoffee);

//send data to the database
    fetch('http://localhost:3000/coffees',{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(newCoffee)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log('After adding coffee to database',data)
    })

    }
    return (
    <div>
    <div className='p-24'>
     <div className='p-12 text-center space-y-4'>
      <h1 className="text-6xl">Add Coffee</h1>
        <p>CoffeeStore is your go-to destination for premium coffee selections. We bring you handpicked flavors from passionate growers and expert roasters, all in one place. Whether you're a casual sipper or a true coffee enthusiast, our platform makes it easy to discover, choose, and enjoy your perfect brew—anytime, anywhere.</p>
     </div>
     <form onSubmit={handleAddCoffee}>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Name</label>
            <input type="text" name='name' className="input w-full" placeholder="Coffee Name" />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Quantity</label>
            <input type="text" name='quantity' className="input w-full" placeholder="Quantity Name" />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Supplier</label>
            <input type="text" name='supplier' className="input w-full" placeholder="Supplier Name" />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Taste</label>
            <input type="text" name='taste' className="input w-full" placeholder="Taste Name" />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Price</label>
            <input type="text" name='price' className="input w-full" placeholder="Price per Cup" />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Details</label>
            <input type="text" name='details' className="input w-full" placeholder="Details Name" />
          </fieldset>
        </div>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border my-6 p-4">
            <label className="label">Photo</label>
            <input type="text" name='photo' className="input w-full" placeholder="Photo URL" />
          </fieldset>

          <input type="submit" className='btn w-full' value="Add Coffee" />
     </form>
        </div>  
        </div>
    );
};

export default AddCoffee;