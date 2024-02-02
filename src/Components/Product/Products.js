import React from 'react'

const Products = () => {
  return (
    <div className="card justify-center">
    <div className='grid w-11/12 h-5/6'>
        <figure>
            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk1ZrK4ERP2eAYtgPIYXhkHMMQEMUprMHR1Q&usqp=CAU"}
                alt="Image" />
            {/* <figcaption className="caption">{category}</figcaption> */}
        </figure>

        <div className="card-data">
            <div className="card-data-flex">
                <h3>title</h3>
                <h3>description</h3>
                {/* <p className="card-data--price"></p> */}
            </div>
        </div>
    </div>

</div>
  )
}

export default Products
