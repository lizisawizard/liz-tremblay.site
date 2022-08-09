import '../../style/app.scss';

const ImageDisplay = ({ url, alt, children }) => {
    return (
       <div className='imageDisplay'>
           <span className='imageDisplay--img-container'><img src={url} alt={alt}></img></span>
           <p className='imageDisplay--description'>{children}</p>
       </div> 
    );
}
export default ImageDisplay;