import React from 'react';

const ImageList = (props) => {
  const images =  props.images.map(image=>{
return <div key={image.id}>
     <img key={image.id} src={image.webformatURL}></img>
</div>
    });
    
 
    return (
        <div>
            {
                images
            }
        </div>
    )

}
export default ImageList;