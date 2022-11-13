import useInput from "../hooks/use-input";

const Contact = props => {
    // NAME INPUT
    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangedHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput
    } = useInput(value => value.trim() !== '')


    // EMAIL INPUT
    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangedHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput
    } = useInput(value => value.includes('@'))


    // MESSAGE INPUT
    const {
        value: enteredMessage,
        isValid: enteredMessageIsValid,
        hasError: messageInputHasError,
        valueChangeHandler: messageChangedHandler,
        inputBlurHandler: messageBlurHandler,
        reset: resetMessageInput
    } = useInput(value => value.trim() !== '')



    // FORM VALIDITY
    let formIsValid = false
    if (enteredNameIsValid && enteredEmailIsValid && enteredMessageIsValid) formIsValid = true


    // SUBMIT
    const formSubmissionHandler = event => {
        event.preventDefault()
        if (!formIsValid) return
        resetNameInput()
        resetEmailInput()
        resetMessageInput()
    }


    const nameInputStyle = nameInputHasError ? 'form-control invalid' : 'form-control'
    const emailInputStyle = emailInputHasError ? 'form-control invalid' : 'form-control'
    const messageInputStyle = messageInputHasError ? 'form-control invalid' : 'form-control'

    const nameInputMessageStyle = nameInputHasError ? 'error-text visible' : 'error-text'
    const emailInputMessageStyle = emailInputHasError ? 'error-text visible' : 'error-text'
    const messageInputMessageStyle = messageInputHasError ? 'error-text visible' : 'error-text'


    return (
        <div className='container section'>
            <h1 className='heading-primary'>Contact us</h1>
            <form onSubmit={formSubmissionHandler}>

                <div className={nameInputStyle}>
                    <label htmlFor='name'>Your Name</label>
                    <input type='text'
                           id='name'
                           value={enteredName}
                           onChange={nameChangedHandler}
                           onBlur={nameBlurHandler}/>
                    <p className={nameInputMessageStyle}>Name must not be empty!</p>
                </div>

                <div className={emailInputStyle}>
                    <label htmlFor='email'>Email</label>
                    <input type='email'
                           id='email'
                           value={enteredEmail}
                           onChange={emailChangedHandler}
                           onBlur={emailBlurHandler}/>
                    <p className={emailInputMessageStyle}>Invalid email!</p>
                </div>

                <div className={messageInputStyle}>
                    <label htmlFor='message'>Message</label>
                    <textarea
                           id='message'
                           value={enteredMessage}
                           onChange={messageChangedHandler}
                           onBlur={messageBlurHandler}
                           rows="10" cols="30"/>
                    <p className={messageInputMessageStyle}>Message must not be empty!</p>
                </div>


                <div className="form-actions">
                    <button className='btn btn--primary' disabled={!formIsValid}>Submit</button>
                </div>
            </form>
        </div>

    )

}

export default Contact