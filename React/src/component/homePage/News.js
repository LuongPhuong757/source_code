import React from 'react';

function News(props) {
    let listNews = []
    let dataNews = [
        {
            title: 'Chiếc đồng hồ CEO quyền lực nhất thế giới',
            content: 'Đối với một số doanh nhân, một chiếc đồng hồ đeo tay không chỉ là thiết bị xem giờ. Thực tế, nó là một thông điệp',
            image: 'news/news1.jpg'
        },
        {
            title: 'Chiếc đồng hồ CEO quyền lực nhất thế giới',
            content: 'Đối với một số doanh nhân, một chiếc đồng hồ đeo tay không chỉ là thiết bị xem giờ. Thực tế, nó là một thông điệp',
            image: 'news/news2.jpg'
        }, {
            title: 'Chiếc đồng hồ CEO quyền lực nhất thế giới',
            content: 'Đối với một số doanh nhân, một chiếc đồng hồ đeo tay không chỉ là thiết bị xem giờ. Thực tế, nó là một thông điệp',
            image: 'news/news3.jpg'
        }
    ]

    listNews = dataNews.map((data, index) => {
        return (
            <div class="col-lg-4 news" key={index}>
                <div>
                    <img width="100%" src={data.image} style={{ height: '240px' }}  alt="anh" />
                </div>
                <div class="pt-2 news-title">
                    <h4 style={{ fontWeight: 'bold' }}>{data.title}</h4>
                    <p>{data.content}</p>
                </div>
            </div>
        )
    })
    return (
        <div class="container  my-5">
            <div>
                <div class="row">
                    {listNews}
                </div>
            </div>
        </div>
    );
}

export default News;