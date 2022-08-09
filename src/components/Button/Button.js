import '../../style/app.scss';

const Button = ({ children }) => {
    return (
        <div className='button-container'>
            <button className='button'>{children}</button>
        </div>
    );
}
export default Button;