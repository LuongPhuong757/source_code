import React, { useEffect, useState } from 'react';

function FormProcesser(props) {
    const { isAdd, isUpdate, process_close_form, add_list_product, update_list_product, productUpdate } = props
    const [nameProduct, setNameProduct] = useState('')
    const [price, setPrice] = useState('')
    const [total, setTotal] = useState('')
    const [fileName, setFileName] = useState('')
    const [file, setFile] = useState('')
    const [id, setId] = useState('')
    const [sex,setSex] = useState('1')
    let formData = new FormData()
    useEffect(() => {
        if (productUpdate !== null) {
            setNameProduct(productUpdate.nameProduct ? productUpdate.nameProduct : '')
            setPrice(productUpdate.price ? productUpdate.price : '')
            setTotal(productUpdate.total ? productUpdate.total : '')
            setId(productUpdate ? productUpdate._id : '')
        }
    }, [productUpdate])
    const handleAddProduct = () => {
        console.log(sex,'111111111111111111111111111111')
        formData.append('nameProduct', nameProduct)
        formData.append('price', price)
        formData.append('total', total)
        formData.append('image', file[0]);
        formData.append('sex',sex)
        add_list_product({ formData })
    }

    const handleUpdateProduct = () => {
        formData.append('nameProduct', nameProduct)
        formData.append('price', price)
        formData.append('total', total)
        formData.append('image', file[0])
        formData.append('sex',sex)
        update_list_product({ id, formData })
    }
    return (
        isAdd ?
            <div class="col-sm-3 position-relative" >
                <div class="card">
                    <div class="card-header d-flex align-items-center justify-content-lg-between">
                        <h5 class="d-inline p-0 m-0">{isUpdate ? 'Cập nhật ' : 'Thêm'} sản phẩm</h5>
                        <i class="fas fa-times float-right" onClick={process_close_form}></i>
                    </div>
                    <div class="card-body">
                        <div>
                            <div class="list-input mb-3">
                                <input type="text" class="form-control mb-1" placeholder="Name Product" onChange={(e) => setNameProduct(e.target.value)} value={nameProduct} />
                                <input type="text" class="form-control mb-1" placeholder="Price" onChange={(e) => setPrice(e.target.value)} value={price} />
                                <input type="text" class="form-control mb-1" placeholder="Total" onChange={(e) => setTotal(e.target.value)} value={total} />
                                <div class="custom-file">
                                    <div class="custom-file">
                                        <input type="file" class="custom-file-input" id="inputGroupFile02"
                                            onChange={(e) => {
                                                setFileName(e.target.value.split('\\')[2])
                                                setFile(e.target.files)
                                            }} />
                                        <label class="custom-file-label">{fileName ? fileName : 'Choose File'}</label>
                                    </div>
                                </div>
                                <div class="col-auto my-1 p-0 m-0">
                                    <label class="mr-sm-2" for="inlineFormCustomSelect">Chọn giới tính</label>
                                    <select class="custom-select mr-sm-2" id="inlineFormCustomSelect" onChange = {(e) => {setSex(e.target.value)}}>
                                        <option value="1" selected>Nam</option>
                                        <option value="0">Nữ</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <button type="button" class="btn button mr-2" onClick={() => {
                            isUpdate ? handleUpdateProduct() : handleAddProduct()
                        }}>Lưu Lại</button>
                        <button type="button" class="btn btn-danger">Hủy bỏ</button>
                    </div>
                </div>
            </div>
            : <></>

    );
}

export default FormProcesser;