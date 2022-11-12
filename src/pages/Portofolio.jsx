import '../css/porto.css'
import arrowLeft from '../assets/img/arrow-left.svg'
import {Link} from 'react-router-dom'

function Portofolio() {
  return (
    <>
    <div class="container">
        <Link to={"/"}><img src={arrowLeft} alt="" /></Link>
        <h1>Portofolio</h1>
        <header class="header">
            <div class="hero-porto">

                <p class="sub-heading">Perpustakaan GemarBaca</p>
            </div>
            <div class="features feature-1">

                <p class="sub-judul">Toks Organizer</p>
            </div>
            <div class="features feature-2">

                <p class="sub-judul">BMI Calculator</p>
            </div>
        </header>

    </div>

    </>
  );
}

export default Portofolio;
