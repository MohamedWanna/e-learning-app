import React from 'react'
import { useDispatch } from 'react-redux'
import { addSession } from '../../redux/actions/sessionActions';

const AddSession = () => {
    const dispatch = useDispatch();
    
    const [title,setTitle] = React.useState('')
    const [price,setPrice] = React.useState('')
    const [instructor,setInstructor] = React.useState('')
    const [content,setContent] = React.useState('')
    const [image,setImage] = React.useState('')
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        const data = new FormData();
        data.append('title',title);
        data.append('price',price);
        data.append('instructor',instructor);
        data.append('content',content);
        data.append('file',image);
        console.log({
            image:data.get("file"),
        });
        dispatch(
            addSession(data)
        );
    };

    return (
        <div className="form-container">
            <form component="form" >
                
                <label className='addlabel' htmlFor="">Title:</label>
                <input type="text" name="title" onChange={(e)=>setTitle(e.target.value)} />
                
                <label className='addlabel'  htmlFor="">Price:</label>
                <input type="text"  name="price" onChange={(e)=>setPrice(e.target.value)} />
                
                <label className='addlabel' htmlFor="">Instructor:</label>
                <input type="text"  name="instructor" onChange={(e)=>setInstructor(e.target.value)} />
                
                <label className='addlabel'  htmlFor="">Content:</label>
                <input type="text" name="content" onChange={(e)=>setContent(e.target.value)}/>
                
                <label className='addlabel' htmlFor="">Image:</label>
                <input type="file" name="image" onChange={(e)=>setImage(e.target.value)}/>
                
                <button className="submit" onSumbmit={handleSubmit}>submit</button>
            </form>
        </div>
    )
}

export default AddSession