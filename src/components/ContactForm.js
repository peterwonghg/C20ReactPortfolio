import React, { useState } from 'react';
import styled from 'styled-components';

const FormStyles = styled.form`
    width: 100%;
    color: #BCB4B4;
    .form-group {
        width: 100%;
        margin-bottom: 2rem;
    }
    label {
        font-size: 1.8rem;
    }
    input, textarea {
        width: 100%;
        font-size: 2rem;
        padding: 1.2rem;
        color: #BCB4B4;
        background-color: #262626;
        outline: none;
        border: none;
        border-radius: 8px;
        margin-top: 1rem;        
    }
    textarea {
        min-height: 250px;
        resize: vertical;
    }
    button[type='submit'] {
        background-color: #BCB4B4;
        color: black;
        font-size: 2rem;
        outline: none;
        border: none;
        padding: 1rem 4rem;
        border-radius: 8px;
        cursor: pointer;
        ]
    }
`;

export default function ContactForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const validateName = (e) => {

        const { name, value } = e.target;
        setName(value);
        if (name === "name") {
          if (value === "") {
            setName("");
            setErrorMessage(`Please enter a name. This field is required.`);
          }
        }
        if (value.length > 0) {
          setErrorMessage(``);
        }
      };
    
      // Validates email
      const validateEmail = (e) => {
        e.preventDefault();

        const { name, value } = e.target;
        setEmail(value);
        if (name === "email") {
          if (value === "") {
            setEmail("");
            setErrorMessage(
              `This field is required. Please enter an email address. `
            );
          }
          const pattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

          if (!pattern.test(value)) {
            setErrorMessage(`Please enter a valid email`);
          } else {
            setErrorMessage("");
          }
        }
      };
    
      // Validates message
      const validateMessage = (e) => {

        const { name, value } = e.target;
        setMessage(value);
        if (name === "message") {
          if (value === "") {
            setMessage("");
            setErrorMessage(`This field is required. Please enter a message. `);
          }
        }
        if (value.length > 0) {
          setErrorMessage(``);
        }
      };

  return (
    <div>
        <FormStyles>
            <div className="form-group">
                <label htmlFor="name">
                    Your name
                    <input

                        onBlur= {validateName}
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
            </div>

            <div className="form-group">
                <label htmlFor="email">
                    Your email
                    <input

                        onBlur= {validateEmail}
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}

                    />
                </label>
            </div>

                        <div className="form-group">
                <label htmlFor="message">
                    Your message
                    <textarea

                        onBlur= {validateMessage}
                        type="text"
                        id="message"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </label>
            </div> 
                
            {errorMessage && (
                <div>
                    <p>{errorMessage}</p>

                </div>
            )}    
            <button type="submit">Submit</button>



        </FormStyles>

    </div>

  );
}
