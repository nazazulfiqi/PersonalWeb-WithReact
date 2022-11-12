import '../css/artikel.css'
import arrowLeft from '../assets/img/arrow-left.svg'
import {Link} from 'react-router-dom'

function Artikel() {
  return (
    <>
    <div class="container-artikel">
        <Link to={"/"}><img src={arrowLeft} alt="" /></Link>
        <div class="head-artikel">
            <h1>Artikel</h1>
        </div>
        <div class="artikel">
            <div class="artikel-1">
                <h3>HTML</h3>
                <p>HTML adalah singkatan dari Hypertext Markup Language, yaitu bahasa markup standar untuk membuat dan
                    menyusun halaman dan aplikasi web.</p>
            </div>
            <div class="artikel-2">
                <h3>CSS Grid</h3>
                <p>CSS Grid adalah CSS yang dapat membagi kolom pada website menjadi beberapa bagian sesuai yang
                    diinginkan, baik secara horizontal maupun vertikal.</p>
            </div>
            <div class="artikel-3">
                <h3>Display</h3>
                <p>Display adalah salah satu property dalam CSS yang berguna untuk mengatur tampilnya suatu elemen.</p>
            </div>
        </div>

    </div>
    </>
  )
}

export default Artikel