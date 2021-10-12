import React from 'react';

function AdminProduct(props) {
    const { process_add, isAdd, listProduct, delete_list_product, process_update } = props
    // const [id, setId] = useState('')
    let renderProduct = []
    if (listProduct) {
        renderProduct = listProduct.map((product, index) => {
            return (
                <tr class="table_tr">
                    <th>{index + 1}</th>
                    <td>{product.nameProduct}</td>
                    <td>{product.tag}</td>
                    <td><img src={product.image} class="img-thumbnail" alt="anh" style={{ width: "75px", height: "75px" }} /></td>
                    <td>{product.price}</td>
                    <td>{product.total}</td>
                    <td>
                        <button type="button" class="btn button mr-1" onClick={() => {
                            console.log(product._id,'idddddddddddđ')
                            delete_list_product(product._id)
                        }}>DELETE</button>
                        <button type="button" class="btn button" onClick={() => {
                            process_update(product)
                        }}>UPDATE</button>
                    </td>
                </tr>
            )
        })
    }
    return (
        <div class={isAdd ? "col-sm-9" : "col-sm-12"}>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <div class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <button type="button" class="btn button" onClick={process_add}>
                            Thêm sản phẩm
                        </button>
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'end',
                    }} class="form-inline my-2 my-lg-0" >
                        <p class="m-0 p-0 pr-3" style={{
                            color: 'rgb(138 132 132)',
                            fontWeight: '600'
                        }}>Hiện thị 1 kết quả duy nhất</p>
                        <select style={{
                            padding: '10px',
                            border: 'none',
                            boxShadow: '1px 1px 3px rgb(179 177 177)',
                            outline: 'none'
                        }}>
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
            </nav>
            <table class="table table_product">
                <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Name</th>
                        <th scope="col">Tag</th>
                        <th scope="col">Image</th>
                        <th scope="col">Price</th>
                        <th scope="col">Total</th>
                        <th scope="col">Chức Năng</th>
                    </tr>
                </thead>
                <tbody>
                    {renderProduct}
                </tbody>
            </table>
        </div>
    );
}

export default AdminProduct;