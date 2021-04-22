import React from 'react'
import PropTypes from 'prop-types'
import AlbumList from './components/AlbumList'

AlbumFearure.propTypes = {

}

function AlbumFearure(props) {
    const albumList = [
        {
            id: 1,
            name: 'Nhạc Hoa Thịnh Hành',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/9/2/7/f/927fdc0e043a55eaa43f639fea098483.jpg'
        },
        {
            id: 2,
            name: 'Rap Việt nghe là ghiện',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/0/0/1/3/0013959602842662591c8d6670f20b53.jpg'
        },
        {
            id: 3,
            name: 'Trào lưu nhạc Hot',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/d/b/0/9/db091ad168cce8d51edf9c0e4d6c0188.jpg'
        },
    ]
    return (
        <div>
            <h2>Có thể bạn sẽ thích đấy</h2>
            <AlbumList albumList={albumList} />
        </div>
    )
}



export default AlbumFearure

