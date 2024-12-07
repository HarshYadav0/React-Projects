import Button from '../Button/Button'
import styles from './ContactForm.module.css'
import { MdMessage} from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';


const ContactForm = () => {
  return (
    <section className= {styles.container}>
   
    <div className= {styles.contact_form}>
      
      <div className= {styles.top_btn}>
        <Button  text="VIA SUPPORT CHAT " icon =  {<MdMessage fontSize= "22px" />}/>
        <Button  text="VIA CALL " icon =  {<FaPhoneAlt fontSize= "22px"/>}/>
      </div>

      <Button isOutline= {true}  
      text="VIA EMAIL FORM " icon =  {<HiMail fontSize= "22px"/>}/>

      <form>
        
        <div className={styles.form_control}>
          <label htmlFor="name">Name</label>
          <input type='text'  name="name"/>
        </div>

        <div className={styles.form_control}>
          <label htmlFor="email">Email</label>
          <input type='email'  name="email"/>
        </div>

        <div className={styles.form_control}>
          <label htmlFor="text">Text</label>
          <textarea  name="text" rows="5"/>
        </div>

        <div 
          style={{
            display: "flex",
            justifyContent: "end",
          }}> 
          <Button text="SUBMIT BUTTON"/> </div>

      </form>

    </div>
    
    <div className= {styles.contact_Image}>
      <img src="/images/contact.png" alt="img" />
    </div>
      
    </section>
  )
}

export default ContactForm
