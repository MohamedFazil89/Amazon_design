import PropTypes from 'prop-types';
import './Cart.css';

function Cart(props) {
    return (
        <>
        <div className='box'>
            <h1 className='title'>{props.title}</h1>
            <div className='imgcon'>
                <section className='img1'>
                    <img src={props.src1} alt="img1" />
                    <p>{props.info1}</p>
                </section>

                <section className='img2'>
                    <img src={props.src2} alt="img2" />
                    <p>{props.info2}</p>

                </section>
                <section className='img3'>
                    <img src={props.src3} alt="img3" />
                    <p>{props.info3}</p>
                </section>
                <section className='img4'>
                    <img src={props.src4} alt="img4" />
                    <p>{props.info4}</p>
                </section>
            </div>
            <a href='#' className='button'>{props.buttonText}</a>
        </div>
        </>
    );
}

Cart.propTypes = {
    title: PropTypes.string.isRequired,
    src1: PropTypes.string.isRequired,
    src2: PropTypes.string.isRequired,
    src3: PropTypes.string.isRequired,
    src4: PropTypes.string.isRequired,
    info1: PropTypes.string.isRequired,
    info2: PropTypes.string.isRequired,
    info3: PropTypes.string.isRequired,
    info4: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired
};

export default Cart;
