
function Contact(){
    return(
        <>
               
       <div class="section">
            <h1><span>Contact Me</span></h1>
            <form>
            <p align="left">Name</p>
                <input name="name" type="text" value="Name"/><br/>
                            <p align="left">Email</p>
                <input name="email" type="email" value="Email"/><br/>
                            <p align="left">Password</p>
                <input name="password" type="password" value="Password"/><br/>
                            <p align="left">Comments</p>
                <textarea name="message" ></textarea>
                <input type="submit" value="SEND" class="submit" />
            </form>
        </div>
      
        </>
    )
}

export default Contact;