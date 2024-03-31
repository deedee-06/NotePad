import { MdDeleteForever } from 'react-icons/md'; 
 
const Note = () => {
    return (
        <div className='note'>
            <span>Hello! This is Deedee</span>
            <div className='note-footer'>
                <small>31/03/2024</small>
                <MdDeleteForever className='delete-icon' size='1.3em' />
            </div>

        </div>
    );
};

export default Note;