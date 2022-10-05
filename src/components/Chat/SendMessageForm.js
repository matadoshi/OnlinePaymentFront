import FormControl from 'react-bootstrap/FormControl';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const SendMessageForm = ({ sendMessage }) => {
    const [message, setMessage] = useState('');
    
    return (<><Form
        onSubmit={e => {
            e.preventDefault();
            sendMessage(message);
            setMessage('');
        }}>
        <InputGroup>
            <FormControl type="user" placeholder="Text here..."
                onChange={e => setMessage(e.target.value)} value={message} />
            <InputGroup>
                <Button variant="primary" type="submit" disabled={!message}>Send</Button>
            </InputGroup>
        </InputGroup>
    </Form></>)
}
export default SendMessageForm;