import React from "react";

const AllOrder = () => {
  const sliceProducts = [
    {
      _id: 1,
      images: "aa",
    },
    {
      _id: 1,
      images: "aa",
    },
    {
      _id: 1,
      images: "aa",
    },
  ];

  return (
    <div>
      <h3 className='font-bold text-2xl text-center text-secondary'>
        All Orders
      </h3>
      <div>
        <div className='tableNormal pt-3'>
          <table
            style={{ minWidth: "750px", maxWidth: "100%" }}
            className='text-white bg-gray-800'
          >
            <thead>
              <tr>
                <th className='text-left'>Image</th>
                <th className='text-left'>Name</th>
                <th className='text-left productHidden'>Price</th>
                <th className='text-left productHidden'>Type</th>
                <th className='text-left'>Owners</th>
                <th className='text-left'>Action</th>
              </tr>
            </thead>
            <tbody>
              {sliceProducts?.map((product) => (
                <tr className='tableRow' key={product?._id}>
                  <td align='left'>
                    {" "}
                    <img
                      className='imgProduct'
                      src={product?.images?.[0]}
                      alt='Product Img'
                    />
                  </td>
                  <td className='text-left text-capitalize'>
                    {product.productName}
                  </td>
                  <td className='text-left productHidden'>{product?.price}</td>
                  <td className='text-left text-capitalize productHidden'>
                    {/* {
                      getCategory?.find((cat) => cat?._id === product?.category)
                        ?.name
                    } */}

                    {product?.category}
                  </td>
                  <td className='text-left'>{product?.addedBy}</td>
                  <td className='action'>
                    <div className='actionDiv text-left'>
                      {/* <Link to={`/admin/editProduct/${product?._id}`}>
                        <Tooltip title="Update Product." placement="top">
                          <button className="editBtn">
                            <i className="fas fa-edit"></i>
                          </button>
                        </Tooltip>

                      </Link> */}
                      {/* <Tooltip title="Delete Product." placement="top">
                        <button
                          onClick={() => handleProductDelete(product?._id)}
                          className="deleteBtn text-white"
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </Tooltip> */}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllOrder;
