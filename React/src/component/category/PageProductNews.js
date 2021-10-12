import React from 'react';

function PageProductNews(props) {
    let listNews = []
    let dataNews = [
        {
            image: "/new_product/news1.jpg",
            content: 'Dapibus ac facil ac facilisis in Dapibus ac facilisis in'
        },
        {
            image: "/new_product/news2.jpg",
            content: 'Dapibus ac facil ac facilisis in Dapibus ac facilisis in'
        },
        {
            image: "/new_product/news3.jpg",
            content: 'Dapibus ac facil ac facilisis in Dapibus ac facilisis in'
        },
        {
            image: "/new_product/news4.jpg",
            content: 'Dapibus ac facil ac facilisis in Dapibus ac facilisis in'
        },
        {
            image: "/new_product/news5.jpg",
            content: 'Dapibus ac facil ac facilisis in Dapibus ac facilisis in'
        }
    ]
    listNews = dataNews.map((data, index) => {
        return (
            <li class="list-group-item py-2 px-1" key={index}>
                <div class="row m-0" style={{ alignItems: 'center', width: "100%" }}>
                    <div class="col-lg-2 p-0" >
                        <img src={data.image} style={{ borderRadius: "20px", width: '100%', display: 'block' }}  alt="anh"/>
                    </div>
                    <div class="col-lg-10 p-0 pl-2" >
                        {data.content}
                    </div>
                </div>
            </li>
        )
    })
    return (
        <div>
            <h6 class="mb-3">BÀI VIẾT MỚI NHẤT</h6>
            <div style={{ border: '1px solid #ccc' }} class="py-2 px-1">
                <ul class="list-group list-group-flush">
                    {listNews}
                </ul>
            </div>
        </div>
    );
}

export default PageProductNews;