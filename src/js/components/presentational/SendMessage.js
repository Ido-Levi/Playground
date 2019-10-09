import React from 'react';


export default class SendMessage extends React.Component { 
    render() {
        return (
            <div>
                <form>
                    <input type="text"></input>
                    <button>Send</button>
                </form>
            </div>
        );
    }
}
// <form>
// <input type="text" name="message">Type a message here...</input>
// <button >Send</button>
// </form>